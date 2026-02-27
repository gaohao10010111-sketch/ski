#!/usr/bin/env python3
"""
Import 4th station Fulong snowboard slopestyle + big air results
Source: 2025-2026赛季单板滑雪坡面障碍技巧/大跳台U系列比赛（第四站富龙站）成绩册
"""
import sqlite3
import os
import re

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'prisma', 'ski.db')

COMPETITIONS = [
    {
        'id': 'fulong4-snowboard-slopestyle-2026',
        'name': '2025-2026赛季单板滑雪坡面障碍技巧U系列比赛（第四站富龙站）',
        'sportType': 'snowboard-slopestyle',
        'sport': '单板滑雪坡面障碍技巧',
        'location': '张家口崇礼富龙滑雪场',
        'date': '2026-02-25',
        'endDate': '2026-02-25',
        'pdfSource': '2025-2026赛季单板滑雪坡面障碍技巧U系列比赛（第四站富龙站）_成绩册.pdf'
    },
    {
        'id': 'fulong4-snowboard-bigair-2026',
        'name': '2025-2026赛季单板滑雪大跳台U系列比赛（第四站富龙站）',
        'sportType': 'snowboard-bigair',
        'sport': '单板滑雪大跳台',
        'location': '张家口崇礼富龙滑雪场',
        'date': '2026-02-26',
        'endDate': '2026-02-26',
        'pdfSource': '2025-2026赛季单板滑雪大跳台U系列比赛（第四站富龙站）_成绩册.pdf'
    }
]

# Format: (rank, name, team, bib, birthYear, points)
# Slopestyle results by (ageGroup, gender)
SLOPESTYLE = {
    ('U11', '女子组'): [
        (1, '杨舒雅', '个人', 15, '2015', 360),
        (2, '陈松妤', '个人', 16, '2014', 329),
        (3, '牛安芷芸', '个人', 20, '2014', 303),
        (4, '颜嘉懿', '个人', 18, '2014', 280),
        (5, '张诗涵', '石家庄市冰雪与足球运动推广训练中心', 13, '2017', 260),
        (6, '范允朵', '石家庄市冰雪与足球运动推广训练中心', 14, '2016', 242),
        (7, '叶恩瑶', '上海雪酷滑雪竞技队', 62, '2014', 226),
        (8, '蒋柠萱', '北京市冬季运动管理中心', 27, '2015', 212),
        (9, '张迦淳', '个人', 17, '2017', 199),
        (10, '陈玟聿', '上海雪酷滑雪竞技队', 63, '2016', 187),
        (11, '周子钰', '山西省冰雪运动中心', 7, '2017', 176),
        (12, '周若慈', '个人', 19, '2014', 166),
        (13, '翟姝涵', '北京市冬季运动管理中心', 1, '2017', 157),
        (14, '崔嘉懿', '上海雪酷滑雪竞技队', 61, '2015', 149),
        (15, '仇逸菲', '上海雪酷滑雪竞技队', 60, '2015', 141),
        (16, '顾嘉禾', '河南省体育局', 5, '2014', 134),
        (17, '周斯言', '成都肉熊猫滑雪俱乐部', 3, '2015', 127),
    ],
    ('U11', '男子组'): [
        (1, '刘翰泽', '个人', 31, '2014', 360),
        (2, '王祖安', '河南省体育局', 8, '2014', 329),
        (3, '范天成', '个人', 33, '2015', 303),
        (4, '王曌霖', '河南省体育局', 9, '2014', 280),
        (5, '刘沐泽', '石家庄市冰雪与足球运动推广训练中心', 19, '2014', 260),
        (6, '曾云泽', 'NEW TEAM', 99, '2014', 242),
        (7, '赵严诺', '河北省体育局冬季运动中心', 5, '2014', 226),
        (8, '魏子博', '河南省体育局', 7, '2014', 212),
        (9, '监柏霖', '个人', 30, '2014', 199),
        (10, '马琸明', '个人', 36, '2017', 187),
        (11, '王辰然', '个人', 39, '2015', 176),
        (12, '刘音里', '个人', 35, '2016', 166),
        (13, '蒋桨', '个人', 29, '2015', 157),
        (14, '刘沐文', '个人', 34, '2017', 149),
        (15, '方柏尧', '个人', 38, '2014', 141),
        (16, '史景夫', '个人', 32, '2014', 134),
        (17, '石昊桐', '北京市冬季运动管理中心', 2, '2017', 127),
        (18, '马琸阳', '个人', 37, '2017', 121),
        (19, '阿力合尔·木拉提江', '北京市冬季运动管理中心', 3, '2014', 115),
        (20, '郭瀚林', '上海雪酷滑雪竞技队', 60, '2014', 110),
        (21, '陶志伟', '山西省冰雪运动中心', 98, '2016', 105),
        (22, '程让', '上海雪酷滑雪竞技队', 61, '2015', 100),
        (23, '刘桐朔', '石家庄市冰雪与足球运动推广训练中心', 20, '2014', 95),
    ],
    ('U15', '女子组'): [
        (1, '鱼嘉怡', '河北省体育局冬季运动中心', 4, '2010', 360),
        (2, '刘霓霏', '个人', 23, '2012', 329),
        (3, '张益嘉', '河南省体育局', 6, '2013', 303),
        (4, '郭婉诗', '山西省冰雪运动中心', 10, '2013', 280),
        (5, '张淑棋', '山西省冰雪运动中心', 12, '2013', 260),
        (6, '张淑雅', '山西省冰雪运动中心', 9, '2013', 242),
        (7, '高艺轩', '个人', 22, '2012', 226),
    ],
    ('U15', '男子组'): [
        (1, '袁梓程', '四川体育职业学院', 24, '2011', 360),
        (2, '卢司焱', '个人', 42, '2013', 329),
        (3, '王恒宇', '个人', 46, '2013', 303),
        (4, '谭凯元', '个人', 43, '2012', 280),
        (5, '孙晨曦', '河北省体育局冬季运动中心', 6, '2010', 260),
        (6, '刘子俊', '四川体育职业学院', 25, '2010', 242),
        (7, '丁振珈', '个人', 47, '2013', 226),
        (8, '高翊博', '北京市冬季运动管理中心', 4, '2013', 212),
        (9, '贺洛东', '上海雪酷滑雪竞技队', 62, '2011', 199),
        (10, '张栋涵', '个人', 48, '2013', 187),
        (11, '李懿恒', '自由地带pop滑雪俱乐部', 96, '2011', 176),
        (12, '梁嘉俊', '石家庄市冰雪与足球运动推广训练中心', 22, '2013', 166),
        (13, '黄熙灿', '上海雪酷滑雪竞技队', 64, '2011', 157),
        (14, '郭彧铭', '个人', 41, '2013', 149),
        (15, '张显祖', '上海雪酷滑雪竞技队', 63, '2012', 141),
    ],
    ('U18', '女子组'): [
        (1, '张楚仪', '个人', 24, '2007', 360),
        (2, '张潇月', '个人', 25, '2009', 329),
        (3, '乔焱', '个人', 79, '2008', 303),
    ],
    ('U18', '男子组'): [
        (1, '李俊辛', '四川体育职业学院', 27, '2008', 360),
        (2, '杨峻溪', '个人', 50, '2010', 329),
        (3, '黄子剑', '湖北省武术和冬季运动管理中心', 15, '2008', 303),
        (4, '吴海鑫', '湖北省武术和冬季运动管理中心', 13, '2009', 280),
        (5, '袁嘉伟', '湖北省武术和冬季运动管理中心', 12, '2009', 260),
        (6, '何琨鹏', '湖北省武术和冬季运动管理中心', 11, '2009', 242),
        (7, '周亮', '湖北省武术和冬季运动管理中心', 14, '2009', 226),
        (8, '米馥豪', '石家庄市冰雪与足球运动推广训练中心', 23, '2009', 212),
        (9, '李智贤', '湖北省武术和冬季运动管理中心', 97, '2010', 199),
        (10, '赵开元', '湖北省武术和冬季运动管理中心', 16, '2010', 187),
        (11, '杨路龙', '个人', 52, '2008', 176),
        (12, '刘智鑫', '湖北省武术和冬季运动管理中心', 17, '2010', 166),
        (13, '姚佳俊', '个人', 53, '2008', 157),
    ],
}

BIGAIR = {
    ('U11', '女子组'): [
        (1, '陈松妤', '个人', 16, '2014', 360),
        (2, '牛安芷芸', '个人', 20, '2014', 329),
        (3, '杨舒雅', '个人', 15, '2015', 303),
        (4, '颜嘉懿', '个人', 18, '2014', 280),
        (5, '蒋柠萱', '北京市冬季运动管理中心', 27, '2015', 260),
        (6, '周斯言', '成都肉熊猫滑雪俱乐部', 3, '2015', 242),
        (7, '顾嘉禾', '河南省体育局', 5, '2014', 226),
        (8, '张诗涵', '石家庄市冰雪与足球运动推广训练中心', 13, '2017', 212),
        (9, '翟姝涵', '北京市冬季运动管理中心', 1, '2017', 199),
        (10, '张迦淳', '个人', 17, '2017', 187),
        (11, '崔嘉懿', '上海雪酷滑雪竞技队', 61, '2015', 176),
        (12, '仇逸菲', '上海雪酷滑雪竞技队', 60, '2015', 166),
        (13, '周子钰', '山西省冰雪运动中心', 7, '2017', 157),
        (14, '陈玟聿', '上海雪酷滑雪竞技队', 63, '2016', 149),
        (15, '叶恩瑶', '上海雪酷滑雪竞技队', 62, '2014', 141),
        (16, '周若慈', '个人', 19, '2014', 134),
    ],
    ('U11', '男子组'): [
        (1, '刘翰泽', '个人', 31, '2014', 360),
        (2, '王祖安', '河南省体育局', 8, '2014', 329),
        (3, '刘沐泽', '石家庄市冰雪与足球运动推广训练中心', 19, '2014', 303),
        (4, '范天成', '个人', 33, '2015', 280),
        (5, '曾云泽', 'NEW TEAM', 99, '2014', 260),
        (6, '王曌霖', '河南省体育局', 9, '2014', 242),
        (7, '程让', '上海雪酷滑雪竞技队', 61, '2015', 226),
        (8, '魏子博', '河南省体育局', 7, '2014', 212),
        (9, '赵严诺', '河北省体育局冬季运动中心', 5, '2014', 199),
        (10, '刘音里', '个人', 35, '2016', 187),
        (11, '蒋桨', '个人', 29, '2015', 176),
        (12, '刘沐文', '个人', 34, '2017', 166),
        (13, '王辰然', '个人', 39, '2015', 157),
        (14, '马琸明', '个人', 36, '2017', 149),
        (15, '石昊桐', '北京市冬季运动管理中心', 2, '2017', 141),
        (16, '郭瀚林', '上海雪酷滑雪竞技队', 60, '2014', 134),
        (17, '陶志伟', '山西省冰雪运动中心', 98, '2016', 127),
        (18, '监柏霖', '个人', 30, '2014', 121),
        (19, '方柏尧', '个人', 38, '2014', 115),
        (20, '马琸阳', '个人', 37, '2017', 110),
        (21, '阿力合尔·木拉提江', '北京市冬季运动管理中心', 3, '2014', 105),
    ],
    ('U15', '女子组'): [
        (1, '鱼嘉怡', '河北省体育局冬季运动中心', 4, '2010', 360),
        (2, '郭婉诗', '山西省冰雪运动中心', 10, '2013', 329),
        (3, '张益嘉', '河南省体育局', 6, '2013', 303),
        (4, '张淑雅', '山西省冰雪运动中心', 9, '2013', 280),
        (5, '刘霓霏', '个人', 23, '2012', 260),
    ],
    ('U15', '男子组'): [
        (1, '王恒宇', '个人', 46, '2013', 360),
        (2, '袁梓程', '四川体育职业学院', 24, '2011', 329),
        (3, '卢司焱', '个人', 42, '2013', 303),
        (4, '谭凯元', '个人', 43, '2012', 280),
        (5, '丁振珈', '个人', 47, '2013', 260),
        (6, '郭彧铭', '个人', 41, '2013', 242),
        (7, '孙晨曦', '河北省体育局冬季运动中心', 6, '2010', 226),
        (8, '高翊博', '北京市冬季运动管理中心', 4, '2013', 212),
        (9, '刘子俊', '四川体育职业学院', 25, '2010', 199),
        (10, '梁嘉俊', '石家庄市冰雪与足球运动推广训练中心', 22, '2013', 187),
        (11, '李懿恒', '自由地带pop滑雪俱乐部', 96, '2011', 176),
        (12, '贺洛东', '上海雪酷滑雪竞技队', 62, '2011', 166),
    ],
    ('U18', '女子组'): [
        (1, '张楚仪', '个人', 24, '2007', 360),
        (2, '张潇月', '个人', 25, '2009', 329),
        (3, '乔焱', '个人', 79, '2008', 303),
    ],
    ('U18', '男子组'): [
        (1, '袁嘉伟', '湖北省武术和冬季运动管理中心', 12, '2009', 360),
        (2, '何琨鹏', '湖北省武术和冬季运动管理中心', 11, '2009', 329),
        (3, '李智贤', '湖北省武术和冬季运动管理中心', 97, '2010', 303),
        (4, '吴海鑫', '湖北省武术和冬季运动管理中心', 13, '2009', 280),
        (5, '周亮', '湖北省武术和冬季运动管理中心', 14, '2009', 260),
        (6, '米馥豪', '石家庄市冰雪与足球运动推广训练中心', 23, '2009', 242),
        (7, '杨峻溪', '个人', 50, '2010', 226),
        (8, '杨路龙', '个人', 52, '2008', 212),
        (9, '赵开元', '湖北省武术和冬季运动管理中心', 16, '2010', 199),
        (10, '黄子剑', '湖北省武术和冬季运动管理中心', 15, '2008', 187),
        (11, '刘智鑫', '湖北省武术和冬季运动管理中心', 17, '2010', 176),
        (12, '姚佳俊', '个人', 53, '2008', 166),
    ],
}


def normalize_name(name):
    """Remove extra spaces in Chinese names"""
    return re.sub(r'\s+', '', name)


def make_athlete_id(name, team):
    """Generate athlete ID from name and team"""
    safe = re.sub(r'[^a-zA-Z0-9\u4e00-\u9fff]', '', f'{name}{team}')
    return f'athlete-{safe}'[:80]


def main():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()

    # Build athlete cache: name -> id
    c.execute('SELECT id, name, team FROM Athlete')
    athlete_cache = {}
    for aid, aname, ateam in c.fetchall():
        athlete_cache[aname] = aid
        athlete_cache[(aname, ateam)] = aid

    total_results = 0
    total_new_athletes = 0

    datasets = [
        (COMPETITIONS[0], SLOPESTYLE, '坡面障碍技巧'),
        (COMPETITIONS[1], BIGAIR, '大跳台'),
    ]

    for comp, results_data, discipline in datasets:
        comp_id = comp['id']
        print(f"\n=== {comp['name']} ===")

        # Delete existing if reimporting
        existing = c.execute('SELECT id FROM Competition WHERE id = ?', (comp_id,)).fetchone()
        if existing:
            c.execute('DELETE FROM Result WHERE competitionId = ?', (comp_id,))
            c.execute('DELETE FROM Competition WHERE id = ?', (comp_id,))
            print(f"  Deleted existing competition: {comp_id}")

        # Insert competition
        c.execute('''INSERT INTO Competition (id, name, sportType, sport, location, date, endDate, status, pdfSource)
                     VALUES (?, ?, ?, ?, ?, ?, ?, 'completed', ?)''',
                  (comp_id, comp['name'], comp['sportType'], comp['sport'],
                   comp['location'], comp['date'], comp['endDate'], comp['pdfSource']))

        comp_results = 0
        for (age_group, gender), athletes in results_data.items():
            gender_code = '女' if '女' in gender else '男'

            for rank, name, team, bib, birth_year, points in athletes:
                name = normalize_name(name)

                # Find or create athlete
                athlete_id = athlete_cache.get((name, team)) or athlete_cache.get(name)

                if not athlete_id:
                    athlete_id = make_athlete_id(name, team)
                    # Check for ID collision
                    existing_a = c.execute('SELECT id FROM Athlete WHERE id = ?', (athlete_id,)).fetchone()
                    if existing_a:
                        athlete_id = f'{athlete_id}-{birth_year}'

                    c.execute('''INSERT INTO Athlete (id, name, team, gender, birthYear, updatedAt)
                                 VALUES (?, ?, ?, ?, ?, datetime('now'))
                                 ON CONFLICT(name, team) DO UPDATE SET
                                   birthYear = COALESCE(excluded.birthYear, birthYear),
                                   updatedAt = datetime('now')''',
                              (athlete_id, name, team, gender_code, birth_year))
                    athlete_cache[name] = athlete_id
                    athlete_cache[(name, team)] = athlete_id
                    total_new_athletes += 1
                else:
                    # Update birthYear if missing
                    c.execute('UPDATE Athlete SET birthYear = COALESCE(birthYear, ?), updatedAt = datetime(\'now\') WHERE id = ?',
                              (birth_year, athlete_id))

                # Insert result
                result_id = f'{comp_id}-{discipline}-{age_group}-{gender}-r{rank}'
                try:
                    c.execute('''INSERT INTO Result (id, athleteId, competitionId, discipline, ageGroup, gender, rank, bib, points)
                                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)''',
                              (result_id, athlete_id, comp_id, discipline, age_group, gender, rank, bib, points))
                    comp_results += 1
                except sqlite3.IntegrityError as e:
                    print(f"  WARN: Duplicate result for {name} in {discipline} {age_group} {gender}: {e}")

            print(f"  {discipline} {age_group} {gender}: {len(athletes)} results")

        total_results += comp_results
        print(f"  Subtotal: {comp_results} results")

    # Update SeasonTotal for affected athletes
    print("\n=== Updating SeasonTotal ===")

    # Get all unique athlete+ageGroup+gender combinations from new results
    c.execute('''SELECT DISTINCT r.athleteId, r.ageGroup, r.gender
                 FROM Result r
                 WHERE r.competitionId IN (?, ?)''',
              (COMPETITIONS[0]['id'], COMPETITIONS[1]['id']))
    affected = c.fetchall()

    for athlete_id, age_group, gender in affected:
        # Sum all points for this athlete in this ageGroup+gender across ALL competitions
        c.execute('''SELECT SUM(points), COUNT(*), MIN(rank)
                     FROM Result
                     WHERE athleteId = ? AND ageGroup = ? AND gender = ?''',
                  (athlete_id, age_group, gender))
        row = c.fetchone()
        total_pts = row[0] or 0
        comp_count = row[1] or 0
        best_rank = row[2] or 999
        avg_pts = round(total_pts / comp_count) if comp_count > 0 else 0

        season_id = f'st-{athlete_id}-2025-2026-{age_group}-{gender}'
        c.execute('''INSERT INTO SeasonTotal (id, athleteId, season, ageGroup, gender, totalPoints, competitionCount, avgPoints, bestRank, updatedAt)
                     VALUES (?, ?, '2025-2026', ?, ?, ?, ?, ?, ?, datetime('now'))
                     ON CONFLICT(athleteId, season, ageGroup, gender) DO UPDATE SET
                       totalPoints = excluded.totalPoints,
                       competitionCount = excluded.competitionCount,
                       avgPoints = excluded.avgPoints,
                       bestRank = excluded.bestRank,
                       updatedAt = datetime('now')''',
                  (season_id, athlete_id, age_group, gender, total_pts, comp_count, avg_pts, best_rank))

    print(f"  Updated {len(affected)} athlete season totals")

    conn.commit()
    conn.close()

    print(f"\n=== Import Complete ===")
    print(f"  Total results: {total_results}")
    print(f"  New athletes: {total_new_athletes}")
    print(f"  Competitions: {COMPETITIONS[0]['id']}, {COMPETITIONS[1]['id']}")


if __name__ == '__main__':
    main()
