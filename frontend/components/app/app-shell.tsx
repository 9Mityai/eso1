"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Activity, Bot, CreditCard, Files, LayoutDashboard, LogOut, Upload, UserRound, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { LanguageSwitcher } from "@/components/app/language-switcher";
import { translations } from "@/lib/i18n";
import { useAuth } from "@/components/providers/auth-provider";
import { PillButton } from "@/components/ui/pill-button";

const navItems = [
  { key: "dashboard", href: "/dashboard", icon: LayoutDashboard },
  { key: "patients", href: "/patients", icon: Users },
  { key: "cases", href: "/cases", icon: Files },
  { key: "aiGem", href: "/ai-gem", icon: Bot },
  { key: "patientHome", href: "/patient-home", icon: UserRound },
  { key: "patientCabinet", href: "/patient-cabinet", icon: UserRound },
  { key: "uploadDicom", href: "/upload-dicom", icon: Upload },
  { key: "billing", href: "/billing", icon: CreditCard }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { language } = useLanguage();
  const { session, signOut } = useAuth();
  const t = translations[language];
  const isPatient = session?.role === "patient";

  useEffect(() => {
    if (!session) {
      router.push("/login");
      return;
    }

    const doctorRoutes = ["/dashboard", "/patients", "/cases", "/ai-gem", "/upload-dicom", "/billing"];
    const patientRoutes = ["/patient-home", "/patient-cabinet"];

    if (session.role === "doctor" && patientRoutes.some((route) => pathname.startsWith(route))) {
      router.push("/dashboard");
    }

    if (session.role === "patient" && doctorRoutes.some((route) => pathname.startsWith(route))) {
      router.push("/patient-home");
    }
  }, [pathname, router, session]);

  if (!session) {
    return null;
  }

  const visibleNavItems = navItems.filter((item) =>
    isPatient ? item.href === "/patient-home" || item.href === "/patient-cabinet" : item.href !== "/patient-home"
  );

  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 gap-4 p-4 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-glass border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-accent/40 bg-accent/10">
              <Activity className="h-5 w-5 text-accent" />
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted">EuroSecondOpinion</p>
              <p className="text-xs text-accent">{t.app.premiumTelemedicine}</p>
            </div>
          </div>
          <nav className="space-y-2">
            {visibleNavItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-full border px-4 py-2.5 text-sm transition",
                    active
                      ? "border-accent/60 bg-accent/10 text-accent"
                      : "border-white/10 bg-white/[0.02] text-white/90 hover:bg-white/[0.08]"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {t.app[item.key as keyof typeof t.app]}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4">
            <PillButton
              variant="ghost"
              className="w-full justify-center"
              onClick={() => {
                signOut();
                router.push("/login");
              }}
            >
              <LogOut className="h-4 w-4" />
              {t.app.logout}
            </PillButton>
          </div>
          <div className="mt-8 border-t border-white/10 pt-4">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted">{t.app.language}</p>
            <LanguageSwitcher />
          </div>
        </aside>
        <main className="pb-8">{children}</main>
      </div>
    </div>
  );
}
