'use client'

import { useState } from 'react'
import { Image, Link, FileText, X } from 'lucide-react'

interface SharePopupProps {
  isOpen: boolean
  onClose: () => void
  athleteName: string
  rank: number
  points: number
  discipline: string
  onShareImage: () => Promise<void>
  isGenerating: boolean
}

export default function SharePopup({
  isOpen, onClose, athleteName, rank, points, discipline,
  onShareImage, isGenerating,
}: SharePopupProps) {
  const [copiedType, setCopiedType] = useState<'link' | 'text' | null>(null)

  if (!isOpen) return null

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://cnskipoints.com')
      setCopiedType('link')
      setTimeout(() => { setCopiedType(null); onClose() }, 1500)
    } catch (e) {
      console.error('copy failed:', e)
    }
  }

  const handleCopyText = async () => {
    const text = `${athleteName} ${discipline} 第${rank}名 ${points}分\nhttps://cnskipoints.com`
    try {
      await navigator.clipboard.writeText(text)
      setCopiedType('text')
      setTimeout(() => { setCopiedType(null); onClose() }, 1500)
    } catch (e) {
      console.error('copy failed:', e)
    }
  }

  const handleShareImageClick = async () => {
    await onShareImage()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Sheet */}
      <div
        className="relative w-full max-w-md bg-white rounded-t-2xl pb-[env(safe-area-inset-bottom)] animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <h3 className="text-base font-bold text-gray-900">选择分享方式</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 transition-colors">
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Options */}
        <div className="px-4 pb-2">
          {/* Share image */}
          <button
            onClick={handleShareImageClick}
            disabled={isGenerating}
            className="flex items-center gap-4 w-full px-4 py-3.5 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50 text-left"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50">
              <Image className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {isGenerating ? '生成中...' : '分享海报图片'}
              </p>
              <p className="text-xs text-gray-500">通过系统分享发送海报图片</p>
            </div>
          </button>

          <div className="mx-4 border-t border-gray-100" />

          {/* Copy link */}
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-4 w-full px-4 py-3.5 rounded-xl hover:bg-gray-50 transition-colors text-left"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50">
              <Link className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {copiedType === 'link' ? '\u2713 已复制' : '复制链接'}
              </p>
              <p className="text-xs text-gray-500">复制网站链接到剪贴板</p>
            </div>
          </button>

          <div className="mx-4 border-t border-gray-100" />

          {/* Copy text */}
          <button
            onClick={handleCopyText}
            className="flex items-center gap-4 w-full px-4 py-3.5 rounded-xl hover:bg-gray-50 transition-colors text-left"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50">
              <FileText className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {copiedType === 'text' ? '\u2713 已复制' : '复制图文'}
              </p>
              <p className="text-xs text-gray-500">复制运动员信息+链接</p>
            </div>
          </button>
        </div>

        {/* Cancel */}
        <div className="px-4 pb-5 pt-2">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-gray-100 text-sm font-semibold text-gray-600 hover:bg-gray-200 transition-colors"
          >
            取消
          </button>
        </div>
      </div>

      {/* Slide-up animation */}
      <style jsx>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.25s ease-out;
        }
      `}</style>
    </div>
  )
}
