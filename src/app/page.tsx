import ActivityDashboard from '@/components/ActivityDashboard';
import { mockActivityData } from '@/data/mock-data';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ActivityDashboard data={mockActivityData} />
    </main>
  );
}