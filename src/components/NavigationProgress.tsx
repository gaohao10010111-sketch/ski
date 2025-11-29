'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset progress when navigation completes
    setIsNavigating(false);
    setProgress(100);

    const timer = setTimeout(() => setProgress(0), 200);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // Listen for navigation start
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href && !link.href.startsWith('#') &&
          !link.target && !link.download &&
          link.origin === window.location.origin) {
        const newPath = link.pathname;
        if (newPath !== pathname) {
          setIsNavigating(true);
          setProgress(30);

          // Simulate progress
          const interval = setInterval(() => {
            setProgress(p => {
              if (p >= 90) {
                clearInterval(interval);
                return 90;
              }
              return p + 10;
            });
          }, 100);

          return () => clearInterval(interval);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  if (progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-ski-blue to-blue-400 transition-all duration-200 ease-out shadow-sm"
        style={{
          width: `${progress}%`,
          opacity: isNavigating ? 1 : 0
        }}
      />
    </div>
  );
}
