import Link from 'next/link'
import { ChevronRight, Calculator, Trophy, Users, TrendingUp } from 'lucide-react'

export default function ScoringSystems() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-ski-navy mb-4">
          四大独立积分体系
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          基于《2025-2026赛季全国BA、SS青少年U系列比赛方案》，构建四大项目独立积分管理体系
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Link href="/scoring-systems/snowboard-slopestyle-bigair" className="group block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <Trophy className="h-6 w-6 text-blue-600 group-hover:text-white" />
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
          </div>
          <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">全国单板滑雪坡面障碍技巧和大跳台</h2>
          <p className="text-gray-600 mb-4">240/360/120分档积分分配，裁判评分转排名体系</p>
          <div className="text-sm space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              <span>一类赛事: 360分档(第一名360分)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              <span>二类赛事: 240分档(第一名240分)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              <span>三类赛事: 120分档(第一名120分)</span>
            </div>
          </div>
        </Link>

        <Link href="/scoring-systems/snowboard-parallel" className="group block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
              <TrendingUp className="h-6 w-6 text-green-600 group-hover:text-white" />
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors" />
          </div>
          <h2 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors">单板滑雪平行项目</h2>
          <p className="text-gray-600 mb-4">竞速时间积分计算，淘汰赛制积分分配</p>
          <div className="text-sm space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>淘汰赛制: 一对一对决</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>项目支持: PGS/PSL</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span>基于最终排名的积分分配体系</span>
            </div>
          </div>
        </Link>

        <Link href="/scoring-systems/freestyle-slopestyle-bigair" className="group block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-500 transition-colors">
              <Calculator className="h-6 w-6 text-purple-600 group-hover:text-white" />
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
          </div>
          <h2 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">自由式滑雪坡面障碍技巧和大跳台</h2>
          <p className="text-gray-600 mb-4">技巧难度系数评分机制，多轮次最佳成绩计算</p>
          <div className="text-sm space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              <span>一类赛事: 360分档(第一名360分)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              <span>二类赛事: 240分档(第一名240分)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              <span>动作难度系数自动计算</span>
            </div>
          </div>
        </Link>

        <Link href="/scoring-systems/alpine" className="group block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
              <Users className="h-6 w-6 text-orange-600 group-hover:text-white" />
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
          </div>
          <h2 className="text-xl font-semibold mb-3 group-hover:text-orange-600 transition-colors">高山滑雪</h2>
          <p className="text-gray-600 mb-4">基于时间的v4.0积分计算体系，支持A/B/C级赛事系数</p>
          <div className="text-sm space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>计算公式: 最终积分 = (基础积分 + 判罚分) × 赛事系数</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>项目覆盖: DH/SL/GS/SG/AC</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span>系数体系: A级(1.0) B级(0.6) C级(0.3)</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
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
              取运动员在赛季内四大项目中每个项目最好的两次成绩平均值作为最终积分排名依据
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white/60 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            四大项目积分延续流程示例
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs mb-2">Step 1</div>
              <p className="font-medium">赛季期内</p>
              <p className="text-gray-600">四项目各积累最好2次成绩</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs mb-2">Step 2</div>
              <p className="font-medium">赛季结束</p>
              <p className="text-gray-600">分别计算各项目平均积分</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs mb-2">Step 3</div>
              <p className="font-medium">积分延续</p>
              <p className="text-gray-600">各项目×50%进入新赛季</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs mb-2">Step 4</div>
              <p className="font-medium">新赛季开始</p>
              <p className="text-gray-600">四项目基础积分+新成绩</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm mb-4">需要了解详细的积分计算规则？</p>
        <div className="space-x-4">
          <Link href="/points/calculator" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Calculator className="h-4 w-4 mr-2" />
            积分计算器
          </Link>
          <Link href="/rules/points" className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            积分规则详解
          </Link>
        </div>
      </div>
    </div>
  )
}