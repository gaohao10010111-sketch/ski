import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Athlete Directory – Snowboard Parallel',
  description: 'Browse all registered athlete profiles'
};

export default function AthletesListPage() {
  return (
    <ComingSoon
      translationKey="snowboard-parallel.athletes.list"
      backLink="/snowboard-parallel"
    />
  );
}
