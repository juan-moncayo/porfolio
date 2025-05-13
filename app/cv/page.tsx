"use client"

import { useEffect, useState } from "react"
import { Button } from "@nextui-org/react"
import { ArrowLeft, Download, Globe } from 'lucide-react'
import Link from "next/link"

// Traducciones
const translations = {
  en: {
    downloading: "Downloading your CV...",
    manualDownload: "If the download doesn't start automatically, click the button below.",
    downloadCV: "Download CV",
    backToHome: "Back to home",
    switchLanguage: "Español",
  },
  es: {
    downloading: "Descargando tu CV...",
    manualDownload: "Si la descarga no comienza automáticamente, haz clic en el botón de abajo.",
    downloadCV: "Descargar CV",
    backToHome: "Volver al inicio",
    switchLanguage: "English",
  }
};

export default function CVPage() {
  const [language, setLanguage] = useState("en") // Default language is English
  const t = translations[language]

  useEffect(() => {
    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem("preferredLanguage")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
    
    // Iniciar la descarga automáticamente cuando la página carga
    const downloadLink = document.createElement("a")
    downloadLink.href = language === "en" ? "/cv-juan-moncayo-en.pdf" : "/cv-juan-moncayo.pdf"
    downloadLink.download = language === "en" ? "cv-juan-moncayo-en.pdf" : "cv-juan-moncayo.pdf"
    downloadLink.click()
  }, [language])
  
  // Function to toggle language
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en"
    setLanguage(newLanguage)
    localStorage.setItem("preferredLanguage", newLanguage)
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-end mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleLanguage}
          className="text-gray-600 dark:text-gray-400"
          startContent={<Globe size={16} />}
        >
          {t.switchLanguage}
        </Button>
      </div>
      
      <div className="flex flex-col items-center justify-center gap-6 min-h-[70vh]">
        <h1 className="text-3xl font-bold text-center">{t.downloading}</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-md">
          {t.manualDownload}
        </p>
        <div className="flex gap-4">
          <Button
            as="a"
            href={language === "en" ? "/cv-juan-moncayo-en.pdf" : "/cv-juan-moncayo.pdf"}
            download
            color="primary"
            className="bg-[#ff4655]"
            startContent={<Download size={16} />}
          >
            {t.downloadCV}
          </Button>
          <Button as={Link} href="/" variant="bordered" startContent={<ArrowLeft size={16} />}>
            {t.backToHome}
          </Button>
        </div>
      </div>
    </div>
  )
}