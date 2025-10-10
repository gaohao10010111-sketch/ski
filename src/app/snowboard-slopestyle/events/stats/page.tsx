import ComingSoon from '@/components/ComingSoon';
import { BarChart } from 'lucide-react';

export const metadata = {
  title: '赛事统计 - 单板坡面障碍技巧',
  description: '单板坡面障碍技巧赛事数据统计'
};

export default function EventsStatsPage() {
  return (
    <ComingSoon
      title="赛事统计"
      description="全面的赛事数据统计和分析工具"
      backLink="/snowboard-slopestyle"
      backLabel="返回单板坡面障碍技巧"
    />
  );
}
