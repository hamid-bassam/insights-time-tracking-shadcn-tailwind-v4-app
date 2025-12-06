import PhaseAnalysis from '@/components/PhaseAnalysis';
import { mockActivityData } from '@/data/mock-data';

export default function PhaseAnalysisPage() {
  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto">
        <PhaseAnalysis data={mockActivityData} />
      </div>
    </main>
  );
}
