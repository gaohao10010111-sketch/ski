#!/usr/bin/env python3
"""
硬编码方式提取数据 - 基于已知的PDF文本格式
格式：排名、号码、姓名在连续行，后面是单位（可能多行），再后面是成绩和积分
"""

import fitz
import json
import re
import sys

pdf_path = "/Users/gaohao/Desktop/ski/game/2025-2026赛季全国单板滑雪平行项目U系列比赛_沈阳东北亚站.pdf"
doc = fitz.open(pdf_path)

# 积分表
POINTS_TABLE = {
    1: 360, 2: 329, 3: 303, 4: 280, 5: 260, 6: 242, 7: 226, 8: 212, 9: 199, 10: 187,
    11: 176, 12: 166, 13: 157, 14: 149, 15: 141, 16: 134, 17: 127, 18: 121, 19: 115, 20: 110,
    21: 105, 22: 100, 23: 96, 24: 92, 25: 88, 26: 84, 27: 80, 28: 76, 29: 73, 30: 70,
    31: 67, 32: 64, 33: 61, 34: 58, 35: 55, 36: 52, 37: 50, 38: 48, 39: 46, 40: 44,
    41: 42, 42: 40, 43: 38, 44: 36, 45: 34, 46: 32, 47: 30, 48: 28, 49: 26, 50: 24
}

def is_rank(s, max_rank=50):
    """检查是否为有效排名"""
    if not s:
        return False
    s = s.strip()
    if s.isdigit():
        n = int(s)
        return 1 <= n <= max_rank
    return False

def is_bib(s):
    """检查是否为号码（1-999的数字）"""
    if not s:
        return False
    s = s.strip()
    if s.isdigit():
        n = int(s)
        return 1 <= n <= 999
    return False

def is_time(s):
    """检查是否为时间格式"""
    if not s:
        return False
    return bool(re.match(r'^0[01]:\d{2}\.\d{2}$', s.strip()))

def is_points(s):
    """检查是否为积分（24-360）"""
    if not s:
        return False
    s = s.strip()
    if s.isdigit():
        n = int(s)
        return 24 <= n <= 360
    return False

def is_chinese_name(s):
    """检查是否为中文名字"""
    if not s:
        return False
    s = s.strip()
    # 包含中文字符，且长度在2-4之间
    if re.match(r'^[\u4e00-\u9fa5]{2,4}$', s):
        return True
    # 英文名字/团队名（如 MAYA TEAM）
    if re.match(r'^[A-Z][a-zA-Z\s]+$', s) and len(s) <= 15:
        return True
    return False

def parse_event_data(text, total_athletes):
    """解析单个项目的运动员数据"""
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    athletes = []

    i = 0
    while i < len(lines):
        # 寻找排名行
        if is_rank(lines[i], min(50, total_athletes)):
            rank = int(lines[i])

            # 下一行应该是号码
            if i + 1 < len(lines) and is_bib(lines[i + 1]):
                bib = int(lines[i + 1])

                # 再下一行应该是名字
                if i + 2 < len(lines):
                    name = lines[i + 2]

                    # 收集单位（可能跨多行）
                    team_parts = []
                    j = i + 3
                    while j < len(lines):
                        line = lines[j]

                        # 遇到时间、积分或下一个排名就停止
                        if is_time(line) or is_points(line) or is_rank(line, min(50, total_athletes)):
                            break

                        # 跳过数字行（单次排名）
                        if line.isdigit() and int(line) < 30:
                            j += 1
                            continue

                        # 收集单位名称
                        if not is_time(line) and not line.isdigit():
                            team_parts.append(line)
                        j += 1

                    team = ''.join(team_parts) if team_parts else "个人"

                    athletes.append({
                        "rank": rank,
                        "bib": bib,
                        "name": name,
                        "team": team,
                        "points": POINTS_TABLE.get(rank, 0)
                    })

        i += 1

    # 去重并排序
    seen = set()
    unique = []
    for a in sorted(athletes, key=lambda x: x["rank"]):
        if a["rank"] not in seen:
            seen.add(a["rank"])
            unique.append(a)

    return unique

# 配置
configs = [
    {"page": 15, "discipline": "平行大回转", "ageGroup": "U18", "gender": "女子组", "total": 16},
    {"page": 19, "discipline": "平行大回转", "ageGroup": "U18", "gender": "男子组", "total": 28},
    {"page": 43, "discipline": "大回转", "ageGroup": "U11", "gender": "女子组", "total": 24},
    {"page": 48, "discipline": "大回转", "ageGroup": "U11", "gender": "男子组", "total": 43},
    {"page": 53, "discipline": "大回转", "ageGroup": "U15", "gender": "女子组", "total": 31},
    {"page": 57, "discipline": "大回转", "ageGroup": "U15", "gender": "男子组", "total": 34},
]

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

for cfg in configs:
    page = doc[cfg["page"] - 1]
    text = page.get_text()

    # 过滤掉表头和技术数据
    # 找到"积分"关键字后的内容才是数据
    if "积分" in text:
        idx = text.find("积分")
        text = text[idx:]

    athletes = parse_event_data(text, cfg["total"])

    event = {
        "discipline": cfg["discipline"],
        "ageGroup": cfg["ageGroup"],
        "gender": cfg["gender"],
        "athletes": athletes[:50]  # 最多50人
    }

    print(f"第{cfg['page']}页: {cfg['ageGroup']}{cfg['gender']} {cfg['discipline']} - {len(athletes)}人", file=sys.stderr)

    if athletes:
        results["events"].append(event)

doc.close()

print(json.dumps(results, ensure_ascii=False, indent=2))
