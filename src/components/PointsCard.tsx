'use client'

import { useState, useRef, useEffect } from 'react'
import { Download, Share2, Trophy, Medal, Star, Zap } from 'lucide-react'
import html2canvas from 'html2canvas'
import QRCode from 'qrcode'

interface PointsCardProps {
  athleteName: string
  team: string
  rank: number
  totalPoints: number
  competitionCount: number
  bestRank: number
  ageGroup: string
  gender: string
  discipline?: string
  season?: string
  dataType?: 'season' | 'race'
  competitionName?: string
  bestScore?: number
}

// FIFA风格圆形徽章 - 更精致的设计
export function RankBadge({ rank, size = 100 }: { rank: number; size?: number }) {
  // 根据排名确定配色
  const getColors = () => {
    if (rank === 1) return {
      primary: '#FFD700',
      secondary: '#B8860B',
      accent: '#FFF8DC',
      glow: 'rgba(255, 215, 0, 0.6)',
      text: '#1a1a2e',
      label: '冠军',
      icon: '👑',
      ringColor: '#DAA520'
    }
    if (rank === 2) return {
      primary: '#E8E8E8',
      secondary: '#A8A8A8',
      accent: '#FFFFFF',
      glow: 'rgba(192, 192, 192, 0.5)',
      text: '#1a1a2e',
      label: '亚军',
      icon: '🥈',
      ringColor: '#C0C0C0'
    }
    if (rank === 3) return {
      primary: '#CD7F32',
      secondary: '#8B4513',
      accent: '#DEB887',
      glow: 'rgba(205, 127, 50, 0.5)',
      text: '#1a1a2e',
      label: '季军',
      icon: '🥉',
      ringColor: '#B8860B'
    }
    if (rank <= 10) return {
      primary: '#6366F1',
      secondary: '#4338CA',
      accent: '#A5B4FC',
      glow: 'rgba(99, 102, 241, 0.5)',
      text: '#ffffff',
      label: `TOP ${rank}`,
      icon: '⭐',
      ringColor: '#818CF8'
    }
    return {
      primary: '#06B6D4',
      secondary: '#0891B2',
      accent: '#67E8F9',
      glow: 'rgba(6, 182, 212, 0.5)',
      text: '#ffffff',
      label: `#${rank}`,
      icon: '🎿',
      ringColor: '#22D3EE'
    }
  }

  const colors = getColors()

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          {/* 主渐变 */}
          <linearGradient id={`mainGrad-${rank}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.accent} />
            <stop offset="30%" stopColor={colors.primary} />
            <stop offset="100%" stopColor={colors.secondary} />
          </linearGradient>

          {/* 外环渐变 */}
          <linearGradient id={`ringGrad-${rank}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.ringColor} />
            <stop offset="50%" stopColor={colors.primary} />
            <stop offset="100%" stopColor={colors.secondary} />
          </linearGradient>

          {/* 光晕效果 */}
          <filter id={`glow-${rank}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feFlood floodColor={colors.glow} result="color"/>
            <feComposite in="color" in2="blur" operator="in" result="shadow"/>
            <feMerge>
              <feMergeNode in="shadow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* 高光渐变 */}
          <linearGradient id={`shine-${rank}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* 最外层装饰环 */}
        <circle
          cx="50" cy="50" r="48"
          fill="none"
          stroke={`url(#ringGrad-${rank})`}
          strokeWidth="2"
          opacity="0.8"
        />

        {/* 外环 - 金属质感 */}
        <circle
          cx="50" cy="50" r="44"
          fill="none"
          stroke={`url(#ringGrad-${rank})`}
          strokeWidth="4"
          filter={`url(#glow-${rank})`}
        />

        {/* 内环装饰 */}
        <circle
          cx="50" cy="50" r="38"
          fill="none"
          stroke={colors.ringColor}
          strokeWidth="1.5"
          strokeDasharray="4 2"
          opacity="0.6"
        />

        {/* 主圆形背景 */}
        <circle
          cx="50" cy="50" r="35"
          fill={`url(#mainGrad-${rank})`}
        />

        {/* 内部装饰圈 */}
        <circle
          cx="50" cy="50" r="32"
          fill="none"
          stroke={colors.accent}
          strokeWidth="0.5"
          opacity="0.4"
        />

        {/* 高光层 */}
        <ellipse
          cx="50" cy="38"
          rx="22" ry="15"
          fill={`url(#shine-${rank})`}
        />

        {/* 底部阴影 */}
        <ellipse
          cx="50" cy="65"
          rx="18" ry="8"
          fill="rgba(0,0,0,0.15)"
        />
      </svg>

      {/* 徽章内容 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl drop-shadow-md" style={{ marginTop: -2 }}>{colors.icon}</span>
        <span
          className="font-black text-base tracking-tight drop-shadow-sm"
          style={{ color: colors.text, marginTop: 2 }}
        >
          {colors.label}
        </span>
      </div>
    </div>
  )
}

// 五边形能力值展示（FIFA风格）
function PentagonStats({
  points,
  competitions,
  bestRank,
  avgPoints,
  winRate
}: {
  points: number
  competitions: number
  bestRank: number
  avgPoints: number
  winRate: number
}) {
  // 计算各项指标的百分比（0-100）
  const stats = [
    { label: '积分', value: Math.min(100, points / 360 * 100), displayValue: points },
    { label: '场次', value: Math.min(100, competitions * 20), displayValue: competitions },
    { label: '最佳', value: Math.min(100, (51 - bestRank) * 2), displayValue: `#${bestRank}` },
    { label: '均分', value: Math.min(100, avgPoints / 360 * 100), displayValue: avgPoints.toFixed(0) },
    { label: '胜率', value: winRate, displayValue: `${winRate}%` },
  ]

  const centerX = 60
  const centerY = 60
  const radius = 45

  // 计算五边形顶点
  const getPoint = (index: number, value: number) => {
    const angle = (index * 72 - 90) * (Math.PI / 180)
    const r = radius * (value / 100)
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle)
    }
  }

  const points_path = stats.map((stat, i) => {
    const p = getPoint(i, stat.value)
    return `${p.x},${p.y}`
  }).join(' ')

  const outline_path = stats.map((_, i) => {
    const p = getPoint(i, 100)
    return `${p.x},${p.y}`
  }).join(' ')

  return (
    <div className="relative w-[120px] h-[120px]">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="statGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* 背景网格 */}
        {[20, 40, 60, 80, 100].map((level) => (
          <polygon
            key={level}
            points={stats.map((_, i) => {
              const p = getPoint(i, level)
              return `${p.x},${p.y}`
            }).join(' ')}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />
        ))}

        {/* 轴线 */}
        {stats.map((_, i) => {
          const p = getPoint(i, 100)
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={p.x}
              y2={p.y}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />
          )
        })}

        {/* 外轮廓 */}
        <polygon
          points={outline_path}
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />

        {/* 数据区域 */}
        <polygon
          points={points_path}
          fill="url(#statGradient)"
          stroke="#06B6D4"
          strokeWidth="2"
        />

        {/* 顶点标签 */}
        {stats.map((stat, i) => {
          const p = getPoint(i, 115)
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="rgba(255,255,255,0.7)"
              fontSize="7"
              fontWeight="bold"
            >
              {stat.label}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

// 动态二维码组件
export function DynamicQRCode({ url, size = 64 }: { url: string; size?: number }) {
  const [qrDataUrl, setQrDataUrl] = useState<string>('')

  useEffect(() => {
    QRCode.toDataURL(url, {
      width: size * 2,
      margin: 1,
      color: {
        dark: '#1a1a2e',
        light: '#ffffff'
      }
    }).then(setQrDataUrl).catch(console.error)
  }, [url, size])

  if (!qrDataUrl) {
    return (
      <div
        className="bg-white rounded-lg flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <span className="text-xs text-gray-400">加载中</span>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={qrDataUrl}
      alt="扫码查看"
      className="rounded-lg"
      style={{ width: size, height: size }}
    />
  )
}

export default function PointsCard({
  athleteName,
  team,
  rank,
  totalPoints,
  competitionCount,
  bestRank,
  ageGroup,
  gender,
  discipline = '综合积分',
  season = '2025-2026',
  dataType = 'season',
  competitionName,
  bestScore,
}: PointsCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  // 计算派生数据
  const avgPoints = competitionCount > 0 ? totalPoints / competitionCount : 0
  const winRate = competitionCount > 0 ? Math.round((bestRank <= 3 ? 1 : 0) / competitionCount * 100) : 0

  // 网站URL
  const siteUrl = 'https://cnskipoints.com'

  // 下载卡片为图片
  const handleDownload = async () => {
    if (!cardRef.current) return
    setIsGenerating(true)

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        backgroundColor: null,
        useCORS: true,
      })

      const link = document.createElement('a')
      link.download = `${athleteName}_积分卡片_${season}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (error) {
      console.error('生成图片失败:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  // 分享功能
  const handleShare = async () => {
    if (!cardRef.current) return
    setIsGenerating(true)

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        backgroundColor: null,
        useCORS: true,
      })

      canvas.toBlob(async (blob) => {
        if (!blob) return

        if (navigator.share && navigator.canShare) {
          const file = new File([blob], `${athleteName}_积分卡片.png`, { type: 'image/png' })
          const shareData = {
            title: `${athleteName}的滑雪积分卡`,
            text: `🎿 ${athleteName} 在${season}赛季${ageGroup}${gender}${discipline}中排名第${rank}，总积分${totalPoints}分！查看完整排名：${siteUrl}`,
            files: [file],
          }

          if (navigator.canShare(shareData)) {
            await navigator.share(shareData)
          } else {
            await navigator.share({
              title: shareData.title,
              text: shareData.text,
              url: siteUrl,
            })
          }
        } else {
          await navigator.clipboard.writeText(`${athleteName}的滑雪积分卡 - 排名第${rank}，总积分${totalPoints}分！${siteUrl}`)
          alert('链接已复制到剪贴板！')
        }
      }, 'image/png')
    } catch (error) {
      console.error('分享失败:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* 卡片主体 - FIFA风格 */}
      <div
        ref={cardRef}
        className="relative w-[380px] overflow-hidden rounded-3xl shadow-2xl"
        style={{
          background: 'linear-gradient(145deg, #0f172a 0%, #1e293b 30%, #0f172a 70%, #020617 100%)',
        }}
      >
        {/* 装饰性背景 */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 几何装饰 */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-cyan-500 rotate-45" />
            <div className="absolute bottom-20 right-10 w-24 h-24 border border-blue-500 rotate-12" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-indigo-500 -rotate-12" />
          </div>
          {/* 光晕 */}
          <div className="absolute -top-20 right-0 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
          {/* 网格背景 */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        {/* 卡片内容 */}
        <div className="relative z-10 p-6">
          {/* 顶部：Logo和赛季 */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-[8px] font-bold text-yellow-900">CN</span>
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-sm tracking-wide">CHINA SKI</div>
                <div className="text-cyan-400 text-xs font-medium">
                  {dataType === 'race' && competitionName
                    ? competitionName.replace(/2025-2026赛季/, '').replace(/U系列比赛/, '')
                    : `${season} SEASON`}
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
              <span className="text-white text-xs font-medium">{discipline}</span>
            </div>
          </div>

          {/* 中间区域：徽章 + 信息 */}
          <div className="flex items-center gap-4 mb-4">
            {/* 精致圆形徽章 */}
            <RankBadge rank={rank} size={100} />

            {/* 运动员信息 */}
            <div className="flex-1">
              <div className="mb-2">
                <span className="text-gray-400 text-xs uppercase tracking-wider">{ageGroup} · {gender}</span>
              </div>
              <h2 className="text-white text-2xl font-black mb-1 tracking-tight">{athleteName}</h2>
              <p className="text-cyan-300 text-sm font-medium truncate">{team}</p>
            </div>
          </div>

          {/* 积分大数字展示 */}
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-white/10">
            <div className="flex items-end justify-between">
              <div>
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  {dataType === 'race' ? 'RACE POINTS' : 'TOTAL POINTS'}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-white text-5xl font-black tracking-tighter">
                    {totalPoints}
                  </span>
                  <span className="text-cyan-400 text-lg font-bold">PTS</span>
                </div>
              </div>
              {dataType === 'race' && bestScore ? (
                <div className="text-right">
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">BEST SCORE</div>
                  <div className="text-white text-3xl font-black">{bestScore}</div>
                </div>
              ) : (
                <PentagonStats
                  points={totalPoints}
                  competitions={competitionCount}
                  bestRank={bestRank}
                  avgPoints={avgPoints}
                  winRate={winRate}
                />
              )}
            </div>
          </div>

          {/* 数据统计条 */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
              <Trophy className="h-4 w-4 text-yellow-400 mx-auto mb-1" />
              <div className="text-white font-bold text-lg">{competitionCount}</div>
              <div className="text-gray-500 text-[10px] uppercase">Matches</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
              <Medal className="h-4 w-4 text-orange-400 mx-auto mb-1" />
              <div className="text-white font-bold text-lg">#{bestRank}</div>
              <div className="text-gray-500 text-[10px] uppercase">Best Rank</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
              <Star className="h-4 w-4 text-cyan-400 mx-auto mb-1" />
              <div className="text-white font-bold text-lg">{avgPoints.toFixed(0)}</div>
              <div className="text-gray-500 text-[10px] uppercase">Avg Points</div>
            </div>
          </div>

          {/* 底部：主办方/承办方Logo + 二维码 */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/csa.jpg" alt="中国滑雪协会" className="h-9 w-auto rounded-sm" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/huati.png" alt="华体冰雪" className="h-9 w-auto" />
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-gray-400 text-[10px]">扫码查看排名</div>
                <div className="text-cyan-400 text-xs font-bold">cnskipoints.com</div>
              </div>
              <DynamicQRCode url={siteUrl} size={48} />
            </div>
          </div>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex gap-3">
        <button
          onClick={handleDownload}
          disabled={isGenerating}
          className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 font-medium"
        >
          <Download className="h-4 w-4" />
          {isGenerating ? '生成中...' : '保存图片'}
        </button>
        <button
          onClick={handleShare}
          disabled={isGenerating}
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-green-500/25 disabled:opacity-50 font-medium"
        >
          <Share2 className="h-4 w-4" />
          分享卡片
        </button>
      </div>
    </div>
  )
}
