import ComingSoon from '@/components/ComingSoon';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: '赛程日历 - 单板平行项目',
  description: '单板平行项目赛事日程安排'
};

export default function EventsSchedulePage() {
  return (
    <ComingSoon
      title="赛程日历"
      description="查看即将举行的比赛安排"
      backLink="/snowboard-parallel"
      backLabel="返回单板平行项目"
    />
  );
}
