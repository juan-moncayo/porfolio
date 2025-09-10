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
        "I am a Software Engineering student and Junior Fullstack Developer, passionate about creating innovative solutions that combine technology, usability, and scalability. I have strong skills in teamwork, applying best practices, and keeping an updated vision in the software world. I stand out for planning and efficiently executing strategies adapted to the real needs of each project, as well as for a constant commitment to continuous learning, innovation, and improving the user experience.",
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
        "Soy un estudiante de Ingeniería de Software y Desarrollador Fullstack Junior, apasionado por la creación de soluciones innovadoras que combinan tecnología, usabilidad y escalabilidad. Poseo habilidades destacadas para trabajar en equipo, aplicar buenas prácticas y mantener una visión actualizada en el mundo del software. Me caracterizo por la planificación y ejecución eficiente de estrategias, adaptadas a las necesidades reales de cada proyecto, y por un compromiso constante con el aprendizaje continuo, la innovación y la mejora de la experiencia del usuario.",
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
