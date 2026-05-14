import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement>;

export function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-glass border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-glow",
        className
      )}
      {...props}
    />
  );
}
