import { useState, useEffect } from 'react';
import { translations } from '../utils/translations';

export function useLanguage() {
  const [language, setLanguage] = useState("en");
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage);
    }
  }, []);
  
  // Function to toggle language
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("preferredLanguage", newLanguage);
  };
  
  // Get translations based on current language
  const t = translations[language];
  
  return { language, toggleLanguage, t, isMounted };
}