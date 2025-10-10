import ComingSoon from '@/components/ComingSoon';
import { Medal } from 'lucide-react';

export const metadata = {
  title: '运动员排名 - 自由式坡面障碍技巧',
  description: '自由式坡面障碍技巧运动员综合排名'
};

export default function AthletesRankingsPage() {
  return (
    <ComingSoon
      title="运动员排名"
      description="基于积分和成绩的运动员综合排名"
      backLink="/freestyle-slopestyle"
      backLabel="返回自由式坡面障碍技巧"
    />
  );
}
