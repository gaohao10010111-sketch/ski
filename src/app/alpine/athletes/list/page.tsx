import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Athlete Directory – Alpine Skiing',
  description: 'Browse all registered athlete profiles'
};

export default function AlpineAthletesListPage() {
  return (
    <ComingSoon
      translationKey="alpine.athletes.list"
      backLink="/alpine"
    />
  );
}
