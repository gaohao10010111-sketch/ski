"""
Extract results from Xueruyi Slopestyle and Big Air PDFs using pdfplumber.
Line-based parsing from extract_text() output.

Run: python3 scripts/extract-xueruyi-slopestyle-bigair.py
"""

import pdfplumber
import json
import re
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
GAME_DIR = os.path.join(SCRIPT_DIR, '..', 'game')

PDF_FILES = {
    'slopestyle': os.path.join(GAME_DIR, '2025-2026赛季单板滑雪坡面障碍技巧U系列比赛（雪如意站）_成绩册.pdf'),
    'bigair': os.path.join(GAME_DIR, '2025-2026赛季单板滑雪大跳台U系列比赛（雪如意站）_成绩册.pdf'),
}

AGE_GROUP_PATTERNS = [
    (r'U11女子组', 'U11', '女子组'),
    (r'U11男子组', 'U11', '男子组'),
    (r'U15女子组', 'U15', '女子组'),
    (r'U15男子组', 'U15', '男子组'),
    (r'U18女子组', 'U18', '女子组'),
    (r'U18男子组', 'U18', '男子组'),
]

# Known 2-char names with space in PDF
SPLIT_NAMES = {'蒋 桨': '蒋桨', '汤 一': '汤一', '尤 睿': '尤睿'}

# Chinese character detection
def has_chinese(s):
    return bool(re.search(r'[\u4e00-\u9fff]', s))


def is_round2_line(line):
    """Distinguish round-2 continuation from rank-2 result.
    Round 2: just '2 DNI' or '2 xx xx xx xx xx.xx' (all digits/dots)
    Rank 2: '2 bib name team birthYear ...' (has Chinese characters)
    """
    line = line.strip()
    if not line.startswith('2 ') and not line.startswith('2\t'):
        return False
    rest = line[2:].strip()
    # Round 2 lines: DNI, DNS, or all numeric tokens
    if rest.startswith('DNI') or rest.startswith('DNS'):
        return True
    # If rest contains Chinese characters, it's rank 2 (a result line)
    if has_chinese(rest):
        return False
    # All tokens are numbers or dots -> round 2
    tokens = rest.split()
    return all(re.match(r'^[\d.]+$', t) for t in tokens)


def parse_result_line(line, next_line=None):
    """Parse a result line into structured data.
    Format: rank bib name team birthYear stance 1 J1 J2 J3 J4 score finalScore points
    """
    # Fix known split names
    for split, merged in SPLIT_NAMES.items():
        if split in line:
            line = line.replace(split, merged)

    parts = line.split()
    if len(parts) < 12:
        return None

    try:
        rank = int(parts[0])
    except ValueError:
        return None

    try:
        bib = int(parts[1])
    except ValueError:
        return None

    # Find birthYear (20xx) position
    by_idx = None
    for idx in range(3, min(len(parts), 10)):
        if re.match(r'^20\d{2}$', parts[idx]):
            by_idx = idx
            break

    if by_idx is None:
        return None

    # Name is parts[2], but may be split or merged with team for long names
    name = parts[2]
    team_parts = parts[3:by_idx]
    team = ' '.join(team_parts) if team_parts else '个人'

    # Handle wrapped long names: e.g. "阿力合尔·木拉北京市冬季运动管理中心"
    # The name might be stuck to the team name
    # Check if name looks incomplete and team starts with non-standard chars
    if len(name) > 4 and has_chinese(name):
        # Check if name contains team name stuck together
        # Pattern: long name ending with a team keyword
        for team_prefix in ['北京', '河北', '河南', '山西', '四川', '湖北', '重庆',
                            '石家庄', '吉林', '辽宁', '四平', 'New', 'Star']:
            idx = name.find(team_prefix)
            if idx > 0:
                actual_team = name[idx:] + (' ' + team if team != '个人' else '')
                name = name[:idx]
                team = actual_team
                break

    birth_year = parts[by_idx]
    stance_idx = by_idx + 1

    # Find round number '1' after stance
    round_idx = None
    for idx in range(stance_idx + 1, min(len(parts), stance_idx + 3)):
        if parts[idx] == '1':
            round_idx = idx
            break

    if round_idx is None:
        return None

    # After round 1: J1 J2 J3 J4 score finalScore points
    # points is the last integer
    try:
        points = int(parts[-1])
    except ValueError:
        points = 0

    # Final score is second to last
    try:
        final_score = float(parts[-2])
    except ValueError:
        final_score = None

    # Handle continuation line (wrapped team name)
    if next_line:
        next_stripped = next_line.strip()
        # Pattern: "广训练中心 2 DNI" or "提江 2 DNI" or "中心 2 71 70 70 71 70.50"
        cont_match = re.match(r'^([\u4e00-\u9fff·]+)\s+2\s+', next_stripped)
        if cont_match:
            continuation = cont_match.group(1)
            # Append to team or name depending on context
            # If team looks incomplete (doesn't end with 中心/个人/体育局/etc.)
            if not re.search(r'(中心|个人|体育局|学院|学校|队|协会|俱乐部)$', team):
                team = team + continuation
            else:
                # Could be name continuation (like 阿力合尔·木拉 + 提江)
                name = name + continuation

    return {
        'rank': rank,
        'bib': bib,
        'name': name.strip(),
        'team': team.strip(),
        'birthYear': birth_year,
        'bestScore': final_score,
        'points': points,
        'status': 'OK',
    }


def parse_dns_line(line):
    """Parse a DNS line.
    Format: - bib name team birthYear stance 1 DNS DNS -
    """
    # Fix known split names
    for split, merged in SPLIT_NAMES.items():
        if split in line:
            line = line.replace(split, merged)

    match = re.match(r'^[-−]\s+(\d+)\s+(.+?)\s+(20\d{2})\s+([GR])\s+', line)
    if not match:
        return None

    bib = int(match.group(1))
    middle = match.group(2).strip()
    birth_year = match.group(3)

    # Split middle into name + team
    # Find last Chinese word boundary that could be a team
    parts = middle.split()
    if len(parts) >= 2:
        name = parts[0]
        team = ' '.join(parts[1:])
    else:
        name = middle
        team = '个人'

    return {
        'rank': None,
        'bib': bib,
        'name': name,
        'team': team,
        'birthYear': birth_year,
        'bestScore': None,
        'points': 0,
        'status': 'DNS',
    }


def extract_pdf(pdf_path, discipline_name):
    """Extract all results from a PDF using pdfplumber."""
    print(f"\n{'='*60}")
    print(f"Extracting: {os.path.basename(pdf_path)}")
    print(f"Discipline: {discipline_name}")
    print(f"{'='*60}")

    doc = pdfplumber.open(pdf_path)
    all_results = []
    dns_athletes = []

    current_age_group = None
    current_gender = None

    for page_num in range(len(doc.pages)):
        page = doc.pages[page_num]
        text = page.extract_text()
        if not text:
            continue

        if '成 绩 公 告' not in text:
            continue

        lines = text.split('\n')
        print(f"\n--- Page {page_num + 1} ---")

        # Detect age group from this page
        for line in lines:
            for pattern, ag, gender in AGE_GROUP_PATTERNS:
                if re.search(pattern, line):
                    current_age_group = ag
                    current_gender = gender
                    print(f"  Group: {current_age_group} {current_gender}")
                    break

        if not current_age_group:
            continue

        skip_lines = set()  # Lines to skip (continuations already processed)

        for i, line in enumerate(lines):
            if i in skip_lines:
                continue

            line_stripped = line.strip()

            # Skip non-data lines
            if not line_stripped:
                continue
            if any(kw in line_stripped for kw in [
                '名次', '技术代表', '裁判', '成 绩', '打印时间', '参赛运动员',
                '天气', '赛道总长', '宽度', '跳台', '道具', '竞赛长', '评分裁判',
                '起跳角度', '落地角度', '赛季', '雪如意', '崇礼', '最终',
                '签字', '号码 姓名'
            ]):
                continue
            if line_stripped == '成绩':
                continue

            # Skip round 2 continuation lines
            if is_round2_line(line_stripped):
                continue

            # Check for DNS line
            if line_stripped.startswith('-') or line_stripped.startswith('−'):
                dns = parse_dns_line(line_stripped)
                if dns:
                    dns['ageGroup'] = current_age_group
                    dns['gender'] = current_gender
                    dns['discipline'] = discipline_name
                    dns_athletes.append(dns)
                    print(f"  DNS: bib={dns['bib']} {dns['name']} ({dns['team']})")
                    continue

            # Try to parse as result line
            next_line = lines[i + 1] if i + 1 < len(lines) else None
            result = parse_result_line(line_stripped, next_line)
            if result:
                # Check if next line is a continuation (mark to skip)
                if next_line:
                    next_stripped = next_line.strip()
                    if re.match(r'^[\u4e00-\u9fff·]+\s+2\s+', next_stripped):
                        skip_lines.add(i + 1)

                result['ageGroup'] = current_age_group
                result['gender'] = current_gender
                result['discipline'] = discipline_name
                all_results.append(result)
                print(f"  #{result['rank']} bib={result['bib']} {result['name']} ({result['team']}) score={result['bestScore']} pts={result['points']}")

    doc.close()

    print(f"\nTotal results: {len(all_results)}")
    print(f"DNS athletes: {len(dns_athletes)}")

    groups = {}
    for r in all_results:
        key = f"{r['ageGroup']} {r['gender']}"
        groups[key] = groups.get(key, 0) + 1
    print("\nBy group:")
    for g, c in sorted(groups.items()):
        print(f"  {g}: {c}")

    return all_results, dns_athletes


def main():
    all_data = {}
    all_dns = []

    results, dns = extract_pdf(PDF_FILES['slopestyle'], '坡面障碍技巧')
    all_data['slopestyle'] = results
    all_dns.extend(dns)

    results, dns = extract_pdf(PDF_FILES['bigair'], '大跳台')
    all_data['bigair'] = results
    all_dns.extend(dns)

    output = {
        'slopestyle': all_data['slopestyle'],
        'bigair': all_data['bigair'],
        'dns_athletes': all_dns,
    }

    output_path = os.path.join(SCRIPT_DIR, 'xueruyi-slopestyle-bigair.json')
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    total = len(all_data['slopestyle']) + len(all_data['bigair'])
    print(f"\n{'='*60}")
    print(f"Output: {output_path}")
    print(f"Slopestyle: {len(all_data['slopestyle'])}")
    print(f"Big Air: {len(all_data['bigair'])}")
    print(f"Total: {total}")
    print(f"DNS: {len(all_dns)}")
    print(f"{'='*60}")


if __name__ == '__main__':
    main()
