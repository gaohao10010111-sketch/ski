import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Athlete Rankings – Snowboard Parallel',
  description: 'Comprehensive athlete rankings based on points and results'
};

export default function AthletesRankingsPage() {
  return (
    <ComingSoon
      translationKey="snowboard-parallel.athletes.rankings"
      backLink="/snowboard-parallel"
    />
  );
}
