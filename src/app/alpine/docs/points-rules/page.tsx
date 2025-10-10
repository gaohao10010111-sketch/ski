import ComingSoon from '@/components/ComingSoon';
import { FileText } from 'lucide-react';

export const metadata = {
  title: '积分规则 - 高山滑雪',
  description: '高山滑雪积分计算规则文档'
};

export default function AlpineDocsPointsRulesPage() {
  return (
    <ComingSoon
      title="积分规则"
      description="查看高山滑雪v4.0积分计算规则详解"
      backLink="/alpine"
      backLabel="返回高山滑雪"
    />
  );
}
