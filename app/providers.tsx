"use client"

import type React from "react"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { NextUIProvider } from "@nextui-org/react"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  )
}
