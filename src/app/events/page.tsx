'use client'

import Link from 'next/link'
import { Calendar, MapPin, Users, Trophy, Clock, ArrowRight } from 'lucide-react'

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      name: '2024全国锦标赛',
      project: '高山滑雪大回转',
      venue: '天池雪场',
      date: '2024-12-20',
      participants: 120,
      status: '报名中'
    },
    {
      id: 2,
      name: '中国杯高山滑雪公开赛',
      project: '高山滑雪回转',
      venue: '万龙雪场',
      date: '2025-01-15',
      participants: 95,
      status: '即将开始'
    },
    {
      id: 3,
      name: '东北三省联赛',
      project: '高山滑雪全能',
      venue: '亚布力雪场',
      date: '2025-02-10',
      participants: 0,
      status: '待报名'
    }
  ]

  const quickLinks = [
    {
      title: '赛事日程',
      description: '查看完整的赛事安排',
      href: '/events/schedule',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: '在线报名',
      description: '报名参加即将举行的赛事',
      href: '/events/register',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: '比赛列表',
      description: '浏览所有比赛信息',
      href: '/events/list',
      icon: Trophy,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: '成绩查询',
      description: '查询比赛成绩和排名',
      href: '/events/results',
      icon: Trophy,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-ski-navy mb-2">赛事中心</h1>
          <p className="text-gray-600">查看赛事信息、在线报名、查询成绩</p>
        </div>

        {/* 快捷功能 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 ${link.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <link.icon className={`h-6 w-6 ${link.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
              <p className="text-sm text-gray-600">{link.description}</p>
            </Link>
          ))}
        </div>

        {/* 即将举行的赛事 */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-ski-navy">即将举行的赛事</h2>
            <Link href="/events/schedule" className="text-ski-blue hover:text-ski-blue/80 flex items-center">
              查看全部
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.name}</h3>
                    <div className="text-gray-600">{event.project}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.status === '报名中' ? 'bg-green-100 text-green-800' :
                    event.status === '即将开始' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {event.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{event.participants > 0 ? `${event.participants}人已报名` : '暂无报名'}</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Link
                    href={`/events/${event.id}`}
                    className="flex-1 text-center px-4 py-2 border border-ski-blue text-ski-blue rounded-lg hover:bg-ski-blue hover:text-white transition-colors"
                  >
                    查看详情
                  </Link>
                  {event.status === '报名中' && (
                    <Link
                      href="/events/register"
                      className="flex-1 text-center px-4 py-2 bg-ski-blue text-white rounded-lg hover:bg-ski-blue/90 transition-colors"
                    >
                      立即报名
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}