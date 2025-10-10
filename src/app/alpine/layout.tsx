import DisciplineNavigation from '@/components/DisciplineNavigation';

export default function AlpineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DisciplineNavigation discipline="alpine" />
      {children}
    </>
  );
}
