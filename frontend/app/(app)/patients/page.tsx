"use client";

import { DataTableShell } from "@/components/ui/data-table-shell";
import { MotionIn } from "@/components/ui/motion-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { patients } from "@/lib/mock-data";
import { useLanguage } from "@/components/providers/language-provider";
import { translations } from "@/lib/i18n";

export default function PatientsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-6">
      <MotionIn>
        <SectionHeading title={t.patientsPage.title} subtitle={t.patientsPage.subtitle} />
      </MotionIn>
      <MotionIn delay={0.12}>
        <DataTableShell headers={t.patientsPage.headers}>
          {patients.map((patient) => (
            <tr key={patient.id} className="border-t border-white/10">
              <td className="px-4 py-3 text-white/80">{patient.id}</td>
              <td className="px-4 py-3 font-medium">{patient.fullName}</td>
              <td className="px-4 py-3 text-white/80">{patient.country}</td>
              <td className="px-4 py-3">
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wider text-accent">
                  {patient.priority}
                </span>
              </td>
              <td className="px-4 py-3 text-white/80">{patient.caseCount}</td>
              <td className="px-4 py-3 text-muted">{patient.lastUpdate}</td>
            </tr>
          ))}
        </DataTableShell>
      </MotionIn>
    </div>
  );
}
