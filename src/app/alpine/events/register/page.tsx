import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Online Registration – Alpine Skiing',
  description: 'Streamlined event registration system coming soon'
};

export default function AlpineEventsRegisterPage() {
  return (
    <ComingSoon
      translationKey="alpine.events.register"
      backLink="/alpine"
    />
  );
}
