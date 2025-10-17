import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Athlete Statistics – Freestyle Slopestyle',
  description: 'In-depth athlete statistics and visual analytics'
};

export default function AthletesStatsPage() {
  return (
    <ComingSoon
      translationKey="freestyle-slopestyle.athletes.stats"
      backLink="/freestyle-slopestyle"
    />
  );
}
