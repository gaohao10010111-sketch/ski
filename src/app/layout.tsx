import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Suspense } from 'react'
import { ClientProviders } from '@/components/ClientProviders'
import GlobalNavigation from '@/components/GlobalNavigation'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import NavigationProgress from '@/components/NavigationProgress'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e40af',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://gaohao10010111-sketch.github.io/ski'),
  title: {
    default: '中国滑雪青少年积分排名官方平台',
    template: '%s | 中国滑雪青少年积分排名官方平台'
  },
  description: '中国滑雪积分系统，支持高山滑雪、自由式滑雪、单板滑雪等项目的积分计算、赛事管理、运动员档案管理。基于官方标准，提供准确的积分计算和排名服务。',
  keywords: [
    '滑雪积分系统',
    '高山滑雪积分',
    '自由式滑雪',
    '单板滑雪',
    '滑雪竞赛管理',
    '积分计算',
    '运动员管理',
    '赛事管理',
    '滑雪赛事管理',
    '滑雪积分排名'
  ],
  authors: [{ name: '中国滑雪青少年积分排名官方平台' }],
  creator: '中国滑雪青少年积分排名官方平台',
  publisher: '中国滑雪青少年积分排名官方平台',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://gaohao10010111-sketch.github.io/ski/',
    siteName: '中国滑雪青少年积分排名官方平台',
    title: '中国滑雪青少年积分排名官方平台',
    description: '中国滑雪积分系统，支持高山滑雪、自由式滑雪、单板滑雪等项目的积分计算、赛事管理、运动员档案管理。',
    images: [
      {
        url: '/images/ski-bg.jpg',
        width: 1200,
        height: 630,
        alt: '中国滑雪青少年积分排名官方平台',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '中国滑雪青少年积分排名官方平台',
    description: '中国滑雪青少年积分排名官方平台',
    images: ['/images/ski-bg.jpg'],
  },
  alternates: {
    canonical: 'https://gaohao10010111-sketch.github.io/ski/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <StructuredData />
        {/* 使用系统字体栈，无需加载外部字体 */}
      </head>
      <body className="antialiased">
        <ClientProviders>
          <Suspense fallback={null}>
            <NavigationProgress />
          </Suspense>
          <GlobalNavigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}