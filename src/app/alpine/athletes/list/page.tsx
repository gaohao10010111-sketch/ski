import ComingSoon from '@/components/ComingSoon';
import { Users } from 'lucide-react';

export const metadata = {
  title: '运动员名录 - 高山滑雪',
  description: '高山滑雪注册运动员名录'
};

export default function AlpineAthletesListPage() {
  return (
    <ComingSoon
      title="运动员名录"
      description="查看所有注册运动员信息和档案"
      backLink="/alpine"
      backLabel="返回高山滑雪"
    />
  );
}
