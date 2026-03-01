#!/usr/bin/env python3
"""
Python equivalent of generate-latest-results.js + generate-total-rankings-by-sport.js
Used when better-sqlite3 native bindings are unavailable (e.g. WSL)
"""
import sqlite3
import json
import os
from datetime import datetime
from collections import defaultdict

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'prisma', 'ski.db')
SRC_DATA = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'data')

SPORT_TYPE_MERGE = {
    'alpine': 'alpine',
    'snowboard-slopestyle': 'snowboard-slopestyle-bigair',
    'snowboard-bigair': 'snowboard-slopestyle-bigair',
    'snowboard-parallel': 'snowboard-parallel',
    'freestyle-slopestyle': 'freestyle-slopestyle-bigair',
    'freestyle-bigair': 'freestyle-slopestyle-bigair',
}
SPORT_TYPE_NAMES = {
    'alpine': '高山滑雪',
    'snowboard-slopestyle-bigair': '单板坡面障碍技巧/大跳台',
    'snowboard-parallel': '单板平行项目',
    'freestyle-slopestyle-bigair': '自由式坡面障碍技巧/大跳台',
}
SPORT_ORDER = ['alpine', 'snowboard-slopestyle-bigair', 'snowboard-parallel', 'freestyle-slopestyle-bigair']
AGE_ORDER = ['U11', 'U15', 'U18']
GENDER_ORDER = ['男子组', '女子组']


def generate_latest_results(conn):
    print('Generating latestResults.ts...')
    c = conn.cursor()

    comps = c.execute('SELECT id, name, sport, sportType, location, date, endDate, status FROM Competition ORDER BY date DESC, name ASC').fetchall()
    print(f'  Found {len(comps)} competitions')

    competition_results = []
    total = 0

    for comp in comps:
        cid, cname, csport, cst, cloc, cdate, cend, cstatus = comp
        results = c.execute('''
            SELECT r.discipline, r.ageGroup, r.gender, r.rank, r.bib,
                   r.run1, r.run2, r.time, r.diff, r.bestScore, r.points,
                   a.name, a.team, a.birthYear
            FROM Result r JOIN Athlete a ON r.athleteId = a.id
            WHERE r.competitionId = ?
            ORDER BY r.discipline, r.ageGroup, r.gender, r.rank
        ''', (cid,)).fetchall()

        if not results:
            continue
        total += len(results)

        events = defaultdict(lambda: {'discipline': '', 'ageGroup': '', 'gender': '', 'athletes': []})
        for r in results:
            disc, ag, gen, rank, bib, r1, r2, time, diff, bs, pts, aname, ateam, aby = r
            key = f'{disc}|||{ag}|||{gen}'
            ev = events[key]
            ev['discipline'] = disc
            ev['ageGroup'] = ag
            ev['gender'] = gen
            athlete = {'rank': rank, 'bib': bib, 'name': aname, 'team': ateam}
            if aby: athlete['birthYear'] = str(aby)
            if r1: athlete['run1'] = r1
            if r2: athlete['run2'] = r2
            if time: athlete['time'] = time
            if diff: athlete['diff'] = diff
            if bs is not None: athlete['bestScore'] = bs
            if pts is not None: athlete['points'] = pts
            ev['athletes'].append(athlete)

        def sort_key(e):
            ai = AGE_ORDER.index(e['ageGroup']) if e['ageGroup'] in AGE_ORDER else 99
            gi = GENDER_ORDER.index(e['gender']) if e['gender'] in GENDER_ORDER else 99
            return (e['discipline'], ai, gi)

        sorted_events = sorted(events.values(), key=sort_key)

        competition_results.append({
            'competition': cname,
            'sport': csport,
            'sportType': cst,
            'location': cloc,
            'date': cdate,
            'endDate': cend or cdate,
            'status': cstatus or 'completed',
            'events': sorted_events,
        })

    data = {'lastUpdated': datetime.now().strftime('%Y-%m-%d'), 'competitions': competition_results}
    now_iso = datetime.now().isoformat()

    ts_content = f'''// 最新比赛成绩数据
// 自动生成，请勿手动修改
// 生成时间: {now_iso}

export interface AthleteResult {{
  rank: number
  bib: number
  name: string
  team: string
  birthYear?: string
  run1?: string
  run2?: string
  time?: string
  diff?: string
  bestScore?: number
  points?: number
}}

export interface EventResult {{
  discipline: string
  ageGroup: string
  gender: string
  athletes: AthleteResult[]
}}

export interface CompetitionResult {{
  competition: string
  sport: string
  sportType: string
  location: string
  date: string
  endDate: string
  status: 'completed' | 'ongoing' | 'upcoming'
  events: EventResult[]
}}

export interface ResultsData {{
  lastUpdated: string
  competitions: CompetitionResult[]
}}

export const latestResults: ResultsData = {json.dumps(data, ensure_ascii=False, indent=2)};

// 获取最新完成的比赛
export const recentCompetitions = latestResults.competitions.filter(c => c.status === 'completed');

// 按项目类型分组
export const resultsBySport = {{
  alpine: latestResults.competitions.filter(c => c.sportType === 'alpine'),
  'snowboard-slopestyle': latestResults.competitions.filter(c => c.sportType === 'snowboard-slopestyle'),
  'snowboard-bigair': latestResults.competitions.filter(c => c.sportType === 'snowboard-bigair'),
  'freestyle-slopestyle': latestResults.competitions.filter(c => c.sportType === 'freestyle-slopestyle'),
  'freestyle-bigair': latestResults.competitions.filter(c => c.sportType === 'freestyle-bigair'),
  'snowboard-parallel': latestResults.competitions.filter(c => c.sportType === 'snowboard-parallel')
}};
'''

    out_path = os.path.join(SRC_DATA, 'latestResults.ts')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f'  Written: {out_path} ({len(competition_results)} comps, {total} results)')


def generate_total_rankings(conn):
    print('Generating totalRankings.ts...')
    c = conn.cursor()

    comps = c.execute('SELECT * FROM Competition').fetchall()
    comp_cols = [d[0] for d in c.description]
    comps_dict = [dict(zip(comp_cols, row)) for row in comps]
    print(f'  Found {len(comps_dict)} competitions')

    results = c.execute('''
        SELECT r.athleteId, r.discipline, r.ageGroup, r.gender, r.points, r.rank,
               a.name as athleteName, a.team as athleteTeam,
               c.sportType, c.name as competitionName, c.location as competitionLocation, c.date as compDate
        FROM Result r
        JOIN Athlete a ON r.athleteId = a.id
        JOIN Competition c ON r.competitionId = c.id
    ''').fetchall()
    res_cols = [d[0] for d in c.description]
    results_dict = [dict(zip(res_cols, row)) for row in results]
    print(f'  Found {len(results_dict)} results')

    # Build baseline rank map (exclude latest batch of competitions)
    comp_dates = sorted(set(cd['date'] for cd in comps_dict))
    last_snapshot_map = {}
    if len(comp_dates) >= 2:
        latest_date = comp_dates[-1]
        prev_results = [r for r in results_dict if r['compDate'] < latest_date]
        prev_stats = defaultdict(lambda: {'totalPoints': 0, 'athleteId': '', 'sportType': '', 'discipline': '', 'ageGroup': '', 'gender': ''})
        for r in prev_results:
            merged = SPORT_TYPE_MERGE.get(r['sportType'], r['sportType'])
            key = f"{merged}-{r['discipline']}-{r['ageGroup']}-{r['gender']}-{r['athleteId']}"
            s = prev_stats[key]
            s['totalPoints'] += r['points'] or 0
            s['athleteId'] = r['athleteId']
            s['sportType'] = merged
            s['discipline'] = r['discipline']
            s['ageGroup'] = r['ageGroup']
            s['gender'] = r['gender']

        groups = defaultdict(list)
        for s in prev_stats.values():
            gk = f"{s['sportType']}-{s['discipline']}-{s['ageGroup']}-{s['gender']}"
            groups[gk].append(s)
        for gk, athletes in groups.items():
            athletes.sort(key=lambda a: -a['totalPoints'])
            for idx, a in enumerate(athletes):
                sk = f"{a['sportType']}-{a['discipline']}-{a['ageGroup']}-{a['gender']}-{a['athleteId']}"
                last_snapshot_map[sk] = idx + 1

    # Aggregate current stats
    athlete_stats = defaultdict(lambda: {
        'athleteId': '', 'athleteName': '', 'team': '', 'sportType': '',
        'discipline': '', 'ageGroup': '', 'gender': '',
        'totalPoints': 0, 'competitionCount': 0, 'bestRank': 999, 'results': []
    })

    for r in results_dict:
        merged = SPORT_TYPE_MERGE.get(r['sportType'], r['sportType'])
        key = f"{merged}-{r['discipline']}-{r['ageGroup']}-{r['gender']}-{r['athleteId']}"
        s = athlete_stats[key]
        s['athleteId'] = r['athleteId']
        s['athleteName'] = r['athleteName']
        s['team'] = r['athleteTeam']
        s['sportType'] = merged
        s['discipline'] = r['discipline']
        s['ageGroup'] = r['ageGroup']
        s['gender'] = r['gender']
        s['totalPoints'] += r['points'] or 0
        s['competitionCount'] += 1
        if r['rank'] < s['bestRank']:
            s['bestRank'] = r['rank']
        s['results'].append({
            'points': r['points'], 'rank': r['rank'],
            'competitionName': r['competitionName'], 'location': r['competitionLocation']
        })

    # Build sub-events
    sub_events = set()
    for s in athlete_stats.values():
        sub_events.add((s['sportType'], s['discipline'], s['ageGroup'], s['gender']))

    sport_rankings_list = []
    for main_st in SPORT_ORDER:
        se_list = [se for se in sub_events if se[0] == main_st]
        se_list.sort(key=lambda se: (
            se[1],
            AGE_ORDER.index(se[2]) if se[2] in AGE_ORDER else 99,
            GENDER_ORDER.index(se[3]) if se[3] in GENDER_ORDER else 99
        ))
        if not se_list:
            continue

        sub_event_rankings = []
        for st, disc, ag, gen in se_list:
            athletes = [s for s in athlete_stats.values()
                       if s['sportType'] == main_st and s['discipline'] == disc
                       and s['ageGroup'] == ag and s['gender'] == gen]
            athletes.sort(key=lambda a: -a['totalPoints'])

            rankings = []
            for idx, s in enumerate(athletes):
                if idx > 0 and s['totalPoints'] == athletes[idx-1]['totalPoints']:
                    current_rank = rankings[idx-1]['rank']
                else:
                    current_rank = idx + 1

                sk = f"{main_st}-{s['discipline']}-{s['ageGroup']}-{s['gender']}-{s['athleteId']}"
                last_rank = last_snapshot_map.get(sk)
                rank_change = (last_rank - current_rank) if last_rank is not None else None

                rankings.append({
                    'rank': current_rank,
                    'athleteId': s['athleteId'],
                    'athleteName': s['athleteName'],
                    'team': s['team'],
                    'totalPoints': s['totalPoints'],
                    'competitionCount': s['competitionCount'],
                    'bestRank': 1 if s['bestRank'] == 999 else s['bestRank'],
                    'avgPoints': round(s['totalPoints'] / s['competitionCount'] * 100) / 100 if s['competitionCount'] > 0 else 0,
                    'ageGroup': s['ageGroup'],
                    'gender': s['gender'],
                    'rankChange': rank_change,
                    'pointsBreakdown': [{'competition': r['competitionName'], 'location': r['location'],
                                        'points': r['points'], 'rank': r['rank']} for r in s['results']]
                })

            sub_event_name = f"{disc} {ag} {gen}"
            sub_event_rankings.append({
                'discipline': disc, 'ageGroup': ag, 'gender': gen,
                'subEventName': sub_event_name, 'rankings': rankings, 'total': len(rankings)
            })
            print(f'  {SPORT_TYPE_NAMES.get(main_st, main_st)} - {sub_event_name}: {len(rankings)} athletes')

        sport_rankings_list.append({
            'sportType': main_st,
            'sportName': SPORT_TYPE_NAMES.get(main_st, main_st),
            'subEventRankings': sub_event_rankings,
            'total': sum(se['total'] for se in sub_event_rankings)
        })

    # All rankings merged (legacy format)
    all_sorted = []
    for sr in sport_rankings_list:
        for se in sr['subEventRankings']:
            all_sorted.extend(se['rankings'])
    all_sorted.sort(key=lambda a: -a['totalPoints'])
    all_rankings = []
    for i, r in enumerate(all_sorted):
        if i > 0 and r['totalPoints'] == all_sorted[i-1]['totalPoints']:
            tied_rank = all_rankings[i-1]['rank']
        else:
            tied_rank = i + 1
        all_rankings.append({**r, 'rank': tied_rank})

    age_groups = sorted(set(r['ageGroup'] for r in results_dict))
    genders = sorted(set(r['gender'] for r in results_dict))
    locations = sorted(set(cd['location'] for cd in comps_dict))
    disciplines = sorted(set(r['discipline'] for r in results_dict))

    stats = {
        'athleteCount': len(set(r['athleteId'] for r in results_dict)),
        'competitionCount': len(comps_dict),
        'totalResults': len(results_dict)
    }

    data = {
        'sportRankings': sport_rankings_list,
        'rankings': all_rankings,
        'total': len(all_rankings),
        'filters': {
            'ageGroups': age_groups, 'genders': genders,
            'disciplines': disciplines, 'locations': locations,
            'sportTypes': [{'value': st, 'label': SPORT_TYPE_NAMES.get(st, st)}
                          for st in SPORT_ORDER if any(sr['sportType'] == st for sr in sport_rankings_list)]
        },
        'stats': stats,
        'generatedAt': datetime.now().isoformat()
    }

    now_iso = datetime.now().isoformat()
    ts_content = f'''/**
 * 总积分排名静态数据（按项目和子项分类）
 * 自动生成，请勿手动修改
 * 生成时间: {now_iso}
 */

export interface PointsBreakdownItem {{
  competition: string;
  location: string;
  points: number;
  rank: number;
}}

export interface TotalRankingItem {{
  rank: number;
  athleteId: string;
  athleteName: string;
  team: string;
  totalPoints: number;
  competitionCount: number;
  bestRank: number;
  avgPoints: number;
  ageGroup: string;
  gender: string;
  rankChange: number | null;
  pointsBreakdown: PointsBreakdownItem[];
}}

export interface SubEventRankings {{
  discipline: string;
  ageGroup: string;
  gender: string;
  subEventName: string;
  rankings: TotalRankingItem[];
  total: number;
}}

export interface SportRankings {{
  sportType: string;
  sportName: string;
  subEventRankings: SubEventRankings[];
  total: number;
}}

export interface TotalRankingsData {{
  sportRankings: SportRankings[];
  rankings: TotalRankingItem[];
  total: number;
  filters: {{
    ageGroups: string[];
    genders: string[];
    disciplines: string[];
    locations: string[];
    sportTypes: {{ value: string; label: string }}[];
  }};
  stats: {{
    athleteCount: number;
    competitionCount: number;
    totalResults: number;
  }};
  generatedAt: string;
}}

export const totalRankingsData: TotalRankingsData = {json.dumps(data, ensure_ascii=False, indent=2)};
'''

    out_path = os.path.join(SRC_DATA, 'totalRankings.ts')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f'  Written: {out_path} ({data["total"]} rankings, {stats["athleteCount"]} athletes)')


TEAM_NAME_MAPPING = {
    "石家庄市冰雪与足球运动推广训练中心": "石家庄市冰雪与足球运动中心",
    "石家庄市冰雪与足球运动推广与训练中心": "石家庄市冰雪与足球运动中心",
    "重庆市沙坪坝区体育运动中心": "重庆市沙坪坝区体育运动学校",
    "零战单板滑雪俱乐部": "零站单板滑雪俱乐部",
}


def normalize_team_name(team):
    return TEAM_NAME_MAPPING.get(team, team)


def generate_club_rankings(conn):
    print('Generating clubRankings.ts...')
    c = conn.cursor()

    results = c.execute('''
        SELECT r.athleteId, r.discipline, r.ageGroup, r.gender, r.points, r.rank,
               a.name as athleteName, a.team as athleteTeam,
               c.sportType, c.name as competitionName, c.id as competitionId
        FROM Result r
        JOIN Athlete a ON r.athleteId = a.id
        JOIN Competition c ON r.competitionId = c.id
    ''').fetchall()
    res_cols = [d[0] for d in c.description]
    results_dict = [dict(zip(res_cols, row)) for row in results]
    print(f'  Found {len(results_dict)} results')

    # Step 1: Aggregate per-athlete points (by sportType+discipline+ageGroup+gender)
    athlete_stats = defaultdict(lambda: {
        'athleteId': '', 'athleteName': '', 'team': '',
        'sportType': '', 'discipline': '', 'ageGroup': '', 'gender': '',
        'totalPoints': 0
    })

    for r in results_dict:
        merged = SPORT_TYPE_MERGE.get(r['sportType'], r['sportType'])
        key = f"{merged}-{r['discipline']}-{r['ageGroup']}-{r['gender']}-{r['athleteId']}"
        s = athlete_stats[key]
        s['athleteId'] = r['athleteId']
        s['athleteName'] = r['athleteName']
        s['team'] = normalize_team_name(r['athleteTeam'])
        s['sportType'] = merged
        s['discipline'] = r['discipline']
        s['ageGroup'] = r['ageGroup']
        s['gender'] = r['gender']
        s['totalPoints'] += r['points'] or 0

    # Step 2: Filter out "个人" and aggregate to club level
    club_stats = defaultdict(lambda: {
        'team': '', 'sportType': '', 'discipline': '', 'ageGroup': '', 'gender': '',
        'totalPoints': 0, 'athletes': set()
    })

    for s in athlete_stats.values():
        if s['team'] == '个人' or not s['team']:
            continue
        club_key = f"{s['team']}-{s['sportType']}-{s['discipline']}-{s['ageGroup']}-{s['gender']}"
        cs = club_stats[club_key]
        cs['team'] = s['team']
        cs['sportType'] = s['sportType']
        cs['discipline'] = s['discipline']
        cs['ageGroup'] = s['ageGroup']
        cs['gender'] = s['gender']
        cs['totalPoints'] += s['totalPoints']
        cs['athletes'].add(s['athleteId'])

    # Step 3: Build sub-events and rank clubs
    sub_events = set()
    for cs in club_stats.values():
        sub_events.add((cs['sportType'], cs['discipline'], cs['ageGroup'], cs['gender']))

    sport_rankings_list = []
    all_clubs = set()
    all_athletes = set()

    for main_st in SPORT_ORDER:
        se_list = [se for se in sub_events if se[0] == main_st]
        se_list.sort(key=lambda se: (
            se[1],
            AGE_ORDER.index(se[2]) if se[2] in AGE_ORDER else 99,
            GENDER_ORDER.index(se[3]) if se[3] in GENDER_ORDER else 99
        ))
        if not se_list:
            continue

        sub_event_rankings = []
        for st, disc, ag, gen in se_list:
            clubs = [cs for cs in club_stats.values()
                     if cs['sportType'] == main_st and cs['discipline'] == disc
                     and cs['ageGroup'] == ag and cs['gender'] == gen]
            clubs.sort(key=lambda c: -c['totalPoints'])

            rankings = []
            for idx, cs in enumerate(clubs):
                if idx > 0 and cs['totalPoints'] == clubs[idx-1]['totalPoints']:
                    current_rank = rankings[idx-1]['rank']
                else:
                    current_rank = idx + 1

                all_clubs.add(cs['team'])
                all_athletes.update(cs['athletes'])

                rankings.append({
                    'rank': current_rank,
                    'team': cs['team'],
                    'totalPoints': cs['totalPoints'],
                    'athleteCount': len(cs['athletes']),
                })

            sub_event_name = f"{disc} {ag} {gen}"
            sub_event_rankings.append({
                'discipline': disc, 'ageGroup': ag, 'gender': gen,
                'subEventName': sub_event_name, 'rankings': rankings
            })
            print(f'  {SPORT_TYPE_NAMES.get(main_st, main_st)} - {sub_event_name}: {len(rankings)} clubs')

        sport_rankings_list.append({
            'sportType': main_st,
            'sportName': SPORT_TYPE_NAMES.get(main_st, main_st),
            'subEventRankings': sub_event_rankings,
        })

    # Collect filter options
    age_groups = sorted(set(r['ageGroup'] for r in results_dict))
    genders = sorted(set(r['gender'] for r in results_dict))

    comps = c.execute('SELECT * FROM Competition').fetchall()

    data = {
        'sportRankings': sport_rankings_list,
        'filters': {
            'ageGroups': age_groups,
            'genders': genders,
            'sportTypes': [{'value': st, 'label': SPORT_TYPE_NAMES.get(st, st)}
                          for st in SPORT_ORDER if any(sr['sportType'] == st for sr in sport_rankings_list)]
        },
        'stats': {
            'totalClubs': len(all_clubs),
            'totalAthletes': len(all_athletes),
            'totalCompetitions': len(comps),
        },
        'generatedAt': datetime.now().isoformat()
    }

    now_iso = datetime.now().isoformat()
    ts_content = f'''/**
 * 俱乐部积分排名静态数据
 * 自动生成，请勿手动修改
 * 生成时间: {now_iso}
 */

export interface ClubRankingItem {{
  rank: number;
  team: string;
  totalPoints: number;
  athleteCount: number;
}}

export interface ClubSubEventRankings {{
  discipline: string;
  ageGroup: string;
  gender: string;
  subEventName: string;
  rankings: ClubRankingItem[];
}}

export interface ClubSportRankings {{
  sportType: string;
  sportName: string;
  subEventRankings: ClubSubEventRankings[];
}}

export interface ClubRankingsData {{
  sportRankings: ClubSportRankings[];
  filters: {{
    ageGroups: string[];
    genders: string[];
    sportTypes: {{ value: string; label: string }}[];
  }};
  stats: {{
    totalClubs: number;
    totalAthletes: number;
    totalCompetitions: number;
  }};
  generatedAt: string;
}}

export const clubRankingsData: ClubRankingsData = {json.dumps(data, ensure_ascii=False, indent=2)};
'''

    out_path = os.path.join(SRC_DATA, 'clubRankings.ts')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f'  Written: {out_path} ({len(all_clubs)} clubs, {len(all_athletes)} athletes)')


if __name__ == '__main__':
    conn = sqlite3.connect(DB_PATH)
    generate_latest_results(conn)
    print()
    generate_total_rankings(conn)
    print()
    generate_club_rankings(conn)
    conn.close()
    print('\nDone!')
