import ComingSoon from '@/components/ComingSoon';
import { LineChart } from 'lucide-react';

export const metadata = {
  title: '积分趋势 - 自由式坡面障碍技巧',
  description: '自由式坡面障碍技巧积分变化趋势分析'
};

export default function PointsTrendsPage() {
  return (
    <ComingSoon
      title="积分趋势"
      description="可视化积分变化趋势，数据分析工具"
      backLink="/freestyle-slopestyle"
      backLabel="返回自由式坡面障碍技巧"
    />
  );
}
