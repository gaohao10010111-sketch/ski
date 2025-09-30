import Link from 'next/link';

export default function SnowboardSlopestyleHome() {
  const quickLinks = [
    {
      title: '积分排行榜',
      description: '查看分档积分排名',
      icon: '📊',
      href: '/disciplines/snowboard-slopestyle/points',
      color: 'bg-orange-500',
    },
    {
      title: '分档积分计算器',
      description: '240/360/120分档计算',
      icon: '🧮',
      href: '/disciplines/snowboard-slopestyle/calculator',
      color: 'bg-yellow-500',
    },
    {
      title: '赛事管理',
      description: '查看赛程和比赛结果',
      icon: '🏆',
      href: '/disciplines/snowboard-slopestyle/competitions',
      color: 'bg-amber-500',
    },
    {
      title: '运动员档案',
      description: '运动员信息和动作库',
      icon: '👤',
      href: '/disciplines/snowboard-slopestyle/athletes',
      color: 'bg-red-500',
    },
    {
      title: '在线报名',
      description: '参加单板坡面/大跳台赛事',
      icon: '📝',
      href: '/disciplines/snowboard-slopestyle/registration',
      color: 'bg-orange-600',
    },
    {
      title: '规则文档',
      description: '坡面障碍技巧竞赛规则',
      icon: '📖',
      href: '/disciplines/snowboard-slopestyle/rules',
      color: 'bg-slate-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* 顶部面包屑和项目导航 */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          {/* 面包屑导航 */}
          <nav className="flex items-center text-sm text-gray-600 mb-3">
            <Link href="/" className="hover:text-orange-600">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/disciplines" className="hover:text-orange-600">项目总览</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">单板坡面障碍技巧 & 大跳台</span>
          </nav>
          
          {/* 四大项目横向导航 */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Link
              href="/disciplines/alpine"
              className="flex items-center space-x-1 px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-300 flex-shrink-0"
            >
              <span className="text-lg">⛷️</span>
              <span>高山滑雪</span>
            </Link>
            <div className="flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-orange-400 to-amber-400 text-white rounded-lg font-medium flex-shrink-0 shadow-lg">
              <span className="text-lg">🏂</span>
              <span>单板坡面/大跳台</span>
            </div>
            <Link
              href="/disciplines/snowboard-parallel"
              className="flex items-center space-x-1 px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 flex-shrink-0"
            >
              <span className="text-lg">🏂</span>
              <span>单板平行</span>
            </Link>
            <Link
              href="/disciplines/freeski-slopestyle"
              className="flex items-center space-x-1 px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-rose-500 hover:text-white transition-all duration-300 flex-shrink-0"
            >
              <span className="text-lg">🎿</span>
              <span>自由式坡面/大跳台</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 英雄区域 */}
      <div className="relative bg-gradient-to-r from-orange-700 via-amber-600 to-yellow-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="text-7xl mb-4 animate-bounce">🏂</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              单板坡面障碍技巧 & 大跳台
            </h1>
            <p className="text-2xl text-orange-200 mb-2">Snowboard Slopestyle & Big Air</p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                360分档顶级赛事
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                裁判评分制
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                预赛/决赛轮次
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-orange-50"/>
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
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-orange-500 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className={`${link.color} w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {link.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                <div className="flex items-center text-orange-600 font-medium">
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
            🎯 分档积分体系
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-6 text-white">
              <div className="text-5xl font-bold mb-2">360</div>
              <div className="text-xl font-bold mb-2">一类赛事</div>
              <p className="text-yellow-100 text-sm">全国锦标赛等顶级赛事</p>
            </div>
            <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl p-6 text-white">
              <div className="text-5xl font-bold mb-2">240</div>
              <div className="text-xl font-bold mb-2">二类赛事</div>
              <p className="text-orange-100 text-sm">区域性重要赛事</p>
            </div>
            <div className="bg-gradient-to-br from-amber-400 to-yellow-400 rounded-xl p-6 text-white">
              <div className="text-5xl font-bold mb-2">120</div>
              <div className="text-xl font-bold mb-2">三类赛事</div>
              <p className="text-amber-100 text-sm">地方性常规赛事</p>
            </div>
          </div>

          <div className="mt-6 border-t pt-6">
            <h4 className="font-bold text-gray-900 mb-3">积分分配规则（前10名）</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left">名次</th>
                    <th className="px-4 py-2 text-center">百分比</th>
                    <th className="px-4 py-2 text-right">一类(360)</th>
                    <th className="px-4 py-2 text-right">二类(240)</th>
                    <th className="px-4 py-2 text-right">三类(120)</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-2 font-bold">🥇 1</td>
                    <td className="px-4 py-2 text-center">100%</td>
                    <td className="px-4 py-2 text-right font-bold text-yellow-600">360.00</td>
                    <td className="px-4 py-2 text-right font-bold text-orange-600">240.00</td>
                    <td className="px-4 py-2 text-right font-bold text-amber-600">120.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-bold">🥈 2</td>
                    <td className="px-4 py-2 text-center">80%</td>
                    <td className="px-4 py-2 text-right">288.00</td>
                    <td className="px-4 py-2 text-right">192.00</td>
                    <td className="px-4 py-2 text-right">96.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-bold">🥉 3</td>
                    <td className="px-4 py-2 text-center">60%</td>
                    <td className="px-4 py-2 text-right">216.00</td>
                    <td className="px-4 py-2 text-right">144.00</td>
                    <td className="px-4 py-2 text-right">72.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">4</td>
                    <td className="px-4 py-2 text-center">50%</td>
                    <td className="px-4 py-2 text-right">180.00</td>
                    <td className="px-4 py-2 text-right">120.00</td>
                    <td className="px-4 py-2 text-right">60.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">5</td>
                    <td className="px-4 py-2 text-center">45%</td>
                    <td className="px-4 py-2 text-right">162.00</td>
                    <td className="px-4 py-2 text-right">108.00</td>
                    <td className="px-4 py-2 text-right">54.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 比赛格式 */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            🏆 比赛格式
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-orange-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-orange-600 mb-4">大跳台 Big Air</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  预赛：两轮，取最好成绩
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  决赛：三轮，取两轮不同动作最好成绩相加
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  前8名进入决赛
                </li>
              </ul>
            </div>
            <div className="border-2 border-amber-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-amber-600 mb-4">坡面障碍技巧 Slopestyle</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  预赛：两轮，取最好成绩
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  决赛：三轮，取最好成绩
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  裁判评分确定最终排名
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 当前赛季数据统计 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">156</div>
            <div className="text-orange-100 text-sm">注册运动员</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">18</div>
            <div className="text-amber-100 text-sm">本赛季赛事</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">542</div>
            <div className="text-yellow-100 text-sm">比赛场次</div>
          </div>
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">215.8</div>
            <div className="text-red-100 text-sm">平均积分</div>
          </div>
        </div>
      </div>
    </div>
  );
}