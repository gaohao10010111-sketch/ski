import ComingSoon from '@/components/ComingSoon';
import { TrendingUp } from 'lucide-react';

export const metadata = {
  title: '积分排名 - 自由式坡面障碍技巧',
  description: '自由式坡面障碍技巧运动员积分排名'
};

export default function PointsRankingsPage() {
  return (
    <ComingSoon
      title="积分排名"
      description="实时更新的运动员积分排名榜"
      backLink="/freestyle-slopestyle"
      backLabel="返回自由式坡面障碍技巧"
    />
  );
}
