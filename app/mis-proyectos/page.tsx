"use client"

import { useState, useEffect } from "react"
import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Link,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

// Translations object
const translations = {
  en: {
    // Page content
    pageTitle: "MY PROJECTS",
    pageSubtitle: "Explore some of my most recent and outstanding work",
    // Project details
    viewMore: "VIEW MORE",
    viewDemo: "VIEW DEMO",
    description: "Description",
    visitSite: "Visit site",
    closeDetails: "Close details",
    close: "Close",
    // Footer
    footer: {
      rights: "© 2025 Juan David Moncayo. All rights reserved.",
    },
    // Project descriptions
    projects: {
      luxuryNow: {
        description:
          "Interactive platform that facilitates service scheduling in Cancun with modern design and optimized user experience.",
        modalContent:
          "Interactive platform that facilitates the management of service schedules in Cancun, allowing users to book and manage appointments efficiently. With an intuitive design and easy-to-access tools, this platform seeks to improve the customer experience and optimize management for service providers in the region. Deployed on Vercel for the frontend and Railway for the backend.",
      },
      payconEcommerce: {
        description: "Online store for Paycon with shopping cart, product management, and integrated payment gateway.",
        modalContent:
          "E-commerce platform developed for Paycon, allowing users to explore products, add them to the cart, and make purchases securely. Includes inventory management, authentication system, and integrated payment gateway for a complete and fluid shopping experience. Fully deployed on Vercel.",
      },
      tiendaPerifericos: {
        description:
          "An interactive store that allows users to explore different peripherals in real-time and add products to the shopping cart.",
        modalContent:
          "An interactive store that allows users to explore different peripherals in real-time, visualizing characteristics, prices, and product availability. Users can add products to the shopping cart easily and quickly, providing a fluid and dynamic shopping experience. Deployed on Vercel.",
      },
      proNet: {
        description:
          "An interactive platform that allows users to connect with each other, create posts, and collaborate in a professional environment.",
        modalContent:
          "An interactive platform that allows users to connect with each other, create posts, and collaborate in a professional environment. ProNet is designed to facilitate interaction and exchange of ideas between professionals, offering tools for content management and creating contact networks within an organized and accessible digital space. Deployed on Azure DevOps, including its PostgreSQL database.",
      },
    },
  },
  es: {
    // Page content
    pageTitle: "MIS PROYECTOS",
    pageSubtitle: "Explora algunos de mis trabajos más recientes y destacados",
    // Project details
    viewMore: "VER MÁS",
    viewDemo: "VER DEMO",
    description: "Descripción",
    visitSite: "Visitar sitio",
    closeDetails: "Cerrar detalles",
    close: "Cerrar",
    // Footer
    footer: {
      rights: "© 2025 Juan David Moncayo. Todos los derechos reservados.",
    },
    // Project descriptions
    projects: {
      luxuryNow: {
        description:
          "Plataforma interactiva que te facilita la agenda de servicios en Cancún con diseño moderno y experiencia de usuario optimizada.",
        modalContent:
          "Plataforma interactiva que facilita la gestión de agendas de servicios en Cancún, permitiendo a los usuarios reservar y gestionar citas de manera eficiente. Con un diseño intuitivo y herramientas de fácil acceso, esta plataforma busca mejorar la experiencia de los clientes y optimizar la gestión para los proveedores de servicios en la región. Desplegada en Vercel para el frontend y Railway para el backend.",
      },
      payconEcommerce: {
        description:
          "Tienda en línea para Paycon con carrito de compras, gestión de productos y pasarela de pagos integrada.",
        modalContent:
          "Plataforma de comercio electrónico desarrollada para Paycon, que permite a los usuarios explorar productos, añadirlos al carrito y realizar compras de manera segura. Incluye gestión de inventario, sistema de autenticación y pasarela de pagos integrada para una experiencia de compra completa y fluida. Desplegada completamente en Vercel.",
      },
      tiendaPerifericos: {
        description:
          "Una tienda interactiva que permite a los usuarios explorar diferentes periféricos en tiempo real y agregar productos al carrito de compras.",
        modalContent:
          "Una tienda interactiva que permite a los usuarios explorar diferentes periféricos en tiempo real, visualizando características, precios y disponibilidad de los productos. Los usuarios pueden agregar productos al carrito de compras de manera sencilla y rápida, proporcionando una experiencia de compra fluida y dinámica. Desplegada en Vercel.",
      },
      proNet: {
        description:
          "Una plataforma interactiva que permite a los usuarios conectarse entre si crear publicaciones y colaborar en un entorno profesional.",
        modalContent:
          "Una plataforma interactiva que permite a los usuarios conectarse entre sí, crear publicaciones y colaborar en un entorno profesional. ProNet está diseñada para facilitar la interacción y el intercambio de ideas entre profesionales, ofreciendo herramientas para la gestión de contenido y la creación de redes de contacto dentro de un espacio digital organizado y accesible. Desplegada en Azure DevOps, incluyendo su base de datos PostgreSQL.",
      },
    },
  },
}

interface Project {
  id: number
  title: string
  image: string
  description: string
  demoUrl: string
  modalContent: string
  technologies: string[]
}

export default function MisProyectos() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [language, setLanguage] = useState("es") // Default language is Spanish

  useEffect(() => {
    setIsMounted(true)

    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem("preferredLanguage")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }

    // Listen for language changes from the Header component
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
    }
  }, [])

  // Get translations based on current language
  const t = translations[language]

  const projects: Project[] = [
    {
      id: 1,
      title: "Luxury Now",
      image: "/luxury.png",
      description: t.projects.luxuryNow.description,
      demoUrl: "https://luxury-v7.vercel.app",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Stripe",
        "Strapi",
        "PostgreSQL",
        "Railway",
        "Google reCAPTCHA",
        "Vercel",
      ],
      modalContent: t.projects.luxuryNow.modalContent,
    },
    {
      id: 2,
      title: "Paycon Ecommerce",
      image: "/paycon-ecommerce.png",
      description: t.projects.payconEcommerce.description,
      demoUrl: "https://paycon-ecommerce.vercel.app/",
      technologies: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Vercel"],
      modalContent: t.projects.payconEcommerce.modalContent,
    },
    {
      id: 3,
      title: "Tienda De Perifericos",
      image: "/perifericos.png",
      description: t.projects.tiendaPerifericos.description,
      demoUrl: "https://tienda-de-perifericos.vercel.app",
      technologies: ["React", "CSS", "TypeScript", "LocalStorage", "Vercel"],
      modalContent: t.projects.tiendaPerifericos.modalContent,
    },
    {
      id: 4,
      title: "ProNet",
      image: "/pronet.png",
      description: t.projects.proNet.description,
      demoUrl: "#",
      technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Angular", "Azure DevOps"],
      modalContent: t.projects.proNet.modalContent,
    },
  ]

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  if (!isMounted) {
    return null
  }

  return (
    <Card className="min-h-screen w-full bg-background text-foreground rounded-none">
      <CardBody className="p-0">
        {/* Header Component */}
        <Header />

        <Card className="bg-transparent shadow-none border-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-180px)]">
          <CardHeader className="flex-col items-start px-0">
            <motion.h2
              className="text-4xl font-bold text-[#ff4655]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t.pageTitle}
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-400 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t.pageSubtitle}
            </motion.p>
          </CardHeader>
          <CardBody className="px-0 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-200 dark:bg-[#1a2730] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative overflow-hidden group h-[350px]">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                        removeWrapper
                      />
                      {/* Se eliminaron los botones de hover */}
                    </div>
                    <CardBody className="p-6">
                      <h3 className="text-2xl font-bold text-[#ff4655] mb-2">{project.title}</h3>
                      <p className="text-gray-800 dark:text-[#bbb5b2] mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-300 dark:bg-gray-800 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-auto pt-2">
                        <Button className="bg-[#ff4655] text-white flex-1" onClick={() => handleOpenModal(project)}>
                          {t.viewMore}
                        </Button>
                        <Button
                          as={Link}
                          href={project.demoUrl}
                          target="_blank"
                          className="bg-transparent text-[#ff4655] border-[#ff4655] border flex-1"
                        >
                          {t.viewDemo}
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          className="bg-gray-200 dark:bg-[#1a2730] text-gray-800 dark:text-[#bbb5b2]"
          size="2xl"
          backdrop="blur"
        >
          <ModalContent>
            {selectedProject && (
              <>
                <ModalHeader className="text-[#ff4655] flex gap-2 items-center">{selectedProject.title}</ModalHeader>
                <ModalBody>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="inline-block overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700">
                        <Image
                          src={selectedProject.image || "/placeholder.svg"}
                          alt={selectedProject.title}
                          className="object-contain"
                          width={400}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {selectedProject.technologies.map((tech, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-300 dark:bg-gray-800 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{t.description}</h4>
                      <p className="mb-4">{selectedProject.modalContent}</p>
                      <div className="flex gap-4 mt-6">
                        <Button
                          as={Link}
                          href={selectedProject.demoUrl}
                          target="_blank"
                          className="bg-[#ff4655] text-white"
                          startContent={<ExternalLink size={16} />}
                        >
                          {t.visitSite}
                        </Button>
                        <Button
                          className="bg-transparent text-[#ff4655] border-[#ff4655] border"
                          startContent={<ExternalLink size={16} />}
                          onClick={() => setIsModalOpen(false)}
                        >
                          {t.closeDetails}
                        </Button>
                      </div>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white"
                    onClick={() => setIsModalOpen(false)}
                  >
                    {t.close}
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        {/* Footer Component */}
        <Footer rights={t.footer.rights} />
      </CardBody>
    </Card>
  )
}
