import { GlassCard } from "@/components/ui/glass-card";
import { MotionIn } from "@/components/ui/motion-in";

type StatCardProps = {
  label: string;
  value: string;
  trend: string;
  delay?: number;
};

export function StatCard({ label, value, trend, delay }: StatCardProps) {
  return (
    <MotionIn delay={delay}>
      <GlassCard>
        <p className="text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
        <p className="mt-3 text-4xl font-semibold tracking-tightestTech">{value}</p>
        <p className="mt-2 text-sm text-accent">{trend}</p>
      </GlassCard>
    </MotionIn>
  );
}
