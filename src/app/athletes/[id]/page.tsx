import AthleteDetailClient from './AthleteDetailClient'

// 标记为动态路由 - 在静态导出时会被忽略
export const dynamic = 'force-static'
export const dynamicParams = false

// 静态导出时不生成任何页面（页面通过客户端导航访问）
export function generateStaticParams() {
  return []
}

export default async function AthleteDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <AthleteDetailClient id={id} />
}
