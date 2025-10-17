import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Athlete Directory – Freestyle Slopestyle',
  description: 'Browse all registered athlete profiles'
};

export default function AthletesListPage() {
  return (
    <ComingSoon
      translationKey="freestyle-slopestyle.athletes.list"
      backLink="/freestyle-slopestyle"
    />
  );
}
