import Link from 'next/link';
import { Calculator, Trophy, Users, FileText, TrendingUp, Calendar } from 'lucide-react';

export const metadata = {
  title: '高山滑雪',
  description: '高山滑雪项目积分管理、赛事管理、运动员管理系统'
};

export default function AlpinePage() {
  const features = [
    {
      title: '积分计算器',
      description: '基于v4.0规则的精确积分计算',
      icon: Calculator,
      href: '/alpine/points/calculator',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: '积分排名',
      description: '实时更新的运动员积分排名',
      icon: TrendingUp,
      href: '/alpine/points/rankings',
      color: 'bg-green-50 text-green-600'
    },
    {
      title: '赛程日历',
      description: '查看即将举行的比赛安排',
      icon: Calendar,
      href: '/alpine/events/schedule',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: '在线报名',
      description: '便捷的赛事在线报名系统',
      icon: Trophy,
      href: '/alpine/events/register',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      title: '运动员名录',
      description: '查看所有注册运动员信息',
      icon: Users,
      href: '/alpine/athletes/list',
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: '规则文档',
      description: '查看积分规则和竞赛规则',
      icon: FileText,
      href: '/alpine/docs/points-rules',
      color: 'bg-cyan-50 text-cyan-600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-[calc(100vh-12rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🏔️ 高山滑雪积分系统
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            基于《中国高山滑雪赛事积分规则v4.0》的专业积分管理系统
          </p>
          <p className="text-sm text-gray-500 mt-2">
            支持速降、回转、大回转、超级大回转、全能等所有高山滑雪项目
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.href}
                href={feature.href}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-blue-200 group"
              >
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            系统数据概览
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,234</div>
              <div className="text-sm text-gray-600">注册运动员</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">156</div>
              <div className="text-sm text-gray-600">本赛季赛事</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3,456</div>
              <div className="text-sm text-gray-600">积分记录</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">89</div>
              <div className="text-sm text-gray-600">合作雪场</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
