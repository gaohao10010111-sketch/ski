import ComingSoon from '@/components/ComingSoon';
import { UserPlus } from 'lucide-react';

export const metadata = {
  title: '在线报名 - 高山滑雪',
  description: '高山滑雪赛事在线报名系统'
};

export default function AlpineEventsRegisterPage() {
  return (
    <ComingSoon
      title="在线报名"
      description="便捷的赛事在线报名系统，即将上线"
      backLink="/alpine"
      backLabel="返回高山滑雪"
    />
  );
}
