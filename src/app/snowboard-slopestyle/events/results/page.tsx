import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Results Lookup – Snowboard Slopestyle',
  description: 'Check race results and points updates in real time'
};

export default function EventsResultsPage() {
  return (
    <ComingSoon
      translationKey="snowboard-slopestyle.events.results"
      backLink="/snowboard-slopestyle"
    />
  );
}
