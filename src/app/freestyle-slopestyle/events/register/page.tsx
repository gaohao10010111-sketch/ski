import ComingSoon from '@/components/ComingSoon';
import { UserPlus } from 'lucide-react';

export const metadata = {
  title: '在线报名 - 自由式坡面障碍技巧',
  description: '自由式坡面障碍技巧赛事在线报名'
};

export default function EventsRegisterPage() {
  return (
    <ComingSoon
      title="在线报名"
      description="便捷的赛事在线报名系统"
      backLink="/freestyle-slopestyle"
      backLabel="返回自由式坡面障碍技巧"
    />
  );
}
