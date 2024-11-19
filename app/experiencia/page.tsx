'use client'

import { useState } from 'react'
import { Card, CardBody, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react"
import { Briefcase, GraduationCap, ChevronDown, Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"

export default function Experiencia() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState<'work' | 'education' | null>(null)
  const { theme, setTheme } = useTheme()

  const menuItems = [
    { name: "SOBRE MI", href: "/" },
    { name: "MI EMPRENDIMIENTO", href: "/mi-emprendimiento" },
    { name: "MIS PROYECTOS", href: "/mis-proyectos" },
    { name: "EXPERIENCIA", href: "/experiencia" },
    { name: "REFERENCIAS Y CONTACTOS", href: "/referencias-contactos" }
  ]

  const workExperience = [
    {
      title: "Desarrollador Full Stack",
      company: "Paycon",
      period: "2024 - Presente",
      description: "Desarrollo de aplicaciones web utilizando React, Node.js y MySQL/Workbench."
    },
    {
      title: "Desarrollador Front-end",
      company: "Pro.sas",
      period: "2024 - Presente",
      description: "Creación de interfaces de usuario responsivas y accesibles con Next.js y Tailwind CSS."
    }
  ]

  const academicExperience = [
    {
      title: "Ingeniería de Software",
      institution: "Universidad Cooperativa de colombia",
      period: "2021 - Presente",
      description: "diseño, desarrollo, prueba y mantenimiento de aplicaciones y sistemas informáticos, aplicando principios de ingeniería para garantizar calidad, eficiencia y sostenibilidad en el proceso de creación de software."
    },
    {
      title: "Curso De Paython",
      institution: "Cisco",
      period: "2024 - 2024",
      description: "Fundamentos de programación, estructuras de datos, patrones y algoritmos."
    },
    {
      title: "Curso Anasis de datos",
      institution: "Talento Tech",
      period: "2024 - 2024",
      description: "Bootcamp intensivo de 150 horas en tecnologías de analisis de datos."
    },
    {
      title: "Desarrorlo FullStack",
      institution: "Universidad Cooperativa de colombia",
      period: "2024 - 2024",
      description: "Desarrollo de una aplicación web tipo LinkedIn para crear publicaciones y gestionar conexiones entre personas."
    }
  ]

  const toggleSection = (section: 'work' | 'education') => {
    setOpenSection(openSection === section ? null : section)
  }

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

        <main className="p-8">
          <section className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-[#ff4655] mb-8">EXPERIENCIA</h1>
            
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="w-full">
                <button
                  onClick={() => toggleSection('work')}
                  className="w-full flex items-center justify-between p-4 bg-gray-200 dark:bg-[#1a2730] text-xl rounded-t-lg focus:outline-none"
                  aria-expanded={openSection === 'work'}
                >
                  <span className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Experiencia Laboral
                  </span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openSection === 'work' ? 'rotate-180' : ''}`} />
                </button>
                {openSection === 'work' && (
                  <Card className="bg-gray-200 dark:bg-[#1a2730] shadow-none rounded-t-none">
                    <CardBody className="gap-6">
                      {workExperience.map((job, index) => (
                        <article 
                          key={index} 
                          className="border-l-2 border-[#ff4655] pl-4 py-2"
                        >
                          <h3 className="text-[#ff4655] text-lg font-semibold">
                            {job.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {job.company} | {job.period}
                          </p>
                          <p className="mt-2 text-gray-800 dark:text-[#bbb5b2]">{job.description}</p>
                        </article>
                      ))}
                    </CardBody>
                  </Card>
                )}
              </section>

              <section className="w-full">
                <button
                  onClick={() => toggleSection('education')}
                  className="w-full flex items-center justify-between p-4 bg-gray-200 dark:bg-[#1a2730] text-xl rounded-t-lg focus:outline-none"
                  aria-expanded={openSection === 'education'}
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Experiencia Académica
                  </span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openSection === 'education' ? 'rotate-180' : ''}`} />
                </button>
                {openSection === 'education' && (
                  <Card className="bg-gray-200 dark:bg-[#1a2730] shadow-none rounded-t-none">
                    <CardBody className="gap-6">
                      {academicExperience.map((edu, index) => (
                        <article 
                          key={index} 
                          className="border-l-2 border-[#ff4655] pl-4 py-2"
                        >
                          <h3 className="text-[#ff4655] text-lg font-semibold">
                            {edu.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {edu.institution} | {edu.period}
                          </p>
                          <p className="mt-2 text-gray-800 dark:text-[#bbb5b2]">{edu.description}</p>
                        </article>
                      ))}
                    </CardBody>
                  </Card>
                )}
              </section>
            </section>
          </section>
        </main>
      </CardBody>
    </Card>
  )
}