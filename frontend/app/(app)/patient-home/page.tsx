"use client";

import { useAuth } from "@/components/providers/auth-provider";
import { useLanguage } from "@/components/providers/language-provider";
import { translations } from "@/lib/i18n";
import { GlassCard } from "@/components/ui/glass-card";
import { PillButton } from "@/components/ui/pill-button";
import { User, MessageSquare, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PatientHomePage() {
  const { session, signOut } = useAuth();
  const { language } = useLanguage();
  const router = useRouter();
  const t = translations[language];

  if (!session || session.role !== "patient") {
    return <div>Access denied</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Patient Portal</h1>
            <p className="text-white/60">Welcome, {session.login}</p>
          </div>
          <PillButton variant="ghost" size="sm" onClick={signOut}>
            Sign Out
          </PillButton>
        </div>

        {/* Profile Card */}
        <GlassCard className="p-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center">
              <User className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Patient Profile</h2>
              <p className="text-white/60">Manage your medical information</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm text-white/60">Full Name</label>
              <p className="text-white">John Doe</p>
            </div>
            <div>
              <label className="text-sm text-white/60">Country</label>
              <p className="text-white">Germany</p>
            </div>
            <div>
              <label className="text-sm text-white/60">Medical ID</label>
              <p className="text-white">P-1001</p>
            </div>
            <div>
              <label className="text-sm text-white/60">Last Visit</label>
              <p className="text-white">Never</p>
            </div>
          </div>
        </GlassCard>

        {/* Actions */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-semibold text-white">AI Medical Assistant</h3>
            </div>
            <p className="text-white/60 mb-4">
              Start a conversation with our AI to provide your medical history and get preliminary analysis.
            </p>
            <PillButton className="w-full" onClick={() => router.push("/chat")}>
              Start Chat
            </PillButton>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-semibold text-white">Medical Records</h3>
            </div>
            <p className="text-white/60 mb-4">
              View your medical history and previous consultations.
            </p>
            <PillButton variant="ghost" className="w-full">
              View Records
            </PillButton>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
