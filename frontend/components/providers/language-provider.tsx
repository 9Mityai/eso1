"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { LanguageCode, translations } from "@/lib/i18n";

const STORAGE_KEY = "eso-language";

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (value: LanguageCode) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (saved && translations[saved]) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (value: LanguageCode) => {
    localStorage.setItem(STORAGE_KEY, value);
    setLanguageState(value);
  };

  const contextValue = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return value;
}
