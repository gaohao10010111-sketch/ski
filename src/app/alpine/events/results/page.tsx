import ComingSoon from '@/components/ComingSoon';
import { Award } from 'lucide-react';

export const metadata = {
  title: '成绩查询 - 高山滑雪',
  description: '查询高山滑雪比赛成绩'
};

export default function AlpineEventsResultsPage() {
  return (
    <ComingSoon
      title="成绩查询"
      description="实时查询比赛成绩和积分变化"
      backLink="/alpine"
      backLabel="返回高山滑雪"
    />
  );
}
