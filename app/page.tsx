'use client'

import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Accordion, AccordionItem, Button } from '@nextui-org/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"

export default function SobreMi() {
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
          <NavbarContent>
            <NavbarBrand>
              <Link href="#sobre-mi" className="cursor-pointer">
                <Image src="/Logo.png?height=40&width=40" alt="Logo" width={40} height={40} />
              </Link>
            </NavbarBrand>
          </NavbarContent>

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

          <NavbarMenu className="bg-background flex-col gap-4">
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

        <Card className="bg-transparent shadow-none border-none max-w-7xl mx-auto" id="sobre-mi">
          <CardBody className="px-4 sm:px-6 lg:px-8 py-8">
            <Card className="bg-transparent shadow-none border-none">
              <CardBody className="p-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Image
                  src="/Me.jpg?height=400&width=400"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="object-cover w-full h-auto rounded-lg border border-[#ff4655]"
                />
                <Card className="bg-transparent shadow-none border-none">
                  <CardHeader className="flex-col items-start px-0">
                    <h2 className="text-4xl font-bold text-[#ff4655]">SOBRE MI</h2>
                  </CardHeader>
                  <CardBody className="px-0 flex flex-col gap-4">
                    <p className="text-foreground text-lg">
                      Soy un desarrollador y entusiasta de Valorant. Mi pasión por el juego y
                      la tecnología me impulsa a crear experiencias digitales únicas,
                      combinando estrategias de juego con innovación en desarrollo web.
                    </p>
                    <Accordion 
                      variant="shadow"
                      className="px-0 flex flex-col gap-0"
                      selectionMode="multiple"
                    >
                      <AccordionItem 
                        key="programar" 
                        aria-label="PROGRAMAR" 
                        title="PROGRAMAR"
                        classNames={{
                          base: "bg-[#ff4655] rounded-none",
                          title: "text-[#bbb5b2] font-bold text-center",
                          content: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
                          trigger: "px-4 py-3 data-[hover=true]:bg-[#ff4655]/90"
                        }}
                      >
                        <p className="p-4">
                        Soy estudiante de Ingeniería de Software con experiencia en desarrollo backend utilizando frameworks como Django y Spring Boot, y lenguajes como Python y Java. También trabajo en frontend con React y gestiono bases de datos como PostgreSQL y MySQL. He desarrollado proyectos de automatización y control con ESP32 y Arduino. Disfruto aprender nuevas tecnologías y aplicar mi creatividad en proyectos innovadores.
                        </p>
                      </AccordionItem>
                      <AccordionItem 
                        key="video-juegos" 
                        aria-label="VIDEO JUEGOS" 
                        title="VIDEO JUEGOS"
                        classNames={{
                          base: "bg-[#ff4655] rounded-none",
                          title: "text-[#bbb5b2] font-bold text-center",
                          content: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
                          trigger: "px-4 py-3 data-[hover=true]:bg-[#ff4655]/90"
                        }}
                      >
                        <p className="p-4">
                        Mi pasión por los videojuegos, especialmente Valorant, Minecraft, Fortnite y League of Legends (LoL), ha sido una gran fuente de inspiración para mi trabajo en programación. Estos juegos no solo alimentan mi creatividad, sino que también influyen en el diseño de mis proyectos y en la forma en que abordo los desafíos técnicos. El interés por juegos estratégicos y competitivos como Valorant y LoL me ha enseñado a resolver problemas de manera eficiente y a pensar en soluciones rápidas, mientras que Minecraft y Fortnite refuerzan mi pasión por crear entornos y sistemas interactivos, lo que se refleja en mis proyectos de software y automatización.
                        </p>
                      </AccordionItem>
                      <AccordionItem 
                        key="voleibol" 
                        aria-label="VOLEIBOL" 
                        title="VOLEIBOL"
                        classNames={{
                          base: "bg-[#ff4655] rounded-none",
                          title: "text-[#bbb5b2] font-bold text-center",
                          content: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
                          trigger: "px-4 py-3 data-[hover=true]:bg-[#ff4655]/90"
                        }}
                      >
                        <p className="p-4">
                        El voleibol es uno de mis hobbies, y me ha enseñado valiosas lecciones que aplico en mi desarrollo profesional. La importancia del trabajo en equipo, la comunicación efectiva y la disciplina que exige el deporte me han ayudado a ser más organizado y a abordar desafíos de manera colaborativa en mis proyectos de programación. Además, me ha enseñado a mantener la perseverancia y a adaptarme rápidamente a nuevas situaciones, habilidades que considero esenciales en mi carrera.
                        </p>
                      </AccordionItem>
                    </Accordion>
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