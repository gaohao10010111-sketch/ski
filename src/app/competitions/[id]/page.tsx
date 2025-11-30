import Link from 'next/link'
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Clock,
  ArrowLeft,
  Flag,
  Star,
  Snowflake,
  Mountain,
  Award,
  FileText,
  Share2
} from 'lucide-react'

// 静态导出需要预生成路径
export function generateStaticParams() {
  return Array.from({ length: 20 }, (_, i) => ({
    id: String(i + 1)
  }))
}

// 模拟比赛数据
const competitionsData: Record<string, {
  name: string
  discipline: string
  location: string
  venue: string
  startDate: string
  endDate: string
  status: 'upcoming' | 'ongoing' | 'completed' | 'registration'
  participants: number
  organizer: string
  level: string
  description: string
  schedule: { time: string; event: string }[]
  requirements: string[]
  prizes: { place: string; prize: string }[]
}> = {
  '1': {
    name: '2024全国高山滑雪锦标赛',
    discipline: '大回转',
    location: '长春',
    venue: '长白山万达滑雪场',
    startDate: '2024-12-20',
    endDate: '2024-12-22',
    status: 'upcoming',
    participants: 128,
    organizer: '中国滑雪协会',
    level: '全国级',
    description: '全国高山滑雪锦标赛是中国最高水平的高山滑雪赛事，汇集全国各省市顶尖运动员，是选拔国家队成员的重要赛事。',
    schedule: [
      { time: '12月20日 08:00', event: '检录签到' },
      { time: '12月20日 09:30', event: '开幕式' },
      { time: '12月20日 10:30', event: '男子大回转预赛' },
      { time: '12月20日 14:00', event: '女子大回转预赛' },
      { time: '12月21日 09:00', event: '男子大回转决赛' },
      { time: '12月21日 14:00', event: '女子大回转决赛' },
      { time: '12月22日 10:00', event: '颁奖典礼' },
    ],
    requirements: [
      '持有中国滑雪协会会员资格',
      '年满16周岁',
      '具备高山滑雪中级以上水平',
      '购买比赛期间人身意外保险',
    ],
    prizes: [
      { place: '冠军', prize: '奖金 20,000元 + 金牌' },
      { place: '亚军', prize: '奖金 10,000元 + 银牌' },
      { place: '季军', prize: '奖金 5,000元 + 铜牌' },
    ]
  },
  '2': {
    name: '北京市青少年滑雪公开赛',
    discipline: '回转',
    location: '北京',
    venue: '北京南山滑雪场',
    startDate: '2024-12-15',
    endDate: '2024-12-15',
    status: 'ongoing',
    participants: 84,
    organizer: '北京市滑雪协会',
    level: '地区级',
    description: '北京市青少年滑雪公开赛旨在推广青少年滑雪运动，发掘和培养优秀滑雪后备人才。',
    schedule: [
      { time: '12月15日 08:00', event: '检录签到' },
      { time: '12月15日 09:00', event: '比赛开始' },
      { time: '12月15日 16:00', event: '颁奖典礼' },
    ],
    requirements: [
      '年龄8-18周岁',
      '北京市户籍或在京就读',
      '具备基础滑雪技能',
    ],
    prizes: [
      { place: '冠军', prize: '奖杯 + 证书' },
      { place: '亚军', prize: '奖牌 + 证书' },
      { place: '季军', prize: '奖牌 + 证书' },
    ]
  },
  '3': {
    name: '哈尔滨冰雪节滑雪邀请赛',
    discipline: '速降',
    location: '哈尔滨',
    venue: '亚布力滑雪场',
    startDate: '2024-12-10',
    endDate: '2024-12-12',
    status: 'completed',
    participants: 156,
    organizer: '黑龙江省体育局',
    level: '邀请赛',
    description: '哈尔滨冰雪节滑雪邀请赛是哈尔滨国际冰雪节的重要组成部分，邀请国内外优秀运动员参赛。',
    schedule: [
      { time: '12月10日', event: '训练日' },
      { time: '12月11日', event: '预赛' },
      { time: '12月12日', event: '决赛及颁奖' },
    ],
    requirements: [
      '受邀运动员',
      '具备FIS积分或同等水平证明',
    ],
    prizes: [
      { place: '冠军', prize: '奖金 30,000元' },
      { place: '亚军', prize: '奖金 15,000元' },
      { place: '季军', prize: '奖金 8,000元' },
    ]
  }
}

// 默认比赛数据
const defaultCompetition = {
  name: '滑雪比赛',
  discipline: '高山滑雪',
  location: '中国',
  venue: '滑雪场',
  startDate: '2024-12-01',
  endDate: '2024-12-03',
  status: 'upcoming' as const,
  participants: 100,
  organizer: '中国滑雪协会',
  level: '全国级',
  description: '这是一场精彩的滑雪比赛，欢迎各位运动员参加。',
  schedule: [
    { time: '第1天', event: '检录签到' },
    { time: '第2天', event: '比赛' },
    { time: '第3天', event: '颁奖' },
  ],
  requirements: [
    '具备滑雪基础技能',
    '购买比赛期间保险',
  ],
  prizes: [
    { place: '冠军', prize: '金牌' },
    { place: '亚军', prize: '银牌' },
    { place: '季军', prize: '铜牌' },
  ]
}

const statusConfig = {
  upcoming: { label: '即将开始', color: 'bg-blue-100 text-blue-800', icon: Clock },
  ongoing: { label: '进行中', color: 'bg-green-100 text-green-800', icon: Snowflake },
  completed: { label: '已结束', color: 'bg-gray-100 text-gray-800', icon: Trophy },
  registration: { label: '报名中', color: 'bg-yellow-100 text-yellow-800', icon: Users }
}

export default function CompetitionDetailPage({ params }: { params: { id: string } }) {
  const competition = competitionsData[params.id] || defaultCompetition
  const StatusIcon = statusConfig[competition.status].icon

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

      {/* 比赛头部 */}
      <div className="bg-gradient-to-r from-ski-navy to-blue-800 rounded-2xl p-8 text-white mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${statusConfig[competition.status].color}`}>
                <StatusIcon className="w-4 h-4" />
                {statusConfig[competition.status].label}
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {competition.level}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-2">{competition.name}</h1>
            <p className="text-blue-100 text-lg">{competition.discipline}</p>
          </div>
          <div className="flex gap-3">
            {competition.status === 'completed' && (
              <Link
                href={`/results-announcement?competition=${encodeURIComponent(competition.name)}&id=${params.id}`}
                className="inline-flex items-center px-4 py-2 bg-yellow-500 text-yellow-900 rounded-lg hover:bg-yellow-400 transition-colors font-medium"
              >
                <Award className="w-4 h-4 mr-2" />
                查看成绩
              </Link>
            )}
            {competition.status === 'registration' && (
              <button className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors font-medium">
                <Users className="w-4 h-4 mr-2" />
                立即报名
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧主要内容 */}
        <div className="lg:col-span-2 space-y-8">
          {/* 比赛简介 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-ski-navy mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-ski-blue" />
              比赛简介
            </h2>
            <p className="text-gray-600 leading-relaxed">{competition.description}</p>
          </div>

          {/* 赛程安排 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-ski-navy mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-ski-blue" />
              赛程安排
            </h2>
            <div className="space-y-4">
              {competition.schedule.map((item, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="w-2 h-2 mt-2 bg-ski-blue rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900">{item.time}</div>
                    <div className="text-gray-600">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 参赛要求 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-ski-navy mb-4 flex items-center gap-2">
              <Flag className="w-5 h-5 text-ski-blue" />
              参赛要求
            </h2>
            <ul className="space-y-3">
              {competition.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-ski-blue/10 text-ski-blue rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-600">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 奖项设置 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-ski-navy mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              奖项设置
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {competition.prizes.map((prize, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg text-center ${
                    index === 0 ? 'bg-yellow-50 border-2 border-yellow-200' :
                    index === 1 ? 'bg-gray-50 border-2 border-gray-200' :
                    'bg-orange-50 border-2 border-orange-200'
                  }`}
                >
                  <div className={`text-2xl mb-2 ${
                    index === 0 ? 'text-yellow-500' :
                    index === 1 ? 'text-gray-400' :
                    'text-orange-500'
                  }`}>
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                  </div>
                  <div className="font-bold text-gray-900">{prize.place}</div>
                  <div className="text-sm text-gray-600 mt-1">{prize.prize}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧信息卡片 */}
        <div className="space-y-6">
          {/* 基本信息 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold text-ski-navy mb-4">比赛信息</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-ski-blue mt-0.5" />
                <div>
                  <div className="text-sm text-gray-500">比赛日期</div>
                  <div className="font-medium">
                    {competition.startDate}
                    {competition.startDate !== competition.endDate && (
                      <span> 至 {competition.endDate}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-500">比赛地点</div>
                  <div className="font-medium">{competition.venue}</div>
                  <div className="text-sm text-gray-500">{competition.location}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-purple-600 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-500">参赛人数</div>
                  <div className="font-medium">{competition.participants} 人</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-orange-500 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-500">主办方</div>
                  <div className="font-medium">{competition.organizer}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 快速操作 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold text-ski-navy mb-4">快速操作</h3>
            <div className="space-y-3">
              {competition.status === 'registration' && (
                <button className="w-full py-3 bg-ski-blue text-white rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  立即报名
                </button>
              )}
              {competition.status === 'completed' && (
                <Link
                  href={`/results-announcement?competition=${encodeURIComponent(competition.name)}&id=${params.id}`}
                  className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  查看成绩公告
                </Link>
              )}
              <button className="w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                分享比赛
              </button>
            </div>
          </div>

          {/* 联系信息 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-ski-navy mb-3">需要帮助？</h3>
            <p className="text-gray-600 text-sm mb-4">
              如有任何问题，请联系赛事组委会
            </p>
            <div className="text-sm space-y-2">
              <div className="text-gray-600">
                邮箱：<span className="text-ski-blue">competition@ski.org.cn</span>
              </div>
              <div className="text-gray-600">
                电话：<span className="text-ski-blue">400-888-8888</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
