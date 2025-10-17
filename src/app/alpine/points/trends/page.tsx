import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Points Trends – Alpine Skiing',
  description: 'Visual points trend analytics tools coming soon'
};

export default function AlpinePointsTrendsPage() {
  return (
    <ComingSoon
      translationKey="alpine.points.trends"
      backLink="/alpine"
    />
  );
}
