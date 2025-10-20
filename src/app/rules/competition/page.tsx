import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Competition Regulations – Rules',
  description: 'Competition rules, participation guidance, and youth system overview'
};

export default function CompetitionRulesPage() {
  return (
    <ComingSoon
      translationKey="rules.competition"
      backLink="/rules"
    />
  );
}
