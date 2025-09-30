import Link from 'next/link';
import { Mountain, Award, BarChart3, Target, RotateCcw } from 'lucide-react';

const getIconComponent = (iconType: string) => {
  const iconProps = { className: "w-12 h-12 text-white" };
  switch (iconType) {
    case 'alpine':
      return <Mountain {...iconProps} />;
    case 'snowboard':
      return <Mountain {...iconProps} />;
    case 'freeski':
      return <Mountain {...iconProps} />;
    default:
      return <Mountain {...iconProps} />;
  }
};

export default function DisciplinesOverview() {
  const disciplines = [
    {
      id: 'alpine',
      name: '高山滑雪',
      nameEn: 'Alpine Skiing',
      icon: 'alpine',
      color: 'from-blue-600 to-cyan-600',
      description: 'v4.0时间基础积分计算 | A/B/C三级赛事系数',
      features: ['速降', '回转', '大回转', '超级大回转', '全能'],
    },
    {
      id: 'snowboard-slopestyle',
      name: '单板坡面障碍技巧 & 大跳台',
      nameEn: 'Snowboard Slopestyle & Big Air',
      icon: 'snowboard',
      color: 'from-orange-600 to-yellow-600',
      description: '240/360/120分档积分 | 裁判评分转排名',
      features: ['坡面障碍技巧', '大跳台', 'U型场地'],
    },
    {
      id: 'snowboard-parallel',
      name: '单板滑雪平行项目',
      nameEn: 'Snowboard Parallel',
      icon: 'snowboard',
      color: 'from-purple-600 to-pink-600',
      description: '竞速时间积分 | 淘汰赛制',
      features: ['平行大回转(PGS)', '平行回转(PSL)'],
    },
    {
      id: 'freeski-slopestyle',
      name: '自由式滑雪坡面障碍技巧 & 大跳台',
      nameEn: 'Freeski Slopestyle & Big Air',
      icon: 'freeski',
      color: 'from-red-600 to-rose-600',
      description: '240/360/120分档积分 | 技巧难度系数',
      features: ['坡面障碍技巧', '大跳台', '空中技巧'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* 头部横幅 */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 返回首页导航 */}
          <div className="flex items-center justify-center mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-blue-200 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回首页
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
中国滑雪积分系统
          </h1>
          <p className="text-xl text-center text-blue-200">
            四大项目独立积分体系 | 专业赛事管理平台
          </p>
        </div>
      </div>

      {/* 项目积分体系说明 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-ski-navy mb-2">四大项目积分延续机制</h3>
            <p className="text-gray-600">科学合理的积分延续策略，确保四大项目竞技水平的连续性评估</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">×50%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">延续比例</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                赛季结束后，运动员在四大项目中的积分分别按照50%的比例延续到下一赛季
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold text-green-600">7.1-6.30</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">赛季周期</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                每年7月1日至次年6月30日为一个完整赛季，确保积分计算的时间统一性
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-purple-600">Best 2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">成绩计算</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                取赛季内各项目最好两次成绩平均值作为运动员的最终积分
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 项目卡片网格 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-3xl font-bold text-ski-navy text-center mb-8">选择你的项目</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {disciplines.map((discipline) => (
            <Link
              key={discipline.id}
              href={`/disciplines/${discipline.id}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500 transform hover:-translate-y-2">
                {/* 渐变头部 */}
                <div className={`bg-gradient-to-r ${discipline.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="mb-2">{getIconComponent(discipline.icon)}</div>
                      <h2 className="text-2xl font-bold mb-1">{discipline.name}</h2>
                      <p className="text-sm opacity-90">{discipline.nameEn}</p>
                    </div>
                    <div className="text-white/50 group-hover:text-white transition-colors">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 内容区域 */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">{discipline.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {discipline.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    进入项目系统
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 系统特点 */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            系统核心特点
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">独立积分体系</h4>
              <p className="text-sm text-gray-600">四个项目独立排名和统计</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">实时积分计算</h4>
              <p className="text-sm text-gray-600">比赛结束后自动更新积分</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">U系列管理</h4>
              <p className="text-sm text-gray-600">U12/U15/U18青少年分组</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <RotateCcw className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">积分延续机制</h4>
              <p className="text-sm text-gray-600">赛季结束后×50%基础积分</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}