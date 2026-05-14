"use client";

import { BadgeCheck, CreditCard, Shield } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { MotionIn } from "@/components/ui/motion-in";
import { PillButton } from "@/components/ui/pill-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/components/providers/language-provider";
import { translations } from "@/lib/i18n";

export default function BillingPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-6">
      <MotionIn>
        <SectionHeading title={t.billingPage.title} subtitle={t.billingPage.subtitle} />
      </MotionIn>
      <div className="grid gap-4 lg:grid-cols-2">
        <MotionIn delay={0.1}>
          <GlassCard className="space-y-4">
            <div className="flex items-center gap-3">
              <BadgeCheck className="h-5 w-5 text-accent" />
              <p className="text-lg font-semibold uppercase tracking-tightestTech">{t.billingPage.planName}</p>
            </div>
            <p className="text-sm text-muted">{t.billingPage.planDesc}</p>
            <div className="flex gap-3">
              <PillButton>{t.billingPage.managePlan}</PillButton>
              <PillButton variant="ghost">{t.billingPage.downloadInvoice}</PillButton>
            </div>
          </GlassCard>
        </MotionIn>
        <MotionIn delay={0.16}>
          <GlassCard className="space-y-4">
            <div className="flex items-center gap-3">
              <CreditCard className="h-5 w-5 text-accent" />
              <p className="text-lg font-semibold uppercase tracking-tightestTech">{t.billingPage.paymentMethod}</p>
            </div>
            <p className="text-sm text-muted">{t.billingPage.paymentInfo}</p>
            <div className="flex items-center gap-2 text-sm text-accent">
              <Shield className="h-4 w-4" />
              {t.billingPage.pci}
            </div>
          </GlassCard>
        </MotionIn>
      </div>
    </div>
  );
}
