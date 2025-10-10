import ComingSoon from '@/components/ComingSoon';
import { BookOpen } from 'lucide-react';

export const metadata = {
  title: '竞赛规则 - 单板坡面障碍技巧',
  description: '单板坡面障碍技巧竞赛技术规则'
};

export default function DocsCompetitionRulesPage() {
  return (
    <ComingSoon
      title="竞赛规则"
      description="详细的竞赛技术规则和标准"
      backLink="/snowboard-slopestyle"
      backLabel="返回单板坡面障碍技巧"
    />
  );
}
