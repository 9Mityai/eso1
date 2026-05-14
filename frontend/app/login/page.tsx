 "use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { MotionIn } from "@/components/ui/motion-in";
import { PillButton } from "@/components/ui/pill-button";
import { useLanguage } from "@/components/providers/language-provider";
import { useAuth, UserRole } from "@/components/providers/auth-provider";
import { translations } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/app/language-switcher";

const DEMO_CREDENTIALS = {
  doctor: { login: "admin", password: "admin" },
  patient: { login: "patient", password: "patient123" }
} as const;

export default function LoginPage() {
  const router = useRouter();
  const { signIn } = useAuth();
  const { language } = useLanguage();
  const t = translations[language];
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("doctor");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isDoctor =
      role === "doctor" && login === DEMO_CREDENTIALS.doctor.login && password === DEMO_CREDENTIALS.doctor.password;
    const isPatient =
      role === "patient" &&
      login === DEMO_CREDENTIALS.patient.login &&
      password === DEMO_CREDENTIALS.patient.password;

    if (isDoctor || isPatient) {
      setError("");
      signIn({ role, login });
      router.push(role === "doctor" ? "/dashboard" : "/patient-home");
      return;
    }

    setError(t.login.invalidCredentials);
  };

  return (
    <div className="grid min-h-screen place-items-center p-4">
      <MotionIn className="w-full max-w-md">
        <GlassCard className="space-y-6 p-8">
          <div className="flex justify-end">
            <LanguageSwitcher />
          </div>
          <div className="space-y-3 text-center">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-accent/50 bg-accent/10">
              <ShieldCheck className="h-6 w-6 text-accent" />
            </span>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">{t.login.secureAccess}</p>
            <h1 className="text-3xl font-semibold uppercase tracking-tightestTech">{t.login.title}</h1>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2">
              <PillButton
                type="button"
                variant={role === "doctor" ? "primary" : "ghost"}
                className="justify-center"
                onClick={() => setRole("doctor")}
              >
                {t.login.roleDoctor}
              </PillButton>
              <PillButton
                type="button"
                variant={role === "patient" ? "primary" : "ghost"}
                className="justify-center"
                onClick={() => setRole("patient")}
              >
                {t.login.rolePatient}
              </PillButton>
            </div>
            <input
              className="w-full rounded-full border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              placeholder={t.login.loginPlaceholder}
              type="text"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />
            <input
              className="w-full rounded-full border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              placeholder={t.login.passwordPlaceholder}
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <PillButton className="w-full justify-center py-3" type="submit">
              {t.login.signIn}
            </PillButton>
            <p className="text-center text-xs text-white/50">{t.login.doctorDemoAccess}</p>
            <p className="text-center text-xs text-white/50">{t.login.patientDemoAccess}</p>
            {error ? <p className="text-center text-xs text-red-300">{error}</p> : null}
          </form>
        </GlassCard>
      </MotionIn>
    </div>
  );
}
