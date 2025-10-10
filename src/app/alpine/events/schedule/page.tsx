import ComingSoon from '@/components/ComingSoon';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: '赛程日历 - 高山滑雪',
  description: '查看高山滑雪赛事日程安排'
};

export default function AlpineEventsSchedulePage() {
  return (
    <ComingSoon
      title="赛程日历"
      description="查看即将举行的高山滑雪比赛安排"
      backLink="/alpine"
      backLabel="返回高山滑雪"
    />
  );
}
