import ComingSoon from '@/components/ComingSoon';
import { Medal } from 'lucide-react';

export const metadata = {
  title: '运动员排名 - 高山滑雪',
  description: '高山滑雪运动员综合排名'
};

export default function AlpineAthletesRankingsPage() {
  return (
    <ComingSoon
      title="运动员排名"
      description="基于积分和成绩的运动员综合排名"
      backLink="/alpine"
      backLabel="返回高山滑雪"
    />
  );
}
