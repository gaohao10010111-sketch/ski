import Link from 'next/link'
import { ChevronLeft, Calculator, Timer, Trophy, Award, Shield } from 'lucide-react'

export default function AlpineSkiScoring() {
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
          高山滑雪积分体系
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          基于时间的v4.0积分计算体系，支持A/B/C级赛事系数，判罚分动态计算机制
        </p>
      </div>

      {/* 核心特性 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Timer className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">基于时间计算</h3>
          <p className="text-gray-600">v4.0标准公式，精确的时间差积分计算</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">判罚分机制</h3>
          <p className="text-gray-600">基于参赛选手积分分布的动态判罚分</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">赛事分级</h3>
          <p className="text-gray-600">A级(1.0) B级(0.6) C级(0.3)系数体系</p>
        </div>
      </div>

      {/* v4.0核心公式 */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">v4.0核心计算公式</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center bg-white rounded-lg p-6">
            <div className="text-lg font-bold text-blue-600 mb-2">步骤1</div>
            <h3 className="font-semibold mb-3">基础比赛积分</h3>
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="font-mono text-lg">P = F × (Tx/To - 1)</div>
            </div>
            <div className="text-sm text-gray-600 mt-2">
              F=项目系数，Tx=选手时间，To=冠军时间
            </div>
          </div>

          <div className="text-center bg-white rounded-lg p-6">
            <div className="text-lg font-bold text-green-600 mb-2">步骤2</div>
            <h3 className="font-semibold mb-3">加入判罚分</h3>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="font-mono text-lg">调整积分 = P + 判罚分</div>
            </div>
            <div className="text-sm text-gray-600 mt-2">
              判罚分基于参赛选手积分分布计算
            </div>
          </div>

          <div className="text-center bg-white rounded-lg p-6">
            <div className="text-lg font-bold text-purple-600 mb-2">步骤3</div>
            <h3 className="font-semibold mb-3">应用赛事系数</h3>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="font-mono text-lg">最终积分 = 调整积分 × 系数</div>
            </div>
            <div className="text-sm text-gray-600 mt-2">
              A级1.0、B级0.6、C级0.3
            </div>
          </div>
        </div>
      </div>

      {/* 项目系数 */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">项目系数 (F值)</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="text-center bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-600 mb-2">速降 (DH)</h3>
            <div className="text-2xl font-bold">1250</div>
          </div>
          <div className="text-center bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-600 mb-2">回转 (SL)</h3>
            <div className="text-2xl font-bold">730</div>
          </div>
          <div className="text-center bg-purple-50 rounded-lg p-4">
            <h3 className="font-semibold text-purple-600 mb-2">大回转 (GS)</h3>
            <div className="text-2xl font-bold">1010</div>
          </div>
          <div className="text-center bg-orange-50 rounded-lg p-4">
            <h3 className="font-semibold text-orange-600 mb-2">超级大回转 (SG)</h3>
            <div className="text-2xl font-bold">1190</div>
          </div>
          <div className="text-center bg-red-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-600 mb-2">全能 (AC)</h3>
            <div className="text-2xl font-bold">1360</div>
          </div>
        </div>
      </div>

      {/* 赛事分级 */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">赛事分级系数</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">A</span>
            </div>
            <h3 className="font-semibold mb-2">A级赛事 (×1.0)</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <div>• 全国锦标赛</div>
              <div>• 冬运会</div>
              <div>• 青年冠军赛</div>
            </div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">B</span>
            </div>
            <h3 className="font-semibold mb-2">B级赛事 (×0.6)</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <div>• 省级锦标赛</div>
              <div>• 区域性比赛</div>
              <div>• U系列全国赛</div>
            </div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">C</span>
            </div>
            <h3 className="font-semibold mb-2">C级赛事 (×0.3)</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <div>• 地市级比赛</div>
              <div>• 俱乐部赛事</div>
              <div>• 青少年培训赛</div>
            </div>
          </div>
        </div>
      </div>

      {/* 判罚分计算 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">判罚分计算 (v4.0标准)</h2>

        <div className="bg-white rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">判罚分公式</h3>
          <div className="bg-blue-50 rounded-lg p-6 text-center mb-6">
            <div className="font-mono text-xl">判罚分 = (Sum A + Sum B - Sum C) ÷ 10</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="text-center">
              <h4 className="font-semibold text-blue-600 mb-2">Sum A</h4>
              <p>比赛前10名中最好5名选手的中国积分总和</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-green-600 mb-2">Sum B</h4>
              <p>所有参赛选手中最好5名的中国积分总和</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-purple-600 mb-2">Sum C</h4>
              <p>对应Sum B的5名选手在本场比赛的基础比赛积分总和</p>
            </div>
          </div>
        </div>
      </div>

      {/* BL/NL积分体系 */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">BL/NL积分体系</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">基础积分表 (BL)</h3>
            <div className="space-y-3 text-sm">
              <div><strong>发布时间</strong>：每年6月中旬</div>
              <div><strong>2次及以上成绩</strong>：BL = (最好成绩 + 次好成绩) ÷ 2</div>
              <div><strong>单一成绩</strong>：BL = 该成绩 × 1.20 (标记&quot;+&quot;)</div>
              <div><strong>无成绩</strong>：BL = 前BL × 1.50 (标记&quot;&gt;&quot;)</div>
              <div><strong>新运动员</strong>：首次成绩 × 1.30 (标记&quot;N&quot;)</div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">常规积分表 (NL)</h3>
            <div className="space-y-3 text-sm">
              <div><strong>首次发布</strong>：7月1日</div>
              <div><strong>更新周期</strong>：赛季期间每周二</div>
              <div><strong>计算规则</strong>：取当前赛季最好2次成绩平均值</div>
              <div><strong>优化原则</strong>：NL优于BL时更新为NL积分</div>
              <div><strong>无参赛</strong>：保持BL积分不变</div>
            </div>
          </div>
        </div>
      </div>

      {/* 伤病保护机制 */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center">
          <Shield className="h-6 w-6 mr-2" />
          伤病保护机制 (v4.0完善)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">申请条件</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></div>
                <div>县级以上医院出具的医疗证明</div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></div>
                <div>影响训练和比赛的严重伤病</div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2"></div>
                <div>连续3个月以上无法参赛</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">申请流程</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2"></div>
                <div>伤病发生后30天内提出申请</div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></div>
                <div>协会15个工作日内审核</div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></div>
                <div>通过后积分增加10%保护</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 积分计算示例 */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">积分计算示例</h2>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold mb-4">大回转比赛示例</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="space-y-2">
                <div><strong>项目</strong>：大回转 (F = 1010)</div>
                <div><strong>赛事级别</strong>：A级 (系数 1.0)</div>
                <div><strong>冠军用时</strong>：125.30秒</div>
                <div><strong>某运动员用时</strong>：128.75秒</div>
                <div><strong>判罚分</strong>：0.00分</div>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <div><strong>计算步骤</strong>：</div>
                <div>1. 基础积分：1010 × (128.75/125.30 - 1) = 27.76分</div>
                <div>2. 加判罚分：27.76 + 0.00 = 27.76分</div>
                <div>3. 最终积分：27.76 × 1.0 = <span className="font-semibold text-blue-600">27.76分</span></div>
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