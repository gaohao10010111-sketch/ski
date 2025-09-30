import Link from 'next/link';
import { BarChart3, Calculator, Trophy, User, FileText, BookOpen } from 'lucide-react';

const getIcon = (iconType: string) => {
  const iconProps = { className: "h-8 w-8 text-white" };
  switch (iconType) {
    case 'chart': return <BarChart3 {...iconProps} />;
    case 'calculator': return <Calculator {...iconProps} />;
    case 'trophy': return <Trophy {...iconProps} />;
    case 'user': return <User {...iconProps} />;
    case 'file': return <FileText {...iconProps} />;
    case 'book': return <BookOpen {...iconProps} />;
    default: return <BarChart3 {...iconProps} />;
  }
};

export default function AlpineSkiingHome() {
  const quickLinks = [
    {
      title: '积分排行榜',
      description: '查看当前赛季积分排名',
      icon: 'chart',
      href: '/disciplines/alpine/points',
      color: 'bg-indigo-500',
    },
    {
      title: '积分计算器',
      description: 'v4.0公式实时计算积分',
      icon: 'calculator',
      href: '/disciplines/alpine/calculator',
      color: 'bg-blue-500',
    },
    {
      title: '赛事管理',
      description: '查看赛程和比赛结果',
      icon: 'trophy',
      href: '/disciplines/alpine/competitions',
      color: 'bg-emerald-500',
    },
    {
      title: '运动员档案',
      description: '运动员信息和成绩查询',
      icon: 'user',
      href: '/disciplines/alpine/athletes',
      color: 'bg-cyan-500',
    },
    {
      title: '在线报名',
      description: '参加高山滑雪赛事',
      icon: 'file',
      href: '/disciplines/alpine/registration',
      color: 'bg-sky-500',
    },
    {
      title: '规则文档',
      description: '高山滑雪竞赛规则',
      icon: 'book',
      href: '/disciplines/alpine/rules',
      color: 'bg-violet-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-sky-50">

      {/* 英雄区域 */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm">
              <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              高山滑雪积分系统
            </h1>
            <p className="text-xl text-gray-200 mb-8">Alpine Skiing Points System</p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 mb-12">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                v4.0时间基础公式
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                A/B/C三级赛事
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                判罚分动态计算
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-indigo-50"/>
          </svg>
        </div>
      </div>

      {/* 快速入口卡片 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          快速功能入口
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-indigo-500 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className={`${link.color} w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {getIcon(link.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                <div className="flex items-center text-indigo-600 font-medium">
                  进入功能
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 积分规则说明 */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            高山滑雪积分规则 (v4.0)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-2 text-indigo-600">1</span>
                基础比赛积分公式
              </h4>
              <div className="bg-indigo-50 p-4 rounded-lg font-mono text-sm">
                P = F × (Tx/To - 1)
              </div>
              <p className="text-gray-600 text-sm mt-2">
                P=基础积分 | F=项目系数 | Tx=选手时间 | To=冠军时间
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <span className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mr-2 text-cyan-600">2</span>
                最终积分计算
              </h4>
              <div className="bg-cyan-50 p-4 rounded-lg font-mono text-sm">
                最终积分 = (P + 判罚分) × 赛事系数
              </div>
              <p className="text-gray-600 text-sm mt-2">
                A级(1.0) | B级(0.6) | C级(0.3)
              </p>
            </div>
          </div>

          <div className="mt-6 border-t pt-6">
            <h4 className="font-bold text-gray-900 mb-3">项目系数表</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600">1250</div>
                <div className="text-sm text-gray-600">速降 DH</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-sky-600">730</div>
                <div className="text-sm text-gray-600">回转 SL</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">1010</div>
                <div className="text-sm text-gray-600">大回转 GS</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">1190</div>
                <div className="text-sm text-gray-600">超大回转 SG</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-pink-600">1360</div>
                <div className="text-sm text-gray-600">全能 AC</div>
              </div>
            </div>
          </div>
        </div>

        {/* 当前赛季数据统计 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">248</div>
            <div className="text-indigo-100 text-sm">注册运动员</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">36</div>
            <div className="text-cyan-100 text-sm">本赛季赛事</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">1,245</div>
            <div className="text-cyan-100 text-sm">比赛场次</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">89.5</div>
            <div className="text-purple-100 text-sm">平均积分</div>
          </div>
        </div>
      </div>
    </div>
  );
}