#!/usr/bin/env python3
"""
提取单板滑雪平行项目U系列比赛成绩 - 最终版
"""

import fitz
import json
import re

pdf_path = "/Users/gaohao/Desktop/ski/game/2025-2026赛季全国单板滑雪平行项目U系列比赛_沈阳东北亚站.pdf"
doc = fitz.open(pdf_path)

# 积分表（1-50名）
POINTS_TABLE = {
    1: 360, 2: 329, 3: 303, 4: 280, 5: 260, 6: 242, 7: 226, 8: 212, 9: 199, 10: 187,
    11: 176, 12: 166, 13: 157, 14: 149, 15: 141, 16: 134, 17: 127, 18: 121, 19: 115, 20: 110,
    21: 105, 22: 100, 23: 96, 24: 92, 25: 88, 26: 84, 27: 80, 28: 76, 29: 73, 30: 70,
    31: 67, 32: 64, 33: 61, 34: 58, 35: 55, 36: 52, 37: 50, 38: 48, 39: 46, 40: 44,
    41: 42, 42: 40, 43: 38, 44: 36, 45: 34, 46: 32, 47: 30, 48: 28, 49: 26, 50: 24
}

results = {
    "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（第二站沈阳东北亚站）",
    "sport": "单板滑雪",
    "sportType": "snowboard-parallel",
    "location": "沈阳东北亚滑雪场",
    "date": "2026-01-30",
    "endDate": "2026-01-31",
    "status": "completed",
    "events": []
}

# 页面配置：每页可能有多页（需要合并）
page_configs = [
    {"pages": [15, 16], "discipline": "平行大回转", "ageGroup": "U18", "gender": "女子组"},
    {"pages": [19, 20], "discipline": "平行大回转", "ageGroup": "U18", "gender": "男子组"},
    {"pages": [43, 44, 45, 46, 47], "discipline": "大回转", "ageGroup": "U11", "gender": "女子组"},
    {"pages": [48, 49, 50, 51, 52], "discipline": "大回转", "ageGroup": "U11", "gender": "男子组"},
    {"pages": [53, 54, 55, 56], "discipline": "大回转", "ageGroup": "U15", "gender": "女子组"},
    {"pages": [57, 58, 59, 60, 61], "discipline": "大回转", "ageGroup": "U15", "gender": "男子组"},
]

def parse_page(page_num):
    """解析单页运动员数据"""
    page = doc[page_num - 1]
    text = page.get_text()
    lines = text.split('\n')

    athletes = []
    i = 0

    while i < len(lines):
        line = lines[i].strip()

        # 跳过标题行
        if any(kw in line for kw in ["大决赛", "小决赛", "预赛成绩", "名次", "号码", "姓名", "单位"]):
            i += 1
            continue

        # 检测排名（1-50的数字单独成行）
        if re.match(r'^(\d{1,2})$', line):
            rank = int(line)
            if 1 <= rank <= 50:
                # 收集数据直到遇到下一个排名或积分
                data = []
                j = i + 1
                while j < len(lines):
                    next_line = lines[j].strip()
                    if not next_line:
                        j += 1
                        continue
                    # 遇到下一个排名停止
                    if re.match(r'^(\d{1,2})$', next_line) and 1 <= int(next_line) <= 50:
                        break
                    # 遇到标题行停止
                    if any(kw in next_line for kw in ["大决赛", "小决赛", "预赛成绩"]):
                        break
                    data.append(next_line)
                    # 遇到三位数积分停止
                    if re.match(r'^[123]\d{2}$', next_line):
                        break
                    j += 1

                # 解析数据
                if len(data) >= 3:
                    bib = None
                    name = None
                    team_parts = []
                    total_time = None
                    points = None

                    for idx, item in enumerate(data):
                        # 第一个数字是号码
                        if bib is None and re.match(r'^\d+$', item) and not re.match(r'^[123]\d{2}$', item):
                            bib = int(item)
                            continue

                        # 三位数且在100-360范围是积分
                        if re.match(r'^[123]\d{2}$', item):
                            points = int(item)
                            continue

                        # 时间格式 01:xx.xx 是总成绩
                        if re.match(r'^01:\d{2}\.\d{2}$', item):
                            total_time = item
                            continue

                        # 时间格式 00:xx.xx 是单次成绩，跳过
                        if re.match(r'^00:\d{2}\.\d{2}$', item):
                            continue

                        # 小数字可能是单次排名，跳过
                        if re.match(r'^\d{1,2}$', item) and bib is not None:
                            continue

                        # 剩下的非数字是名字或单位
                        if not re.match(r'^\d', item):
                            if name is None:
                                name = item
                            else:
                                team_parts.append(item)

                    team = ''.join(team_parts).strip() if team_parts else "个人"

                    # 确保积分正确（使用标准积分表）
                    expected_points = POINTS_TABLE.get(rank, 0)
                    if points and abs(points - expected_points) > 5:
                        # 积分不匹配，可能解析错误，使用标准积分
                        points = expected_points
                    elif not points:
                        points = expected_points

                    if name and bib:
                        athlete = {
                            "rank": rank,
                            "bib": bib,
                            "name": name,
                            "team": team
                        }
                        if total_time:
                            athlete["time"] = total_time
                        athlete["points"] = points
                        athletes.append(athlete)

                i = j - 1
        i += 1

    return athletes

for config in page_configs:
    event = {
        "discipline": config["discipline"],
        "ageGroup": config["ageGroup"],
        "gender": config["gender"],
        "athletes": []
    }

    # 只解析第一页（正式成绩公告页）
    main_page = config["pages"][0]
    event["athletes"] = parse_page(main_page)

    # 按排名排序并去重
    seen_ranks = set()
    unique_athletes = []
    for a in sorted(event["athletes"], key=lambda x: x["rank"]):
        if a["rank"] not in seen_ranks:
            seen_ranks.add(a["rank"])
            unique_athletes.append(a)
    event["athletes"] = unique_athletes[:50]

    print(f"第{main_page}页: {config['ageGroup']}{config['gender']} {config['discipline']} - {len(event['athletes'])}人", file=__import__('sys').stderr)

    if event["athletes"]:
        results["events"].append(event)

doc.close()

# 输出JSON
print(json.dumps(results, ensure_ascii=False, indent=2))
