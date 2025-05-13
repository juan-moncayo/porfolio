"use client"

import type React from "react"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { NextUIProvider } from "@nextui-org/react"
import { useEffect } from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  // Force styles to be applied on client-side
  useEffect(() => {
    // Add a class to the body to trigger style recalculation
    document.body.classList.add("client-loaded")

    // Force dark mode if that's the default
    document.documentElement.classList.add("dark")

    // Force a repaint to ensure styles are applied
    const forceRepaint = () => {
      document.body.style.display = "none"
      // Force a reflow
      void document.body.offsetHeight
      document.body.style.display = ""
    }

    // Run after a short delay to ensure all styles are loaded
    setTimeout(forceRepaint, 100)
  }, [])

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  )
}
