"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ActivityData, Phase } from "@/types/activity";
import { detectPhases, getPhaseStats } from "@/utils/phaseDetection";
import { fmtHM, minutesToTime } from "@/utils/time";
import { useMemo, useState } from "react";
import { Download, Calendar, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface PhaseAnalysisProps {
  data: ActivityData;
}

export default function PhaseAnalysis({ data }: PhaseAnalysisProps) {
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);

  // Detect phases from activity data
  const phases = useMemo(() => detectPhases(data, 2, 6), [data]);

  // Calculate stats for selected phase
  const selectedPhaseStats = useMemo(() => {
    if (!selectedPhase) return null;
    return getPhaseStats(selectedPhase, data);
  }, [selectedPhase, data]);

  // Generate AI report with phase insights
  const downloadPhaseReport = () => {
    let report = `# Phase Analysis Report\n\n`;
    report += `**Total Phases Detected:** ${phases.length}\n`;
    report += `**Analysis Period:** ${data.length} weeks\n\n`;

    report += `## Detected Phases\n\n`;
    phases.forEach((phase, idx) => {
      const stats = getPhaseStats(phase, data);
      report += `### ${idx + 1}. ${phase.name} (Weeks ${phase.startWeek}-${phase.endWeek})\n`;
      report += `- **Duration:** ${stats.duration} weeks\n`;
      report += `- **Focus:** ${phase.focus}\n`;
      report += `- **Average Time:** ${fmtHM(minutesToTime(stats.avgPerDay))} per day\n`;
      report += `- **Top Activities:**\n`;
      stats.topActivities.forEach(act => {
        report += `  - ${act.name} (${act.type}): ${fmtHM(minutesToTime(act.avgPerDay))} per day - ${act.percentage.toFixed(1)}%\n`;
      });
      report += `\n`;
    });

    report += `## Phase Insights for AI Analysis\n\n`;
    report += `Please analyze these phases and provide insights on:\n\n`;
    report += `1. **Phase Transitions:** What triggered shifts between different focus areas?\n`;
    report += `2. **Productivity Patterns:** Which phases showed the best balance?\n`;
    report += `3. **Sustainability:** Are the phase durations appropriate for the focus areas?\n`;
    report += `4. **Recommendations:** How can I better structure my time into phases?\n`;
    report += `5. **Focus Quality:** Did the detected phases align with actual productive periods?\n`;
    report += `6. **Future Planning:** What phase structure would you recommend for the next period?\n\n`;

    report += `## Raw Phase Data\n\n`;
    report += `\`\`\`\n`;
    phases.forEach((phase, idx) => {
      report += `Phase ${idx + 1}: ${phase.name} [W${phase.startWeek}-W${phase.endWeek}] - ${phase.focus}\n`;
    });
    report += `\`\`\`\n`;

    // Download
    const blob = new Blob([report], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `phase-analysis-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Prepare data for comparison chart
  const comparisonData = phases.map((phase, idx) => {
    const stats = getPhaseStats(phase, data);
    return {
      name: `P${idx + 1}`,
      weeks: stats.duration,
      avgPerDay: stats.avgPerDay,
      phase: phase.name,
      color: phase.color
    };
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl">Phase Analysis</CardTitle>
              <CardDescription className="mt-2">
                Automatically detected {phases.length} distinct focus phases from your activity data
              </CardDescription>
            </div>
            <Button onClick={downloadPhaseReport} variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Phase Comparison Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Phase Comparison
          </CardTitle>
          <CardDescription>Average time per day across different phases</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => fmtHM(minutesToTime(value))} />
              <Tooltip
                formatter={(value: number) => fmtHM(minutesToTime(value))}
                labelFormatter={(label) => {
                  const item = comparisonData.find(d => d.name === label);
                  return item ? item.phase : label;
                }}
              />
              <Bar dataKey="avgPerDay" radius={[8, 8, 0, 0]}>
                {comparisonData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Phase Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Detected Phases
          </CardTitle>
          <CardDescription>Click a phase to see detailed breakdown</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {phases.map((phase, idx) => {
            const stats = getPhaseStats(phase, data);
            const isSelected = selectedPhase?.id === phase.id;

            return (
              <Card
                key={phase.id}
                className={`cursor-pointer transition-all ${isSelected ? 'ring-2 ring-primary' : 'hover:bg-accent'}`}
                onClick={() => setSelectedPhase(isSelected ? null : phase)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: phase.color }}
                        />
                        <CardTitle className="text-lg">{phase.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          Weeks {phase.startWeek}-{phase.endWeek}
                        </Badge>
                      </div>
                      <CardDescription className="mt-1">
                        Focus: {phase.focus}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold" style={{ color: phase.color }}>
                        {fmtHM(minutesToTime(stats.avgPerDay))}
                      </div>
                      <div className="text-xs text-muted-foreground">per day</div>
                    </div>
                  </div>
                </CardHeader>

                {isSelected && selectedPhaseStats && (
                  <CardContent>
                    <Separator className="mb-4" />
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-medium mb-2">Top Activities</div>
                        <div className="space-y-2">
                          {selectedPhaseStats.topActivities.map(act => (
                            <div key={act.name} className="flex items-center justify-between text-sm">
                              <span className="flex-1">{act.name}</span>
                              <Badge variant="secondary" className="ml-2">
                                {fmtHM(minutesToTime(act.avgPerDay))} ({act.percentage.toFixed(1)}%)
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>

                      {phase.description && (
                        <div>
                          <div className="text-sm font-medium">Description</div>
                          <p className="text-sm text-muted-foreground mt-1">{phase.description}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
