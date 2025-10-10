'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Calculator, Trophy, Users, FileText, TrendingUp, Calendar,
  Video, BarChart3, ChevronLeft, ChevronRight, ExternalLink,
  Clock, MapPin, Medal
} from 'lucide-react';
import { getImagePath } from '@/utils/paths';

export default function AlpinePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSubDiscipline, setActiveSubDiscipline] = useState('all');

  // 子项目导航
  const subDisciplines = [
    { id: 'all', name: '全部项目', nameEn: 'All Events' },
    { id: 'DH', name: '速降', nameEn: 'Downhill' },
    { id: 'SL', name: '回转', nameEn: 'Slalom' },
    { id: 'GS', name: '大回转', nameEn: 'Giant Slalom' },
    { id: 'SG', name: '超级大回转', nameEn: 'Super-G' },
    { id: 'AC', name: '全能', nameEn: 'Alpine Combined' }
  ];

  // 英雄轮播内容
  const heroSlides = [
    {
      title: '2024全国锦标赛精彩瞬间',
      subtitle: '见证中国高山滑雪的辉煌时刻',
      image: getImagePath('/images/ski-bg.jpg'),
      link: '/competitions'
    },
    {
      title: '积分系统全新升级',
      subtitle: '基于v4.0规则，更精确的积分计算',
      image: getImagePath('/images/ski-bg.jpg'),
      link: '/rules/points'
    },
    {
      title: '冬季训练营开始报名',
      subtitle: '专业教练团队，助力技术提升',
      image: getImagePath('/images/ski-bg.jpg'),
      link: '/registration'
    }
  ];

  // 功能快捷入口
  const quickAccess = [
    { title: '赛事成绩', nameEn: 'Results', icon: Trophy, href: '/alpine/events/results', color: 'from-blue-500 to-blue-600' },
    { title: '积分排名', nameEn: 'Rankings', icon: BarChart3, href: '/alpine/points/rankings', color: 'from-green-500 to-green-600' },
    { title: '赛事日历', nameEn: 'Calendar', icon: Calendar, href: '/alpine/events/schedule', color: 'from-purple-500 to-purple-600' },
    { title: '视频中心', nameEn: 'Videos', icon: Video, href: '#videos', color: 'from-red-500 to-red-600' },
    { title: '运动员名录', nameEn: 'Athletes', icon: Users, href: '/alpine/athletes/list', color: 'from-indigo-500 to-indigo-600' },
    { title: '规则文档', nameEn: 'Documents', icon: FileText, href: '/alpine/docs/points-rules', color: 'from-cyan-500 to-cyan-600' }
  ];

  // 即将进行的比赛
  const upcomingEvents = [
    {
      date: '12月20日',
      event: '全国锦标赛',
      discipline: '大回转',
      location: '万龙雪场',
      status: 'upcoming'
    },
    {
      date: '12月22日',
      event: '全国锦标赛',
      discipline: '回转',
      location: '万龙雪场',
      status: 'upcoming'
    },
    {
      date: '12月25日',
      event: '中国杯公开赛',
      discipline: '速降',
      location: '长白山雪场',
      status: 'upcoming'
    }
  ];

  // 最新新闻
  const latestNews = [
    {
      title: '中国高山滑雪队冬训备战',
      subtitle: '全力以赴迎接新赛季挑战',
      time: '2小时前',
      image: getImagePath('/images/ski-bg.jpg')
    },
    {
      title: '积分规则v4.0详解',
      subtitle: '了解最新的积分计算标准',
      time: '5小时前',
      image: getImagePath('/images/ski-bg.jpg')
    },
    {
      title: '雪场认证工作全面展开',
      subtitle: '确保比赛场地符合国际标准',
      time: '1天前',
      image: getImagePath('/images/ski-bg.jpg')
    }
  ];

  // 积分排行榜
  const topAthletes = [
    { rank: 1, name: '张伟', nation: '北京', points: 0.00, change: 0 },
    { rank: 2, name: '李雪', nation: '黑龙江', points: 8.45, change: 1 },
    { rank: 3, name: '王冰', nation: '吉林', points: 12.30, change: -1 },
    { rank: 4, name: '刘强', nation: '河北', points: 15.67, change: 2 },
    { rank: 5, name: '陈明', nation: '辽宁', points: 18.92, change: 0 }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 项目识别栏 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px]">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">🏔️ 高山滑雪</h1>
          <p className="text-blue-100 text-lg">Alpine Skiing - 中国高山滑雪积分管理系统</p>
        </div>
      </div>

      {/* 子项目导航栏 */}
      <div className="bg-white border-b border-gray-200 sticky top-[88px] z-30">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px]">
          <div className="flex overflow-x-auto scrollbar-hide py-3">
            {subDisciplines.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveSubDiscipline(sub.id)}
                className={`px-6 py-2 whitespace-nowrap text-sm font-medium transition-colors rounded-lg mr-2 ${
                  activeSubDiscipline === sub.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {sub.name}
                <span className="text-xs ml-1 opacity-75">{sub.nameEn}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

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

        <div className="relative h-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px] flex items-center">
          <div className="text-white max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {heroSlides[currentSlide].title}
            </h2>
            <p className="text-xl text-gray-200 mb-6">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex gap-4">
              <Link
                href={heroSlides[currentSlide].link}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                查看详情
              </Link>
            </div>
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
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
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

      {/* 功能快捷入口 */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px] py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickAccess.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{item.title}</div>
                <div className="text-xs text-gray-500">{item.nameEn}</div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 内容主体区 - 三栏布局 */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px] pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 左侧栏 - 赛事日程 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                即将进行
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                    <div className="text-sm font-semibold text-gray-900">{event.event}</div>
                    <div className="text-xs text-gray-600 mt-1">{event.discipline}</div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Clock className="w-3 h-3 mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {event.location}
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/alpine/events/schedule" className="block text-center mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
                查看完整赛程 →
              </Link>
            </div>
          </div>

          {/* 中间主栏 - 新闻流 */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">最新动态</h3>
              <div className="space-y-6">
                {latestNews.map((news, index) => (
                  <div key={index} className="flex gap-4 pb-6 border-b border-gray-100 last:border-0">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 mb-2">{news.time}</div>
                      <h4 className="font-semibold text-gray-900 mb-1 hover:text-blue-600 cursor-pointer">
                        {news.title}
                      </h4>
                      <p className="text-sm text-gray-600">{news.subtitle}</p>
                      <button className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center">
                        阅读全文 <ExternalLink className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧栏 - 积分排行榜 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Medal className="w-5 h-5 mr-2 text-yellow-500" />
                积分排行
              </h3>
              <div className="space-y-3">
                {topAthletes.map((athlete) => (
                  <div key={athlete.rank} className={`flex items-center p-3 rounded-lg ${
                    athlete.rank === 1 ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200' :
                    athlete.rank === 2 ? 'bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200' :
                    athlete.rank === 3 ? 'bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200' :
                    'bg-gray-50'
                  }`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 ${
                      athlete.rank === 1 ? 'bg-yellow-500' :
                      athlete.rank === 2 ? 'bg-gray-400' :
                      athlete.rank === 3 ? 'bg-orange-500' :
                      'bg-gray-300'
                    }`}>
                      {athlete.rank}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">{athlete.name}</div>
                      <div className="text-xs text-gray-600">{athlete.nation}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 text-sm">{athlete.points}</div>
                      {athlete.change !== 0 && (
                        <div className={`text-xs ${athlete.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {athlete.change > 0 ? '↑' : '↓'}{Math.abs(athlete.change)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/alpine/points/rankings" className="block text-center mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
                查看完整排名 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
