import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Event Calendar – Alpine Skiing',
  description: 'View upcoming alpine skiing events'
};

export default function AlpineEventsSchedulePage() {
  return (
    <ComingSoon
      translationKey="alpine.events.schedule"
      backLink="/alpine"
    />
  );
}
