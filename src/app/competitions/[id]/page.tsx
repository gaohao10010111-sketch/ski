import CompetitionDetailClient from './CompetitionDetailClient'

// 静态导出时生成空参数（动态页面需要服务端运行时）
export function generateStaticParams() {
  return []
}

export default async function CompetitionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <CompetitionDetailClient id={id} />
}
