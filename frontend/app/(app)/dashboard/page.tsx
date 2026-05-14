"use client";

import { useAuth } from "@/components/providers/auth-provider";
import { useLanguage } from "@/components/providers/language-provider";
import { translations } from "@/lib/i18n";
import { stats, patients, cases } from "@/lib/mock-data";
import { StatCard } from "@/components/app/stat-card";
import { GlassCard } from "@/components/ui/glass-card";
import { PillButton } from "@/components/ui/pill-button";
import { User, MessageSquare, FileText, Settings } from "lucide-react";

export default function DashboardPage() {
  const { session, signOut } = useAuth();
  const { language } = useLanguage();
  const t = translations[language];

  if (!session || session.role !== "doctor") {
    return <div>Access denied</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-white/60">Welcome back, Dr. {session.login}</p>
          </div>
          <div className="flex gap-2">
            <PillButton variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </PillButton>
            <PillButton variant="ghost" size="sm" onClick={signOut}>
              Sign Out
            </PillButton>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Patients and Cases */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Patients */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-accent" />
              <h2 className="text-xl font-semibold text-white">Patients</h2>
            </div>
            <div className="space-y-3">
              {patients.map((patient) => (
                <div key={patient.id} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                  <div>
                    <p className="font-medium text-white">{patient.fullName}</p>
                    <p className="text-sm text-white/60">{patient.country} • {patient.priority}</p>
                  </div>
                  <PillButton size="sm">View</PillButton>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Cases */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-accent" />
              <h2 className="text-xl font-semibold text-white">Medical Cases</h2>
            </div>
            <div className="space-y-3">
              {cases.map((case_) => (
                <div key={case_.id} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                  <div>
                    <p className="font-medium text-white">{case_.patientName}</p>
                    <p className="text-sm text-white/60">{case_.condition}</p>
                    <p className="text-xs text-accent">{case_.status}</p>
                  </div>
                  <PillButton size="sm">Review</PillButton>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
