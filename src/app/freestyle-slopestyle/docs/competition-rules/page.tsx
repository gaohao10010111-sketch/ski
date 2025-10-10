import ComingSoon from '@/components/ComingSoon';
import { BookOpen } from 'lucide-react';

export const metadata = {
  title: '竞赛规则 - 自由式坡面障碍技巧',
  description: '自由式坡面障碍技巧竞赛技术规则'
};

export default function DocsCompetitionRulesPage() {
  return (
    <ComingSoon
      title="竞赛规则"
      description="详细的竞赛技术规则和标准"
      backLink="/freestyle-slopestyle"
      backLabel="返回自由式坡面障碍技巧"
    />
  );
}
