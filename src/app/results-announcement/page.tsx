'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  Trophy,
  Medal,
  Download,
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Clock,
  Award,
  Share2,
  Printer
} from 'lucide-react'
import { useToast } from '@/components/Toast'

// 模拟成绩数据
const mockResults = [
  { rank: 1, name: '张伟', team: '北京队', time1: '52.34', time2: '51.89', total: '1:44.23', points: 100, medal: 'gold' },
  { rank: 2, name: '李明', team: '黑龙江队', time1: '52.78', time2: '52.12', total: '1:44.90', points: 80, medal: 'silver' },
  { rank: 3, name: '王强', team: '吉林队', time1: '53.01', time2: '52.45', total: '1:45.46', points: 60, medal: 'bronze' },
  { rank: 4, name: '刘洋', team: '河北队', time1: '53.23', time2: '52.89', total: '1:46.12', points: 50, medal: null },
  { rank: 5, name: '陈晨', team: '新疆队', time1: '53.45', time2: '53.12', total: '1:46.57', points: 45, medal: null },
  { rank: 6, name: '杨帆', team: '内蒙古队', time1: '53.67', time2: '53.34', total: '1:47.01', points: 40, medal: null },
  { rank: 7, name: '赵磊', team: '辽宁队', time1: '53.89', time2: '53.56', total: '1:47.45', points: 36, medal: null },
  { rank: 8, name: '孙鹏', team: '山东队', time1: '54.12', time2: '53.78', total: '1:47.90', points: 32, medal: null },
  { rank: 9, name: '周涛', team: '甘肃队', time1: '54.34', time2: '54.01', total: '1:48.35', points: 29, medal: null },
  { rank: 10, name: '吴昊', team: '青海队', time1: '54.56', time2: '54.23', total: '1:48.79', points: 26, medal: null },
]

const medalConfig = {
  gold: { color: 'text-yellow-500', bg: 'bg-yellow-50', label: '金牌' },
  silver: { color: 'text-gray-400', bg: 'bg-gray-50', label: '银牌' },
  bronze: { color: 'text-orange-600', bg: 'bg-orange-50', label: '铜牌' },
}

function ResultsContent() {
  const searchParams = useSearchParams()
  const competitionName = searchParams?.get('competition') ?? '比赛'
  const competitionId = searchParams?.get('id') ?? '1'
  const { showToast } = useToast()
  const [activeTab, setActiveTab] = useState('men')

  // 模拟比赛信息
  const competitionInfo = {
    name: decodeURIComponent(competitionName),
    date: '2024-12-10 - 2024-12-12',
    location: '亚布力滑雪场',
    discipline: '大回转',
    participants: 156,
    finishers: 142,
    dns: 8,
    dnf: 6
  }

  const handleExport = () => {
    const headers = ['名次', '姓名', '代表队', '第一轮', '第二轮', '总成绩', '积分']
    const rows = mockResults.map(r => [r.rank, r.name, r.team, r.time1, r.time2, r.total, r.points])
    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n')

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${competitionInfo.name}_成绩表.csv`
    link.click()
    URL.revokeObjectURL(url)

    showToast('成绩表已导出', 'success')
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${competitionInfo.name} - 成绩公告`,
          text: `查看${competitionInfo.name}的比赛成绩`,
          url: window.location.href,
        })
      } catch {
        showToast('分享已取消', 'info')
      }
    } else {
      await navigator.clipboard.writeText(window.location.href)
      showToast('链接已复制到剪贴板', 'success')
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 返回按钮 */}
      <Link
        href="/competitions"
        className="inline-flex items-center text-gray-600 hover:text-ski-blue mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        返回比赛列表
      </Link>

      {/* 页面标题 */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 shadow-lg">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-ski-navy mb-2">成绩公告</h1>
        <p className="text-xl text-gray-600">{competitionInfo.name}</p>
      </div>

      {/* 比赛信息卡片 */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-ski-blue" />
            <div>
              <div className="text-sm text-gray-500">比赛日期</div>
              <div className="font-medium">{competitionInfo.date}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-green-600" />
            <div>
              <div className="text-sm text-gray-500">比赛地点</div>
              <div className="font-medium">{competitionInfo.location}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-purple-600" />
            <div>
              <div className="text-sm text-gray-500">比赛项目</div>
              <div className="font-medium">{competitionInfo.discipline}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-orange-600" />
            <div>
              <div className="text-sm text-gray-500">参赛人数</div>
              <div className="font-medium">{competitionInfo.participants} 人</div>
            </div>
          </div>
        </div>

        {/* 完赛统计 */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full">
              完赛: {competitionInfo.finishers} 人
            </span>
            <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full">
              DNS: {competitionInfo.dns} 人
            </span>
            <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full">
              DNF: {competitionInfo.dnf} 人
            </span>
          </div>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={handleExport}
          className="inline-flex items-center px-4 py-2 bg-ski-blue text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Download className="w-4 h-4 mr-2" />
          导出成绩表
        </button>
        <button
          onClick={handleShare}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Share2 className="w-4 h-4 mr-2" />
          分享
        </button>
        <button
          onClick={handlePrint}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors print:hidden"
        >
          <Printer className="w-4 h-4 mr-2" />
          打印
        </button>
      </div>

      {/* 性别切换 */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('men')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'men'
              ? 'bg-ski-blue text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          男子组
        </button>
        <button
          onClick={() => setActiveTab('women')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'women'
              ? 'bg-ski-blue text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          女子组
        </button>
      </div>

      {/* 领奖台 */}
      <div className="bg-gradient-to-br from-ski-navy to-blue-900 rounded-xl p-8 mb-8 text-white">
        <h2 className="text-xl font-bold text-center mb-8">领奖台</h2>
        <div className="flex justify-center items-end gap-4">
          {/* 银牌 - 第二名 */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
              <Medal className="w-10 h-10 text-gray-600" />
            </div>
            <div className="bg-gray-300 rounded-t-lg pt-4 pb-2 px-4 w-28">
              <div className="text-gray-800 font-bold">{mockResults[1].name}</div>
              <div className="text-gray-600 text-sm">{mockResults[1].team}</div>
              <div className="text-gray-700 text-xs mt-1">{mockResults[1].total}</div>
            </div>
            <div className="bg-gray-400 h-16 w-28 flex items-center justify-center text-2xl font-bold text-gray-700">
              2
            </div>
          </div>

          {/* 金牌 - 第一名 */}
          <div className="text-center -mt-4">
            <div className="w-24 h-24 mx-auto mb-3 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Trophy className="w-12 h-12 text-yellow-800" />
            </div>
            <div className="bg-yellow-400 rounded-t-lg pt-4 pb-2 px-4 w-32">
              <div className="text-yellow-900 font-bold text-lg">{mockResults[0].name}</div>
              <div className="text-yellow-800 text-sm">{mockResults[0].team}</div>
              <div className="text-yellow-900 text-xs mt-1">{mockResults[0].total}</div>
            </div>
            <div className="bg-yellow-500 h-24 w-32 flex items-center justify-center text-3xl font-bold text-yellow-900">
              1
            </div>
          </div>

          {/* 铜牌 - 第三名 */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
              <Medal className="w-10 h-10 text-orange-800" />
            </div>
            <div className="bg-orange-400 rounded-t-lg pt-4 pb-2 px-4 w-28">
              <div className="text-orange-900 font-bold">{mockResults[2].name}</div>
              <div className="text-orange-800 text-sm">{mockResults[2].team}</div>
              <div className="text-orange-900 text-xs mt-1">{mockResults[2].total}</div>
            </div>
            <div className="bg-orange-500 h-12 w-28 flex items-center justify-center text-2xl font-bold text-orange-900">
              3
            </div>
          </div>
        </div>
      </div>

      {/* 成绩表格 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">名次</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">姓名</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">代表队</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">第一轮</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">第二轮</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">总成绩</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">积分</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockResults.map((result) => {
                const medal = result.medal ? medalConfig[result.medal as keyof typeof medalConfig] : null
                return (
                  <tr
                    key={result.rank}
                    className={`hover:bg-gray-50 transition-colors ${medal?.bg || ''}`}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {medal ? (
                          <span className={`font-bold ${medal.color}`}>
                            {result.rank}
                          </span>
                        ) : (
                          <span className="text-gray-600">{result.rank}</span>
                        )}
                        {medal && (
                          <Medal className={`w-4 h-4 ${medal.color}`} />
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900">{result.name}</td>
                    <td className="px-4 py-3 text-gray-600">{result.team}</td>
                    <td className="px-4 py-3 text-center font-mono text-gray-700">{result.time1}</td>
                    <td className="px-4 py-3 text-center font-mono text-gray-700">{result.time2}</td>
                    <td className="px-4 py-3 text-center font-mono font-semibold text-gray-900">{result.total}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex items-center px-2 py-1 bg-ski-blue/10 text-ski-blue rounded font-medium">
                        {result.points}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 备注 */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
        <p className="font-medium mb-2">说明：</p>
        <ul className="list-disc list-inside space-y-1">
          <li>DNS (Did Not Start): 未出发</li>
          <li>DNF (Did Not Finish): 未完赛</li>
          <li>DSQ (Disqualified): 被取消资格</li>
          <li>积分按照中国滑雪协会积分规则计算</li>
        </ul>
      </div>
    </div>
  )
}

export default function ResultsAnnouncementPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-96 bg-gray-200 rounded"></div>
        </div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  )
}
