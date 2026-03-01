'use client'

import { useRef, useState, useMemo } from 'react'
import { Download, Share2 } from 'lucide-react'
import html2canvas from 'html2canvas'
import { DynamicQRCode, detectBasePath } from '@/components/PointsCard'
import type { BadgeCardData } from '@/lib/badgeData'

interface MiniBadgeProps {
  data: BadgeCardData
}

// SVG snowflakes for mini badge
function MiniSnowflakes() {
  const flakes = [
    { top: 8, left: 15, size: 10, opacity: 0.25, rotation: 0 },
    { top: 30, left: 290, size: 14, opacity: 0.3, rotation: 30 },
    { top: 55, left: 40, size: 8, opacity: 0.2, rotation: 15 },
    { top: 10, left: 160, size: 12, opacity: 0.22, rotation: 45 },
    { top: 70, left: 310, size: 8, opacity: 0.18, rotation: 60 },
    { top: 40, left: 110, size: 10, opacity: 0.25, rotation: 20 },
    { top: 20, left: 240, size: 10, opacity: 0.22, rotation: 50 },
    { top: 60, left: 200, size: 8, opacity: 0.16, rotation: 35 },
    { top: 5, left: 80, size: 8, opacity: 0.2, rotation: 55 },
    { top: 45, left: 340, size: 10, opacity: 0.18, rotation: 40 },
  ]

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
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="3.27" y1="7" x2="20.73" y2="17" />
          <line x1="3.27" y1="17" x2="20.73" y2="7" />
          <line x1="12" y1="2" x2="9.5" y2="5" />
          <line x1="12" y1="2" x2="14.5" y2="5" />
          <line x1="12" y1="22" x2="9.5" y2="19" />
          <line x1="12" y1="22" x2="14.5" y2="19" />
        </svg>
      ))}
    </>
  )
}

// SVG ski equipment decoration for mini badge
function MiniSkiEquipment({ x, y, rotation = 0, scale = 1, opacity = 0.1 }: { x: number; y: number; rotation?: number; scale?: number; opacity?: number }) {
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
      {/* Ski board tips */}
      <ellipse cx="36" cy="12" rx="6" ry="4" fill="rgba(15,35,64,0.9)" />
      <ellipse cx="58" cy="12" rx="6" ry="4" fill="rgba(15,35,64,0.9)" />
      {/* Crossed poles */}
      <line x1="90" y1="15" x2="130" y2="170" stroke="rgba(15,35,64,0.9)" strokeWidth="4" strokeLinecap="round" />
      <line x1="130" y1="15" x2="90" y2="170" stroke="rgba(15,35,64,0.9)" strokeWidth="4" strokeLinecap="round" />
      {/* Pole handles */}
      <circle cx="90" cy="13" r="6" fill="rgba(15,35,64,0.9)" />
      <circle cx="130" cy="13" r="6" fill="rgba(15,35,64,0.9)" />
      {/* Pole baskets */}
      <circle cx="130" cy="170" r="5" stroke="rgba(15,35,64,0.9)" strokeWidth="2" fill="none" />
      <circle cx="90" cy="170" r="5" stroke="rgba(15,35,64,0.9)" strokeWidth="2" fill="none" />
    </svg>
  )
}

export default function MiniBadge({ data }: MiniBadgeProps) {
  const badgeRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const basePath = useMemo(() => detectBasePath(), [])
  const siteUrl = 'https://cnskipoints.com'

  const rankText = `第${data.rank}名`

  // Strip trailing "组" from gender to avoid "男子组组"
  const genderBase = data.gender.replace(/组$/, '')
  const headlineLine1 = data.athleteName
  const headlineLine2 = `${data.discipline} · ${data.ageGroup} · ${genderBase}组`

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
          width: 360, height: 400, borderRadius: 14,
          background: '#ffffff',
        }}
      >
        {/* ===== Background photo top 35% ===== */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/images/snow-mountain-bg.png`}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 360,
            height: 130,
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />

        {/* Light overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 360,
            height: 130,
            background: 'linear-gradient(180deg, rgba(15,35,64,0.15) 0%, rgba(15,35,64,0.05) 60%, rgba(15,35,64,0.1) 100%)',
          }}
        />

        {/* White gradient fade */}
        <div
          style={{
            position: 'absolute',
            top: 95,
            left: 0,
            width: 360,
            height: 45,
            background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,1) 100%)',
          }}
        />

        {/* Snowflake decorations */}
        <MiniSnowflakes />

        {/* Ski equipment decorations */}
        <MiniSkiEquipment x={270} y={5} rotation={-25} scale={0.5} opacity={0.045} />
        <MiniSkiEquipment x={-25} y={240} rotation={20} scale={0.45} opacity={0.035} />

        {/* Top-left mountain icon (matches navbar) */}
        <div className="absolute z-20" style={{ top: 8, left: 10 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.3))' }}>
            <path d="m8 3 4 8 5-5 5 16H2L8 3z" />
          </svg>
        </div>

        {/* Brand text on photo */}
        <div className="absolute z-20" style={{ top: 10, right: 10 }}>
          <p className="font-black tracking-[0.12em]" style={{ fontSize: 10, color: 'rgba(255,255,255,0.95)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            中国滑雪U系列赛事
          </p>
        </div>

        {/* ===== Content area ===== */}
        <div className="relative z-10 flex flex-col items-center h-full" style={{ paddingTop: 110, paddingLeft: 16, paddingRight: 16, paddingBottom: 14 }}>

          {/* Headline: name large, category info smaller */}
          <div className="text-center w-full" style={{ marginBottom: 0 }}>
            <h2 className="font-black leading-tight" style={{ fontSize: 28, color: '#000000', letterSpacing: '0.01em', lineHeight: 1.2 }}>
              {headlineLine1}
            </h2>
            <p className="font-bold" style={{ fontSize: 13, color: '#1e3a5f', lineHeight: 1.3, marginTop: 2 }}>
              {headlineLine2}
            </p>
          </div>

          {/* Team */}
          <p style={{ fontSize: 11, color: '#1e3a5f', fontWeight: 700, marginBottom: 1 }}>{data.team}</p>

          {/* Score label */}
          <p className="font-bold tracking-[0.15em]" style={{ fontSize: 10, color: '#3d6a8e', marginBottom: 2 }}>
            {data.dataType === 'race' ? '比赛积分' : `${data.season} 赛季总积分`}
          </p>

          {/* HERO score - LARGE for thumbnail readability */}
          <div className="flex items-baseline justify-center">
            <span className="font-black leading-none" style={{ fontSize: 56, color: '#000000', letterSpacing: '-0.03em' }}>
              {data.points}
            </span>
            <span className="font-black" style={{ fontSize: 20, color: '#1e3a5f', marginLeft: 2 }}>分</span>
          </div>

          {/* Rank - prominent */}
          <p className="font-bold tracking-[0.1em]" style={{ fontSize: 9, color: '#3d6a8e', marginTop: 2, marginBottom: 0 }}>
            实时排名
          </p>
          <span className="font-black leading-none" style={{ fontSize: 30, color: '#0f2340' }}>
            {rankText}
          </span>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Bottom: logos + QR */}
          <div className="flex items-center justify-between w-full" style={{ paddingTop: 6, borderTop: '1px solid #dde6ed' }}>
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${basePath}/logos/csa.jpg`} alt="CSA" className="rounded-full object-cover" style={{ width: 24, height: 24, border: '1px solid #c8d8e4' }} />
                <span style={{ fontSize: 5.5, fontWeight: 600, color: '#3d6a8e', marginTop: 1 }}>中国滑雪协会</span>
              </div>
              <div className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${basePath}/logos/huati-icon.png`} alt="华体冰雪" className="rounded-full object-contain" style={{ width: 24, height: 24, border: '1px solid #c8d8e4', background: '#fff' }} />
                <span style={{ fontSize: 5.5, fontWeight: 600, color: '#3d6a8e', marginTop: 1 }}>华体冰雪</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="text-right">
                <span style={{ fontSize: 7, fontWeight: 600, color: '#3d6a8e', display: 'block', lineHeight: 1.2, marginBottom: 1 }}>中国滑雪青少年积分排名官方平台</span>
                <span style={{ fontSize: 9, fontWeight: 700, color: '#0f2340' }}>cnskipoints.com</span>
              </div>
              <DynamicQRCode url={siteUrl} size={22} dark="#1e3a5f" />
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
