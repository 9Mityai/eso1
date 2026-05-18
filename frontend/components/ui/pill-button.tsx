import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type PillButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  size?: "sm" | "md";
};

const sizeClasses = {
  sm: "px-3 py-1 text-xs",
  md: "px-5 py-2 text-sm",
};

export function PillButton({ className, variant = "primary", size = "md", ...props }: PillButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full border font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70",
        sizeClasses[size],
        variant === "primary"
          ? "border-accent/70 bg-accent/10 text-accent hover:bg-accent/20"
          : "border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.08]",
        className
      )}
      {...props}
    />
  );
}
