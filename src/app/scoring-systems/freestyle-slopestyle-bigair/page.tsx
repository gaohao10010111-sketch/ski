import Link from 'next/link'
import { ChevronLeft, Calculator, Trophy, Zap, Award } from 'lucide-react'

export default function FreestyleSlopestyleBigAirScoring() {
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
          自由式滑雪坡面障碍技巧和大跳台积分体系
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          技巧难度系数评分机制，多轮次最佳成绩计算，动作难度系数自动计算
        </p>
      </div>

      {/* 核心特性 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">技巧难度系数</h3>
          <p className="text-gray-600">动作难度自动计算，最高1.5倍系数</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">多轮次最佳</h3>
          <p className="text-gray-600">预赛两轮取最好，决赛三轮综合评定</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">动作评分算法</h3>
          <p className="text-gray-600">精确到0.1分的专业评分系统</p>
        </div>
      </div>

      {/* 难度系数说明 */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">技巧难度系数计算</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">计算公式</h3>
            <div className="space-y-3">
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-center text-lg font-mono">
                  难度系数 = (平均难度 / 10) × (平均完成度 / 10)
                </div>
              </div>
              <div className="text-sm space-y-2">
                <div><strong>平均难度</strong>：所有动作难度值的平均分</div>
                <div><strong>平均完成度</strong>：所有动作完成质量的平均分</div>
                <div><strong>系数范围</strong>：0.8 - 1.5倍</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">计算示例</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-blue-50 rounded-lg p-3">
                <div><strong>动作1</strong>：360度旋转 + Indy抓板</div>
                <div>• 难度：6分，完成度：8分</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <div><strong>动作2</strong>：540度旋转 + Method抓板</div>
                <div>• 难度：8分，完成度：7分</div>
              </div>
              <div className="mt-4 font-semibold">
                <div>平均难度：(6+8)/2 = 7分</div>
                <div>平均完成度：(8+7)/2 = 7.5分</div>
                <div className="text-purple-600">难度系数：(7/10) × (7.5/10) = 0.525 ≈ 1.05倍</div>
              </div>
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

      {/* 技巧动作库 */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">技巧动作库</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600">坡面障碍技巧</h3>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">轨道动作</h4>
                <div className="text-sm space-y-1">
                  <div>• 50-50 (难度3) - 基础滑轨动作</div>
                  <div>• Boardslide (难度5) - 侧滑轨道</div>
                  <div>• Lipslide (难度7) - 唇滑动作</div>
                  <div>• Bluntslide (难度8) - 钝滑动作</div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">跳台动作</h4>
                <div className="text-sm space-y-1">
                  <div>• Straight Air (难度2) - 直体腾空</div>
                  <div>• 360 (难度5) - 360度旋转</div>
                  <div>• 540 (难度7) - 540度旋转</div>
                  <div>• 720 (难度9) - 720度旋转</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-600">大跳台</h3>
            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">旋转动作</h4>
                <div className="text-sm space-y-1">
                  <div>• 360 (难度4) - 360度旋转</div>
                  <div>• 540 (难度6) - 540度旋转</div>
                  <div>• 720 (难度8) - 720度旋转</div>
                  <div>• 900 (难度9) - 900度旋转</div>
                  <div>• 1080 (难度10) - 1080度旋转</div>
                </div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">翻转动作</h4>
                <div className="text-sm space-y-1">
                  <div>• Backflip (难度7) - 后空翻</div>
                  <div>• Frontflip (难度8) - 前空翻</div>
                  <div>• Double Cork (难度10) - 双轴翻转</div>
                </div>
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
              <Award className="h-5 w-5 mr-2 text-green-600" />
              坡面障碍技巧
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span><strong>预赛</strong>：两轮，取最好成绩</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span><strong>决赛</strong>：三轮，取最好成绩</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span><strong>评分</strong>：技巧难度系数评分机制</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-purple-600" />
              大跳台
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span><strong>预赛</strong>：两轮，取最好成绩</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span><strong>决赛</strong>：三轮，取最好成绩</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span><strong>特色</strong>：动作难度系数自动计算</span>
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