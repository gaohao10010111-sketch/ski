import Link from 'next/link'
import { ChevronLeft, TrendingUp, Calculator, Timer, Users } from 'lucide-react'

export default function SnowboardParallelScoring() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* 返回导航 */}
      <div className="mb-6">
        <Link href="/scoring-systems" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" />
          返回积分体系
        </Link>
      </div>

      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-ski-navy mb-4">
          单板滑雪平行项目积分体系
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          竞速时间积分计算，淘汰赛制积分分配，支持平行大回转(PGS)和平行回转(PSL)
        </p>
      </div>

      {/* 核心特性 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Timer className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">竞速时间积分</h3>
          <p className="text-gray-600">基于比赛时间的积分计算体系</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">淘汰赛制</h3>
          <p className="text-gray-600">一对一对决，胜者晋级下一轮</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">排名积分分配</h3>
          <p className="text-gray-600">基于最终排名的积分分配体系</p>
        </div>
      </div>

      {/* 项目介绍 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">平行大回转 (PGS)</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>门设置较宽，速度相对较快</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>技术要求偏向滑行技术</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span>比赛距离较长</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-orange-600">平行回转 (PSL)</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>门设置较密，技术要求较高</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>转弯频率更快</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span>比赛距离相对较短</span>
            </div>
          </div>
        </div>
      </div>

      {/* 积分分配表 */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">积分分配表</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 一类赛事 */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">一类赛事 (360分档)</h3>
            <div className="space-y-2">
              <div className="flex justify-between bg-yellow-50 px-3 py-2 rounded">
                <span>第1名</span>
                <span className="font-semibold">360.0分</span>
              </div>
              <div className="flex justify-between px-3 py-2">
                <span>第2名</span>
                <span>288.0分</span>
              </div>
              <div className="flex justify-between bg-gray-50 px-3 py-2 rounded">
                <span>第3名</span>
                <span>216.0分</span>
              </div>
              <div className="flex justify-between px-3 py-2">
                <span>第4名</span>
                <span>180.0分</span>
              </div>
              <div className="flex justify-between bg-gray-50 px-3 py-2 rounded">
                <span>第5名</span>
                <span>162.0分</span>
              </div>
            </div>
          </div>

          {/* 二类赛事 */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">二类赛事 (240分档)</h3>
            <div className="space-y-2">
              <div className="flex justify-between bg-orange-50 px-3 py-2 rounded">
                <span>第1名</span>
                <span className="font-semibold">240.0分</span>
              </div>
              <div className="flex justify-between px-3 py-2">
                <span>第2名</span>
                <span>192.0分</span>
              </div>
              <div className="flex justify-between bg-gray-50 px-3 py-2 rounded">
                <span>第3名</span>
                <span>144.0分</span>
              </div>
              <div className="flex justify-between px-3 py-2">
                <span>第4名</span>
                <span>120.0分</span>
              </div>
              <div className="flex justify-between bg-gray-50 px-3 py-2 rounded">
                <span>第5名</span>
                <span>108.0分</span>
              </div>
            </div>
          </div>

          {/* 三类赛事 */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-red-600">三类赛事 (120分档)</h3>
            <div className="space-y-2">
              <div className="flex justify-between bg-red-50 px-3 py-2 rounded">
                <span>第1名</span>
                <span className="font-semibold">120.0分</span>
              </div>
              <div className="flex justify-between px-3 py-2">
                <span>第2名</span>
                <span>96.0分</span>
              </div>
              <div className="flex justify-between bg-gray-50 px-3 py-2 rounded">
                <span>第3名</span>
                <span>72.0分</span>
              </div>
              <div className="flex justify-between px-3 py-2">
                <span>第4名</span>
                <span>60.0分</span>
              </div>
              <div className="flex justify-between bg-gray-50 px-3 py-2 rounded">
                <span>第5名</span>
                <span>54.0分</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 淘汰赛制度 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">淘汰赛制度</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center bg-white rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">预赛排名</div>
            <div className="font-semibold text-blue-600">资格赛</div>
            <div className="text-xs text-gray-500 mt-1">按时间排名</div>
          </div>

          <div className="text-center bg-white rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">16强淘汰赛</div>
            <div className="font-semibold text-green-600">1 vs 16</div>
            <div className="text-xs text-gray-500 mt-1">一对一对决</div>
          </div>

          <div className="text-center bg-white rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">8强淘汰赛</div>
            <div className="font-semibold text-orange-600">胜者晋级</div>
            <div className="text-xs text-gray-500 mt-1">决出8强</div>
          </div>

          <div className="text-center bg-white rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">决赛</div>
            <div className="font-semibold text-purple-600">冠军产生</div>
            <div className="text-xs text-gray-500 mt-1">最终排名</div>
          </div>
        </div>

        <div className="mt-6 bg-white/60 rounded-lg p-4">
          <h3 className="font-semibold mb-3">淘汰赛积分规则</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>预赛淘汰</strong>：获得基础积分的10%
            </div>
            <div>
              <strong>16强淘汰</strong>：获得基础积分的20%
            </div>
            <div>
              <strong>8强淘汰</strong>：获得基础积分的30%
            </div>
            <div>
              <strong>决赛阶段</strong>：按最终排名获得全额积分
            </div>
          </div>
        </div>
      </div>

      {/* 时间差积分调整 */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">时间差积分调整</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-bold text-green-600">&lt;3%</span>
            </div>
            <h3 className="font-semibold mb-2">势均力敌</h3>
            <p className="text-sm text-gray-600">时间差小于3%，积分不调整</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-bold text-yellow-600">3-5%</span>
            </div>
            <h3 className="font-semibold mb-2">小幅差距</h3>
            <p className="text-sm text-gray-600">时间差3-5%，积分打95折</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-bold text-red-600">&gt;5%</span>
            </div>
            <h3 className="font-semibold mb-2">明显差距</h3>
            <p className="text-sm text-gray-600">时间差超过5%，积分打9折</p>
          </div>
        </div>
      </div>

      {/* 相关链接 */}
      <div className="text-center">
        <p className="text-gray-500 text-sm mb-4">了解更多积分体系信息</p>
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