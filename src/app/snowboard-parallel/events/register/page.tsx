import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Online Registration – Snowboard Parallel',
  description: 'Streamlined event registration system'
};

export default function EventsRegisterPage() {
  return (
    <ComingSoon
      translationKey="snowboard-parallel.events.register"
      backLink="/snowboard-parallel"
    />
  );
}
