"use client";

import { useState } from "react";
import { Bot, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { MotionIn } from "@/components/ui/motion-in";
import { PillButton } from "@/components/ui/pill-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/components/providers/language-provider";
import { translations } from "@/lib/i18n";

export default function AiGemPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const isRu = language === "ru";
  const patientNameLabel = isRu ? "ФИО пациента" : "Patient Full Name";
  const patientNamePlaceholder = isRu ? "Например: Иванов Иван Иванович" : "For example: Anna Keller";
  const [input, setInput] = useState("");
  const [patientName, setPatientName] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateReport = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/ai-gem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input, patientName })
      });
      const data = (await response.json()) as { output?: string; error?: string };
      if (!response.ok || !data.output) {
        throw new Error(data.error || t.aiGem.error);
      }
      setOutput(data.output);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.aiGem.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <MotionIn>
        <SectionHeading title={t.aiGem.title} subtitle={t.aiGem.subtitle} />
      </MotionIn>

      <div className="grid gap-4 lg:grid-cols-2">
        <MotionIn delay={0.08}>
          <GlassCard className="space-y-4">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-accent" />
              <p className="text-sm uppercase tracking-[0.2em] text-muted">{t.aiGem.inputLabel}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">{patientNameLabel}</p>
              <input
                className="w-full rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-white/90 outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                placeholder={patientNamePlaceholder}
                value={patientName}
                onChange={(event) => setPatientName(event.target.value)}
              />
            </div>
            <textarea
              className="min-h-80 w-full rounded-[24px] border border-white/10 bg-white/[0.02] p-4 text-sm text-white/90 outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              placeholder={t.aiGem.inputPlaceholder}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <div className="flex items-center gap-3">
              <PillButton onClick={generateReport} disabled={loading || !input.trim()}>
                <Sparkles className="h-4 w-4" />
                {loading ? t.aiGem.generating : t.aiGem.generate}
              </PillButton>
            </div>
            {error ? <p className="text-sm text-red-300">{error}</p> : null}
            <p className="text-xs text-muted">{t.aiGem.warning}</p>
          </GlassCard>
        </MotionIn>

        <MotionIn delay={0.14}>
          <GlassCard className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">{t.aiGem.outputLabel}</p>
            <div className="min-h-80 whitespace-pre-wrap rounded-[24px] border border-white/10 bg-white/[0.02] p-4 text-sm text-white/90">
              {output || t.aiGem.noOutput}
            </div>
          </GlassCard>
        </MotionIn>
      </div>
    </div>
  );
}
