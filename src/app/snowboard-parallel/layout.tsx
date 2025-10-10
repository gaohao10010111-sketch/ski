import DisciplineNavigation from '@/components/DisciplineNavigation';

export default function SnowboardParallelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DisciplineNavigation discipline="snowboard-parallel" />
      {children}
    </>
  );
}
