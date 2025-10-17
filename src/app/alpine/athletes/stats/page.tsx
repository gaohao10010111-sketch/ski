import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Athlete Statistics – Alpine Skiing',
  description: 'In-depth athlete statistics and visual analytics'
};

export default function AlpineAthletesStatsPage() {
  return (
    <ComingSoon
      translationKey="alpine.athletes.stats"
      backLink="/alpine"
    />
  );
}
