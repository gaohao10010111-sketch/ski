import ComingSoon from '@/components/ComingSoon';
import { Calculator } from 'lucide-react';

export const metadata = {
  title: '积分计算器 - 单板坡面障碍技巧',
  description: '单板坡面障碍技巧积分计算器'
};

export default function PointsCalculatorPage() {
  return (
    <ComingSoon
      title="积分计算器"
      description="精确的积分计算工具，即将上线"
      backLink="/snowboard-slopestyle"
      backLabel="返回单板坡面障碍技巧"
    />
  );
}
