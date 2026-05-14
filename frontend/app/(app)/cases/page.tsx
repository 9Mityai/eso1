"use client";

import Link from "next/link";
import { DataTableShell } from "@/components/ui/data-table-shell";
import { MotionIn } from "@/components/ui/motion-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { cases } from "@/lib/mock-data";
import { useLanguage } from "@/components/providers/language-provider";
import { translations } from "@/lib/i18n";

export default function CasesPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-6">
      <MotionIn>
        <SectionHeading title={t.casesPage.title} subtitle={t.casesPage.subtitle} />
      </MotionIn>
      <MotionIn delay={0.12}>
        <DataTableShell headers={t.casesPage.headers}>
          {cases.map((item) => (
            <tr key={item.id} className="border-t border-white/10">
              <td className="px-4 py-3 text-white/80">{item.id}</td>
              <td className="px-4 py-3 font-medium">{item.patientName}</td>
              <td className="px-4 py-3 text-white/80">{item.condition}</td>
              <td className="px-4 py-3 text-accent">{item.status}</td>
              <td className="px-4 py-3 text-white/80">{item.specialist}</td>
              <td className="px-4 py-3 text-muted">{item.updatedAt}</td>
              <td className="px-4 py-3">
                <Link href="/cases/C-7721" className="text-xs uppercase tracking-widest text-accent hover:underline">
                  {t.casesPage.open}
                </Link>
              </td>
            </tr>
          ))}
        </DataTableShell>
      </MotionIn>
    </div>
  );
}
