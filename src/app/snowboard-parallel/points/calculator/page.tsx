import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Points Calculator – Snowboard Parallel',
  description: 'Precise points calculator coming soon'
};

export default function PointsCalculatorPage() {
  return (
    <ComingSoon
      translationKey="snowboard-parallel.points.calculator"
      backLink="/snowboard-parallel"
    />
  );
}
