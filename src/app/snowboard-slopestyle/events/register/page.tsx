import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Online Registration – Snowboard Slopestyle',
  description: 'Streamlined event registration system'
};

export default function EventsRegisterPage() {
  return (
    <ComingSoon
      translationKey="snowboard-slopestyle.events.register"
      backLink="/snowboard-slopestyle"
    />
  );
}
