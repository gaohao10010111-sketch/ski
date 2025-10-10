import ComingSoon from '@/components/ComingSoon';
import { TrendingUp } from 'lucide-react';

export const metadata = {
  title: '积分排名 - 单板坡面障碍技巧',
  description: '单板坡面障碍技巧运动员积分排名'
};

export default function PointsRankingsPage() {
  return (
    <ComingSoon
      title="积分排名"
      description="实时更新的运动员积分排名榜"
      backLink="/snowboard-slopestyle"
      backLabel="返回单板坡面障碍技巧"
    />
  );
}
