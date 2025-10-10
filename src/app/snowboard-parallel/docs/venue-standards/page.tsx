import ComingSoon from '@/components/ComingSoon';
import { MapPin } from 'lucide-react';

export const metadata = {
  title: '场地标准 - 单板平行项目',
  description: '单板平行项目场地技术标准'
};

export default function DocsVenueStandardsPage() {
  return (
    <ComingSoon
      title="场地标准"
      description="场地技术标准和认证要求"
      backLink="/snowboard-parallel"
      backLabel="返回单板平行项目"
    />
  );
}
