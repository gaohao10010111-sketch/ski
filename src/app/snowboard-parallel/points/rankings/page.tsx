import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Points Rankings – Snowboard Parallel',
  description: 'Real-time athlete points leaderboard'
};

export default function PointsRankingsPage() {
  return (
    <ComingSoon
      translationKey="snowboard-parallel.points.rankings"
      backLink="/snowboard-parallel"
    />
  );
}
