import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Athlete Rankings – Freestyle Slopestyle',
  description: 'Comprehensive athlete rankings based on points and results'
};

export default function AthletesRankingsPage() {
  return (
    <ComingSoon
      translationKey="freestyle-slopestyle.athletes.rankings"
      backLink="/freestyle-slopestyle"
    />
  );
}
