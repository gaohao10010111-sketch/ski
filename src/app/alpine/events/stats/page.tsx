import ComingSoon from '@/components/ComingSoon';
import { BarChart } from 'lucide-react';

export const metadata = {
  title: '赛事统计 - 高山滑雪',
  description: '高山滑雪赛事数据统计分析'
};

export default function AlpineEventsStatsPage() {
  return (
    <ComingSoon
      title="赛事统计"
      description="全面的赛事数据统计和分析工具"
      backLink="/alpine"
      backLabel="返回高山滑雪"
    />
  );
}
