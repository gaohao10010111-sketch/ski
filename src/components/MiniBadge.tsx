'use client'

import { useRef, useState } from 'react'
import { Download, Share2, Mountain } from 'lucide-react'
import html2canvas from 'html2canvas'
import { DynamicQRCode } from '@/components/PointsCard'
import type { BadgeCardData } from '@/lib/badgeData'

interface MiniBadgeProps {
  data: BadgeCardData
}

export default function MiniBadge({ data }: MiniBadgeProps) {
  const badgeRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const siteUrl = 'https://cnskipoints.com'

  const rankText = data.rank === 1 ? '冠军' : data.rank === 2 ? '亚军' : data.rank === 3 ? '季军' : `第${data.rank}名`
  const isTopThree = data.rank <= 3

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

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={badgeRef}
        className="relative overflow-hidden"
        style={{
          width: 360, height: 360, borderRadius: 14,
          background: 'linear-gradient(180deg, #d4e4ef 0%, #e4eef5 25%, #f0f5f8 50%, #fafcfd 80%, #ffffff 100%)',
          border: '1px solid #c8d8e4',
        }}
      >
        {/* Snow dots */}
        {[
          { top: 10, left: 20, size: 4, opacity: 0.15 },
          { top: 6, left: 120, size: 3, opacity: 0.12 },
          { top: 25, left: 260, size: 5, opacity: 0.13 },
          { top: 4, left: 200, size: 3, opacity: 0.18 },
          { top: 35, left: 50, size: 4, opacity: 0.1 },
          { top: 18, left: 320, size: 4, opacity: 0.14 },
          { top: 30, left: 160, size: 3, opacity: 0.16 },
          { top: 15, left: 90, size: 3, opacity: 0.1 },
        ].map((d, i) => (
          <div key={i} className="absolute rounded-full" style={{ top: d.top, left: d.left, width: d.size, height: d.size, background: '#94b8d0', opacity: d.opacity }} />
        ))}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center h-full pt-5 pb-4 px-5">
          {/* Header */}
          <p className="font-black tracking-[0.2em] mb-0.5" style={{ fontSize: 11, color: '#1e3a5f' }}>
            中国滑雪U系列赛事
          </p>
          <div className="mx-auto mb-3" style={{ width: 36, height: 1.5, background: 'linear-gradient(90deg, transparent, #1e3a5f, transparent)' }} />

          {/* Name - large */}
          <h2 className="font-black leading-tight text-center mb-1" style={{ fontSize: 32, color: '#1e3a5f', letterSpacing: '0.05em' }}>
            {data.athleteName}
          </h2>

          {/* Category */}
          <p className="text-[11px] font-bold mb-0.5" style={{ color: '#3d6a8e' }}>
            {data.discipline} · {data.ageGroup} · {data.gender}
          </p>
          <p className="text-[10px] mb-3" style={{ color: '#8fafc5' }}>{data.team}</p>

          {/* Score - hero element */}
          <div className="text-center flex-1 flex flex-col justify-center">
            <p className="text-[9px] font-semibold tracking-[0.15em] mb-1.5" style={{ color: '#7a9bb5' }}>
              {data.dataType === 'race' ? '比赛积分' : '赛季总积分'}
            </p>
            <div className="flex items-baseline justify-center">
              <span className="font-black leading-none" style={{ fontSize: 58, color: '#1e3a5f', letterSpacing: '-0.03em' }}>
                {data.points}
              </span>
              <span className="font-bold ml-0.5" style={{ fontSize: 16, color: '#5a8aaa' }}>分</span>
            </div>

            {/* Rank */}
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <div style={{ width: 24, height: 1, background: isTopThree ? 'linear-gradient(90deg, transparent, #c4a24e)' : 'linear-gradient(90deg, transparent, #7a9bb5)' }} />
              <span className="font-black px-3 py-1 rounded-full" style={{
                fontSize: 13,
                background: isTopThree ? 'linear-gradient(135deg, #d4a853, #b8860b)' : '#1e3a5f',
                color: '#fff',
              }}>
                {rankText}
              </span>
              <div style={{ width: 24, height: 1, background: isTopThree ? 'linear-gradient(90deg, #c4a24e, transparent)' : 'linear-gradient(90deg, #7a9bb5, transparent)' }} />
            </div>
          </div>

          {/* Season */}
          <p className="text-[11px] font-semibold mb-2.5" style={{ color: '#5a8aaa' }}>{data.season} 赛季</p>

          {/* Bottom: logos + QR */}
          <div className="flex items-center justify-between w-full pt-2" style={{ borderTop: '1px solid #c8d8e4' }}>
            <div className="flex items-center gap-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/csa.jpg" alt="CSA" className="rounded-full object-cover" style={{ width: 20, height: 20, border: '1px solid #c8d8e4' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/huati-icon.png" alt="CNSG" className="rounded-full object-contain" style={{ width: 20, height: 20, border: '1px solid #c8d8e4', background: '#fff' }} />
              <div className="w-4 h-4 rounded flex items-center justify-center" style={{ background: '#1e3a5f' }}>
                <Mountain className="text-white" style={{ width: 10, height: 10 }} />
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-semibold" style={{ color: '#1e3a5f' }}>cnskipoints.com</span>
              <DynamicQRCode url={siteUrl} size={24} dark="#1e3a5f" />
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
