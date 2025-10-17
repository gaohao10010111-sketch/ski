import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Points Calculator – Alpine Skiing',
  description: 'Accurate v4.0 points calculator coming soon'
};

export default function AlpinePointsCalculatorPage() {
  return (
    <ComingSoon
      translationKey="alpine.points.calculator"
      backLink="/alpine"
    />
  );
}
