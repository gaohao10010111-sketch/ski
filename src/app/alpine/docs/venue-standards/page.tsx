import ComingSoon from '@/components/ComingSoon';
import { MapPin } from 'lucide-react';

export const metadata = {
  title: '场地标准 - 高山滑雪',
  description: '高山滑雪场地技术标准'
};

export default function AlpineDocsVenueStandardsPage() {
  return (
    <ComingSoon
      title="场地标准"
      description="高山滑雪场地技术标准和认证要求"
      backLink="/alpine"
      backLabel="返回高山滑雪"
    />
  );
}
