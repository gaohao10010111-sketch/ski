import Link from 'next/link'
import { ChevronLeft, Trophy, Calculator, Users, Award } from 'lucide-react'

export default function SnowboardSlopestyleBigAirScoring() {
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
          全国单板滑雪坡面障碍技巧和大跳台积分体系
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          基于排名的240/360/120分档积分分配，裁判评分转排名体系，支持预赛/决赛轮次格式
        </p>
      </div>

      {/* 核心特性 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="h-8 w-8 text-yellow-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">240/360/120分档</h3>
          <p className="text-gray-600">根据赛事级别采用不同积分档次，最高360分</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">裁判评分转排名</h3>
          <p className="text-gray-600">专业裁判评分系统，自动转换为最终排名</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">多轮次管理</h3>
          <p className="text-gray-600">预赛两轮取最好成绩，决赛三轮综合评定</p>
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

      {/* 比赛格式 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">比赛格式</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-blue-600" />
              坡面障碍技巧
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span><strong>预赛</strong>：两轮，取最好成绩，前8名进决赛</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span><strong>决赛</strong>：三轮，取最好成绩</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span><strong>评分</strong>：裁判评分确定最终排名</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-orange-600" />
              大跳台
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span><strong>预赛</strong>：两轮，取最好成绩，前8名进决赛</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span><strong>决赛</strong>：三轮，取两轮不同动作最好成绩相加</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span><strong>评分</strong>：裁判评分确定最终排名</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 积分延续机制 */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">积分延续机制</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">延续规则</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                <div>
                  <strong>延续比例</strong>：赛季结束后积分×50%作为下赛季基础积分
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                <div>
                  <strong>赛季定义</strong>：7月1日至次年6月30日
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                <div>
                  <strong>最好成绩</strong>：取赛季内最好两次成绩平均值
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">计算示例</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm space-y-2">
                <div>运动员A本赛季最好成绩：</div>
                <div className="ml-4">• 第一次：288.0分</div>
                <div className="ml-4">• 第二次：216.0分</div>
                <div className="mt-2 font-semibold">赛季积分：(288.0 + 216.0) ÷ 2 = 252.0分</div>
                <div className="font-semibold text-blue-600">延续积分：252.0 × 50% = 126.0分</div>
              </div>
            </div>
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