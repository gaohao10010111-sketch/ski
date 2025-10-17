import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Results Lookup – Freestyle Slopestyle',
  description: 'Check race results and points updates in real time'
};

export default function EventsResultsPage() {
  return (
    <ComingSoon
      translationKey="freestyle-slopestyle.events.results"
      backLink="/freestyle-slopestyle"
    />
  );
}
