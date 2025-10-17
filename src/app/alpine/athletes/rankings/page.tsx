import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Athlete Rankings – Alpine Skiing',
  description: 'Comprehensive athlete rankings based on points and results'
};

export default function AlpineAthletesRankingsPage() {
  return (
    <ComingSoon
      translationKey="alpine.athletes.rankings"
      backLink="/alpine"
    />
  );
}
