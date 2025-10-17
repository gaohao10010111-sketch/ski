import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Competition Rules – Docs',
  description: 'Technical rules for ski competitions'
};

export default function CompetitionRulesPage() {
  return (
    <ComingSoon
      translationKey="docs.competitionRules"
      backLink="/docs"
    />
  );
}
