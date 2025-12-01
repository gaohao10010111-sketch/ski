import AthleteDetailClient from './AthleteDetailClient'

// 静态导出时生成空参数（动态页面需要服务端运行时）
export function generateStaticParams() {
  return []
}

export default async function AthleteDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <AthleteDetailClient id={id} />
}
