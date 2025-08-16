import WorkActivityDashboard from "../../components/WorkActivityDashboard";
import { mockWorkActivityData } from "../../data/work/mock-work-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <WorkActivityDashboard data={mockWorkActivityData} />
    </main>
  );
}