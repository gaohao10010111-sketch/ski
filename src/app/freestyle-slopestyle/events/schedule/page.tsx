import ComingSoon from '@/components/ComingSoon';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: '赛程日历 - 自由式坡面障碍技巧',
  description: '自由式坡面障碍技巧赛事日程安排'
};

export default function EventsSchedulePage() {
  return (
    <ComingSoon
      title="赛程日历"
      description="查看即将举行的比赛安排"
      backLink="/freestyle-slopestyle"
      backLabel="返回自由式坡面障碍技巧"
    />
  );
}
