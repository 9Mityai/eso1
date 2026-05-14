"use client";

import { supportedLanguages } from "@/lib/i18n";
import { useLanguage } from "@/components/providers/language-provider";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <label className="flex items-center gap-2 text-xs text-muted">
      <span className="uppercase tracking-[0.2em]">Lang</span>
      <select
        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white outline-none transition focus-visible:ring-2 focus-visible:ring-accent/60"
        value={language}
        onChange={(event) => setLanguage(event.target.value as (typeof supportedLanguages)[number]["code"])}
      >
        {supportedLanguages.map((item) => (
          <option key={item.code} value={item.code} className="bg-black text-white">
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}
