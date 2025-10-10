import ComingSoon from '@/components/ComingSoon';
import { Users } from 'lucide-react';

export const metadata = {
  title: '运动员名录 - 单板平行项目',
  description: '单板平行项目注册运动员名录'
};

export default function AthletesListPage() {
  return (
    <ComingSoon
      title="运动员名录"
      description="查看所有注册运动员信息和档案"
      backLink="/snowboard-parallel"
      backLabel="返回单板平行项目"
    />
  );
}
