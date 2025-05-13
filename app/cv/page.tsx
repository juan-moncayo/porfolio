"use client"

import { useEffect, useState } from "react"
import { Button } from "@nextui-org/react"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

// Define translations
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
  },
}

export default function CVPage() {
  const [language, setLanguage] = useState("en") // Default language is English
  const t = translations[language as keyof typeof translations]

  useEffect(() => {
    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem("preferredLanguage")
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Add a separate useEffect that runs when language changes and triggers the download
  useEffect(() => {
    // Only trigger download after language is properly set
    if (language) {
      // Get the CV file name based on language
      const cvFileName = language === "en" ? "cv-juan-moncayo-en.pdf" : "cv-juan-moncayo.pdf"

      // Create and trigger download
      const downloadLink = document.createElement("a")
      downloadLink.href = `/${cvFileName}`
      downloadLink.download = cvFileName
      downloadLink.click()
    }
  }, [language])

  // Get the CV file name based on language for the manual download button
  const cvFileName = language === "en" ? "cv-juan-moncayo-en.pdf" : "cv-juan-moncayo.pdf"

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex flex-col items-center justify-center gap-6 min-h-[70vh]">
        <h1 className="text-3xl font-bold text-center">{t.downloading}</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-md">{t.manualDownload}</p>
        <div className="flex gap-4">
          <Button
            as="a"
            href={`/${cvFileName}`}
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
