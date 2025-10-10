import Link from 'next/link';
import { Calculator, Trophy, Users, FileText, TrendingUp, Calendar } from 'lucide-react';

export const metadata = {
  title: '单板滑雪平行项目',
  description: '单板滑雪平行项目积分管理、赛事管理、运动员管理系统'
};

export default function SnowboardParallelPage() {
  const features = [
    {
      title: '积分计算器',
      description: '基于竞速时间的精确积分计算',
      icon: Calculator,
      href: '/snowboard-parallel/points/calculator',
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: '积分排名',
      description: '实时更新的运动员积分排名',
      icon: TrendingUp,
      href: '/snowboard-parallel/points/rankings',
      color: 'bg-green-50 text-green-600'
    },
    {
      title: '赛程日历',
      description: '查看即将举行的比赛安排',
      icon: Calendar,
      href: '/snowboard-parallel/events/schedule',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: '在线报名',
      description: '便捷的赛事在线报名系统',
      icon: Trophy,
      href: '/snowboard-parallel/events/register',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      title: '运动员名录',
      description: '查看所有注册运动员信息',
      icon: Users,
      href: '/snowboard-parallel/athletes/list',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: '规则文档',
      description: '查看积分规则和竞赛规则',
      icon: FileText,
      href: '/snowboard-parallel/docs/points-rules',
      color: 'bg-cyan-50 text-cyan-600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 min-h-[calc(100vh-12rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🏂 单板滑雪平行项目积分系统
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            基于国际标准的单板平行项目积分管理系统
          </p>
          <p className="text-sm text-gray-500 mt-2">
            支持平行大回转(PGS)、平行回转(PSL)等竞速项目的积分计算与管理
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
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-indigo-200 group"
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
              <div className="text-3xl font-bold text-indigo-600 mb-2">672</div>
              <div className="text-sm text-gray-600">注册运动员</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">76</div>
              <div className="text-sm text-gray-600">本赛季赛事</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,892</div>
              <div className="text-sm text-gray-600">积分记录</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">54</div>
              <div className="text-sm text-gray-600">合作雪场</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
