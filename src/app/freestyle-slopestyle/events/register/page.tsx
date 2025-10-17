import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Online Registration – Freestyle Slopestyle',
  description: 'Streamlined event registration system'
};

export default function EventsRegisterPage() {
  return (
    <ComingSoon
      translationKey="freestyle-slopestyle.events.register"
      backLink="/freestyle-slopestyle"
    />
  );
}
