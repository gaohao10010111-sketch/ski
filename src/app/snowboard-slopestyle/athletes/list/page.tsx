import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Athlete Directory – Snowboard Slopestyle',
  description: 'Browse all registered athlete profiles'
};

export default function AthletesListPage() {
  return (
    <ComingSoon
      translationKey="snowboard-slopestyle.athletes.list"
      backLink="/snowboard-slopestyle"
    />
  );
}
