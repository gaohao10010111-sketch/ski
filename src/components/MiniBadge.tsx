'use client'

import { useRef, useState } from 'react'
import { Download, Share2, Mountain } from 'lucide-react'
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
          borderRadius: 20,
          background: 'linear-gradient(165deg, #0c1426 0%, #162036 35%, #0e1a30 65%, #060d1a 100%)',
        }}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full opacity-[0.04]"
            style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
          />
          {/* Top gold accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, transparent, #f59e0b, #eab308, #f59e0b, transparent)' }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center h-full px-5 pt-4 pb-3.5">
          {/* Brand bar */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-4.5 h-4.5 rounded flex items-center justify-center"
              style={{ width: 18, height: 18, background: 'linear-gradient(135deg, #0ea5e9, #2563eb)', borderRadius: 4 }}>
              <Mountain className="h-2.5 w-2.5 text-white" style={{ width: 10, height: 10 }} />
            </div>
            <span className="text-white/60 text-[9px] font-extrabold tracking-[0.2em] uppercase">
              CSPS
            </span>
          </div>

          {/* Rank badge */}
          <div className="mb-2">
            <RankBadge rank={data.rank} size={76} />
          </div>

          {/* Name + team */}
          <div className="text-center mb-2">
            <h3 className="text-white text-lg font-black tracking-tight leading-tight">{data.athleteName}</h3>
            <p className="text-sky-300/40 text-[11px] font-medium truncate max-w-[260px]">{data.team}</p>
          </div>

          {/* Points */}
          <div className="text-center mb-1.5">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-white text-[36px] font-black leading-none tracking-tighter">{data.points}</span>
              <span className="text-sky-400/60 text-xs font-bold">PTS</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center justify-center gap-1 mb-1">
            <span className="text-white/50 text-[9px] font-semibold px-1.5 py-px rounded" style={{ background: 'rgba(255,255,255,0.06)' }}>
              {data.discipline}
            </span>
            <span className="text-white/50 text-[9px] font-semibold px-1.5 py-px rounded" style={{ background: 'rgba(255,255,255,0.06)' }}>
              {data.ageGroup}
            </span>
            <span className="text-white/50 text-[9px] font-semibold px-1.5 py-px rounded" style={{ background: 'rgba(255,255,255,0.06)' }}>
              {data.gender}
            </span>
          </div>
          <p className="text-white/20 text-[8px] truncate max-w-[260px] mb-auto">{shortLabel}</p>

          {/* Bottom: logos + QR */}
          <div className="flex items-center justify-between w-full mt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 8 }}>
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/csa.jpg" alt="CSA" className="rounded-full object-cover" style={{ width: 24, height: 24, border: '1px solid rgba(255,255,255,0.12)' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/huati-icon.png" alt="CNSG" className="rounded-full object-contain" style={{ width: 24, height: 24, background: 'white', border: '1px solid rgba(255,255,255,0.12)' }} />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sky-400/50 text-[9px] font-semibold">cnskipoints.com</span>
              <DynamicQRCode url={siteUrl} size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleDownload}
          disabled={isGenerating}
          className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-5 py-2.5 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg shadow-sky-500/20 disabled:opacity-50 text-sm font-semibold"
        >
          <Download className="h-4 w-4" />
          {isGenerating ? '生成中...' : '保存图片'}
        </button>
        <button
          onClick={handleShare}
          disabled={isGenerating}
          className="flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-xl hover:bg-white/15 transition-all border border-white/10 disabled:opacity-50 text-sm font-semibold"
        >
          <Share2 className="h-4 w-4" />
          分享
        </button>
      </div>
    </div>
  )
}
