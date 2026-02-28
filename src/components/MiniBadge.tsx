'use client'

import { useRef, useState } from 'react'
import { Download, Share2, Zap } from 'lucide-react'
import html2canvas from 'html2canvas'
import { RankBadge, DynamicQRCode } from '@/components/PointsCard'
import type { BadgeCardData } from '@/lib/badgeData'

interface MiniBadgeProps {
  data: BadgeCardData
}

export default function MiniBadge({ data }: MiniBadgeProps) {
  const badgeRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const siteUrl = 'https://cnskipoints.com'

  const handleDownload = async () => {
    if (!badgeRef.current) return
    setIsGenerating(true)
    try {
      const canvas = await html2canvas(badgeRef.current, {
        scale: 3,
        backgroundColor: null,
        useCORS: true,
      })
      const link = document.createElement('a')
      link.download = `${data.athleteName}_徽章_${data.season}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (error) {
      console.error('生成图片失败:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleShare = async () => {
    if (!badgeRef.current) return
    setIsGenerating(true)
    try {
      const canvas = await html2canvas(badgeRef.current, {
        scale: 3,
        backgroundColor: null,
        useCORS: true,
      })
      canvas.toBlob(async (blob) => {
        if (!blob) return
        if (navigator.share && navigator.canShare) {
          const file = new File([blob], `${data.athleteName}_徽章.png`, { type: 'image/png' })
          const shareData = {
            title: `${data.athleteName}的滑雪积分徽章`,
            text: `${data.athleteName} | ${data.discipline} ${data.ageGroup} ${data.gender} | 排名第${data.rank} | ${data.points}分`,
            files: [file],
          }
          if (navigator.canShare(shareData)) {
            await navigator.share(shareData)
          } else {
            await navigator.share({ title: shareData.title, text: shareData.text, url: siteUrl })
          }
        } else {
          await navigator.clipboard.writeText(
            `${data.athleteName}的滑雪积分徽章 - 第${data.rank}名，${data.points}分！${siteUrl}`
          )
          alert('链接已复制到剪贴板！')
        }
      }, 'image/png')
    } catch (error) {
      console.error('分享失败:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  // Shorten long competition names for display
  const shortLabel = data.dataType === 'race' && data.competitionName
    ? data.competitionName.replace(/2025-2026赛季/, '').replace(/U系列比赛/, '').replace(/全国/, '')
    : `${data.season} 赛季总积分`

  return (
    <div className="flex flex-col items-center gap-4">
      {/* 360x360 mini badge */}
      <div
        ref={badgeRef}
        className="relative overflow-hidden"
        style={{
          width: 360,
          height: 360,
          borderRadius: 24,
          background: 'linear-gradient(160deg, #0f172a 0%, #1e3a5f 40%, #0f172a 80%, #020617 100%)',
        }}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '16px 16px',
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between h-full px-5 py-4">
          {/* Brand bar */}
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-md flex items-center justify-center">
              <Zap className="h-3 w-3 text-white" />
            </div>
            <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase">
              China Ski Points
            </span>
          </div>

          {/* Rank badge */}
          <RankBadge rank={data.rank} size={80} />

          {/* Name + team */}
          <div className="text-center">
            <h3 className="text-white text-xl font-black tracking-tight">{data.athleteName}</h3>
            <p className="text-cyan-300/80 text-xs font-medium truncate max-w-[280px]">{data.team}</p>
          </div>

          {/* Points + tags */}
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-1 mb-1.5">
              <span className="text-white text-4xl font-black tracking-tighter">{data.points}</span>
              <span className="text-cyan-400 text-sm font-bold">PTS</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              <span className="bg-white/10 text-white/80 text-[10px] px-2 py-0.5 rounded-full">
                {data.discipline}
              </span>
              <span className="bg-white/10 text-white/80 text-[10px] px-2 py-0.5 rounded-full">
                {data.ageGroup}
              </span>
              <span className="bg-white/10 text-white/80 text-[10px] px-2 py-0.5 rounded-full">
                {data.gender}
              </span>
            </div>
            <p className="text-gray-500 text-[9px] mt-1 truncate max-w-[280px]">{shortLabel}</p>
          </div>

          {/* Logos + QR code + url */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/csa.jpg" alt="中国滑雪协会" className="h-7 w-auto rounded-sm" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/huati.png" alt="华体冰雪" className="h-7 w-auto" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-cyan-400/70 text-[9px] font-medium">cnskipoints.com</span>
              <DynamicQRCode url={siteUrl} size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleDownload}
          disabled={isGenerating}
          className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 text-sm font-medium"
        >
          <Download className="h-4 w-4" />
          {isGenerating ? '生成中...' : '保存图片'}
        </button>
        <button
          onClick={handleShare}
          disabled={isGenerating}
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2.5 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-green-500/25 disabled:opacity-50 text-sm font-medium"
        >
          <Share2 className="h-4 w-4" />
          分享
        </button>
      </div>
    </div>
  )
}
