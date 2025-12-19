'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import {
  Trophy, Users, TrendingUp, Calendar,
  ChevronLeft, ChevronRight,
  Clock, MapPin, Award,
  Target, History, TrendingDown
} from 'lucide-react';
import { getImagePath } from '@/utils/paths';
import { useTranslation } from '@/contexts/LanguageContext';
import { resultsBySport, type CompetitionResult, type EventResult } from '@/data/latestResults';

// 获取高山滑雪的真实数据
const alpineCompetitions = resultsBySport.alpine || [];

export default function AlpinePage() {
  const { t, language } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: t.alpine?.hero?.slide1?.title || '2024全国高山滑雪锦标赛',
      subtitle: t.alpine?.hero?.slide1?.subtitle || '大回转项目 · 正在进行',
      image: getImagePath('/images/ski-bg.jpg'),
      link: '/competitions'
    },
    {
      title: t.alpine?.hero?.slide2?.title || '积分规则v4.0',
      subtitle: t.alpine?.hero?.slide2?.subtitle || '全新积分计算系统',
      image: getImagePath('/images/ski-bg.jpg'),
      link: '/rules/points'
    },
    {
      title: t.alpine?.hero?.slide3?.title || '积分排行榜',
      subtitle: t.alpine?.hero?.slide3?.subtitle || '查看最新积分排名',
      image: getImagePath('/images/ski-bg.jpg'),
      link: '/points/rankings'
    }
  ];

  // 从真实数据生成积分排行榜（基于成绩生成）
  const generateRankings = () => {
    const athletePoints: { [key: string]: { name: string; team: string; points: number; events: number } } = {};

    alpineCompetitions.forEach(comp => {
      comp.events.forEach(event => {
        event.athletes.forEach(athlete => {
          const key = athlete.name;
          if (!athletePoints[key]) {
            athletePoints[key] = { name: athlete.name, team: athlete.team, points: 0, events: 0 };
          }
          // 根据排名计算积分（第1名360分，递减）
          const points = athlete.rank <= 50 ? Math.max(360 - (athlete.rank - 1) * 7, 1) : 0;
          athletePoints[key].points += points;
          athletePoints[key].events += 1;
        });
      });
    });

    return Object.values(athletePoints)
      .sort((a, b) => b.points - a.points)
      .slice(0, 10)
      .map((a, idx) => ({
        rank: idx + 1,
        name: a.name,
        nation: '中国',
        event: '高山滑雪',
        points: a.points.toString(),
        change: 0,
        trend: 'stable' as const
      }));
  };

  const rankings = generateRankings();

  // 赛程日历 - 待确认真实数据
  const upcomingEvents = [
    { event: '全国高山滑雪U系列比赛', discipline: '回转/大回转', date: '2025-01', location: '待定', level: 'U系列' },
    { event: '全国高山滑雪锦标赛', discipline: '全能', date: '2025-02', location: '待定', level: 'A级' },
    { event: '全国青少年高山滑雪锦标赛', discipline: '回转', date: '2025-02', location: '待定', level: 'B级' }
  ];

  // 从真实数据生成顶尖运动员列表
  const generateTopAthletes = () => {
    const athleteData: { [key: string]: { name: string; team: string; points: number; events: number } } = {};

    alpineCompetitions.forEach(comp => {
      comp.events.forEach(event => {
        event.athletes.forEach(athlete => {
          const key = athlete.name;
          if (!athleteData[key]) {
            athleteData[key] = { name: athlete.name, team: athlete.team, points: 0, events: 0 };
          }
          const points = athlete.rank <= 50 ? Math.max(360 - (athlete.rank - 1) * 7, 1) : 0;
          athleteData[key].points += points;
          athleteData[key].events += 1;
        });
      });
    });

    return Object.values(athleteData)
      .sort((a, b) => b.points - a.points)
      .slice(0, 8)
      .map((a, idx) => ({
        id: idx + 1,
        name: a.name,
        nation: '中国',
        discipline: '高山滑雪',
        points: a.points.toString(),
        worldRank: idx + 1,
        age: 0,
        wins: a.events
      }));
  };

  const topAthletes = generateTopAthletes();



  // 从真实数据生成历史冠军
  const generateChampions = () => {
    const champList: { year: string; name: string; discipline: string; time: string }[] = [];

    alpineCompetitions.forEach(comp => {
      comp.events.forEach(event => {
        const winner = event.athletes.find(a => a.rank === 1);
        if (winner) {
          champList.push({
            year: comp.date.split('-')[0],
            name: winner.name,
            discipline: `${event.gender} ${event.ageGroup} ${event.discipline}`,
            time: winner.time || '-'
          });
        }
      });
    });

    return champList.slice(0, 4);
  };

  const champions = generateChampions();

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
          <img src={heroSlides[currentSlide].image} alt={heroSlides[currentSlide].title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>

        <div className="absolute top-6 left-6 sm:left-10 md:left-20 xl:left-[120px] z-10">
          <div className="bg-slate-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg">
            <div className="text-sm font-semibold">{t.alpine?.title || '高山滑雪'}</div>
            <div className="text-xs opacity-90">{t.alpine?.subtitle || 'Alpine Skiing'}</div>
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
        <div className="mb-8">
          <section className="flex">
            <div className="bg-white rounded-lg shadow-sm w-full overflow-hidden">
              <div className="flex items-center justify-between p-6 pb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-blue-600" />
                  积分排行榜
                </h2>
                <Link href="/alpine/points/rankings" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  完整榜单 →
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">排名</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">运动员</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">项目</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">积分</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">变化</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {rankings.map((athlete) => (
                      <tr key={athlete.rank} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="flex items-center">
                            {athlete.rank <= 3 ? (
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                                athlete.rank === 1 ? 'bg-yellow-500' :
                                athlete.rank === 2 ? 'bg-gray-400' :
                                'bg-orange-500'
                              }`}>
                                {athlete.rank}
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                                {athlete.rank}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8">
                              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                                <span className="text-xs font-medium text-gray-600">{athlete.name.charAt(0)}</span>
                              </div>
                            </div>
                            <div className="ml-3">
                              <div className="text-sm font-medium text-gray-900">{athlete.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm text-gray-600">{athlete.event}</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-bold text-gray-900">{athlete.points}</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          {athlete.change !== 0 ? (
                            <div className={`flex items-center text-sm ${athlete.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {athlete.change > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                              {athlete.change > 0 ? '+' : ''}{athlete.change}
                            </div>
                          ) : (
                            <span className="text-sm text-gray-500">-</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* 最新赛事成绩 - 仅当有真实数据时显示 */}
        {alpineCompetitions.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-blue-600" />
                最新赛事成绩
              </h2>
              <Link href="/results-import" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                查看全部 <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {alpineCompetitions.map((comp) => (
                <div key={comp.competition} className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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
                      <span className="font-semibold text-blue-600">{comp.events.reduce((sum, e) => sum + e.athletes.length, 0)}人次</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 赛程日历 */}
        <section className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                赛程日历
              </h2>
              <Link href="/competitions/schedule" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                完整赛程 →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-purple-600 pl-4 py-3 bg-purple-50 rounded-r-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-gray-900">{event.event}</div>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                      event.level === 'A级' ? 'bg-red-100 text-red-700' :
                      event.level === 'U系列' ? 'bg-green-100 text-green-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>{event.level}</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{event.discipline}</div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Clock className="w-4 h-4 mr-1" />{event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />{event.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 两栏：运动员名录 + 历史冠军 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 运动员名录 */}
          <section>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-indigo-600" />
                  运动员名录
                </h2>
                <Link href="/athletes" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  全部运动员 →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {topAthletes.map((athlete) => (
                  <Link key={athlete.id} href="/athletes" className="flex items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-all border border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-sm">{athlete.name}</div>
                      <div className="text-xs text-gray-600">{athlete.discipline} · {athlete.wins}场</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">积分</div>
                      <div className="font-semibold text-blue-600 text-sm">{athlete.points}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 历史冠军 - 仅当有真实数据时显示 */}
          {champions.length > 0 && (
            <section>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                  <History className="w-5 h-5 mr-2 text-yellow-600" />
                  赛事冠军
                </h2>
                <div className="space-y-3">
                  {champions.map((champion, index) => (
                    <div key={index} className="flex items-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                      <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mr-4 flex-shrink-0">
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 bg-yellow-600 text-white text-xs rounded font-bold">{champion.year}</span>
                          <span className="font-semibold text-gray-900">{champion.name}</span>
                        </div>
                        <div className="text-sm text-gray-600">{champion.discipline}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">成绩</div>
                        <div className="font-bold text-yellow-600">{champion.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>

      </div>
    </div>
  );
}
