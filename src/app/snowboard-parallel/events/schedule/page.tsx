import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Event Calendar – Snowboard Parallel',
  description: 'View upcoming event schedule'
};

export default function EventsSchedulePage() {
  return (
    <ComingSoon
      translationKey="snowboard-parallel.events.schedule"
      backLink="/snowboard-parallel"
    />
  );
}
