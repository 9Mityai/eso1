"use client";

import { useMemo, useState } from "react";
import { CalendarClock, CircleCheck, FileText, UserRound } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { MotionIn } from "@/components/ui/motion-in";
import { PillButton } from "@/components/ui/pill-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/components/providers/language-provider";
import { translations } from "@/lib/i18n";
import { patientInvoices, serviceCatalog } from "@/lib/patient-cabinet-data";

type Appointment = {
  date: string;
  note: string;
};

export default function PatientCabinetPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const [fullName, setFullName] = useState("Anna Keller");
  const [email, setEmail] = useState("anna.keller@patient.eu");
  const [phone, setPhone] = useState("+41 79 000 0000");
  const [saved, setSaved] = useState(false);

  const [cart, setCart] = useState<string[]>([]);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentNote, setAppointmentNote] = useState("");
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const selectedServices = serviceCatalog.filter((service) => cart.includes(service.id));
  const total = useMemo(
    () => selectedServices.reduce((sum, service) => sum + service.priceEur, 0),
    [selectedServices]
  );

  const toggleService = (serviceId: string) => {
    setCart((prev) => (prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId]));
  };

  const saveProfile = () => {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1600);
  };

  const bookAppointment = () => {
    if (!appointmentDate.trim()) return;
    setAppointments((prev) => [{ date: appointmentDate, note: appointmentNote || "General consultation" }, ...prev]);
    setAppointmentDate("");
    setAppointmentNote("");
  };

  return (
    <div className="space-y-6">
      <MotionIn>
        <SectionHeading title={t.patientCabinet.title} subtitle={t.patientCabinet.subtitle} />
      </MotionIn>

      <div className="grid gap-4 xl:grid-cols-3">
        <MotionIn delay={0.08} className="xl:col-span-1">
          <GlassCard className="space-y-4">
            <div className="flex items-center gap-2">
              <UserRound className="h-5 w-5 text-accent" />
              <p className="text-lg font-semibold uppercase tracking-tightestTech">{t.patientCabinet.profile}</p>
            </div>
            <div className="space-y-3">
              <input
                className="w-full rounded-full border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder={t.patientCabinet.fullName}
              />
              <input
                className="w-full rounded-full border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={t.patientCabinet.email}
              />
              <input
                className="w-full rounded-full border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder={t.patientCabinet.phone}
              />
            </div>
            <div className="flex items-center gap-3">
              <PillButton onClick={saveProfile}>{t.patientCabinet.saveProfile}</PillButton>
              {saved ? (
                <span className="inline-flex items-center gap-1 text-xs text-accent">
                  <CircleCheck className="h-4 w-4" />
                  {t.patientCabinet.saved}
                </span>
              ) : null}
            </div>
          </GlassCard>
        </MotionIn>

        <MotionIn delay={0.12} className="xl:col-span-2">
          <GlassCard className="space-y-4">
            <p className="text-lg font-semibold uppercase tracking-tightestTech">{t.patientCabinet.services}</p>
            <div className="grid gap-3 md:grid-cols-2">
              {serviceCatalog.map((service) => {
                const inCart = cart.includes(service.id);
                return (
                  <div key={service.id} className="rounded-[24px] border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-sm font-medium uppercase tracking-wide">{service.title}</p>
                    <p className="mt-2 text-xs text-muted">{service.description}</p>
                    <p className="mt-3 text-sm text-white/90">
                      EUR {service.priceEur.toLocaleString()} - ETA {service.etaHours}h
                    </p>
                    <PillButton
                      className="mt-4"
                      variant={inCart ? "ghost" : "primary"}
                      onClick={() => toggleService(service.id)}
                    >
                      {inCart ? t.patientCabinet.inCart : t.patientCabinet.addToCart}
                    </PillButton>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </MotionIn>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <MotionIn delay={0.16}>
          <GlassCard className="space-y-4">
            <div className="flex items-center gap-2">
              <CalendarClock className="h-5 w-5 text-accent" />
              <p className="text-lg font-semibold uppercase tracking-tightestTech">{t.patientCabinet.appointments}</p>
            </div>
            <input
              type="datetime-local"
              className="w-full rounded-full border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm"
              value={appointmentDate}
              onChange={(event) => setAppointmentDate(event.target.value)}
            />
            <input
              className="w-full rounded-full border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm"
              value={appointmentNote}
              onChange={(event) => setAppointmentNote(event.target.value)}
              placeholder={t.patientCabinet.notesPlaceholder}
            />
            <PillButton onClick={bookAppointment}>{t.patientCabinet.bookNow}</PillButton>
            <div className="space-y-2">
              {appointments.length === 0 ? (
                <p className="text-sm text-muted">{t.patientCabinet.noAppointments}</p>
              ) : (
                appointments.map((appointment) => (
                  <div
                    key={`${appointment.date}-${appointment.note}`}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-sm"
                  >
                    <p>{new Date(appointment.date).toLocaleString()}</p>
                    <p className="text-muted">{appointment.note}</p>
                  </div>
                ))
              )}
            </div>
          </GlassCard>
        </MotionIn>

        <MotionIn delay={0.2}>
          <GlassCard className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-accent" />
              <p className="text-lg font-semibold uppercase tracking-tightestTech">{t.patientCabinet.cartSummary}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">{t.patientCabinet.selectedServices}</p>
              {selectedServices.length === 0 ? (
                <p className="text-sm text-muted">{t.patientCabinet.noServices}</p>
              ) : (
                selectedServices.map((service) => (
                  <div key={service.id} className="flex items-center justify-between rounded-2xl border border-white/10 px-3 py-2">
                    <span className="text-sm text-white/90">{service.title}</span>
                    <span className="text-sm text-accent">EUR {service.priceEur.toLocaleString()}</span>
                  </div>
                ))
              )}
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-3">
              <p className="text-sm uppercase tracking-[0.2em] text-muted">{t.patientCabinet.total}</p>
              <p className="text-lg font-semibold text-accent">EUR {total.toLocaleString()}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted">{t.patientCabinet.invoices}</p>
              <div className="space-y-2">
                {patientInvoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between text-sm">
                    <span className="text-white/85">
                      {invoice.id} - {invoice.service}
                    </span>
                    <span className={invoice.status === "Paid" ? "text-accent" : "text-white/70"}>
                      EUR {invoice.amountEur}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </MotionIn>
      </div>
    </div>
  );
}
