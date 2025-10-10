import ComingSoon from '@/components/ComingSoon';
import { BarChart } from 'lucide-react';

export const metadata = {
  title: '赛事统计 - 单板平行项目',
  description: '单板平行项目赛事数据统计'
};

export default function EventsStatsPage() {
  return (
    <ComingSoon
      title="赛事统计"
      description="全面的赛事数据统计和分析工具"
      backLink="/snowboard-parallel"
      backLabel="返回单板平行项目"
    />
  );
}
