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

// Rank badge with gold/silver/bronze styling
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
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full" style={{ border: `3px solid ${c.ring}`, opacity: 0.3 }} />
      <div className="absolute rounded-full" style={{ inset: 4, border: `2px solid ${c.ring}`, opacity: 0.5 }} />
      {/* Main circle */}
      <div
        className="rounded-full flex flex-col items-center justify-center shadow-lg"
        style={{ width: s * 2, height: s * 2, background: c.bg }}
      >
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

export default function PointsCard({
  athleteName, team, rank, totalPoints, competitionCount, bestRank,
  ageGroup, gender, discipline = '综合积分', season = '2025-2026',
  dataType = 'season', competitionName, bestScore,
}: PointsCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const avgPoints = competitionCount > 0 ? totalPoints / competitionCount : 0
  const siteUrl = 'https://cnskipoints.com'

  const shortCompName = competitionName
    ? competitionName.replace(/2025-2026赛季/, '').replace(/全国/, '').replace(/U系列比赛/, '')
    : ''

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
        className="relative w-[380px] overflow-hidden"
        style={{
          borderRadius: 16,
          background: 'linear-gradient(180deg, #ffffff 0%, #f8f6f1 100%)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          border: '1px solid #e8e4dc',
        }}
      >
        {/* Top gold accent */}
        <div style={{ height: 4, background: 'linear-gradient(90deg, #b8860b, #d4a853, #f0d48a, #d4a853, #b8860b)' }} />

        <div className="relative z-10 px-6 pt-5 pb-5">
          {/* Official tags row */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[10px] font-bold text-white px-2.5 py-1 rounded" style={{ background: '#1e3a5f' }}>OFFICIAL</span>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0' }}>{season} 赛季</span>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded" style={{ background: '#fff7ed', color: '#9a3412', border: '1px solid #fed7aa' }}>U系列赛事</span>
          </div>

          {/* Title */}
          <div className="text-center mb-5">
            <h3 className="text-lg font-black text-gray-900 mb-1">
              {dataType === 'race' ? '单场比赛成绩' : '积分排名'}
            </h3>
            <p className="text-[11px] text-gray-400">
              {dataType === 'race' ? shortCompName : '全国滑雪青少年U系列赛事官方积分排名'}
            </p>
          </div>

          {/* Divider */}
          <div className="mx-auto mb-5" style={{ width: 40, height: 2, background: 'linear-gradient(90deg, #d4a853, #b8860b, #d4a853)', borderRadius: 1 }} />

          {/* Athlete section */}
          <div className="flex items-center gap-5 mb-5">
            <RankBadge rank={rank} size={96} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] font-semibold text-gray-400">{ageGroup}</span>
                <span className="text-gray-300 text-[10px]">|</span>
                <span className="text-[10px] font-semibold text-gray-400">{gender}</span>
                <span className="text-gray-300 text-[10px]">|</span>
                <span className="text-[10px] font-semibold text-gray-400">{discipline}</span>
              </div>
              <h2 className="text-[28px] font-black text-gray-900 leading-tight tracking-tight mb-1">{athleteName}</h2>
              <p className="text-sm text-gray-400 font-medium truncate">{team}</p>
            </div>
          </div>

          {/* Points display */}
          <div className="rounded-xl p-4 mb-4" style={{ background: 'linear-gradient(135deg, #1e3a5f, #0f2340)', border: '1px solid #2d4a6f' }}>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-white/50 text-[10px] font-semibold tracking-wider mb-1">
                  {dataType === 'race' ? '比赛积分' : '赛季总积分'}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-white text-[48px] font-black leading-none tracking-tighter">{totalPoints}</span>
                  <span className="text-[13px] font-bold" style={{ color: '#d4a853' }}>分</span>
                </div>
              </div>
              {dataType === 'race' && bestScore ? (
                <div className="text-right">
                  <div className="text-white/50 text-[10px] font-semibold tracking-wider mb-1">最佳成绩</div>
                  <div className="text-white text-3xl font-black leading-none">{bestScore}</div>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-white font-bold text-base leading-tight">{competitionCount}</div>
                    <div className="text-white/40 text-[9px] mt-0.5">参赛</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-base leading-tight">#{bestRank}</div>
                    <div className="text-white/40 text-[9px] mt-0.5">最佳</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-base leading-tight">{avgPoints.toFixed(0)}</div>
                    <div className="text-white/40 text-[9px] mt-0.5">均分</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom: logos + QR */}
          <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid #e8e4dc' }}>
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/csa.jpg" alt="中国滑雪协会" className="rounded-full object-cover" style={{ width: 32, height: 32, border: '1.5px solid #e8e4dc' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/huati-icon.png" alt="华体冰雪" className="rounded-full object-contain" style={{ width: 32, height: 32, border: '1.5px solid #e8e4dc', background: '#fff' }} />
              <div className="flex items-center gap-1 ml-1">
                <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: '#1e3a5f' }}>
                  <Mountain className="h-3.5 w-3.5 text-white" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right leading-none">
                <div className="text-gray-400 text-[9px]">扫码查看完整排名</div>
                <div className="text-[11px] font-bold mt-0.5" style={{ color: '#1e3a5f' }}>cnskipoints.com</div>
              </div>
              <DynamicQRCode url={siteUrl} size={44} dark="#1e3a5f" />
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
