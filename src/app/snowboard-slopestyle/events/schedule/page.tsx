import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Event Calendar – Snowboard Slopestyle',
  description: 'View upcoming event schedule'
};

export default function EventsSchedulePage() {
  return (
    <ComingSoon
      translationKey="snowboard-slopestyle.events.schedule"
      backLink="/snowboard-slopestyle"
    />
  );
}
