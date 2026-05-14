import { ReactNode } from "react";
import { GlassCard } from "@/components/ui/glass-card";

type DataTableShellProps = {
  headers: string[];
  children: ReactNode;
};

export function DataTableShell({ headers, children }: DataTableShellProps) {
  return (
    <GlassCard className="overflow-hidden p-0">
      <table className="w-full text-left text-sm">
        <thead className="bg-white/[0.02]">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 text-xs uppercase tracking-[0.22em] text-muted">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </GlassCard>
  );
}
