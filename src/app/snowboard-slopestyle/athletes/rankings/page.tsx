import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Athlete Rankings – Snowboard Slopestyle',
  description: 'Comprehensive athlete rankings based on points and results'
};

export default function AthletesRankingsPage() {
  return (
    <ComingSoon
      translationKey="snowboard-slopestyle.athletes.rankings"
      backLink="/snowboard-slopestyle"
    />
  );
}
