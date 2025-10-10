import ComingSoon from '@/components/ComingSoon';
import { TrendingUp } from 'lucide-react';

export const metadata = {
  title: '积分排名 - 高山滑雪',
  description: '实时更新的高山滑雪运动员积分排名'
};

export default function AlpinePointsRankingsPage() {
  return (
    <ComingSoon
      title="积分排名"
      description="实时更新的运动员积分排名榜，敬请期待"
      backLink="/alpine"
      backLabel="返回高山滑雪"
    />
  );
}
