"use client"

import { useState, useEffect } from "react"
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react"
import { Moon, Sun, Globe } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"

// Define the translations for menu items
const menuTranslations = {
  en: [
    { name: "ABOUT ME", href: "/" },
    { name: "MY ENTERPRISE", href: "/mi-emprendimiento" },
    { name: "MY PROJECTS", href: "/mis-proyectos" },
    { name: "EXPERIENCE", href: "/experiencia" },
    { name: "REFERENCES & CONTACTS", href: "/referencias-contactos" },
  ],
  es: [
    { name: "SOBRE MI", href: "/" },
    { name: "MI EMPRENDIMIENTO", href: "/mi-emprendimiento" },
    { name: "MIS PROYECTOS", href: "/mis-proyectos" },
    { name: "EXPERIENCIA", href: "/experiencia" },
    { name: "REFERENCIAS Y CONTACTOS", href: "/referencias-contactos" },
  ],
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [language, setLanguage] = useState("es") // Default language is Spanish
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  // Initialize language from localStorage on component mount
  useEffect(() => {
    setIsMounted(true)
    const savedLanguage = localStorage.getItem("preferredLanguage")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Function to toggle language
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en"
    setLanguage(newLanguage)
    localStorage.setItem("preferredLanguage", newLanguage)

    // Dispatch a custom event that pages can listen for
    const event = new CustomEvent("languageChange", { detail: { language: newLanguage } })
    window.dispatchEvent(event)
  }

  // Get menu items based on current language
  const menuItems = menuTranslations[language as keyof typeof menuTranslations] || menuTranslations.en

  // Don't render anything until mounted to prevent hydration issues
  if (!isMounted) {
    return null
  }

  return (
    <Navbar className="bg-[#271d28] dark:bg-[#271d28]" maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      {/* Logo on the left */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/" className="cursor-pointer">
            <Image src="/Logo.png" alt="Logo" width={40} height={40} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Menu items in the center (hidden on mobile) */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name} isActive={pathname === item.href}>
            <Link
              color={pathname === item.href ? "primary" : "foreground"}
              href={item.href}
              className={`${pathname === item.href ? "text-[#ff4655]" : "text-[#bbb5b2]"} hover:text-white`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Controls on the right */}
      <NavbarContent justify="end">
        {/* Language Toggle Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleLanguage}
          className="w-auto h-9 rounded-lg text-[#bbb5b2] hover:text-white"
          startContent={<Globe size={16} />}
        >
          {language === "en" ? "Español" : "English"}
        </Button>

        {/* Theme Toggle Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="w-9 h-9 rounded-lg"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Hamburger menu on the right (visible only on mobile) */}
        <NavbarMenuToggle className="sm:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* Mobile menu (shown when hamburger is clicked) */}
      <NavbarMenu className="bg-background flex-col gap-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={pathname === item.href ? "primary" : "foreground"}
              className={`w-full ${pathname === item.href ? "text-[#ff4655]" : ""}`}
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
