'use client'

import { useState } from 'react'
import { Card, CardBody, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Input } from "@nextui-org/react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ReferenciasContacto() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const { theme, setTheme } = useTheme()

  const menuItems = [
    { name: "SOBRE MI", href: "/" },
    { name: "MI EMPRENDIMIENTO", href: "/mi-emprendimiento" },
    { name: "MIS PROYECTOS", href: "/mis-proyectos" },
    { name: "EXPERIENCIA", href: "/experiencia" },
    { name: "REFERENCIAS Y CONTACTOS", href: "/referencias-contactos" }
  ]

  const references = [
    {
      name: "Jhonata Midreos",
      title: "Profesor de Desarrollo Web",
      testimonial: "Un estudiante excepcional con habilidades sobresalientes en desarrollo web y una gran capacidad para resolver problemas complejos."
    },
    {
      name: "Luis Carlos Revelo",
      title: "Profesor de Ingeniería de Software",
      testimonial: "Demuestra un profundo entendimiento de los principios de ingeniería de software y una habilidad notable para aplicarlos en proyectos prácticos."
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    
    try {
      const response = await fetch('https://formspree.io/f/xovqwjrz', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        window.location.href = 'https://wa.me/3163535347'
      }
    } catch (error) {
      console.error('Error:', error)
    }
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

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-[#ff4655] mb-8">REFERENCIAS Y CONTACTO</h1>
          
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-200 dark:bg-[#1a2730] shadow-none">
              <CardBody className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Contacto</h2>
                <p className="text-gray-600 dark:text-[#bbb5b2]">
                  Gracias por llegar hasta aquí, si crees que puedo aportar valor a tu equipo o
                  simplemente tienes una pregunta por hacerme, no dudes en escribirme y haré todo
                  lo posible para responderte!
                </p>
                
                <form onSubmit={handleSubmit} method="POST" className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white dark:bg-[#0f1923] border-[#ff4655]"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white dark:bg-[#0f1923] border-[#ff4655]"
                    required
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white dark:bg-[#0f1923] border-[#ff4655]"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-[#ff4655] text-white w-full"
                  >
                    ENVIAR MENSAJE
                  </Button>
                </form>

                <section className="space-y-2 text-sm">
                  <p className="text-gray-600 dark:text-[#bbb5b2]">
                    Email: <Link href="mailto:Juan.moncayo627@gmail.com" className="hover:text-[#ff4655]">Juan.moncayo627@gmail.com</Link>
                  </p>
                  <p className="text-gray-600 dark:text-[#bbb5b2]">
                    LinkedIn: <Link href="https://www.linkedin.com/in/juan-moncayo-19a2a7306/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff4655]">Juan Moncayo</Link>
                  </p>
                  <p className="text-gray-600 dark:text-[#bbb5b2]">
                    WhatsApp: <Link href="https://wa.me/573163535347" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff4655]">+57 3163535347</Link>
                  </p>
                  <p className="text-gray-600 dark:text-[#bbb5b2]">Colombia - Pasto - Nariño</p>
                </section>
              </CardBody>
            </Card>

            <Card className="bg-gray-200 dark:bg-[#1a2730] shadow-none">
              <CardBody className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Referencias</h2>
                {references.map((ref, index) => (
                  <article key={index} className="space-y-2 border-l-2 border-[#ff4655] pl-4">
                    <h3 className="text-[#ff4655] font-semibold">{ref.name}</h3>
                    <p className="text-gray-600 dark:text-[#bbb5b2] text-sm">{ref.title}</p>
                    <p className="text-gray-700 dark:text-[#bbb5b2] italic">{ref.testimonial}</p>
                  </article>
                ))}
              </CardBody>
            </Card>
          </section>
        </main>
      </CardBody>
    </Card>
  )
}