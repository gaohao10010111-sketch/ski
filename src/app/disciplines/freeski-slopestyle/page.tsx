import Link from 'next/link';
import { BarChart3, Calculator, Trophy, User, FileText, BookOpen, Mountain } from 'lucide-react';

const getIcon = (iconType: string) => {
  const iconProps = { className: "h-8 w-8" };
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

export default function FreeskiSlopestyleHome() {
  const quickLinks = [
    {
      title: '积分排行榜',
      description: '查看分档积分排名',
      icon: 'chart',
      href: '/disciplines/freeski-slopestyle/points',
      color: 'bg-red-500',
    },
    {
      title: '分档积分计算器',
      description: '240/360/120分档计算',
      icon: 'calculator',
      href: '/disciplines/freeski-slopestyle/calculator',
      color: 'bg-red-600',
    },
    {
      title: '赛事管理',
      description: '查看赛程和比赛结果',
      icon: 'trophy',
      href: '/disciplines/freeski-slopestyle/competitions',
      color: 'bg-slate-500',
    },
    {
      title: '运动员档案',
      description: '运动员信息和技巧库',
      icon: 'user',
      href: '/disciplines/freeski-slopestyle/athletes',
      color: 'bg-slate-600',
    },
    {
      title: '在线报名',
      description: '参加自由式坡面/大跳台赛事',
      icon: 'file',
      href: '/disciplines/freeski-slopestyle/registration',
      color: 'bg-red-700',
    },
    {
      title: '规则文档',
      description: '自由式滑雪竞赛规则',
      icon: 'book',
      href: '/disciplines/freeski-slopestyle/rules',
      color: 'bg-slate-700',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50">

      {/* 英雄区域 */}
      <div className="relative bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm">
              <Mountain className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              自由式坡面/大跳台
            </h1>
            <p className="text-xl text-gray-200 mb-8">Freeski Slopestyle & Big Air</p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6 mb-8">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                360分档顶级赛事
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                技巧难度系数
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                多轮次最佳成绩
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-red-50"/>
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
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-red-500 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className={`${link.color} w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {getIcon(link.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                <div className="flex items-center text-red-600 font-medium">
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
             分档积分体系
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-400 to-rose-500 rounded-xl p-6 text-white">
              <div className="text-5xl font-bold mb-2">360</div>
              <div className="text-xl font-bold mb-2">一类赛事</div>
              <p className="text-red-100 text-sm">全国锦标赛等顶级赛事</p>
            </div>
            <div className="bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl p-6 text-white">
              <div className="text-5xl font-bold mb-2">240</div>
              <div className="text-xl font-bold mb-2">二类赛事</div>
              <p className="text-rose-100 text-sm">区域性重要赛事</p>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-fuchsia-400 rounded-xl p-6 text-white">
              <div className="text-5xl font-bold mb-2">120</div>
              <div className="text-xl font-bold mb-2">三类赛事</div>
              <p className="text-pink-100 text-sm">地方性常规赛事</p>
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
                    <td className="px-4 py-2 font-bold"> 1</td>
                    <td className="px-4 py-2 text-center">100%</td>
                    <td className="px-4 py-2 text-right font-bold text-red-600">360.00</td>
                    <td className="px-4 py-2 text-right font-bold text-rose-600">240.00</td>
                    <td className="px-4 py-2 text-right font-bold text-pink-600">120.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-bold"> 2</td>
                    <td className="px-4 py-2 text-center">80%</td>
                    <td className="px-4 py-2 text-right">288.00</td>
                    <td className="px-4 py-2 text-right">192.00</td>
                    <td className="px-4 py-2 text-right">96.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-bold"> 3</td>
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

        {/* 比赛格式和技巧难度 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
               比赛格式
            </h3>
            <div className="space-y-4">
              <div className="border-2 border-red-200 rounded-xl p-4">
                <h4 className="text-lg font-bold text-red-600 mb-2">大跳台 Big Air</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    预赛：两轮，取最好成绩
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    决赛：三轮，取最好成绩
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    前8名进入决赛
                  </li>
                </ul>
              </div>
              <div className="border-2 border-rose-200 rounded-xl p-4">
                <h4 className="text-lg font-bold text-rose-600 mb-2">坡面障碍技巧 Slopestyle</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    预赛：两轮，取最好成绩
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    决赛：三轮，取最好成绩
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    技巧难度系数计算
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              💫 技巧难度系数
            </h3>
            <div className="space-y-3">
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-red-700">旋转度数</span>
                  <span className="text-sm text-gray-600">基础难度</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center text-sm">
                  <div className="bg-white p-2 rounded">360°<br/><span className="text-red-600 font-bold">1.0</span></div>
                  <div className="bg-white p-2 rounded">540°<br/><span className="text-red-600 font-bold">1.2</span></div>
                  <div className="bg-white p-2 rounded">720°<br/><span className="text-red-600 font-bold">1.4</span></div>
                  <div className="bg-white p-2 rounded">900°+<br/><span className="text-red-600 font-bold">1.6</span></div>
                </div>
              </div>

              <div className="bg-rose-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-rose-700">翻转动作</span>
                  <span className="text-sm text-gray-600">加成系数</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between bg-white p-2 rounded">
                    <span>单翻</span>
                    <span className="font-bold text-rose-600">+0.2</span>
                  </div>
                  <div className="flex justify-between bg-white p-2 rounded">
                    <span>双翻</span>
                    <span className="font-bold text-rose-600">+0.4</span>
                  </div>
                  <div className="flex justify-between bg-white p-2 rounded">
                    <span>三翻</span>
                    <span className="font-bold text-rose-600">+0.6</span>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-pink-700">抓板动作</span>
                  <span className="text-sm text-gray-600">精细度</span>
                </div>
                <div className="flex justify-between items-center text-sm bg-white p-2 rounded">
                  <span>抓板类型和时长</span>
                  <span className="font-bold text-pink-600">+0.1~0.3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 当前赛季数据统计 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">189</div>
            <div className="text-red-100 text-sm">注册运动员</div>
          </div>
          <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">22</div>
            <div className="text-rose-100 text-sm">本赛季赛事</div>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">658</div>
            <div className="text-pink-100 text-sm">比赛场次</div>
          </div>
          <div className="bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">228.4</div>
            <div className="text-fuchsia-100 text-sm">平均积分</div>
          </div>
        </div>
      </div>
    </div>
  );
}