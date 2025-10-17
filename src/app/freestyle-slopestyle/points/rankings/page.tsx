import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Points Rankings – Freestyle Slopestyle',
  description: 'Real-time athlete points leaderboard'
};

export default function PointsRankingsPage() {
  return (
    <ComingSoon
      translationKey="freestyle-slopestyle.points.rankings"
      backLink="/freestyle-slopestyle"
    />
  );
}
