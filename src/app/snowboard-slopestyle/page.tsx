'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Trophy, Users, TrendingUp, Calendar,
  ChevronLeft, ChevronRight,
  Clock, MapPin, Award,
  Target, History, TrendingDown, Crown, Medal
} from 'lucide-react';
import { getImagePath } from '@/utils/paths';
import { useTranslation } from '@/contexts/LanguageContext';
import { latestResults, resultsBySport } from '@/data/latestResults';
import PartnersSection from '@/components/PartnersSection';
import { getPartnersBySport } from '@/data/partners';
import { competitionSchedule2025 } from '@/data/competitionSchedule';

// 获取单板坡障/大跳台的真实数据（合并slopestyle和bigair两个子项）
const snowboardCompetitions = [
  ...(resultsBySport['snowboard-slopestyle'] || []),
  ...(resultsBySport['snowboard-bigair'] || [])
];

// 获取单板坡障/大跳台的真实赛程 - 取最近3场未来比赛（过滤掉已结束的比赛）
const today = new Date().toISOString().split('T')[0]; // 获取今天日期 YYYY-MM-DD
const snowboardSlopestyleSchedule = competitionSchedule2025
  .filter(c => c.category === 'snowboard-slopestyle' && c.isOurs && c.endDate >= today)
  .sort((a, b) => a.startDate.localeCompare(b.startDate))
  .slice(0, 3);

export default function SnowboardSlopestylePage() {
  const { t, language } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // 从 latestResults 获取最新比赛的前10名运动员
  const rankings = useMemo(() => {
    const allAthletes: { rank: number; name: string; team: string; points: number; discipline: string; ageGroup: string; gender: string; bestScore?: number }[] = [];

    for (const competition of latestResults.competitions) {
      if (competition.sportType !== 'snowboard-slopestyle' && competition.sportType !== 'snowboard-bigair') continue;

      for (const event of competition.events) {
        for (const athlete of event.athletes) {
          if (athlete.points) {
            allAthletes.push({
              rank: athlete.rank,
              name: athlete.name,
              team: athlete.team,
              points: athlete.points,
              discipline: event.discipline,
              ageGroup: event.ageGroup,
              gender: event.gender,
              bestScore: athlete.bestScore
            });
          }
        }
      }
    }

    // 按积分排序，取前10名
    return allAthletes
      .sort((a, b) => b.points - a.points)
      .slice(0, 10);
  }, []);

  // 从真实数据生成顶尖运动员列表 - 使用 useMemo 缓存
  // 注意：积分只在同一子项内累加，不跨子项（坡面障碍技巧和大跳台分开统计）
  const topAthletes = useMemo(() => {
    const athleteData: { [key: string]: { name: string; team: string; points: number; events: number; discipline: string } } = {};

    snowboardCompetitions.forEach(comp => {
      comp.events.forEach(event => {
        event.athletes.forEach(athlete => {
          // 使用 name + discipline 作为 key，确保同一子项内累加，不跨子项
          const key = `${athlete.name}-${event.discipline}`;
          if (!athleteData[key]) {
            athleteData[key] = { name: athlete.name, team: athlete.team, points: 0, events: 0, discipline: event.discipline };
          }
          const points = athlete.points || 0;
          athleteData[key].points += points;
          athleteData[key].events += 1;
        });
      });
    });

    const sorted = Object.values(athleteData).sort((a, b) => b.points - a.points).slice(0, 8);
    const result: { id: number; name: string; nation: string; discipline: string; points: string; worldRank: number; age: number; wins: number }[] = [];
    for (let idx = 0; idx < sorted.length; idx++) {
      const a = sorted[idx];
      const rank = (idx > 0 && a.points === sorted[idx - 1].points) ? result[idx - 1].worldRank : idx + 1;
      result.push({ id: rank, name: a.name, nation: '中国', discipline: a.discipline, points: a.points.toString(), worldRank: rank, age: 0, wins: a.events });
    }
    return result;
  }, []);

  // 从真实数据生成赛事冠军 - 使用 useMemo 缓存（不再限制数量）
  const champions = useMemo(() => {
    const champList: { year: string; name: string; discipline: string; score: string }[] = [];

    snowboardCompetitions.forEach(comp => {
      comp.events.forEach(event => {
        const winner = event.athletes.find(a => a.rank === 1);
        if (winner) {
          champList.push({
            year: comp.date.split('-')[0],
            name: winner.name,
            discipline: `${event.gender} ${event.ageGroup} ${event.discipline}`,
            score: winner.bestScore?.toString() || '-'
          });
        }
      });
    });

    return champList; // 返回全部冠军，由分页控制显示
  }, []);

  // 冠军分页状态
  const [championPage, setChampionPage] = useState(0);
  const championsPerPage = 8;
  const totalChampionPages = Math.ceil(champions.length / championsPerPage);
  const displayedChampions = champions.slice(
    championPage * championsPerPage,
    (championPage + 1) * championsPerPage
  );

  const heroSlides = [
    {
      title: '单板坡面障碍技巧/大跳台',
      subtitle: '全国青少年U系列赛事',
      image: getImagePath('/images/snowboard-jump.png'),
      link: '/competitions'
    },
    {
      title: '积分规则 - 360分制',
      subtitle: '青少年U系列积分体系',
      image: getImagePath('/images/snowboard-halfpipe.jpg'),
      link: '/rules/points'
    },
    {
      title: '积分排行榜',
      subtitle: '查看最新积分排名',
      image: getImagePath('/images/snowboard-jump.jpg'),
      link: '/points/rankings'
    }
  ];



  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 英雄展示区 */}
      <div className="relative bg-gray-900 h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>

        <div className="absolute top-6 left-6 sm:left-10 md:left-20 xl:left-[120px] z-10">
          <div className="bg-purple-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg">
            <div className="text-sm font-semibold">单板坡面障碍技巧</div>
            <div className="text-xs opacity-90">Snowboard Slopestyle</div>
          </div>
        </div>

        <div className="relative h-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px] flex items-center">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{heroSlides[currentSlide].title}</h2>
            <p className="text-lg text-gray-200 mb-4">{heroSlides[currentSlide].subtitle}</p>
          </div>
        </div>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`} />
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px] py-8">
        {/* 积分排行榜 */}
        {rankings.length > 0 && (
          <div className="mb-8">
            <section className="flex">
              <div className="bg-white rounded-lg shadow-sm w-full overflow-hidden">
                <div className="flex items-center justify-between p-6 pb-4">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-purple-600" />
                    积分排行榜
                  </h2>
                  <Link href="/snowboard-slopestyle/points/rankings" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    完整榜单 →
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-2 sm:px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-12 sm:w-16">排名</th>
                        {/* 移动端：选手（姓名+单位） */}
                        <th className="sm:hidden px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">选手</th>
                        {/* 桌面端：运动员和单位分开 */}
                        <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">运动员</th>
                        <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">单位</th>
                        <th className="px-2 sm:px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">组别</th>
                        <th className="px-2 sm:px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-16 sm:w-24">积分</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {rankings.map((athlete, index) => (
                        <tr key={`${athlete.name}-${index}`} className={`hover:bg-gray-50 ${index < 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : ''}`}>
                          <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-center">
                            <div className="flex items-center justify-center">
                              {athlete.rank === 1 ? (
                                <Crown className="w-5 h-5 text-yellow-500" />
                              ) : athlete.rank === 2 ? (
                                <Medal className="w-5 h-5 text-gray-400" />
                              ) : athlete.rank === 3 ? (
                                <Award className="w-5 h-5 text-orange-500" />
                              ) : (
                                <span className="w-5 h-5 flex items-center justify-center text-sm font-medium text-gray-500">{athlete.rank}</span>
                              )}
                            </div>
                          </td>
                          {/* 移动端：姓名+单位双行显示 */}
                          <td className="sm:hidden px-2 py-2">
                            <div className="flex flex-col">
                              <span className="text-xs font-semibold text-gray-900">{athlete.name}</span>
                              <span className="text-[11px] text-gray-500 leading-tight mt-0.5">{athlete.team}</span>
                            </div>
                          </td>
                          {/* 桌面端：姓名和单位分开显示 */}
                          <td className="hidden sm:table-cell px-4 py-3 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-8 w-8">
                                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                                  <span className="text-xs font-medium text-purple-600">{athlete.name.charAt(0)}</span>
                                </div>
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">{athlete.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="hidden sm:table-cell px-4 py-3 text-sm text-gray-600">{athlete.team}</td>
                          <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-center">
                            <span className="text-xs text-gray-500">{athlete.gender} {athlete.ageGroup}</span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-center">
                            <span className={`inline-flex px-2.5 py-1 text-sm font-bold rounded-lg ${
                              index === 0
                                ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white'
                                : index < 3
                                ? 'bg-orange-100 text-orange-700'
                                : 'bg-purple-100 text-purple-800'
                            }`}>
                              {athlete.points}分
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 最新赛事成绩 - 仅当有真实数据时显示 */}
        {snowboardCompetitions.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-purple-600" />
                最新赛事成绩
              </h2>
              <Link href="/competitions" className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center">
                查看全部 <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {snowboardCompetitions.map((comp) => (
                <Link key={comp.competition} href="/competitions" className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow block">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">{comp.competition}</div>
                      <div className="text-xs text-gray-600 mt-1">{comp.sport}</div>
                    </div>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700">
                      已完成
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600"><MapPin className="w-4 h-4 mr-2" />{comp.location}</div>
                    <div className="flex items-center text-gray-600"><Clock className="w-4 h-4 mr-2" />{comp.date} ~ {comp.endDate}</div>
                    <div className="flex items-center justify-between pt-2 border-t">
                      <span className="text-gray-600">小项数：</span>
                      <span className="font-semibold text-gray-900">{comp.events.length}个</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">参赛人次：</span>
                      <span className="font-semibold text-purple-600">{comp.events.reduce((sum, e) => sum + e.athletes.length, 0)}人次</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 赛程安排 */}
        {snowboardSlopestyleSchedule.length > 0 && (
          <section className="mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                  赛程安排
                </h2>
                <Link href="/competitions/schedule" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  完整赛程 →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {snowboardSlopestyleSchedule.map((comp) => (
                  <div key={comp.id} className="border-l-4 border-purple-600 pl-4 py-3 bg-purple-50 rounded-r-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-gray-900 text-sm leading-tight">{comp.name}</div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <Clock className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span>{comp.startDate} ~ {comp.endDate}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span className="truncate">{comp.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 两栏：运动员名录 + 历史冠军 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 运动员名录 */}
          <section className="h-full">
            <div className="bg-white rounded-lg p-6 shadow-sm h-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-indigo-600" />
                  运动员名录
                </h2>
                <Link href="/athletes" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  全部运动员 →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {topAthletes.map((athlete) => (
                  <Link key={athlete.id} href="/athletes" className="flex items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-all border border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-sm">{athlete.name}</div>
                      <div className="text-xs text-gray-600">{athlete.discipline} · {athlete.wins}场</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">积分</div>
                      <div className="font-semibold text-purple-600 text-sm">{athlete.points}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 历史冠军 */}
          <section className="h-full">
            <div className="bg-white rounded-lg p-6 shadow-sm h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <History className="w-5 h-5 mr-2 text-yellow-600" />
                  赛事冠军
                  <span className="ml-2 text-sm font-normal text-gray-500">({champions.length}位)</span>
                </h2>
                {totalChampionPages > 1 && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setChampionPage(p => Math.max(0, p - 1))}
                      disabled={championPage === 0}
                      className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <span className="text-sm text-gray-500">{championPage + 1}/{totalChampionPages}</span>
                    <button
                      onClick={() => setChampionPage(p => Math.min(totalChampionPages - 1, p + 1))}
                      disabled={championPage === totalChampionPages - 1}
                      className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
                {displayedChampions.map((champion, index) => (
                  <div key={championPage * championsPerPage + index} className="flex items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="px-1.5 py-0.5 bg-yellow-600 text-white text-xs rounded font-bold">{champion.year}</span>
                        <span className="font-semibold text-gray-900 text-sm truncate">{champion.name}</span>
                      </div>
                      <div className="text-xs text-gray-600 truncate">{champion.discipline}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* 赛事合作伙伴 */}
        <PartnersSection partners={getPartnersBySport('snowboard-slopestyle')} showOrganizers={false} />

      </div>
    </div>
  );
}
