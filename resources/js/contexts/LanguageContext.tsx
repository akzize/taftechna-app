import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (ar: string, fr?: string, en?: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // This function runs only once on initial component creation
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem("language") as Language;
      // Ensure savedLang is one of the valid Language types or default to "ar"
      if (savedLang && ["ar", "fr", "en"].includes(savedLang)) {
        return savedLang;
      }
    }
    return "ar"; // Default value for initial state
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const t = (ar: string, fr?: string, en?: string): string => {
    if (language === "fr" && fr) return fr;
    if (language === "en" && en) return en;
    return ar;
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
