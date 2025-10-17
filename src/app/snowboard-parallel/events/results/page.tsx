import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Results Lookup – Snowboard Parallel',
  description: 'Check race results and points updates in real time'
};

export default function EventsResultsPage() {
  return (
    <ComingSoon
      translationKey="snowboard-parallel.events.results"
      backLink="/snowboard-parallel"
    />
  );
}
