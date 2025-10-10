import ComingSoon from '@/components/ComingSoon';
import { Award } from 'lucide-react';

export const metadata = {
  title: '成绩查询 - 单板平行项目',
  description: '单板平行项目比赛成绩查询'
};

export default function EventsResultsPage() {
  return (
    <ComingSoon
      title="成绩查询"
      description="实时查询比赛成绩和积分变化"
      backLink="/snowboard-parallel"
      backLabel="返回单板平行项目"
    />
  );
}
