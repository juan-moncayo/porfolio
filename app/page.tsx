"use client"

import { useEffect } from "react"
import { Card, CardBody } from "@nextui-org/react"
// Cambiamos las importaciones para usar rutas relativas en lugar de alias
import Header from "../app/components/Header"
import Footer from "../app/components/Footer"

export default function HomePage() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark")

    // Add inline styles as a last resort
    const style = document.createElement("style")
    style.innerHTML = `
      body {
        background-color: rgb(15, 25, 35) !important;
        color: rgb(187, 181, 178) !important;
      }
      .bg-\\[\\#271d28\\] {
        background-color: #271d28 !important;
      }
      .text-\\[\\#ff4655\\] {
        color: #ff4655 !important;
      }
      .bg-\\[\\#ff4655\\] {
        background-color: #ff4655 !important;
      }
      .dark .dark\\:bg-\\[\\#1a2730\\] {
        background-color: #1a2730 !important;
      }
      .dark .dark\\:text-\\[\\#bbb5b2\\] {
        color: #bbb5b2 !important;
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <Card className="min-h-screen w-full bg-background text-foreground rounded-none">
      <CardBody className="p-0">
        {/* Header Component */}
        <Header />

        {/* Main content would go here */}
        <main className="p-4">
          <h1 className="text-4xl font-bold text-[#ff4655] mb-4">Juan David Moncayo</h1>
          <p className="text-gray-600 dark:text-gray-400">Desarrollador Web</p>
        </main>

        {/* Footer Component */}
        <Footer />
      </CardBody>
    </Card>
  )
}
