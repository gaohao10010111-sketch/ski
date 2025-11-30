'use client'

import { useState } from 'react'
import { getImagePath } from '@/utils/paths'
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Clock,
  Plus,
  Search,
  Filter,
  Download,
  Edit,
  Eye,
  Star,
  Mountain,
  Snowflake,
  Flag,
  Award
} from 'lucide-react'
import { mockCompetitions } from '@/data/mockData'
import { useToast } from '@/components/Toast'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// 转换比赛数据格式以适配现有UI
const convertCompetitionData = (competitions: typeof mockCompetitions) => {
  return competitions.map((competition, index) => ({
    id: index + 1,
    name: competition.name,
    discipline: competition.disciplines.join('、'),
    location: `${competition.location.venue}, ${competition.location.city}`,
    startDate: competition.startDate,
    endDate: competition.endDate,
    status: competition.status,
    participants: competition.participants,
    organizer: competition.organizer,
    level: competition.type === 'National Championship' ? 'national' :
           competition.type === 'China Cup' ? 'china_cup' : 'regional',
    weather: ['clear', 'snow', 'cloudy'][Math.floor(Math.random() * 3)],
    image: '/images/ski-bg.jpg'
  }))
}

const convertedCompetitions = convertCompetitionData(mockCompetitions)

// 保留原有模拟数据作为补充
const additionalCompetitions = [
  {
    id: 1,
    name: '2024全国高山滑雪锦标赛',
    discipline: '大回转',
    location: '长白山万达滑雪场',
    startDate: '2024-12-20',
    endDate: '2024-12-22',
    status: 'upcoming',
    participants: 128,
    organizer: '中国滑雪协会',
    level: 'national',
    weather: 'snow',
    image: '/images/ski-bg.jpg'
  },
  {
    id: 2,
    name: '北京市青少年滑雪公开赛',
    discipline: '回转',
    location: '北京南山滑雪场',
    startDate: '2024-12-15',
    endDate: '2024-12-15',
    status: 'ongoing',
    participants: 84,
    organizer: '北京市滑雪协会',
    level: 'regional',
    weather: 'clear',
    image: '/images/giant-slalom.jpg'
  },
  {
    id: 3,
    name: '哈尔滨冰雪节滑雪邀请赛',
    discipline: '速降',
    location: '亚布力滑雪场',
    startDate: '2024-12-10',
    endDate: '2024-12-12',
    status: 'completed',
    participants: 156,
    organizer: '黑龙江省体育局',
    level: 'invitational',
    weather: 'snow',
    image: '/images/skiing-2.jpg'
  },
  {
    id: 4,
    name: '张家口青年滑雪挑战赛',
    discipline: '超级大回转',
    location: '崇礼云顶滑雪场',
    startDate: '2024-12-25',
    endDate: '2024-12-26',
    status: 'registration',
    participants: 67,
    organizer: '河北省滑雪协会',
    level: 'youth',
    weather: 'cloudy',
    image: '/images/ski-action-2.jpg'
  }
]

const statusConfig = {
  upcoming: { label: '即将开始', color: 'bg-blue-100 text-blue-800' },
  ongoing: { label: '进行中', color: 'bg-green-100 text-green-800' },
  completed: { label: '已结束', color: 'bg-gray-100 text-gray-800' },
  registration: { label: '报名中', color: 'bg-yellow-100 text-yellow-800' }
}

const levelConfig = {
  national: { label: '全国级', color: 'text-red-600', icon: Flag },
  regional: { label: '地区级', color: 'text-blue-600', icon: MapPin },
  invitational: { label: '邀请赛', color: 'text-purple-600', icon: Star },
  youth: { label: '青年组', color: 'text-green-600', icon: Users },
  international: { label: '国际级', color: 'text-purple-800', icon: Trophy }
}

const weatherConfig = {
  snow: { icon: Snowflake, color: 'text-blue-500' },
  clear: { icon: Star, color: 'text-yellow-500' },
  cloudy: { icon: Mountain, color: 'text-gray-500' }
}

export default function CompetitionsPage() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isExporting, setIsExporting] = useState(false)
  const router = useRouter()
  const { showToast } = useToast()

  // 合并转换后的数据和额外数据
  const allCompetitions = [...convertedCompetitions, ...additionalCompetitions]

  const filteredCompetitions = allCompetitions.filter(competition => {
    const matchStatus = selectedStatus === 'all' || competition.status === selectedStatus
    const matchLevel = selectedLevel === 'all' || competition.level === selectedLevel
    const matchSearch = competition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       competition.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchStatus && matchLevel && matchSearch
  })

  // 新建比赛
  const handleNewCompetition = () => {
    showToast('新建比赛功能即将上线，敬请期待', 'info')
  }

  // 导出比赛列表
  const handleExport = async () => {
    if (filteredCompetitions.length === 0) {
      showToast('没有数据可导出', 'warning')
      return
    }

    setIsExporting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))

      const headers = ['比赛名称', '项目', '地点', '开始日期', '结束日期', '状态', '参赛人数', '主办方']
      const rows = filteredCompetitions.map(c => [
        c.name, c.discipline, c.location, c.startDate, c.endDate,
        statusConfig[c.status as keyof typeof statusConfig]?.label || c.status,
        c.participants, c.organizer
      ])
      const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n')

      const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `比赛列表_${new Date().toISOString().split('T')[0]}.csv`
      link.click()
      URL.revokeObjectURL(url)

      showToast(`成功导出 ${filteredCompetitions.length} 场比赛数据`, 'success')
    } catch {
      showToast('导出失败，请重试', 'error')
    } finally {
      setIsExporting(false)
    }
  }

  // 查看比赛详情 - 跳转到比赛详情页（需要创建 /competitions/[id] 路由）
  const handleViewDetails = (competition: typeof allCompetitions[0]) => {
    // 比赛详情页路由待实现，暂时显示提示
    router.push(`/competitions/${competition.id}`)
  }

  // 编辑比赛 - 跳转到编辑页（需要创建 /competitions/[id]/edit 路由）
  const handleEditCompetition = (competition: typeof allCompetitions[0]) => {
    // 编辑页路由待实现，暂时显示提示
    showToast(`编辑功能即将上线：${competition.name}`, 'info')
  }

  // 导出单场比赛数据
  const handleExportSingle = async (competition: typeof allCompetitions[0]) => {
    const headers = ['比赛名称', '项目', '地点', '开始日期', '结束日期', '状态', '参赛人数', '主办方']
    const row = [
      competition.name, competition.discipline, competition.location,
      competition.startDate, competition.endDate,
      statusConfig[competition.status as keyof typeof statusConfig]?.label || competition.status,
      competition.participants, competition.organizer
    ]
    const csvContent = [headers, row].map(r => r.join(',')).join('\n')

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${competition.name}_${new Date().toISOString().split('T')[0]}.csv`
    link.click()
    URL.revokeObjectURL(url)

    showToast(`已导出「${competition.name}」数据`, 'success')
  }

  // 快速操作
  const handleQuickAction = (action: 'create' | 'schedule' | 'stats') => {
    const messages = {
      create: '新建比赛功能即将上线，敬请期待',
      schedule: '赛程安排功能即将上线，敬请期待',
      stats: '成绩统计功能即将上线，敬请期待'
    }
    showToast(messages[action], 'info')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-15 rounded-full overflow-hidden">
        <img
          src={getImagePath("/images/ski-action-2.jpg")}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-10 left-10 w-36 h-36 opacity-15 rounded-full overflow-hidden">
        <img
          src={getImagePath("/images/giant-slalom.jpg")}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-1/3 left-1/3 w-24 h-24 opacity-10 rounded-full overflow-hidden">
        <img
          src={getImagePath("/images/skiing-2.jpg")}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="section-title">竞赛管理</h1>
        <p className="text-gray-600 text-lg">
          高山滑雪竞赛组织、管理和结果统计的专业平台
        </p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 relative z-10">
        <div className="card text-center">
          <Calendar className="h-8 w-8 text-ski-blue mx-auto mb-2" />
          <div className="text-2xl font-bold text-ski-navy">24</div>
          <div className="text-sm text-gray-600">本季比赛</div>
        </div>
        <div className="card text-center">
          <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-ski-navy">435</div>
          <div className="text-sm text-gray-600">参赛运动员</div>
        </div>
        <div className="card text-center">
          <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-ski-navy">12</div>
          <div className="text-sm text-gray-600">已完赛事</div>
        </div>
        <div className="card text-center">
          <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-ski-navy">8</div>
          <div className="text-sm text-gray-600">合作雪场</div>
        </div>
      </div>

      {/* 筛选和搜索 - 吸顶 */}
      <div className="sticky top-16 z-40 bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">筛选条件:</span>
          </div>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue transition-all"
          >
            <option value="all">全部状态</option>
            <option value="registration">📝 报名中</option>
            <option value="upcoming">⏳ 即将开始</option>
            <option value="ongoing">🏃 进行中</option>
            <option value="completed">✅ 已结束</option>
          </select>

          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue transition-all"
          >
            <option value="all">全部级别</option>
            <option value="national">🏆 全国级</option>
            <option value="regional">📍 地区级</option>
            <option value="invitational">⭐ 邀请赛</option>
            <option value="youth">👥 青年组</option>
          </select>

          <div className="relative flex-1 max-w-md">
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="搜索比赛名称或地点..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue transition-all"
            />
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 font-medium">
              找到 <span className="text-ski-blue font-bold">{filteredCompetitions.length}</span> 场比赛
            </span>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handleNewCompetition}
              className="btn-primary flex items-center shadow-sm hover:shadow-md transition-shadow"
            >
              <Plus className="h-4 w-4 mr-2" />
              新建比赛
            </button>
            <button
              onClick={handleExport}
              disabled={isExporting}
              className="btn-secondary flex items-center shadow-sm hover:shadow-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="h-4 w-4 mr-2" />
              {isExporting ? '导出中...' : '导出'}
            </button>
          </div>
        </div>
      </div>

      {/* 竞赛列表 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        {filteredCompetitions.map((competition) => {
          const StatusConfig = statusConfig[competition.status as keyof typeof statusConfig]
          const LevelConfig = levelConfig[competition.level as keyof typeof levelConfig] || { label: '其他', color: 'text-gray-600', icon: Trophy }
          const weatherType = competition.weather || 'clear'
          const WeatherIcon = weatherConfig[weatherType as keyof typeof weatherConfig].icon
          const weatherColor = weatherConfig[weatherType as keyof typeof weatherConfig].color

          return (
            <div key={competition.id} className="card hover:shadow-lg transition-shadow duration-200">
              {/* 比赛图片 */}
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <img
                  src={competition.image}
                  alt={competition.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${StatusConfig.color}`}>
                    {StatusConfig.label}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <WeatherIcon className={`h-5 w-5 ${weatherColor}`} />
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 text-white">
                    <h3 className="font-bold text-lg truncate">{competition.name}</h3>
                    <div className="flex items-center text-sm opacity-90">
                      <MapPin className="h-3 w-3 mr-1" />
                      {competition.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* 比赛信息 */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <LevelConfig.icon className={`h-4 w-4 ${LevelConfig.color}`} />
                    <span className={`text-sm font-medium ${LevelConfig.color}`}>
                      {LevelConfig.label}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {competition.discipline}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">
                      {competition.startDate}
                      {competition.startDate !== competition.endDate && (
                        <span> - {competition.endDate}</span>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{competition.participants} 人参赛</span>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <span className="font-medium">主办方:</span> {competition.organizer}
                </div>

                {/* 操作按钮 */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => handleViewDetails(competition)}
                    className="flex items-center justify-center py-2 px-3 text-sm bg-ski-blue text-white rounded-md hover:bg-primary-700 transition-colors"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    查看详情
                  </button>

                  {competition.status === 'completed' && (
                    <Link
                      href={`/results-announcement?competition=${encodeURIComponent(competition.name)}&id=${competition.id}`}
                      className="flex items-center justify-center py-2 px-3 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-sm hover:shadow-md"
                    >
                      <Award className="h-4 w-4 mr-1" />
                      成绩公告
                    </Link>
                  )}

                  {competition.status === 'ongoing' && (
                    <button
                      className="flex items-center justify-center py-2 px-3 text-sm bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors shadow-sm"
                      title="比赛进行中，即将发布成绩"
                    >
                      <Clock className="h-4 w-4 mr-1" />
                      比赛中
                    </button>
                  )}

                  {competition.status === 'upcoming' && (
                    <button
                      className="flex items-center justify-center py-2 px-3 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm"
                      title="比赛即将开始"
                    >
                      <Calendar className="h-4 w-4 mr-1" />
                      即将开始
                    </button>
                  )}

                  {competition.status === 'registration' && (
                    <button
                      className="flex items-center justify-center py-2 px-3 text-sm bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors shadow-sm"
                      title="比赛正在报名中"
                    >
                      <Users className="h-4 w-4 mr-1" />
                      报名中
                    </button>
                  )}

                  <button
                    onClick={() => handleEditCompetition(competition)}
                    className="flex items-center justify-center py-2 px-3 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    编辑
                  </button>
                  <button
                    onClick={() => handleExportSingle(competition)}
                    className="flex items-center justify-center py-2 px-3 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    导出
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* 分页 */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 relative z-10">
        <div className="text-sm text-gray-700">
          显示 <span className="font-medium">1</span> 到 <span className="font-medium">{filteredCompetitions.length}</span> 条，共 <span className="font-medium">{filteredCompetitions.length}</span> 条记录
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            上一页
          </button>
          <button className="px-3 py-1 text-sm bg-ski-blue text-white rounded-md">
            1
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            下一页
          </button>
        </div>
      </div>

      {/* 快速操作 */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div
          onClick={() => handleQuickAction('create')}
          className="card text-center hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        >
          <Plus className="h-12 w-12 text-ski-blue mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-ski-navy mb-2">创建新比赛</h3>
          <p className="text-sm text-gray-600">设置比赛信息，管理报名和成绩</p>
        </div>

        <div
          onClick={() => handleQuickAction('schedule')}
          className="card text-center hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        >
          <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-ski-navy mb-2">赛程安排</h3>
          <p className="text-sm text-gray-600">查看和管理比赛日程安排</p>
        </div>

        <div
          onClick={() => handleQuickAction('stats')}
          className="card text-center hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        >
          <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-ski-navy mb-2">成绩统计</h3>
          <p className="text-sm text-gray-600">分析比赛数据和运动员表现</p>
        </div>
      </div>
    </div>
  )
}