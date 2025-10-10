import ComingSoon from '@/components/ComingSoon';
import { LineChart } from 'lucide-react';

export const metadata = {
  title: '积分趋势 - 单板平行项目',
  description: '单板平行项目积分变化趋势分析'
};

export default function PointsTrendsPage() {
  return (
    <ComingSoon
      title="积分趋势"
      description="可视化积分变化趋势，数据分析工具"
      backLink="/snowboard-parallel"
      backLabel="返回单板平行项目"
    />
  );
}
