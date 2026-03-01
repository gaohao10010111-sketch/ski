'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { Download, Share2 } from 'lucide-react'
import html2canvas from 'html2canvas'
import QRCode from 'qrcode'

// Detect basePath: '/ski' for GitHub Pages / dev, '' for standalone (cnskipoints.com)
export function detectBasePath() {
  if (typeof window === 'undefined') return '/ski'
  // Check Next.js script tags - most reliable across client-side navigations
  const scripts = document.querySelectorAll('script[src]')
  if (Array.from(scripts).some(s => s.src.includes('/ski/_next'))) return '/ski'
  // Fallback: check current or referrer URL
  if (window.location.pathname.startsWith('/ski')) return '/ski'
  return ''
}

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
  bestResultText?: string
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

// SVG ski equipment decoration (ski boards + poles silhouette)
function SkiEquipment({ x, y, rotation = 0, scale = 1, opacity = 0.1 }: { x: number; y: number; rotation?: number; scale?: number; opacity?: number }) {
  return (
    <svg
      className="absolute"
      style={{
        left: x,
        top: y,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        opacity,
        pointerEvents: 'none',
      }}
      width="160"
      height="180"
      viewBox="0 0 160 180"
      fill="none"
    >
      {/* Pair of parallel ski boards */}
      <rect x="30" y="10" width="12" height="160" rx="6" fill="rgba(15,35,64,0.9)" />
      <rect x="52" y="10" width="12" height="160" rx="6" fill="rgba(15,35,64,0.9)" />
      {/* Ski board tips (top curve) */}
      <ellipse cx="36" cy="12" rx="6" ry="4" fill="rgba(15,35,64,0.9)" />
      <ellipse cx="58" cy="12" rx="6" ry="4" fill="rgba(15,35,64,0.9)" />
      {/* Crossed poles */}
      <line x1="90" y1="15" x2="130" y2="170" stroke="rgba(15,35,64,0.9)" strokeWidth="4" strokeLinecap="round" />
      <line x1="130" y1="15" x2="90" y2="170" stroke="rgba(15,35,64,0.9)" strokeWidth="4" strokeLinecap="round" />
      {/* Pole handles (top circles) */}
      <circle cx="90" cy="13" r="6" fill="rgba(15,35,64,0.9)" />
      <circle cx="130" cy="13" r="6" fill="rgba(15,35,64,0.9)" />
      {/* Pole baskets (bottom circles) */}
      <circle cx="130" cy="170" r="5" stroke="rgba(15,35,64,0.9)" strokeWidth="2" fill="none" />
      <circle cx="90" cy="170" r="5" stroke="rgba(15,35,64,0.9)" strokeWidth="2" fill="none" />
    </svg>
  )
}

// SVG snowflake decorations
function Snowflakes({ count = 15, area = { w: 380, h: 300 } }: { count?: number; area?: { w: number; h: number } }) {
  const flakes = [
    { top: 18, left: 30, size: 16, opacity: 0.25, rotation: 0 },
    { top: 45, left: 310, size: 20, opacity: 0.3, rotation: 30 },
    { top: 80, left: 60, size: 12, opacity: 0.2, rotation: 15 },
    { top: 12, left: 180, size: 14, opacity: 0.22, rotation: 45 },
    { top: 100, left: 340, size: 10, opacity: 0.18, rotation: 60 },
    { top: 55, left: 140, size: 18, opacity: 0.28, rotation: 20 },
    { top: 130, left: 25, size: 10, opacity: 0.15, rotation: 10 },
    { top: 35, left: 260, size: 14, opacity: 0.22, rotation: 50 },
    { top: 90, left: 200, size: 8, opacity: 0.18, rotation: 35 },
    { top: 150, left: 280, size: 12, opacity: 0.2, rotation: 25 },
    { top: 70, left: 350, size: 10, opacity: 0.16, rotation: 40 },
    { top: 8, left: 95, size: 12, opacity: 0.2, rotation: 55 },
    { top: 115, left: 160, size: 8, opacity: 0.15, rotation: 5 },
    { top: 60, left: 5, size: 14, opacity: 0.22, rotation: 70 },
    { top: 140, left: 110, size: 10, opacity: 0.17, rotation: 15 },
  ].slice(0, count)

  return (
    <>
      {flakes.map((f, i) => (
        <svg
          key={i}
          className="absolute"
          style={{ top: f.top, left: f.left, opacity: f.opacity, transform: `rotate(${f.rotation}deg)` }}
          width={f.size}
          height={f.size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        >
          {/* 6-arm snowflake */}
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="3.27" y1="7" x2="20.73" y2="17" />
          <line x1="3.27" y1="17" x2="20.73" y2="7" />
          {/* Branch tips */}
          <line x1="12" y1="2" x2="9.5" y2="5" />
          <line x1="12" y1="2" x2="14.5" y2="5" />
          <line x1="12" y1="22" x2="9.5" y2="19" />
          <line x1="12" y1="22" x2="14.5" y2="19" />
          <line x1="3.27" y1="7" x2="5.5" y2="5.2" />
          <line x1="3.27" y1="7" x2="4.5" y2="9.8" />
          <line x1="20.73" y1="7" x2="18.5" y2="5.2" />
          <line x1="20.73" y1="7" x2="19.5" y2="9.8" />
        </svg>
      ))}
    </>
  )
}

export default function PointsCard({
  athleteName, team, rank, totalPoints, competitionCount, bestRank,
  ageGroup, gender, discipline = '综合积分', season = '2025-2026',
  dataType = 'season', competitionName, bestScore, bestResultText,
}: PointsCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const basePath = useMemo(() => detectBasePath(), [])
  const siteUrl = 'https://cnskipoints.com'

  const shortCompName = competitionName
    ? competitionName.replace(/2025-2026赛季/, '').replace(/全国/, '').replace(/U系列比赛/, '')
    : ''

  const rankText = `第${rank}名`

  // Strip trailing "组" from gender if present to avoid "男子组组"
  const genderBase = gender.replace(/组$/, '')
  const headlineLine1 = athleteName
  const headlineLine2 = `${discipline} · ${ageGroup} · ${genderBase}组`

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
          height: 800,
          borderRadius: 16,
          background: '#ffffff',
        }}
      >
        {/* ===== Background photo top 45% ===== */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/images/snow-mountain-bg.png`}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 380,
            height: 320,
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />

        {/* Light overlay on photo for contrast */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 380,
            height: 320,
            background: 'linear-gradient(180deg, rgba(15,35,64,0.15) 0%, rgba(15,35,64,0.05) 50%, rgba(15,35,64,0.1) 100%)',
          }}
        />

        {/* White gradient fade from photo to white */}
        <div
          style={{
            position: 'absolute',
            top: 260,
            left: 0,
            width: 380,
            height: 80,
            background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,1) 100%)',
          }}
        />

        {/* ===== SVG Snowflake decorations on photo area ===== */}
        <Snowflakes count={15} />

        {/* ===== SVG Ski equipment decorations ===== */}
        <SkiEquipment x={280} y={20} rotation={-25} scale={0.9} opacity={0.045} />
        <SkiEquipment x={-50} y={140} rotation={15} scale={0.8} opacity={0.035} />
        <SkiEquipment x={290} y={530} rotation={-40} scale={0.7} opacity={0.045} />

        {/* ===== Top-left mountain icon (matches navbar) ===== */}
        <div className="absolute z-20" style={{ top: 14, left: 16 }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.3))' }}>
            <path d="m8 3 4 8 5-5 5 16H2L8 3z" />
          </svg>
        </div>

        {/* ===== Brand text on photo ===== */}
        <div className="absolute z-20" style={{ top: 18, right: 16 }}>
          <p className="font-bold tracking-[0.15em]" style={{ fontSize: 11, color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>
            {dataType === 'race' ? shortCompName : '中国滑雪U系列赛事'}
          </p>
        </div>

        {/* ===== Content area (below photo transition) ===== */}
        <div className="relative z-10 flex flex-col items-center h-full" style={{ paddingTop: 275, paddingLeft: 24, paddingRight: 24, paddingBottom: 18 }}>

          {/* Headline: name large, category info smaller */}
          <div className="text-center w-full" style={{ marginBottom: 2 }}>
            <h1 className="font-black leading-tight" style={{ fontSize: 44, color: '#000000', letterSpacing: '0.01em', lineHeight: 1.2 }}>
              {headlineLine1}
            </h1>
            <p className="font-bold" style={{ fontSize: 18, color: '#1e3a5f', lineHeight: 1.3, marginTop: 4 }}>
              {headlineLine2}
            </p>
          </div>

          {/* Team */}
          <p style={{ fontSize: 14, color: '#1e3a5f', fontWeight: 700, marginBottom: 6 }}>{team}</p>

          {/* Score label */}
          <p className="font-bold tracking-[0.15em]" style={{ fontSize: 13, color: '#3d6a8e', marginBottom: 6 }}>
            {dataType === 'race' ? '比赛积分' : `${season} 赛季总积分`}
          </p>

          {/* ===== HERO score number - EXTRA LARGE ===== */}
          <div className="flex items-baseline justify-center">
            <span className="font-black leading-none" style={{ fontSize: 84, color: '#000000', letterSpacing: '-0.03em' }}>
              {totalPoints}
            </span>
            <span className="font-black" style={{ fontSize: 26, color: '#1e3a5f', marginLeft: 4 }}>分</span>
          </div>

          {/* Rank - prominent, same importance as score */}
          <p className="font-bold tracking-[0.15em]" style={{ fontSize: 13, color: '#3d6a8e', marginTop: 4, marginBottom: 2 }}>
            实时排名
          </p>
          <div className="flex items-baseline justify-center">
            <span className="font-black leading-none" style={{ fontSize: 44, color: '#0f2340', letterSpacing: '-0.02em' }}>
              {rankText}
            </span>
          </div>

          {/* Stats row (season mode only) */}
          {dataType === 'race' ? (
            bestScore ? (
              <div style={{ marginTop: 14, textAlign: 'center' }}>
                <span style={{ fontSize: 13, color: '#3d6a8e', fontWeight: 600 }}>最佳成绩 </span>
                <span style={{ fontSize: 18, fontWeight: 800, color: '#000' }}>{bestScore}</span>
              </div>
            ) : null
          ) : (
            <div className="flex justify-center gap-8" style={{ marginTop: 8 }}>
              <div className="text-center">
                <div style={{ fontSize: 22, fontWeight: 800, color: '#000' }}>{competitionCount}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#3d6a8e' }}>参赛场次</div>
              </div>
              <div style={{ width: 1, background: '#1e3a5f', opacity: 0.3 }} />
              <div className="text-center" style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#000', lineHeight: 1.3 }}>{bestResultText || `第${bestRank}名`}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#3d6a8e' }}>最佳成绩</div>
              </div>
              <div style={{ width: 1, background: '#1e3a5f', opacity: 0.3 }} />
              <div className="text-center">
                <div style={{ fontSize: 22, fontWeight: 800, color: '#000' }}>
                  {competitionCount > 0 ? (totalPoints / competitionCount).toFixed(0) : 0}
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#3d6a8e' }}>场均积分</div>
              </div>
            </div>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Brand line */}
          <p className="font-black tracking-[0.12em]" style={{ fontSize: 13, color: '#0f2340', marginBottom: 4 }}>
            中国滑雪U系列赛事
          </p>

          {/* Bottom: logos + QR */}
          <div className="flex items-center justify-between w-full" style={{ paddingTop: 10, borderTop: '1px solid #dde6ed' }}>
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${basePath}/logos/csa.jpg`} alt="CSA" className="rounded-full object-cover" style={{ width: 34, height: 34, border: '1px solid #c8d8e4' }} />
                <span style={{ fontSize: 7, fontWeight: 600, color: '#3d6a8e', marginTop: 2 }}>中国滑雪协会</span>
              </div>
              <div className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${basePath}/logos/huati-icon.png`} alt="华体冰雪" className="rounded-full object-contain" style={{ width: 34, height: 34, border: '1px solid #c8d8e4', background: '#fff' }} />
                <span style={{ fontSize: 7, fontWeight: 600, color: '#3d6a8e', marginTop: 2 }}>华体冰雪</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <span style={{ fontSize: 8, fontWeight: 500, color: '#7a9bb5', display: 'block', lineHeight: 1.2, marginBottom: 2 }}>中国滑雪青少年积分排名官方平台</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: '#1e3a5f' }}>cnskipoints.com</span>
              </div>
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
