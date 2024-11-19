'use client'

import React, { useState } from 'react'
import { Card, CardBody, CardHeader, CardFooter, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from '@nextui-org/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"

export default function MiEmprendimiento() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const menuItems = [
    { name: "SOBRE MI", href: "/" },
    { name: "MI EMPRENDIMIENTO", href: "/mi-emprendimiento" },
    { name: "MIS PROYECTOS", href: "/mis-proyectos" },
    { name: "EXPERIENCIA", href: "/experiencia" },
    { name: "REFERENCIAS Y CONTACTOS", href: "/referencias-contactos" }
  ]

  return (
    <Card className="min-h-screen w-full bg-background text-foreground rounded-none">
      <CardBody className="p-0">
        <Navbar 
          className="bg-[#271d28] dark:bg-[#271d28]"
          maxWidth="full"
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarBrand>
            <Link href="/" className="cursor-pointer">
              <Image src="/Logo.png?height=40&width=40" alt="Logo" width={40} height={40} />
            </Link>
          </NavbarBrand>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {menuItems.map((item) => (
              <NavbarItem key={item.name}>
                <Link color="foreground" href={item.href} className="text-[#bbb5b2] hover:text-white">
                  {item.name}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>

          <NavbarContent justify="end">
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
            <NavbarMenuToggle
              className="sm:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarContent>

          <NavbarMenu className="bg-background">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.name}-${index}`}>
                <Link
                  color="foreground"
                  className="w-full"
                  href={item.href}
                  size="lg"
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>

        <Card className="bg-transparent shadow-none border-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CardHeader className="flex-col items-start px-0">
            <h2 className="text-4xl font-bold text-[#ff4655]">MI EMPRENDIMIENTO</h2>
          </CardHeader>
          <CardBody className="px-0 py-8">
            <Card className="bg-transparent shadow-none border-none">
              <CardBody className="p-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-none shadow-none bg-transparent">
                  <CardBody className="p-0">
                    <Link href="https://blog-paycon-637u.vercel.app" target="_blank" className="relative block">
                      <Image
                        src="/paycon.png?height=400&width=600"
                        alt="Paycon Cultivo"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[400px] rounded-t-lg"
                      />
                    </Link>
                  </CardBody>
                  <CardFooter className="bg-[#ff4655] py-2 px-0">
                    <h3 className="text-white text-center w-full">PAYCON</h3>
                  </CardFooter>
                </Card>
                <Card className="bg-gray-200 dark:bg-gray-700 shadow-none rounded-lg border border-gray-300 dark:border-gray-600">
                  <CardHeader className="flex-col items-start">
                    <h3 className="text-2xl font-bold text-[#ff4655]">Paycon</h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-gray-800 dark:text-gray-200 mb-6">
                      En PAYCON, unimos la tradición en el cultivo de hongos con tecnología avanzada
                      para transformar el sector agroindustrial. Producimos hongos de alta calidad en un
                      entorno controlado y sostenible, optimizando cada etapa del proceso para
                      garantizar frescura y excelencia.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200 mb-6">
                      <li>Cultivo de hongos de alta calidad</li>
                      <li>Tecnología avanzada en producción</li>
                      <li>Procesos sostenibles y controlados</li>
                      <li>Compromiso con la excelencia</li>
                      <li>Innovación continua</li>
                    </ul>
                    <Button
                      className="bg-[#ff4655] text-white font-bold"
                      size="lg"
                      href="https://blog-paycon-637u.vercel.app"
                      as={Link}
                      target="_blank"
                    >
                      INFO
                    </Button>
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  )
}