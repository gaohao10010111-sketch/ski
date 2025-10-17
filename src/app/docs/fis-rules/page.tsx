import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'FIS Rules – Docs',
  description: 'International Ski Federation rules and references'
};

export default function FisRulesPage() {
  return (
    <ComingSoon
      translationKey="docs.fisRules"
      backLink="/docs"
    />
  );
}
