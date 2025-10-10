import ComingSoon from '@/components/ComingSoon';
import { Medal } from 'lucide-react';

export const metadata = {
  title: '运动员排名 - 单板平行项目',
  description: '单板平行项目运动员综合排名'
};

export default function AthletesRankingsPage() {
  return (
    <ComingSoon
      title="运动员排名"
      description="基于积分和成绩的运动员综合排名"
      backLink="/snowboard-parallel"
      backLabel="返回单板平行项目"
    />
  );
}
