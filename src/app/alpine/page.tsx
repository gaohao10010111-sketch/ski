'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import {
  Calculator, Trophy, Users, FileText, TrendingUp, Calendar,
  Video, BarChart3, ChevronLeft, ChevronRight, ExternalLink,
  Clock, MapPin, Medal, Award, Play, Download, ChevronDown, ChevronUp
} from 'lucide-react';
import { getImagePath } from '@/utils/paths';
import { useTranslation } from '@/contexts/LanguageContext';

export default function AlpinePage() {
  const { t, language } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // 英雄轮播内容
  const heroSlides = [
    {
      title: t.alpine.hero.slide1.title,
      subtitle: t.alpine.hero.slide1.subtitle,
      image: getImagePath('/images/ski-bg.jpg'),
      link: '/competitions'
    },
    {
      title: t.alpine.hero.slide2.title,
      subtitle: t.alpine.hero.slide2.subtitle,
      image: getImagePath('/images/ski-bg.jpg'),
      link: '/rules/points'
    },
    {
      title: t.alpine.hero.slide3.title,
      subtitle: t.alpine.hero.slide3.subtitle,
      image: getImagePath('/images/ski-bg.jpg'),
      link: '/registration'
    }
  ];

  // 最新赛事成绩
  const latestResults = [
    { id: 1, event: '2024全国高山滑雪锦标赛', discipline: '男子大回转', location: '天池滑雪场', date: '12月15日', status: 'live', winner: '张伟', time: '1:23.45' },
    { id: 2, event: '中国杯高山公开赛', discipline: '女子回转', location: '万龙滑雪场', date: '12月14日', status: 'completed', winner: '李雪', time: '58.32' },
    { id: 3, event: '东北联赛', discipline: '男子超级大回转', location: '亚布力滑雪场', date: '12月13日', status: 'completed', winner: '王强', time: '1:15.67' }
  ];

  // 积分排行榜
  const rankings = [
    { rank: 1, name: '张伟', nation: '中国', event: '男子大回转', points: '0.00', change: 0 },
    { rank: 2, name: '李雪', nation: '中国', event: '女子回转', points: '8.45', change: 1 },
    { rank: 3, name: '王冰', nation: '中国', event: '女子大回转', points: '12.30', change: -1 },
    { rank: 4, name: '刘强', nation: '中国', event: '男子回转', points: '15.67', change: 2 },
    { rank: 5, name: '陈娜', nation: '中国', event: '女子超级大回转', points: '18.92', change: 0 }
  ];

  // 赛程日历
  const upcomingEvents = [
    { event: '全国高山滑雪锦标赛', discipline: '大回转', date: '2024-12-20', location: '长白山万达滑雪场' },
    { event: '中国杯高山滑雪公开赛', discipline: '回转', date: '2024-12-22', location: '崇礼云顶滑雪场' },
    { event: '华北区域赛', discipline: '超级大回转', date: '2024-12-25', location: '太舞滑雪场' }
  ];

  // 精彩视频
  const videos = [
    { id: 1, title: '2024全国锦标赛男子大回转精彩集锦', thumbnail: '/images/ski-bg.jpg', duration: '5:32', views: '12.5K' },
    { id: 2, title: '张伟夺冠瞬间回顾', thumbnail: '/images/ski-bg.jpg', duration: '2:15', views: '8.3K' },
    { id: 3, title: '高山滑雪技术要领讲解', thumbnail: '/images/ski-bg.jpg', duration: '8:47', views: '25.1K' }
  ];

  // 顶尖运动员
  const topAthletes = [
    { id: 1, name: '张伟', nation: '中国', discipline: '大回转', points: '0.00', worldRank: 45 },
    { id: 2, name: '李雪', nation: '中国', discipline: '回转', points: '8.45', worldRank: 52 },
    { id: 3, name: '王冰', nation: '中国', discipline: '大回转', points: '12.30', worldRank: 58 },
    { id: 4, name: '刘强', nation: '中国', discipline: '回转', points: '15.67', worldRank: 63 }
  ];

  // 规则文档
  const documents = [
    { title: '中国高山滑雪积分规则v4.0', type: 'PDF', size: '2.3 MB', link: '#' },
    { title: 'FIS国际雪联竞赛规则', type: 'PDF', size: '5.1 MB', link: '#' },
    { title: '场地标准与认证要求', type: 'PDF', size: '1.8 MB', link: '#' }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // 自动轮播功能
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
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>

        {/* 项目名称标签 */}
        <div className="absolute top-6 left-6 sm:left-10 md:left-20 xl:left-[120px] z-10">
          <div className="bg-slate-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg">
            <div className="text-sm font-semibold">{t.alpine.title}</div>
            <div className="text-xs opacity-90">{t.alpine.subtitle}</div>
          </div>
        </div>

        <div className="relative h-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px] flex items-center">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {heroSlides[currentSlide].title}
            </h2>
            <p className="text-lg text-gray-200 mb-4">
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>
        </div>

        {/* 轮播控制 */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* 轮播指示器 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px] py-8">
        {/* 最新赛事成绩 */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-blue-600" />
              最新赛事成绩
            </h2>
            <Link href="/alpine/events/results" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
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
                    result.status === 'live'
                      ? 'bg-red-100 text-red-700 animate-pulse'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {result.status === 'live' ? '进行中' : '已完成'}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {result.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {result.date}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-gray-600">冠军：</span>
                    <span className="font-semibold text-gray-900">{result.winner}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">成绩：</span>
                    <span className="font-semibold text-blue-600">{result.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 两栏布局：积分排行榜 + 赛程日历 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 积分排行榜 */}
          <section>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                  积分排行榜
                </h2>
                <Link href="/alpine/points/rankings" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  完整排名 →
                </Link>
              </div>
              <div className="space-y-3">
                {rankings.map((athlete) => (
                  <div key={athlete.rank} className={`flex items-center p-3 rounded-lg ${
                    athlete.rank === 1 ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200' :
                    athlete.rank === 2 ? 'bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200' :
                    athlete.rank === 3 ? 'bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200' :
                    'bg-gray-50'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 ${
                      athlete.rank === 1 ? 'bg-yellow-500' :
                      athlete.rank === 2 ? 'bg-gray-400' :
                      athlete.rank === 3 ? 'bg-orange-500' :
                      'bg-gray-300'
                    }`}>
                      {athlete.rank}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{athlete.name}</div>
                      <div className="text-sm text-gray-600">{athlete.event}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{athlete.points}</div>
                      {athlete.change !== 0 && (
                        <div className={`text-xs ${athlete.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {athlete.change > 0 ? '↑' : '↓'}{Math.abs(athlete.change)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 赛程日历 */}
          <section>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                  赛程日历
                </h2>
                <Link href="/alpine/events/schedule" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  完整赛程 →
                </Link>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-purple-600 pl-4 py-3 bg-purple-50 rounded-r-lg">
                    <div className="font-semibold text-gray-900">{event.event}</div>
                    <div className="text-sm text-gray-600 mt-1">{event.discipline}</div>
                    <div className="flex items-center text-sm text-gray-500 mt-2">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {event.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* 视频中心 - 可折叠 */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection('videos')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <Video className="w-5 h-5 mr-2 text-red-600" />
                视频中心
              </h2>
              {expandedSection === 'videos' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {expandedSection === 'videos' && (
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {videos.map((video) => (
                    <div key={video.id} className="group cursor-pointer">
                      <div className="relative rounded-lg overflow-hidden mb-2">
                        <img src={getImagePath(video.thumbnail)} alt={video.title} className="w-full h-48 object-cover" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                            <Play className="w-6 h-6 text-gray-900 ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600">{video.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{video.views} 次观看</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 运动员名录 - 可折叠 */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection('athletes')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <Users className="w-5 h-5 mr-2 text-indigo-600" />
                运动员名录
              </h2>
              {expandedSection === 'athletes' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {expandedSection === 'athletes' && (
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {topAthletes.map((athlete) => (
                    <Link
                      key={athlete.id}
                      href={`/alpine/athletes/${athlete.id}`}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 hover:shadow-md transition-all border border-gray-200"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <Award className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{athlete.name}</div>
                          <div className="text-xs text-gray-600">{athlete.nation}</div>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">项目：</span>
                          <span className="font-medium">{athlete.discipline}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">积分：</span>
                          <span className="font-medium text-blue-600">{athlete.points}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">世界排名：</span>
                          <span className="font-medium">#{athlete.worldRank}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link href="/alpine/athletes/list" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center">
                    查看所有运动员 <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 规则文档 */}
        <section>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
              <FileText className="w-5 h-5 mr-2 text-cyan-600" />
              规则文档
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.link}
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mr-3 group-hover:bg-red-200">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-600">{doc.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{doc.type} · {doc.size}</div>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                </a>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link href="/alpine/docs/points-rules" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center">
                查看所有文档 <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
