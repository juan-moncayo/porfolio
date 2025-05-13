"use client"

import { useEffect, useState } from "react"

export default function Footer({ rights }: { rights?: string }) {
  const [language, setLanguage] = useState("es")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem("preferredLanguage")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }

    // Listen for language changes from the Header component
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
    }
  }, [])

  // Default rights text based on language if not provided
  const defaultRights =
    language === "en"
      ? "© 2025 Juan David Moncayo. All rights reserved."
      : "© 2025 Juan David Moncayo. Todos los derechos reservados."

  if (!isMounted) {
    return null
  }

  return (
    <footer className="bg-[#271d28] dark:bg-[#271d28] text-center py-6">
      <p className="text-[#bbb5b2]">{rights || defaultRights}</p>
    </footer>
  )
}
