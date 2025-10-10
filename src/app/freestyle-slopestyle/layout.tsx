import DisciplineNavigation from '@/components/DisciplineNavigation';

export default function FreestyleSlopestyleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DisciplineNavigation discipline="freestyle-slopestyle" />
      {children}
    </>
  );
}
