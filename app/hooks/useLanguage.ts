"use client"

import { useState, useEffect } from "react"

// Define your translations object
const translations = {
  en: {
    menu: {
      aboutMe: "ABOUT ME",
      myEnterprise: "MY ENTERPRISE",
      myProjects: "MY PROJECTS",
      experience: "EXPERIENCE",
      referencesContacts: "REFERENCES & CONTACTS",
    },
    hero: {
      title: "Junior Full Stack Developer",
      description:
        "I am a developer passionate about creating innovative technological solutions. I combine my experience in web development with my creativity to build applications that make a difference.",
      contactMe: "Contact Me",
      viewProjects: "View Projects",
      downloadCV: "Download CV",
    },
    // Add other translation sections as needed
    myProjects: {
      pageTitle: "MY PROJECTS",
      pageSubtitle: "Explore some of my most recent and outstanding work",
      viewMore: "VIEW MORE",
      viewDemo: "VIEW DEMO",
      description: "Description",
      visitSite: "Visit site",
      closeDetails: "Close details",
      close: "Close",
    },
  },
  es: {
    menu: {
      aboutMe: "SOBRE MI",
      myEnterprise: "MI EMPRENDIMIENTO",
      myProjects: "MIS PROYECTOS",
      experience: "EXPERIENCIA",
      referencesContacts: "REFERENCIAS Y CONTACTOS",
    },
    hero: {
      title: "Desarrollador Junior Full Stack",
      description:
        "Soy un desarrollador apasionado por crear soluciones tecnológicas innovadoras. Combino mi experiencia en desarrollo web con mi creatividad para construir aplicaciones que marcan la diferencia.",
      contactMe: "Contáctame",
      viewProjects: "Ver Proyectos",
      downloadCV: "Descargar CV",
    },
    // Add other translation sections as needed
    myProjects: {
      pageTitle: "MIS PROYECTOS",
      pageSubtitle: "Explora algunos de mis trabajos más recientes y destacados",
      viewMore: "VER MÁS",
      viewDemo: "VER DEMO",
      description: "Descripción",
      visitSite: "Visitar sitio",
      closeDetails: "Cerrar detalles",
      close: "Cerrar",
    },
  },
}

export type Language = "en" | "es"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("es") // Default language is Spanish
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem("preferredLanguage")
    if (savedLanguage === "en" || savedLanguage === "es") {
      setLanguage(savedLanguage)
    }

    // Listen for language changes from other components
    const handleLanguageChange = (event: CustomEvent) => {
      const newLanguage = event.detail.language
      if (newLanguage === "en" || newLanguage === "es") {
        setLanguage(newLanguage)
      }
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en"
    setLanguage(newLanguage)
    localStorage.setItem("preferredLanguage", newLanguage)

    // Dispatch a custom event that pages can listen for
    const event = new CustomEvent("languageChange", { detail: { language: newLanguage } })
    window.dispatchEvent(event)
  }

  // Get translations based on current language
  const t = translations[language as keyof typeof translations]

  return { language, toggleLanguage, t, isMounted }
}
