import ComingSoon from '@/components/ComingSoon';
import { BookOpen } from 'lucide-react';

export const metadata = {
  title: '竞赛规则 - 高山滑雪',
  description: '高山滑雪竞赛技术规则'
};

export default function AlpineDocsCompetitionRulesPage() {
  return (
    <ComingSoon
      title="竞赛规则"
      description="详细的竞赛技术规则和标准"
      backLink="/alpine"
      backLabel="返回高山滑雪"
    />
  );
}
