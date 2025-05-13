import type React from "react"
import type { Metadata } from "next"
import { Providers } from "./providers"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Juan David Moncayo - Portfolio",
  description: "Portfolio personal de Juan David Moncayo, desarrollador web",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add inline styles to ensure basic styling works */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          body {
            background-color: rgb(15, 25, 35);
            color: rgb(187, 181, 178);
            font-family: var(--font-geist-sans), Arial, sans-serif;
          }
          .dark {
            background-color: rgb(15, 25, 35);
            color: rgb(187, 181, 178);
          }
          .text-\\[\\#ff4655\\] {
            color: #ff4655 !important;
          }
          .bg-\\[\\#ff4655\\] {
            background-color: #ff4655 !important;
          }
          .bg-\\[\\#271d28\\] {
            background-color: #271d28 !important;
          }
        `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
