'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import {
  Calculator, Trophy, Users, FileText, TrendingUp, Calendar,
  Video, BarChart3, ChevronLeft, ChevronRight, ExternalLink,
  Clock, MapPin, Medal, Award, Play, Download, Newspaper,
  Target, Zap, BookOpen, History, Star, TrendingDown
} from 'lucide-react';
import { getImagePath } from '@/utils/paths';
import { useTranslation } from '@/contexts/LanguageContext';

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

  // 最新赛事成绩（增加到6个）
  const latestResults = [
    { id: 1, event: '2024全国高山滑雪锦标赛', discipline: '男子大回转', location: '天池滑雪场', date: '12月15日', status: 'live', winner: '张伟', time: '1:23.45', participants: 45 },
    { id: 2, event: '中国杯高山公开赛', discipline: '女子回转', location: '万龙滑雪场', date: '12月14日', status: 'completed', winner: '李雪', time: '58.32', participants: 38 },
    { id: 3, event: '东北联赛', discipline: '男子超级大回转', location: '亚布力滑雪场', date: '12月13日', status: 'completed', winner: '王强', time: '1:15.67', participants: 42 },
    { id: 4, event: '华北区域赛', discipline: '女子大回转', location: '太舞滑雪场', date: '12月12日', status: 'completed', winner: '王冰', time: '1:25.89', participants: 35 },
    { id: 5, event: '青年锦标赛', discipline: '男子回转', location: '云顶滑雪场', date: '12月11日', status: 'completed', winner: '刘强', time: '1:02.34', participants: 52 },
    { id: 6, event: '大众公开赛', discipline: '混合全能', location: '长白山滑雪场', date: '12月10日', status: 'completed', winner: '陈娜', time: '2:18.56', participants: 28 }
  ];

  // 积分排行榜（增加到10个）
  const rankings = [
    { rank: 1, name: '张伟', nation: '中国', event: '男子大回转', points: '0.00', change: 0, trend: 'stable' },
    { rank: 2, name: '李雪', nation: '中国', event: '女子回转', points: '8.45', change: 1, trend: 'up' },
    { rank: 3, name: '王冰', nation: '中国', event: '女子大回转', points: '12.30', change: -1, trend: 'down' },
    { rank: 4, name: '刘强', nation: '中国', event: '男子回转', points: '15.67', change: 2, trend: 'up' },
    { rank: 5, name: '陈娜', nation: '中国', event: '女子超级大回转', points: '18.92', change: 0, trend: 'stable' },
    { rank: 6, name: '赵明', nation: '中国', event: '男子超级大回转', points: '22.15', change: 1, trend: 'up' },
    { rank: 7, name: '孙丽', nation: '中国', event: '女子回转', points: '25.48', change: -2, trend: 'down' },
    { rank: 8, name: '周杰', nation: '中国', event: '男子大回转', points: '28.73', change: 3, trend: 'up' },
    { rank: 9, name: '吴芳', nation: '中国', event: '女子全能', points: '31.29', change: 0, trend: 'stable' },
    { rank: 10, name: '郑浩', nation: '中国', event: '男子全能', points: '34.56', change: 1, trend: 'up' }
  ];

  // 赛程日历（增加到6个）
  const upcomingEvents = [
    { event: '全国高山滑雪锦标赛', discipline: '大回转', date: '2024-12-20', location: '长白山万达滑雪场', level: 'A级', prize: '50万' },
    { event: '中国杯高山滑雪公开赛', discipline: '回转', date: '2024-12-22', location: '崇礼云顶滑雪场', level: 'A级', prize: '40万' },
    { event: '华北区域赛', discipline: '超级大回转', date: '2024-12-25', location: '太舞滑雪场', level: 'B级', prize: '20万' },
    { event: '青年锦标赛', discipline: '全能', date: '2024-12-28', location: '万龙滑雪场', level: 'B级', prize: '15万' },
    { event: '东北联赛', discipline: '大回转', date: '2025-01-05', location: '亚布力滑雪场', level: 'B级', prize: '18万' },
    { event: '全国冬季运动会', discipline: '全能', date: '2025-01-15', location: '吉林北大湖', level: 'A级', prize: '100万' }
  ];

  // 新闻动态（新增）
  const latestNews = [
    { id: 1, title: '张伟夺得全国锦标赛男子大回转冠军', summary: '在天池滑雪场举行的2024全国高山滑雪锦标赛上，张伟以1分23秒45的成绩夺得男子大回转项目冠军...', time: '2小时前', image: '/images/ski-bg.jpg', category: '赛事' },
    { id: 2, title: '高山滑雪积分规则v4.0正式发布', summary: '中国滑雪协会发布了最新版本的高山滑雪积分规则，新规则将于2025年1月1日起正式实施...', time: '5小时前', image: '/images/ski-bg.jpg', category: '规则' },
    { id: 3, title: '2024-25赛季赛程公布', summary: '新赛季将举办12站国家级赛事，覆盖全国8个省份的顶级滑雪场地...', time: '1天前', image: '/images/ski-bg.jpg', category: '赛程' },
    { id: 4, title: '李雪打破女子回转全国纪录', summary: '在万龙滑雪场进行的中国杯公开赛上，李雪以58秒32的成绩刷新女子回转项目全国纪录...', time: '2天前', image: '/images/ski-bg.jpg', category: '记录' }
  ];

  // 精彩视频（增加到6个）
  const videos = [
    { id: 1, title: '2024全国锦标赛男子大回转精彩集锦', thumbnail: '/images/ski-bg.jpg', duration: '5:32', views: '12.5K', date: '12-15' },
    { id: 2, title: '张伟夺冠瞬间回顾', thumbnail: '/images/ski-bg.jpg', duration: '2:15', views: '8.3K', date: '12-15' },
    { id: 3, title: '高山滑雪技术要领讲解', thumbnail: '/images/ski-bg.jpg', duration: '8:47', views: '25.1K', date: '12-10' },
    { id: 4, title: '李雪破纪录全程回放', thumbnail: '/images/ski-bg.jpg', duration: '3:28', views: '15.2K', date: '12-14' },
    { id: 5, title: '赛道分析：天池滑雪场难度解析', thumbnail: '/images/ski-bg.jpg', duration: '6:15', views: '9.8K', date: '12-12' },
    { id: 6, title: '运动员专访：备战新赛季', thumbnail: '/images/ski-bg.jpg', duration: '12:05', views: '18.7K', date: '12-08' }
  ];

  // 顶尖运动员（增加到8个）
  const topAthletes = [
    { id: 1, name: '张伟', nation: '中国', discipline: '大回转', points: '0.00', worldRank: 45, age: 25, wins: 12 },
    { id: 2, name: '李雪', nation: '中国', discipline: '回转', points: '8.45', worldRank: 52, age: 23, wins: 9 },
    { id: 3, name: '王冰', nation: '中国', discipline: '大回转', points: '12.30', worldRank: 58, age: 26, wins: 8 },
    { id: 4, name: '刘强', nation: '中国', discipline: '回转', points: '15.67', worldRank: 63, age: 24, wins: 7 },
    { id: 5, name: '陈娜', nation: '中国', discipline: '超级大回转', points: '18.92', worldRank: 68, age: 27, wins: 6 },
    { id: 6, name: '赵明', nation: '中国', discipline: '超级大回转', points: '22.15', worldRank: 72, age: 28, wins: 5 },
    { id: 7, name: '孙丽', nation: '中国', discipline: '回转', points: '25.48', worldRank: 76, age: 22, wins: 4 },
    { id: 8, name: '周杰', nation: '中国', discipline: '全能', points: '28.73', worldRank: 81, age: 29, wins: 11 }
  ];

  // 数据统计（新增）
  const statistics = [
    { label: '本赛季赛事', value: '12', unit: '场', icon: Trophy, color: 'blue' },
    { label: '注册运动员', value: '486', unit: '人', icon: Users, color: 'green' },
    { label: '总奖金池', value: '385', unit: '万', icon: Award, color: 'yellow' },
    { label: '参赛人次', value: '2.8K', unit: '+', icon: Target, color: 'purple' }
  ];

  // 积分规则简介（新增）
  const pointsRules = [
    { title: '积分计算', desc: '基于时间差和竞赛系数的v4.0公式', icon: Calculator },
    { title: '赛事分级', desc: 'A级系数1.0，B级0.6，C级0.3', icon: Star },
    { title: '积分延续', desc: '上赛季积分×50%计入新赛季', icon: TrendingUp },
    { title: '伤病保护', desc: '特殊情况下的积分保护机制', icon: Award }
  ];

  // 历史冠军（新增）
  const champions = [
    { year: '2023', name: '张伟', discipline: '男子大回转', points: '0.00' },
    { year: '2023', name: '李雪', discipline: '女子回转', points: '5.23' },
    { year: '2022', name: '王冰', discipline: '女子大回转', points: '8.91' },
    { year: '2022', name: '刘强', discipline: '男子回转', points: '12.45' }
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
        {/* 数据统计 */}
        <section className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={`bg-white rounded-lg p-6 text-center shadow-sm border-t-4 ${
                  stat.color === 'blue' ? 'border-blue-500' :
                  stat.color === 'green' ? 'border-green-500' :
                  stat.color === 'yellow' ? 'border-yellow-500' :
                  'border-purple-500'
                }`}>
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'yellow' ? 'text-yellow-600' :
                    'text-purple-600'
                  }`} />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}<span className="text-lg text-gray-500">{stat.unit}</span></div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 两栏布局：新闻动态 + 积分排行榜 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 items-stretch">
          {/* 新闻动态 */}
          <section className="flex">
            <div className="bg-white rounded-lg p-6 shadow-sm w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <Newspaper className="w-5 h-5 mr-2 text-red-600" />
                  新闻动态
                </h2>
              </div>
              <div className="space-y-4">
                {latestNews.map((news) => (
                  <div key={news.id} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 p-3 rounded-lg transition-colors cursor-pointer">
                    <img src={getImagePath(news.image)} alt={news.title} className="w-32 h-24 object-cover rounded-lg flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">{news.category}</span>
                        <span className="text-xs text-gray-500">{news.time}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1 hover:text-blue-600">{news.title}</h4>
                      <p className="text-sm text-gray-600 line-clamp-2">{news.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 积分排行榜 - 表格式样式 */}
          <section className="lg:col-span-2 flex">
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

        {/* 最新赛事成绩 */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-blue-600" />
              最新赛事成绩
            </h2>
            <Link href="/competitions" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              查看全部 <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestResults.map((result) => (
              <div key={result.id} className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900">{result.event}</div>
                    <div className="text-xs text-gray-600 mt-1">{result.discipline}</div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    result.status === 'live' ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-green-100 text-green-700'
                  }`}>
                    {result.status === 'live' ? '进行中' : '已完成'}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600"><MapPin className="w-4 h-4 mr-2" />{result.location}</div>
                  <div className="flex items-center text-gray-600"><Clock className="w-4 h-4 mr-2" />{result.date}</div>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-gray-600">冠军：</span>
                    <span className="font-semibold text-gray-900">{result.winner}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">成绩：</span>
                    <span className="font-semibold text-blue-600">{result.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">参赛：</span>
                    <span className="text-gray-900">{result.participants}人</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

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
                      event.level === 'A级' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                    }`}>{event.level}</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{event.discipline}</div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Clock className="w-4 h-4 mr-1" />{event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <MapPin className="w-4 h-4 mr-1" />{event.location}
                  </div>
                  <div className="flex items-center text-sm text-orange-600 font-medium">
                    <Award className="w-4 h-4 mr-1" />奖金 {event.prize}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 积分规则简介 */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-2" />
              积分规则简介
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {pointsRules.map((rule, index) => {
                const Icon = rule.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                    <Icon className="w-8 h-8 mb-3" />
                    <div className="font-semibold mb-1">{rule.title}</div>
                    <div className="text-sm text-blue-100">{rule.desc}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 text-center">
              <Link href="/rules/points" className="inline-flex items-center px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                查看完整规则 <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* 视频中心 */}
        <section className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
              <Video className="w-5 h-5 mr-2 text-red-600" />
              视频中心
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="relative rounded-lg overflow-hidden mb-2">
                    <img src={getImagePath(video.thumbnail)} alt={video.title} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-6 h-6 text-gray-900 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{video.duration}</div>
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">{video.date}</div>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 line-clamp-2 mb-1">{video.title}</h3>
                  <p className="text-xs text-gray-500">{video.views} 次观看</p>
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
                      <div className="text-xs text-gray-600">{athlete.discipline} · {athlete.age}岁</div>
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

          {/* 历史冠军 */}
          <section>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <History className="w-5 h-5 mr-2 text-yellow-600" />
                历史冠军
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
                      <div className="text-xs text-gray-500">最终积分</div>
                      <div className="font-bold text-yellow-600">{champion.points}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* 规则文档 */}
        <section>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
              <FileText className="w-5 h-5 mr-2 text-cyan-600" />
              规则文档下载
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/docs" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mr-3 group-hover:bg-red-200">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-600">中国高山滑雪积分规则v4.0</div>
                  <div className="text-xs text-gray-500 mt-1">PDF · 2.3 MB</div>
                </div>
                <Download className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
              </Link>
              <Link href="/docs" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mr-3 group-hover:bg-red-200">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-600">FIS国际雪联竞赛规则</div>
                  <div className="text-xs text-gray-500 mt-1">PDF · 5.1 MB</div>
                </div>
                <Download className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
              </Link>
              <Link href="/docs" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mr-3 group-hover:bg-red-200">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-600">场地标准与认证要求</div>
                  <div className="text-xs text-gray-500 mt-1">PDF · 1.8 MB</div>
                </div>
                <Download className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
