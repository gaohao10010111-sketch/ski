'use client'

import { useState, useRef, useEffect } from 'react'
import { Download, Share2, Mountain } from 'lucide-react'
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

// Rank badge - kept as export for compatibility
export function RankBadge({ rank, size = 100 }: { rank: number; size?: number }) {
  const getColors = () => {
    if (rank === 1) return { bg: 'linear-gradient(135deg, #ffd700, #b8860b)', text: '#78350f', label: '冠军', icon: '👑', ring: '#daa520' }
    if (rank === 2) return { bg: 'linear-gradient(135deg, #e8e8e8, #a8a8a8)', text: '#374151', label: '亚军', icon: '🥈', ring: '#c0c0c0' }
    if (rank === 3) return { bg: 'linear-gradient(135deg, #cd7f32, #8b4513)', text: '#fff', label: '季军', icon: '🥉', ring: '#b8860b' }
    if (rank <= 10) return { bg: 'linear-gradient(135deg, #1e3a5f, #0f2340)', text: '#fff', label: `TOP${rank}`, icon: '⭐', ring: '#1e3a5f' }
    return { bg: 'linear-gradient(135deg, #475569, #334155)', text: '#fff', label: `#${rank}`, icon: '🎿', ring: '#475569' }
  }
  const c = getColors()
  const s = size * 0.38
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-full" style={{ border: `3px solid ${c.ring}`, opacity: 0.3 }} />
      <div className="absolute rounded-full" style={{ inset: 4, border: `2px solid ${c.ring}`, opacity: 0.5 }} />
      <div className="rounded-full flex flex-col items-center justify-center shadow-lg" style={{ width: s * 2, height: s * 2, background: c.bg }}>
        <span className="leading-none" style={{ fontSize: s * 0.55 }}>{c.icon}</span>
        <span className="font-black leading-none mt-0.5" style={{ fontSize: s * 0.35, color: c.text }}>{c.label}</span>
      </div>
    </div>
  )
}

// QR code component
export function DynamicQRCode({ url, size = 64, dark = '#1e3a5f' }: { url: string; size?: number; dark?: string }) {
  const [qrDataUrl, setQrDataUrl] = useState<string>('')
  useEffect(() => {
    QRCode.toDataURL(url, { width: size * 2, margin: 1, color: { dark, light: '#ffffff' } })
      .then(setQrDataUrl).catch(console.error)
  }, [url, size, dark])
  if (!qrDataUrl) return <div className="bg-gray-100 rounded" style={{ width: size, height: size }} />
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={qrDataUrl} alt="扫码查看" className="rounded" style={{ width: size, height: size }} />
}

// Decorative snow dots
function SnowDots({ count = 12, area = { w: 380, h: 200 } }: { count?: number; area?: { w: number; h: number } }) {
  const dots = [
    { top: 15, left: 25, size: 5, opacity: 0.18 },
    { top: 8, left: 130, size: 4, opacity: 0.12 },
    { top: 35, left: 280, size: 6, opacity: 0.15 },
    { top: 5, left: 210, size: 3, opacity: 0.22 },
    { top: 50, left: 55, size: 4, opacity: 0.1 },
    { top: 28, left: 340, size: 5, opacity: 0.16 },
    { top: 42, left: 170, size: 3, opacity: 0.2 },
    { top: 60, left: 95, size: 4, opacity: 0.12 },
    { top: 12, left: 310, size: 5, opacity: 0.08 },
    { top: 55, left: 240, size: 3, opacity: 0.15 },
    { top: 20, left: 70, size: 4, opacity: 0.14 },
    { top: 45, left: 350, size: 3, opacity: 0.1 },
  ].slice(0, count)

  return (
    <>
      {dots.map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{ top: d.top, left: d.left, width: d.size, height: d.size, background: '#94b8d0', opacity: d.opacity }}
        />
      ))}
    </>
  )
}

export default function PointsCard({
  athleteName, team, rank, totalPoints, competitionCount, bestRank,
  ageGroup, gender, discipline = '综合积分', season = '2025-2026',
  dataType = 'season', competitionName, bestScore,
}: PointsCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const siteUrl = 'https://cnskipoints.com'

  const shortCompName = competitionName
    ? competitionName.replace(/2025-2026赛季/, '').replace(/全国/, '').replace(/U系列比赛/, '')
    : ''

  const rankText = rank === 1 ? '冠军' : rank === 2 ? '亚军' : rank === 3 ? '季军' : `第${rank}名`
  const isTopThree = rank <= 3

  const handleDownload = async () => {
    if (!cardRef.current) return
    setIsGenerating(true)
    try {
      const canvas = await html2canvas(cardRef.current, { scale: 3, backgroundColor: null, useCORS: true })
      const link = document.createElement('a')
      link.download = `${athleteName}_积分海报_${season}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (e) { console.error('生成图片失败:', e) }
    finally { setIsGenerating(false) }
  }

  const handleShare = async () => {
    if (!cardRef.current) return
    setIsGenerating(true)
    try {
      const canvas = await html2canvas(cardRef.current, { scale: 3, backgroundColor: null, useCORS: true })
      canvas.toBlob(async (blob) => {
        if (!blob) return
        if (navigator.share && navigator.canShare) {
          const file = new File([blob], `${athleteName}_积分海报.png`, { type: 'image/png' })
          const shareData = { title: `${athleteName}的滑雪积分海报`, text: `${athleteName} ${ageGroup}${gender}${discipline} 第${rank}名 ${totalPoints}分 ${siteUrl}`, files: [file] }
          if (navigator.canShare(shareData)) await navigator.share(shareData)
          else await navigator.share({ title: shareData.title, text: shareData.text, url: siteUrl })
        } else {
          await navigator.clipboard.writeText(`${athleteName} 第${rank}名 ${totalPoints}分 ${siteUrl}`)
          alert('链接已复制到剪贴板！')
        }
      }, 'image/png')
    } catch (e) { console.error('分享失败:', e) }
    finally { setIsGenerating(false) }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={cardRef}
        className="relative overflow-hidden"
        style={{
          width: 380,
          height: 660,
          borderRadius: 16,
          background: 'linear-gradient(180deg, #d4e4ef 0%, #e2edf5 18%, #edf3f7 35%, #f5f8fa 55%, #fafcfd 75%, #ffffff 100%)',
          border: '1px solid #c8d8e4',
        }}
      >
        {/* Snow decoration dots */}
        <SnowDots />

        {/* Subtle mountain silhouette watermark */}
        <div className="absolute" style={{ bottom: 180, left: 0, right: 0, height: 120, opacity: 0.035 }}>
          <svg viewBox="0 0 380 120" width="380" height="120" style={{ display: 'block' }}>
            <path d="M0,120 L60,55 L95,80 L140,25 L185,65 L220,35 L270,70 L310,20 L350,60 L380,40 L380,120 Z" fill="#1e3a5f" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center h-full px-7 pt-8 pb-5">
          {/* Header branding */}
          <div className="text-center mb-2">
            <p className="font-black tracking-[0.25em]" style={{ fontSize: 15, color: '#1e3a5f' }}>
              中国滑雪U系列赛事
            </p>
            <p className="text-[12px] font-semibold mt-1" style={{ color: '#6a9ab8' }}>
              {dataType === 'race' ? shortCompName : '官方积分排名'}
            </p>
          </div>
          <div className="mx-auto mb-6" style={{ width: 50, height: 2, background: 'linear-gradient(90deg, transparent, #1e3a5f, transparent)' }} />

          {/* Athlete name - HERO text */}
          <h1 className="font-black leading-tight text-center mb-2" style={{ fontSize: 44, color: '#1e3a5f', letterSpacing: '0.06em' }}>
            {athleteName}
          </h1>

          {/* Discipline + category */}
          <p className="text-[15px] font-bold mb-1" style={{ color: '#3d6a8e' }}>
            {discipline} · {ageGroup} · {gender}
          </p>

          {/* Team */}
          <p className="text-[12px] mb-6" style={{ color: '#8fafc5' }}>{team}</p>

          {/* Score section - visual centerpiece */}
          <div className="text-center flex-1 flex flex-col justify-center">
            <p className="text-[11px] font-semibold tracking-[0.2em] mb-3" style={{ color: '#7a9bb5' }}>
              {dataType === 'race' ? '比赛积分' : '赛季总积分'}
            </p>
            <div className="flex items-baseline justify-center">
              <span className="font-black leading-none" style={{ fontSize: 92, color: '#1e3a5f', letterSpacing: '-0.03em' }}>
                {totalPoints}
              </span>
              <span className="font-bold ml-1" style={{ fontSize: 24, color: '#5a8aaa' }}>分</span>
            </div>

            {/* Rank pill */}
            <div className="flex items-center justify-center gap-2 mt-5">
              <div style={{ width: 35, height: 1, background: isTopThree ? 'linear-gradient(90deg, transparent, #c4a24e)' : 'linear-gradient(90deg, transparent, #7a9bb5)' }} />
              <span className="font-black px-5 py-1.5 rounded-full" style={{
                fontSize: 18,
                background: isTopThree ? 'linear-gradient(135deg, #d4a853, #b8860b)' : '#1e3a5f',
                color: '#fff',
              }}>
                {rankText}
              </span>
              <div style={{ width: 35, height: 1, background: isTopThree ? 'linear-gradient(90deg, #c4a24e, transparent)' : 'linear-gradient(90deg, #7a9bb5, transparent)' }} />
            </div>

            {/* Stats row */}
            {dataType === 'race' ? (
              bestScore ? (
                <div className="mt-4 text-center">
                  <span className="text-[12px]" style={{ color: '#7a9bb5' }}>最佳成绩 </span>
                  <span className="text-[17px] font-bold" style={{ color: '#1e3a5f' }}>{bestScore}</span>
                </div>
              ) : null
            ) : (
              <div className="flex justify-center gap-8 mt-5">
                <div className="text-center">
                  <div className="text-[20px] font-bold" style={{ color: '#1e3a5f' }}>{competitionCount}</div>
                  <div className="text-[10px] font-medium" style={{ color: '#8fafc5' }}>参赛场次</div>
                </div>
                <div style={{ width: 1, background: '#c8d8e4' }} />
                <div className="text-center">
                  <div className="text-[20px] font-bold" style={{ color: '#1e3a5f' }}>#{bestRank}</div>
                  <div className="text-[10px] font-medium" style={{ color: '#8fafc5' }}>最佳名次</div>
                </div>
                <div style={{ width: 1, background: '#c8d8e4' }} />
                <div className="text-center">
                  <div className="text-[20px] font-bold" style={{ color: '#1e3a5f' }}>
                    {competitionCount > 0 ? (totalPoints / competitionCount).toFixed(0) : 0}
                  </div>
                  <div className="text-[10px] font-medium" style={{ color: '#8fafc5' }}>场均积分</div>
                </div>
              </div>
            )}
          </div>

          {/* Season */}
          <p className="text-[13px] font-semibold mb-4" style={{ color: '#5a8aaa' }}>{season} 赛季</p>

          {/* Bottom: logos + QR */}
          <div className="flex items-center justify-between w-full pt-3" style={{ borderTop: '1px solid #c8d8e4' }}>
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/csa.jpg" alt="CSA" className="rounded-full object-cover" style={{ width: 28, height: 28, border: '1px solid #c8d8e4' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/huati-icon.png" alt="CNSG" className="rounded-full object-contain" style={{ width: 28, height: 28, border: '1px solid #c8d8e4', background: '#fff' }} />
              <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: '#1e3a5f' }}>
                <Mountain className="text-white" style={{ width: 14, height: 14 }} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold" style={{ color: '#1e3a5f' }}>cnskipoints.com</span>
              <DynamicQRCode url={siteUrl} size={36} dark="#1e3a5f" />
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button onClick={handleDownload} disabled={isGenerating}
          className="flex items-center gap-2 text-white px-6 py-2.5 rounded-xl shadow-lg disabled:opacity-50 text-sm font-semibold transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #1e3a5f, #0f2340)' }}>
          <Download className="h-4 w-4" />
          {isGenerating ? '生成中...' : '保存图片'}
        </button>
        <button onClick={handleShare} disabled={isGenerating}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl disabled:opacity-50 text-sm font-semibold transition-all hover:bg-gray-50"
          style={{ border: '1px solid #d1d5db', color: '#374151' }}>
          <Share2 className="h-4 w-4" />
          分享海报
        </button>
      </div>
    </div>
  )
}
