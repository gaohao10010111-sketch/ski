import DisciplineNavigation from '@/components/DisciplineNavigation';

export default function SnowboardSlopestyleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DisciplineNavigation discipline="snowboard-slopestyle" />
      {children}
    </>
  );
}
