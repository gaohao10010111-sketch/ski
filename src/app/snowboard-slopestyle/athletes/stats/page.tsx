import ComingSoon from '@/components/ComingSoon';
import { PieChart } from 'lucide-react';

export const metadata = {
  title: '运动员统计 - 单板坡面障碍技巧',
  description: '单板坡面障碍技巧运动员数据统计'
};

export default function AthletesStatsPage() {
  return (
    <ComingSoon
      title="运动员统计"
      description="详细的运动员数据统计和可视化分析"
      backLink="/snowboard-slopestyle"
      backLabel="返回单板坡面障碍技巧"
    />
  );
}
