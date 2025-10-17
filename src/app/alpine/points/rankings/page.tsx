import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Points Rankings – Alpine Skiing',
  description: 'Real-time athlete leaderboard coming soon'
};

export default function AlpinePointsRankingsPage() {
  return (
    <ComingSoon
      translationKey="alpine.points.rankings"
      backLink="/alpine"
    />
  );
}
