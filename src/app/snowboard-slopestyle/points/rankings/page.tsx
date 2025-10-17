import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Points Rankings – Snowboard Slopestyle',
  description: 'Real-time athlete points leaderboard'
};

export default function PointsRankingsPage() {
  return (
    <ComingSoon
      translationKey="snowboard-slopestyle.points.rankings"
      backLink="/snowboard-slopestyle"
    />
  );
}
