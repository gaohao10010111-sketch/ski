"""
Import missing athletes (DNS/DNF/DQ) from all PDFs into the Athlete table.
Only creates Athlete records, does NOT create Result records.

Run: python3 scripts/import-missing-athletes.py
"""

import pdfplumber
import fitz
import sqlite3
import re
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(SCRIPT_DIR, '..', 'prisma', 'ski.db')
GAME_DIR = os.path.join(SCRIPT_DIR, '..', 'game')

TEAM_MAPPING = {
    "石家庄市冰雪与足球运动推广训练中心": "石家庄市冰雪与足球运动中心",
    "石家庄市冰雪与足球运动推广与训练中心": "石家庄市冰雪与足球运动中心",
    "重庆市沙坪坝区体育运动学校": "重庆市冬季运动管理中心",
    "重庆市沙坪坝区体育运动中心": "重庆市冬季运动管理中心",
    "成都市武侯区滑雪运动协会": "个人",
    "滑雪兔俱乐部": "个人",
    "万域芳菲俱乐部": "四川体育职业学院",
    "西安市竞技体育学校": "河北省体育局冬季运动中心",
    "哈尔滨市冬季运动与水上运动中心": "河北省体育局冬季运动中心",
    "个人（高峰）": "个人",
    "个人(supserSKI)": "个人",
    "高峰": "个人",
}

OFFICIAL_NAMES = {
    '李廷奎', '周超', '张馨月', '董文玲', '张怡然', '付欣亚', '倪丙绅',
    '吕强', '杜凯', '王志强', '任健', '方剑', '王伦', '刘丹丹', '孙刚',
    '李箐', '郭军长', '尹士伟',
}


def normalize_team(team):
    if not team:
        return '个人'
    team = team.strip()
    # Remove parenthetical notes like (高峰), (supserSKI)
    if team.startswith('个人'):
        return '个人'
    return TEAM_MAPPING.get(team, team)


def has_chinese(s):
    return bool(re.search(r'[\u4e00-\u9fff]', s))


def extract_dns_fitz_blocks(pdf_path):
    """Extract DNS/DNF/DQ athletes from fitz PDFs using block-level analysis.
    Works for 松花湖, 沈阳, 雪如意平行 PDFs.
    Each block is: 'bib\\nname\\nteam\\n[time]\\nDNS/DNF/DQ\\n...'
    """
    athletes = []
    doc = fitz.open(pdf_path)

    current_gender = None

    for page_idx in range(len(doc)):
        page = doc[page_idx]
        blocks = page.get_text('blocks')

        for b in blocks:
            if b[6] != 0:
                continue
            text = b[4].strip()

            # Track gender from page headers
            if '女子' in text and ('组' in text or '赛' in text):
                current_gender = '女'
            if '男子' in text and ('组' in text or '赛' in text):
                current_gender = '男'

            # Check if block contains DNS/DNF/DQ
            if not any(kw in text for kw in ['DNS', 'DNF', 'DQ', 'DSQ']):
                continue

            # Parse block: split by newlines
            parts = [p.strip() for p in text.split('\n') if p.strip()]
            if len(parts) < 3:
                continue

            # First part should be bib number
            try:
                bib = int(parts[0])
            except ValueError:
                continue

            # Second part is name
            name = parts[1]
            if not has_chinese(name) or len(name) < 2:
                continue
            if name in OFFICIAL_NAMES:
                continue

            # Third part is team
            team = normalize_team(parts[2])

            # Try to find birth year (20xx) in remaining parts
            birth_year = None
            for p in parts[3:]:
                m = re.match(r'^(20\d{2})$', p)
                if m:
                    birth_year = m.group(1)
                    break

            athletes.append({
                'name': name,
                'team': team,
                'gender': current_gender,
                'birthYear': birth_year,
                'source': os.path.basename(pdf_path),
            })

    doc.close()
    return athletes


def extract_dns_pdfplumber(pdf_path):
    """Extract DNS/DNF/DQ athletes from pdfplumber PDFs.
    Works for 成都, 富龙, 雪如意坡障/大跳台 PDFs.
    Line format varies by competition type.
    """
    athletes = []
    try:
        doc = pdfplumber.open(pdf_path)
    except Exception as e:
        print(f"  pdfplumber failed: {e}")
        return athletes

    current_gender = None

    for page in doc.pages:
        text = page.extract_text()
        if not text:
            continue

        lines = text.split('\n')
        for line in lines:
            if '女子' in line:
                current_gender = '女'
            elif '男子' in line:
                current_gender = '男'

            if not any(kw in line for kw in ['DNS', 'DNF', 'DQ', 'DSQ']):
                continue
            # Skip round 2 DNS lines
            if re.match(r'^\s*2\s+DNS', line):
                continue

            # Pattern: - bib name team birthYear stance 1 DNS...
            m = re.match(r'^[-−]\s+(\d+)\s+(.+?)\s+(20\d{2})\s+([GR])', line)
            if m:
                middle = m.group(2).strip()
                birth_year = m.group(3)
                parts = middle.split()
                if len(parts) >= 2:
                    name = parts[0]
                    team = normalize_team(' '.join(parts[1:]))
                    if name not in OFFICIAL_NAMES and has_chinese(name) and len(name) >= 2:
                        athletes.append({
                            'name': name,
                            'team': team,
                            'gender': current_gender,
                            'birthYear': birth_year,
                            'source': os.path.basename(pdf_path),
                        })
                continue

            # Pattern for alpine: bib name team [time] DNS (no dash, no birthYear)
            m = re.match(r'^(\d+)\s+(\S+)\s+(.+?)\s+(DNS|DNF|DQ|DSQ)', line)
            if m:
                name = m.group(2)
                team = m.group(3).strip()
                # Clean up team - remove time values
                team = re.sub(r'\d{2}:\d{2}\.\d{2}', '', team).strip()
                if name not in OFFICIAL_NAMES and has_chinese(name) and len(name) >= 2:
                    athletes.append({
                        'name': name,
                        'team': normalize_team(team),
                        'gender': current_gender,
                        'birthYear': None,
                        'source': os.path.basename(pdf_path),
                    })

    doc.close()
    return athletes


def main():
    print('=' * 60)
    print('Import Missing Athletes (DNS/DNF/DQ)')
    print('=' * 60)

    pdfs = [f for f in os.listdir(GAME_DIR) if f.endswith('.pdf')]
    print(f"\nFound {len(pdfs)} PDFs")

    # PDFs that need pdfplumber
    pdfplumber_keywords = ['成都', '富龙', '雪如意站）_成绩册']

    all_dns = []

    for pdf in sorted(pdfs):
        pdf_path = os.path.join(GAME_DIR, pdf)
        print(f"\n--- {pdf[:60]} ---")

        use_pdfplumber = any(kw in pdf for kw in pdfplumber_keywords)

        if use_pdfplumber:
            athletes = extract_dns_pdfplumber(pdf_path)
        else:
            athletes = extract_dns_fitz_blocks(pdf_path)

        if athletes:
            for a in athletes:
                print(f"  {a['name']} ({a['team']}) birth={a['birthYear']} gender={a['gender']}")
            all_dns.extend(athletes)
        else:
            print(f"  (none)")

    # Deduplicate
    seen = set()
    unique = []
    for a in all_dns:
        key = f"{a['name']}|||{a['team']}"
        if key not in seen:
            seen.add(key)
            unique.append(a)

    print(f"\n{'=' * 60}")
    print(f"Total found: {len(all_dns)}, Unique: {len(unique)}")

    # DB operations
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    before = cur.execute('SELECT COUNT(*) FROM Athlete').fetchone()[0]
    before_results = cur.execute('SELECT COUNT(*) FROM Result').fetchone()[0]

    missing = []
    for a in unique:
        row = cur.execute('SELECT id FROM Athlete WHERE name = ? AND team = ?',
                          (a['name'], a['team'])).fetchone()
        if not row:
            missing.append(a)

    print(f"Already in DB: {len(unique) - len(missing)}")
    print(f"Missing: {len(missing)}")

    if missing:
        print(f"\nInserting {len(missing)} athletes...")
        for a in missing:
            aid = f"athlete-{a['name']}-{a['team']}".replace(' ', '-')
            cur.execute(
                """INSERT INTO Athlete (id, name, team, gender, birthYear, updatedAt)
                   VALUES (?, ?, ?, ?, ?, datetime('now'))
                   ON CONFLICT(name, team) DO UPDATE SET
                     birthYear = COALESCE(excluded.birthYear, Athlete.birthYear),
                     gender = COALESCE(excluded.gender, Athlete.gender),
                     updatedAt = datetime('now')""",
                (aid, a['name'], a['team'], a['gender'] or '未知', a['birthYear'])
            )
            print(f"  + {a['name']} ({a['team']}) [{a['source'][:30]}]")
        conn.commit()

    after = cur.execute('SELECT COUNT(*) FROM Athlete').fetchone()[0]
    after_results = cur.execute('SELECT COUNT(*) FROM Result').fetchone()[0]

    print(f"\n{'=' * 60}")
    print(f"Athletes: {before} -> {after} (+{after - before})")
    print(f"Results: {before_results} -> {after_results} (+{after_results - before_results})")
    print('=' * 60)

    conn.close()


if __name__ == '__main__':
    main()
