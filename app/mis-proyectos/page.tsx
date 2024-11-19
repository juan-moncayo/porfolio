'use client'

import { useState } from 'react'
import { Card, CardBody, CardHeader, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"

interface Project {
  id: number
  title: string
  image: string
  description: string
  demoUrl: string
  modalContent: string
}

export default function MisProyectos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const menuItems = [
    { name: "SOBRE MI", href: "/" },
    { name: "MI EMPRENDIMIENTO", href: "/mi-emprendimiento" },
    { name: "MIS PROYECTOS", href: "/mis-proyectos" },
    { name: "EXPERIENCIA", href: "/experiencia" },
    { name: "REFERENCIAS Y CONTACTOS", href: "/referencias-contactos" }
  ]

  const projects: Project[] = [
    {
      id: 1,
      title: "Luxury Now",
      image: "/luxury.png?height=400&width=600",
      description: "Plataforma interactiva que te facilita la agenda de servicios en cancun (En desarrollo)",
      demoUrl: "https://luxury-now-blog-83b3.vercel.app",
      modalContent: "Plataforma interactiva que facilita la gestión de agendas de servicios en Cancún, permitiendo a los usuarios reservar y gestionar citas de manera eficiente. Con un diseño intuitivo y herramientas de fácil acceso, esta plataforma busca mejorar la experiencia de los clientes y optimizar la gestión para los proveedores de servicios en la región."
    },
    {
      id: 2,
      title: "Tienda De Perifericos",
      image: "/perifericos.png?height=400&width=600",
      description: "Una tienda interactiva que permite a los usuarios explorar diferentes periféricos en tiempo real y agregar productos al carrito de compras.",
      demoUrl: "https://tienda-de-perifericos.vercel.app",
      modalContent: "Una tienda interactiva que permite a los usuarios explorar diferentes periféricos en tiempo real, visualizando características, precios y disponibilidad de los productos. Los usuarios pueden agregar productos al carrito de compras de manera sencilla y rápida, proporcionando una experiencia de compra fluida y dinámica."

    },
    {
      id: 3,
      title: "ProNet",
      image: "/pronet.png?height=400&width=600",
      description: "Una plataforma interactiva que permite a los usuarios conectarse entre si crear publicaciones y colaborar en un entorno profesional.",
      demoUrl: "#",
      modalContent: "Una plataforma interactiva que permite a los usuarios conectarse entre sí, crear publicaciones y colaborar en un entorno profesional. ProNet está diseñada para facilitar la interacción y el intercambio de ideas entre profesionales, ofreciendo herramientas para la gestión de contenido y la creación de redes de contacto dentro de un espacio digital organizado y accesible."
    }
  ]

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
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

        <Card className="bg-transparent shadow-none border-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CardHeader className="flex-col items-start px-0">
            <h2 className="text-4xl font-bold text-[#ff4655]">MIS PROYECTOS</h2>
          </CardHeader>
          <CardBody className="px-0 py-8">
            <Card className="bg-transparent shadow-none border-none">
              <CardBody className="p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <Card key={project.id} className="bg-gray-200 dark:bg-[#1a2730] shadow-none rounded-lg">
                    <CardBody className="p-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[200px] object-cover border border-gray-300 dark:border-white"
                      />
                      <section className="p-4">
                        <h3 className="text-xl font-bold text-[#ff4655] mb-2">{project.title}</h3>
                        <p className="text-gray-800 dark:text-[#bbb5b2] mb-4">{project.description}</p>
                        <footer className="flex gap-4">
                          <Button
                            className="bg-[#ff4655] text-white"
                            onClick={() => handleOpenModal(project)}
                          >
                            VER MÁS
                          </Button>
                          <Button
                            as={Link}
                            href={project.demoUrl}
                            target="_blank"
                            className="bg-transparent text-[#ff4655] border-[#ff4655] border"
                          >
                            VER DEMO
                          </Button>
                        </footer>
                      </section>
                    </CardBody>
                  </Card>
                ))}
              </CardBody>
            </Card>
          </CardBody>
        </Card>

        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          className="bg-gray-200 dark:bg-[#1a2730] text-gray-800 dark:text-[#bbb5b2]"
        >
          <ModalContent>
            {selectedProject && (
              <>
                <ModalHeader className="text-[#ff4655]">{selectedProject.title}</ModalHeader>
                <ModalBody>
                  <p>{selectedProject.modalContent}</p>
                </ModalBody>
                <ModalFooter>
                  <Button 
                    className="bg-[#ff4655] text-white"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cerrar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardBody>
    </Card>
  )
}