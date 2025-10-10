import ComingSoon from '@/components/ComingSoon';
import { LineChart } from 'lucide-react';

export const metadata = {
  title: '积分趋势 - 高山滑雪',
  description: '高山滑雪积分变化趋势分析'
};

export default function AlpinePointsTrendsPage() {
  return (
    <ComingSoon
      title="积分趋势"
      description="可视化积分变化趋势，数据分析工具即将上线"
      backLink="/alpine"
      backLabel="返回高山滑雪"
    />
  );
}
