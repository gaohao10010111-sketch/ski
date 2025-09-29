import Link from 'next/link';

export default function SnowboardParallelHome() {
  const quickLinks = [
    {
      title: '积分排行榜',
      description: '查看竞速积分排名',
      icon: '📊',
      href: '/disciplines/snowboard-parallel/points',
      color: 'bg-purple-500',
    },
    {
      title: '积分计算器',
      description: '淘汰赛制积分计算',
      icon: '🧮',
      href: '/disciplines/snowboard-parallel/calculator',
      color: 'bg-pink-500',
    },
    {
      title: '赛事管理',
      description: '查看对决赛程和结果',
      icon: '🏆',
      href: '/disciplines/snowboard-parallel/competitions',
      color: 'bg-fuchsia-500',
    },
    {
      title: '运动员档案',
      description: '运动员信息和对战记录',
      icon: '👤',
      href: '/disciplines/snowboard-parallel/athletes',
      color: 'bg-violet-500',
    },
    {
      title: '在线报名',
      description: '参加平行项目赛事',
      icon: '📝',
      href: '/disciplines/snowboard-parallel/registration',
      color: 'bg-purple-600',
    },
    {
      title: '规则文档',
      description: '平行项目竞赛规则',
      icon: '📖',
      href: '/disciplines/snowboard-parallel/rules',
      color: 'bg-slate-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* 顶部面包屑 */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-purple-600">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/disciplines" className="hover:text-purple-600">项目</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">单板滑雪平行项目</span>
          </nav>
        </div>
      </div>

      {/* 英雄区域 */}
      <div className="relative bg-gradient-to-r from-purple-800 via-fuchsia-700 to-pink-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="text-7xl mb-4 animate-bounce">🏂</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              单板滑雪平行项目
            </h1>
            <p className="text-2xl text-purple-200 mb-2">Snowboard Parallel Events</p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                竞速时间积分
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                淘汰赛制
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                一对一对决
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-purple-50"/>
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
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-purple-500 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className={`${link.color} w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {link.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                <div className="flex items-center text-purple-600 font-medium">
                  进入功能
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 项目介绍 */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            ⚡ 平行项目特点
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2 text-purple-600">🏁</span>
                赛制特点
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  两名选手同时出发，一对一对决
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  淘汰赛制，负者直接出局
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  资格赛 → 16强 → 8强 → 4强 → 决赛
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  每轮两次滑行，取总时间优者晋级
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <span className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-2 text-pink-600">🎯</span>
                项目分类
              </h4>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-bold text-purple-700 mb-1">平行大回转 (PGS)</div>
                  <p className="text-sm text-gray-600">Parallel Giant Slalom - 旗门间距更大，速度更快</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <div className="font-bold text-pink-700 mb-1">平行回转 (PSL)</div>
                  <p className="text-sm text-gray-600">Parallel Slalom - 旗门密集，技术要求高</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 对决树示例 */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            🏆 淘汰赛对决树
          </h3>
          <div className="overflow-x-auto">
            <div className="flex items-center justify-between gap-4 min-w-[800px]">
              {/* 16强 */}
              <div className="flex-1 space-y-2">
                <div className="text-xs text-gray-500 font-bold mb-2">16强</div>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="bg-purple-50 p-2 rounded text-xs border border-purple-200">
                    选手{i} vs 选手{i + 8}
                  </div>
                ))}
              </div>

              {/* 8强 */}
              <div className="flex-1 space-y-4">
                <div className="text-xs text-gray-500 font-bold mb-2">8强</div>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-fuchsia-50 p-2 rounded text-xs border border-fuchsia-200">
                    晋级选手{i}
                  </div>
                ))}
              </div>

              {/* 4强 */}
              <div className="flex-1 space-y-8">
                <div className="text-xs text-gray-500 font-bold mb-2">半决赛</div>
                {[1, 2].map((i) => (
                  <div key={i} className="bg-pink-50 p-2 rounded text-xs border border-pink-200">
                    半决赛{i}
                  </div>
                ))}
              </div>

              {/* 决赛 */}
              <div className="flex-1">
                <div className="text-xs text-gray-500 font-bold mb-2">决赛</div>
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 rounded-lg text-xs border-2 border-yellow-400">
                  <div className="font-bold text-yellow-700 mb-1">🥇 冠军争夺</div>
                  <div className="text-gray-600">金牌战</div>
                </div>
                <div className="bg-gray-50 p-2 rounded text-xs border border-gray-200 mt-4">
                  <div className="font-bold text-gray-600">🥉 季军争夺</div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            * 每个对决包含两次滑行，取总时间优者晋级下一轮
          </p>
        </div>

        {/* 积分分配规则 */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            📊 积分分配规则
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl p-4 text-white text-center">
              <div className="text-3xl mb-1">🥇</div>
              <div className="text-2xl font-bold">100</div>
              <div className="text-sm text-yellow-100">冠军</div>
            </div>
            <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl p-4 text-white text-center">
              <div className="text-3xl mb-1">🥈</div>
              <div className="text-2xl font-bold">80</div>
              <div className="text-sm text-gray-100">亚军</div>
            </div>
            <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl p-4 text-white text-center">
              <div className="text-3xl mb-1">🥉</div>
              <div className="text-2xl font-bold">60</div>
              <div className="text-sm text-orange-100">季军</div>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl p-4 text-white text-center">
              <div className="text-3xl mb-1">4</div>
              <div className="text-2xl font-bold">50</div>
              <div className="text-sm text-purple-100">第四名</div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            其他排名按淘汰轮次递减：8强45分、16强40分、32强36分
          </p>
        </div>

        {/* 当前赛季数据统计 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">98</div>
            <div className="text-purple-100 text-sm">注册运动员</div>
          </div>
          <div className="bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">12</div>
            <div className="text-fuchsia-100 text-sm">本赛季赛事</div>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">384</div>
            <div className="text-pink-100 text-sm">对决场次</div>
          </div>
          <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl p-6 text-white">
            <div className="text-4xl font-bold mb-1">67.3</div>
            <div className="text-rose-100 text-sm">平均积分</div>
          </div>
        </div>
      </div>
    </div>
  );
}