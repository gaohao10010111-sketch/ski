import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Results Lookup – Alpine Skiing',
  description: 'Check race results and points updates in real time'
};

export default function AlpineEventsResultsPage() {
  return (
    <ComingSoon
      translationKey="alpine.events.results"
      backLink="/alpine"
    />
  );
}
