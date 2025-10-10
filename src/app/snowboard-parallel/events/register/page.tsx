import ComingSoon from '@/components/ComingSoon';
import { UserPlus } from 'lucide-react';

export const metadata = {
  title: '在线报名 - 单板平行项目',
  description: '单板平行项目赛事在线报名'
};

export default function EventsRegisterPage() {
  return (
    <ComingSoon
      title="在线报名"
      description="便捷的赛事在线报名系统"
      backLink="/snowboard-parallel"
      backLabel="返回单板平行项目"
    />
  );
}
