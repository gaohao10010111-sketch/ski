import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'User Guide – Docs',
  description: 'Platform usage guide and FAQs'
};

export default function DocsGuidePage() {
  return (
    <ComingSoon
      translationKey="docs.guide"
      backLink="/docs"
    />
  );
}
