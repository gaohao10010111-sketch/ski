import ComingSoon from '@/components/ComingSoon';
import { MapPin } from 'lucide-react';

export const metadata = {
  title: '场地标准 - 自由式坡面障碍技巧',
  description: '自由式坡面障碍技巧场地技术标准'
};

export default function DocsVenueStandardsPage() {
  return (
    <ComingSoon
      title="场地标准"
      description="场地技术标准和认证要求"
      backLink="/freestyle-slopestyle"
      backLabel="返回自由式坡面障碍技巧"
    />
  );
}
