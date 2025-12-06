import AnnualSynthesis from '@/components/AnnualSynthesis';
import { mockActivityData } from '@/data/mock-data';

export default function AnnualSynthesisPage() {
  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto">
        <AnnualSynthesis data={mockActivityData} />
      </div>
    </main>
  );
}
