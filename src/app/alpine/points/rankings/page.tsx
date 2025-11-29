'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AlpinePointsRankingsPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to main rankings page with alpine filter
    router.replace('/points/rankings?discipline=alpine');
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">正在跳转到积分排行榜...</p>
      </div>
    </div>
  );
}
