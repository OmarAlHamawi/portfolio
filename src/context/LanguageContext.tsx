import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = 'EN' | 'AR';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('EN');

  // Moves the RTL logic here so it happens globally!
  useEffect(() => {
    document.documentElement.dir = lang === 'AR' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'EN' ? 'AR' : 'EN'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};