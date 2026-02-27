"""
Extract bestScore values from Chengdu slopestyle PDF using pdfplumber.

The PDF has broken CJK font CMap, so pdfplumber (with built-in CJK CMap resources)
must be used instead of PyMuPDF/fitz.

Output: /tmp/chengdu-ss-scores.json
Format: [{rank, bib, ageGroup, gender, bestScore}, ...]
"""
import json
import re
import pdfplumber

PDF_PATH = "game/2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛_成都.pdf"
OUTPUT_PATH = "/tmp/chengdu-ss-scores.json"

# Pages containing 成绩公告 (results):
# Page 4: U11女子组
# Page 6: U15女子组 (1 page, all 11)
# Page 8-9: U11男子组 (2 pages, 17 + DNS)
# Page 11-12: U15男子组 (2 pages, 15)
# Page 14: U18男子组 (1 page, 7 + DNS)

RESULT_PAGES = [4, 6, 8, 9, 11, 12, 14]  # 1-indexed

def parse_age_group_gender(text):
    """Extract age group and gender from page header like 'U11女子组' or 'U15男子组'."""
    m = re.search(r'(U\d+)(女子|男子)组', text)
    if m:
        age = m.group(1)
        # PDF may contain U11, map to U11 (correct age group)
        # Actually, check what the DB uses...
        gender = "女" if "女" in m.group(2) else "男"
        return f"{age} {m.group(2)}组", gender
    return None, None


def extract_results_from_page(page):
    """Extract athlete results from a single results page."""
    text = page.extract_text()
    if not text:
        return [], None, None

    # Get age group from header
    age_group, gender = parse_age_group_gender(text)

    results = []
    lines = text.split('\n')

    for line in lines:
        # Skip header lines, DNI/DNS lines, non-result lines
        line = line.strip()
        if not line:
            continue

        # Match result rows: starts with rank number, then bib, then name
        # Pattern: rank bib name ... bestScore points
        # The "最终成绩" column is what we need
        # Example: "1 11 牛安芷芸 个人 2014 R 1 84 86 82 83 83.75 83.75 360"
        # The bestScore is the second-to-last number (before points which is an integer)

        # First, check if line starts with a rank number (1-50)
        m = re.match(r'^(\d{1,2})\s+(\d{1,3})\s+(\S+)', line)
        if not m:
            continue

        rank = int(m.group(1))
        bib = int(m.group(2))
        name = m.group(3)

        # Skip DNS entries (no bestScore)
        if 'DNS' in line:
            continue

        # Extract all decimal/integer numbers from the line
        # We need the "最终成绩" which appears after the round scores
        # The pattern is: ... 得分 最终成绩 积分
        # where 积分 is always an integer (360, 329, etc.)
        # and 最终成绩 is a decimal like 83.75

        # Find all numbers (int or float) in the line
        numbers = re.findall(r'\d+\.?\d*', line)

        # The last number is 积分 (points, always integer like 360, 329...)
        # The second-to-last is 最终成绩 (bestScore)
        # The third-to-last is 得分 (round score)
        # But we need to be careful about which numbers to consider

        # Better approach: find the bestScore and points at the end of the line
        # Pattern at end: score bestScore points
        # e.g., "83.75 83.75 360" or "90.75 90.75 360"
        end_match = re.search(r'(\d+\.?\d+)\s+(\d+)\s*$', line)
        if end_match:
            best_score = float(end_match.group(1))
            points = int(end_match.group(2))
            results.append({
                'rank': rank,
                'bib': bib,
                'bestScore': best_score
            })

    return results, age_group, gender


def main():
    pdf = pdfplumber.open(PDF_PATH)
    all_results = []
    current_age_group = None
    current_gender = None

    for pg_num in RESULT_PAGES:
        page = pdf.pages[pg_num - 1]
        results, age_group, gender = extract_results_from_page(page)

        # If this page has a header (first page of a group), update current group
        if age_group:
            current_age_group = age_group
            current_gender = gender

        # Add age group info to each result
        for r in results:
            r['ageGroup'] = current_age_group
            r['gender'] = current_gender
            all_results.append(r)

    # Sort by ageGroup, gender, rank
    all_results.sort(key=lambda x: (x['ageGroup'], x.get('gender', ''), x['rank']))

    # Print summary
    print(f"Total results extracted: {len(all_results)}")
    groups = {}
    for r in all_results:
        key = f"{r['ageGroup']}"
        if key not in groups:
            groups[key] = []
        groups[key].append(r)

    for key, arr in sorted(groups.items()):
        print(f"\n{key}: {len(arr)} results")
        for r in arr:
            print(f"  rank={r['rank']} bib={r['bib']} bestScore={r['bestScore']}")

    # Write to JSON
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        json.dump(all_results, f, ensure_ascii=False, indent=2)
    print(f"\nWritten to {OUTPUT_PATH}")


if __name__ == '__main__':
    main()
