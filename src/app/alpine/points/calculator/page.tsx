import ComingSoon from '@/components/ComingSoon';
import { Calculator } from 'lucide-react';

export const metadata = {
  title: '积分计算器 - 高山滑雪',
  description: '基于v4.0规则的高山滑雪积分计算器'
};

export default function AlpinePointsCalculatorPage() {
  return (
    <ComingSoon
      title="积分计算器"
      description="基于v4.0规则的精确积分计算工具，即将上线"
      backLink="/alpine"
      backLabel="返回高山滑雪"
    />
  );
}
