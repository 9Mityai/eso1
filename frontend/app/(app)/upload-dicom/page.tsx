"use client";

import { UploadCloud } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { MotionIn } from "@/components/ui/motion-in";
import { PillButton } from "@/components/ui/pill-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/components/providers/language-provider";
import { translations } from "@/lib/i18n";

export default function UploadDicomPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-6">
      <MotionIn>
        <SectionHeading title={t.uploadDicom.title} subtitle={t.uploadDicom.subtitle} />
      </MotionIn>
      <MotionIn delay={0.1}>
        <GlassCard className="border-dashed text-center">
          <UploadCloud className="mx-auto mb-4 h-8 w-8 text-accent" />
          <p className="text-lg font-medium uppercase tracking-tightestTech">{t.uploadDicom.dropTitle}</p>
          <p className="mt-2 text-sm text-muted">{t.uploadDicom.supported}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <PillButton>{t.uploadDicom.selectFiles}</PillButton>
            <PillButton variant="ghost">{t.uploadDicom.queue}</PillButton>
          </div>
        </GlassCard>
      </MotionIn>
    </div>
  );
}
