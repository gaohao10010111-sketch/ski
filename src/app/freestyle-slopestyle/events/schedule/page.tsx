import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Event Calendar – Freestyle Slopestyle',
  description: 'View upcoming event schedule'
};

export default function EventsSchedulePage() {
  return (
    <ComingSoon
      translationKey="freestyle-slopestyle.events.schedule"
      backLink="/freestyle-slopestyle"
    />
  );
}
