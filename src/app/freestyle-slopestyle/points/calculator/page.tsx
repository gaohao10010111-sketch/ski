import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Points Calculator – Freestyle Slopestyle',
  description: 'Precise points calculator coming soon'
};

export default function PointsCalculatorPage() {
  return (
    <ComingSoon
      translationKey="freestyle-slopestyle.points.calculator"
      backLink="/freestyle-slopestyle"
    />
  );
}
