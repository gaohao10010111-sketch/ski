import ComingSoon from '@/components/ComingSoon';
import { BookOpen } from 'lucide-react';

export const metadata = {
  title: '竞赛规则 - 单板平行项目',
  description: '单板平行项目竞赛技术规则'
};

export default function DocsCompetitionRulesPage() {
  return (
    <ComingSoon
      title="竞赛规则"
      description="详细的竞赛技术规则和标准"
      backLink="/snowboard-parallel"
      backLabel="返回单板平行项目"
    />
  );
}
