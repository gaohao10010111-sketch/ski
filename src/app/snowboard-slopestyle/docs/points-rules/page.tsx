import ComingSoon from '@/components/ComingSoon';
import { FileText } from 'lucide-react';

export const metadata = {
  title: '积分规则 - 单板坡面障碍技巧',
  description: '单板坡面障碍技巧积分计算规则'
};

export default function DocsPointsRulesPage() {
  return (
    <ComingSoon
      title="积分规则"
      description="查看积分计算规则详解"
      backLink="/snowboard-slopestyle"
      backLabel="返回单板坡面障碍技巧"
    />
  );
}
