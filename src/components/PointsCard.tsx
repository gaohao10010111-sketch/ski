'use client'

import { useState, useRef, useEffect } from 'react'
import { Download, Share2, Trophy, Medal, Mountain, Snowflake, Star } from 'lucide-react'
import html2canvas from 'html2canvas'

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
}

// 获取排名徽章样式
function getRankBadge(rank: number) {
  if (rank === 1) return { bg: 'from-yellow-400 to-yellow-600', icon: '🥇', text: '冠军' }
  if (rank === 2) return { bg: 'from-gray-300 to-gray-500', icon: '🥈', text: '亚军' }
  if (rank === 3) return { bg: 'from-orange-400 to-orange-600', icon: '🥉', text: '季军' }
  if (rank <= 10) return { bg: 'from-blue-400 to-blue-600', icon: '🏅', text: `第${rank}名` }
  return { bg: 'from-sky-400 to-sky-600', icon: '⭐', text: `第${rank}名` }
}

// 项目图标
function getSportIcon(discipline?: string) {
  if (!discipline) return <Snowflake className="h-5 w-5" />
  if (discipline.includes('大跳台')) return <Mountain className="h-5 w-5" />
  if (discipline.includes('坡面')) return <Star className="h-5 w-5" />
  return <Snowflake className="h-5 w-5" />
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
  season = '2024-2025'
}: PointsCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [basePath, setBasePath] = useState('/ski')

  useEffect(() => {
    const detectedBasePath = window.location.pathname.startsWith('/ski') ? '/ski' : ''
    setBasePath(detectedBasePath)
  }, [])

  const rankBadge = getRankBadge(rank)

  // 下载卡片为图片
  const handleDownload = async () => {
    if (!cardRef.current) return
    setIsGenerating(true)

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
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
        scale: 2,
        backgroundColor: null,
        useCORS: true,
      })

      canvas.toBlob(async (blob) => {
        if (!blob) return

        if (navigator.share && navigator.canShare) {
          const file = new File([blob], `${athleteName}_积分卡片.png`, { type: 'image/png' })
          const shareData = {
            title: `${athleteName}的滑雪积分卡`,
            text: `🎿 ${athleteName} 在${season}赛季${ageGroup}${gender}${discipline}中排名第${rank}，总积分${totalPoints}分！`,
            files: [file],
          }

          if (navigator.canShare(shareData)) {
            await navigator.share(shareData)
          } else {
            // 如果不支持文件分享，只分享链接
            await navigator.share({
              title: shareData.title,
              text: shareData.text,
              url: window.location.href,
            })
          }
        } else {
          // 降级：复制链接
          await navigator.clipboard.writeText(window.location.href)
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
      {/* 卡片主体 */}
      <div
        ref={cardRef}
        className="relative w-[360px] overflow-hidden rounded-2xl shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #0f2744 50%, #0a1929 100%)',
        }}
      >
        {/* 装饰性背景元素 */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 雪花装饰 */}
          <div className="absolute top-4 right-4 text-white/10 text-6xl">❄</div>
          <div className="absolute bottom-20 left-4 text-white/10 text-4xl">❄</div>
          <div className="absolute top-1/2 right-8 text-white/5 text-8xl">⛷</div>
          {/* 光晕效果 */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>

        {/* 卡片内容 */}
        <div className="relative z-10 p-6">
          {/* 顶部：Logo和赛季 */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                <Mountain className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">中国滑雪积分</div>
                <div className="text-cyan-400 text-xs">{season} 赛季</div>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              {getSportIcon(discipline)}
              <span className="text-white text-xs">{discipline}</span>
            </div>
          </div>

          {/* 排名徽章 */}
          <div className="flex justify-center mb-4">
            <div className={`bg-gradient-to-br ${rankBadge.bg} px-6 py-3 rounded-2xl shadow-lg`}>
              <div className="flex items-center gap-2">
                <span className="text-3xl">{rankBadge.icon}</span>
                <div className="text-white">
                  <div className="text-2xl font-black">{rankBadge.text}</div>
                  <div className="text-xs opacity-80">{ageGroup} · {gender}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 运动员信息 */}
          <div className="text-center mb-6">
            <h2 className="text-white text-2xl font-bold mb-1">{athleteName}</h2>
            <p className="text-cyan-300 text-sm">{team}</p>
          </div>

          {/* 积分展示 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
            <div className="text-center">
              <div className="text-cyan-400 text-sm mb-1">总积分</div>
              <div className="text-white text-4xl font-black tracking-wider">
                {totalPoints.toLocaleString()}
                <span className="text-lg text-cyan-400 ml-1">分</span>
              </div>
            </div>
          </div>

          {/* 数据统计 */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <Trophy className="h-5 w-5 text-yellow-400 mx-auto mb-1" />
              <div className="text-white font-bold">{competitionCount}</div>
              <div className="text-gray-400 text-xs">参赛场次</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <Medal className="h-5 w-5 text-orange-400 mx-auto mb-1" />
              <div className="text-white font-bold">第{bestRank}名</div>
              <div className="text-gray-400 text-xs">最佳成绩</div>
            </div>
          </div>

          {/* 底部：二维码和品牌 */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              {/* 二维码占位 - 实际使用时替换为真实二维码 */}
              <div className="bg-white p-1.5 rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}/images/site-qrcode.png`}
                  alt="扫码查看"
                  className="w-14 h-14 object-contain"
                  onError={(e) => {
                    // 如果二维码图片不存在，显示占位
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    target.parentElement!.innerHTML = `
                      <div class="w-14 h-14 bg-gray-100 flex items-center justify-center text-xs text-gray-500">
                        扫码
                      </div>
                    `
                  }}
                />
              </div>
              <div>
                <div className="text-gray-400 text-xs">扫码查看完整排名</div>
                <div className="text-cyan-400 text-xs font-medium">cnskipoints.com</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-gray-500 text-xs">U系列赛事官方平台</div>
              <div className="text-white/60 text-xs">© 2025 华体冰雪</div>
            </div>
          </div>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex gap-3">
        <button
          onClick={handleDownload}
          disabled={isGenerating}
          className="flex items-center gap-2 bg-ski-blue text-white px-6 py-2.5 rounded-full hover:bg-ski-blue/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
        >
          <Download className="h-4 w-4" />
          {isGenerating ? '生成中...' : '保存图片'}
        </button>
        <button
          onClick={handleShare}
          disabled={isGenerating}
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2.5 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
        >
          <Share2 className="h-4 w-4" />
          分享
        </button>
      </div>
    </div>
  )
}
