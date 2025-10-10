import ComingSoon from '@/components/ComingSoon';
import { Users } from 'lucide-react';

export const metadata = {
  title: '运动员名录 - 自由式坡面障碍技巧',
  description: '自由式坡面障碍技巧注册运动员名录'
};

export default function AthletesListPage() {
  return (
    <ComingSoon
      title="运动员名录"
      description="查看所有注册运动员信息和档案"
      backLink="/freestyle-slopestyle"
      backLabel="返回自由式坡面障碍技巧"
    />
  );
}
