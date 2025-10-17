import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Points Rules – Freestyle Slopestyle',
  description: 'Read detailed points calculation rules'
};

export default function DocsPointsRulesPage() {
  return (
    <ComingSoon
      translationKey="freestyle-slopestyle.docs.points-rules"
      backLink="/freestyle-slopestyle"
    />
  );
}
