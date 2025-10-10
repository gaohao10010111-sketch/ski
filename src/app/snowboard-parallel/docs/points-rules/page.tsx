import ComingSoon from '@/components/ComingSoon';
import { FileText } from 'lucide-react';

export const metadata = {
  title: '积分规则 - 单板平行项目',
  description: '单板平行项目积分计算规则'
};

export default function DocsPointsRulesPage() {
  return (
    <ComingSoon
      title="积分规则"
      description="查看积分计算规则详解"
      backLink="/snowboard-parallel"
      backLabel="返回单板平行项目"
    />
  );
}
