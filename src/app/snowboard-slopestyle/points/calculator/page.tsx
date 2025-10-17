import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Points Calculator – Snowboard Slopestyle',
  description: 'Precise points calculator coming soon'
};

export default function PointsCalculatorPage() {
  return (
    <ComingSoon
      translationKey="snowboard-slopestyle.points.calculator"
      backLink="/snowboard-slopestyle"
    />
  );
}
