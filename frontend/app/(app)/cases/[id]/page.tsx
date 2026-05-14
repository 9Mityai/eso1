"use client";

import { FileText, Microscope, ScanLine } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { MotionIn } from "@/components/ui/motion-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseDetail } from "@/lib/mock-data";
import { useLanguage } from "@/components/providers/language-provider";
import { translations } from "@/lib/i18n";

export default function CaseDetailsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-6">
      <MotionIn>
        <SectionHeading eyebrow={caseDetail.id} title={t.caseDetails.title} subtitle={t.caseDetails.subtitle} />
      </MotionIn>
      <div className="grid gap-4 lg:grid-cols-3">
        <MotionIn delay={0.1}>
          <GlassCard>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{t.caseDetails.patient}</p>
            <p className="mt-3 text-xl font-semibold">{caseDetail.patient}</p>
            <p className="mt-2 text-sm text-muted">{caseDetail.diagnosis}</p>
          </GlassCard>
        </MotionIn>
        <MotionIn delay={0.16}>
          <GlassCard>
            <Microscope className="mb-3 h-5 w-5 text-accent" />
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{t.caseDetails.board}</p>
            <p className="mt-3 text-xl font-semibold">{caseDetail.assignedBoard}</p>
            <p className="mt-2 text-sm text-muted">
              {t.caseDetails.nextSession}: {caseDetail.nextSession}
            </p>
          </GlassCard>
        </MotionIn>
        <MotionIn delay={0.22}>
          <GlassCard>
            <ScanLine className="mb-3 h-5 w-5 text-accent" />
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{t.caseDetails.imaging}</p>
            <p className="mt-3 text-xl font-semibold">{caseDetail.dicomSeries} DICOM Series</p>
            <p className="mt-2 text-sm text-muted">
              {caseDetail.documents} {t.caseDetails.clinicalDocs}
            </p>
          </GlassCard>
        </MotionIn>
      </div>
      <MotionIn delay={0.28}>
        <GlassCard>
          <FileText className="mb-3 h-5 w-5 text-accent" />
          <p className="text-xs uppercase tracking-[0.2em] text-muted">{t.caseDetails.clinicalNotes}</p>
          <p className="mt-3 text-sm text-white/85">{t.caseDetails.noteText}</p>
        </GlassCard>
      </MotionIn>
    </div>
  );
}
