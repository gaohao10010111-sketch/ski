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
      const canvas = await html2canvas(badgeRef.current, { scale: 3, backgroundColor: null, useCORS: true })
      const link = document.createElement('a')
      link.download = `${data.athleteName}_海报_${data.season}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (e) { console.error('生成图片失败:', e) }
    finally { setIsGenerating(false) }
  }

  const handleShare = async () => {
    if (!badgeRef.current) return
    setIsGenerating(true)
    try {
      const canvas = await html2canvas(badgeRef.current, { scale: 3, backgroundColor: null, useCORS: true })
      canvas.toBlob(async (blob) => {
        if (!blob) return
        if (navigator.share && navigator.canShare) {
          const file = new File([blob], `${data.athleteName}_海报.png`, { type: 'image/png' })
          const shareData = { title: `${data.athleteName}的滑雪积分海报`, text: `${data.athleteName} 第${data.rank}名 ${data.points}分`, files: [file] }
          if (navigator.canShare(shareData)) await navigator.share(shareData)
          else await navigator.share({ title: shareData.title, text: shareData.text, url: siteUrl })
        } else {
          await navigator.clipboard.writeText(`${data.athleteName} 第${data.rank}名 ${data.points}分 ${siteUrl}`)
          alert('链接已复制到剪贴板！')
        }
      }, 'image/png')
    } catch (e) { console.error('分享失败:', e) }
    finally { setIsGenerating(false) }
  }

  const shortLabel = data.dataType === 'race' && data.competitionName
    ? data.competitionName.replace(/2025-2026赛季/, '').replace(/U系列比赛/, '').replace(/全国/, '')
    : '全国滑雪青少年U系列赛事官方积分排名'

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={badgeRef}
        className="relative overflow-hidden"
        style={{
          width: 360, height: 360, borderRadius: 14,
          background: 'linear-gradient(180deg, #ffffff 0%, #f8f6f1 100%)',
          border: '1px solid #e8e4dc',
        }}
      >
        {/* Top gold bar */}
        <div style={{ height: 3, background: 'linear-gradient(90deg, #b8860b, #d4a853, #f0d48a, #d4a853, #b8860b)' }} />

        <div className="relative z-10 flex flex-col items-center h-full pt-3 pb-3 px-5" style={{ height: 357 }}>
          {/* Official tags */}
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-[8px] font-bold text-white px-2 py-0.5 rounded" style={{ background: '#1e3a5f' }}>OFFICIAL</span>
            <span className="text-[8px] font-bold px-2 py-0.5 rounded" style={{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0' }}>{data.season} 赛季</span>
            <span className="text-[8px] font-bold px-2 py-0.5 rounded" style={{ background: '#fff7ed', color: '#9a3412', border: '1px solid #fed7aa' }}>U系列赛事</span>
          </div>

          {/* Rank badge */}
          <div className="mb-1.5">
            <RankBadge rank={data.rank} size={72} />
          </div>

          {/* Name + team */}
          <h3 className="text-xl font-black text-gray-900 leading-tight text-center">{data.athleteName}</h3>
          <p className="text-[11px] text-gray-400 font-medium truncate max-w-[260px] mb-2">{data.team}</p>

          {/* Points block */}
          <div className="w-full rounded-lg px-4 py-2.5 mb-2" style={{ background: 'linear-gradient(135deg, #1e3a5f, #0f2340)' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-1">
                <span className="text-white text-[32px] font-black leading-none tracking-tighter">{data.points}</span>
                <span className="text-[11px] font-bold" style={{ color: '#d4a853' }}>分</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-white/50 text-[9px] px-1.5 py-px rounded" style={{ background: 'rgba(255,255,255,0.1)' }}>{data.discipline}</span>
                <span className="text-white/50 text-[9px] px-1.5 py-px rounded" style={{ background: 'rgba(255,255,255,0.1)' }}>{data.ageGroup}</span>
                <span className="text-white/50 text-[9px] px-1.5 py-px rounded" style={{ background: 'rgba(255,255,255,0.1)' }}>{data.gender}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-[9px] text-center truncate max-w-[280px] mb-auto">{shortLabel}</p>

          {/* Bottom: logos + QR */}
          <div className="flex items-center justify-between w-full pt-2.5" style={{ borderTop: '1px solid #e8e4dc' }}>
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/csa.jpg" alt="CSA" className="rounded-full object-cover" style={{ width: 22, height: 22, border: '1px solid #e8e4dc' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/huati-icon.png" alt="CNSG" className="rounded-full object-contain" style={{ width: 22, height: 22, border: '1px solid #e8e4dc', background: '#fff' }} />
              <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: '#1e3a5f' }}>
                <Mountain className="text-white" style={{ width: 11, height: 11 }} />
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-semibold" style={{ color: '#1e3a5f' }}>cnskipoints.com</span>
              <DynamicQRCode url={siteUrl} size={26} dark="#1e3a5f" />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button onClick={handleDownload} disabled={isGenerating}
          className="flex items-center gap-2 text-white px-5 py-2.5 rounded-xl shadow-lg disabled:opacity-50 text-sm font-semibold transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #1e3a5f, #0f2340)' }}>
          <Download className="h-4 w-4" />
          {isGenerating ? '生成中...' : '保存图片'}
        </button>
        <button onClick={handleShare} disabled={isGenerating}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl disabled:opacity-50 text-sm font-semibold transition-all hover:bg-gray-50"
          style={{ border: '1px solid #d1d5db', color: '#374151' }}>
          <Share2 className="h-4 w-4" />
          分享
        </button>
      </div>
    </div>
  )
}
