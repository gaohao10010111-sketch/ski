import ComingSoon from '@/components/ComingSoon';
import { PieChart } from 'lucide-react';

export const metadata = {
  title: '运动员统计 - 高山滑雪',
  description: '高山滑雪运动员数据统计'
};

export default function AlpineAthletesStatsPage() {
  return (
    <ComingSoon
      title="运动员统计"
      description="详细的运动员数据统计和可视化分析"
      backLink="/alpine"
      backLabel="返回高山滑雪"
    />
  );
}
