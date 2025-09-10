"use client"

import { useState, useEffect } from "react"
import { Card, CardBody, Divider } from "@nextui-org/react"
import {
  Briefcase,
  GraduationCap,
  ChevronDown,
  Calendar,
  MapPin,
  Code,
  Server,
  Database,
  Layout,
  CheckCircle,
  Award,
  ShoppingCart,
  Plane,
  Store,
} from "lucide-react"
import { motion } from "framer-motion"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

// Translations object
const translations = {
  en: {
    // Page content
    pageTitle: "EXPERIENCE",
    pageSubtitle: "My professional and academic journey, highlighting my skills and knowledge acquired over time.",
    // Experience sections
    workExperience: "Work Experience",
    academicExperience: "Academic Experience",
    // Work details
    responsibilities: "Responsibilities",
    technologies: "Technologies",
    // Footer
    footer: {
      rights: "© 2025 Juan David Moncayo. All rights reserved.",
    },
  },
  es: {
    // Page content
    pageTitle: "EXPERIENCIA",
    pageSubtitle:
      "Mi trayectoria profesional y académica, destacando mis habilidades y conocimientos adquiridos a lo largo del tiempo.",
    // Experience sections
    workExperience: "Experiencia Freelance",
    academicExperience: "Experiencia Académica",
    // Work details
    responsibilities: "Responsabilidades",
    technologies: "Tecnologías",
    // Footer
    footer: {
      rights: "© 2025 Juan David Moncayo. Todos los derechos reservados.",
    },
  },
}

export default function Experiencia() {
  const [openSection, setOpenSection] = useState<"work" | "education" | null>("work")
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
  const t = translations[language as keyof typeof translations]

  const workExperience = [
    {
      title: language === "en" ? "Junior Software Engineer" : "Ingeniero de Software Junior",
      company: "SoloCarnes",
      period: language === "en" ? "January 2025 - May 2025" : "Enero 2025 - Mayo 2025",
      location: language === "en" ? "Remote" : "Remoto",
      description:
        language === "en"
          ? "Developed an online store for a local butcher shop, featuring category-based catalog, price per kilo system, shopping cart, Wompi payment gateway integration, and administrative panel. Implemented role-based authentication (admin, user, and delivery) with deployment on Railway and Vercel."
          : "Desarrollé una tienda online para una carnicería local, con catálogo por categoría, precios por kilo, carrito de compras, pasarela de pagos Wompi y panel administrativo. Implementé autenticación por roles (admin, usuario y repartidor) y despliegue en Railway y Vercel.",
      responsibilities:
        language === "en"
          ? [
              "Development of complete e-commerce platform for butcher shop",
              "Implementation of category-based product catalog system",
              "Integration of shopping cart with price per kilo calculation",
              "Wompi payment gateway integration for secure transactions",
              "Role-based authentication system (admin, user, delivery)",
              "Administrative panel development for inventory management",
              "Deployment and maintenance on Railway and Vercel platforms",
            ]
          : [
              "Desarrollo de plataforma de comercio electrónico completa para carnicería",
              "Implementación de sistema de catálogo de productos por categorías",
              "Integración de carrito de compras con cálculo de precios por kilo",
              "Integración de pasarela de pagos Wompi para transacciones seguras",
              "Sistema de autenticación por roles (admin, usuario, repartidor)",
              "Desarrollo de panel administrativo para gestión de inventario",
              "Despliegue y mantenimiento en plataformas Railway y Vercel",
            ],
      technologies: ["React", "Tailwind", "Django REST", "PostgreSQL", "Wompi", "Git", "Railway", "Vercel"],
      icon: <ShoppingCart className="h-5 w-5" />,
      color: "bg-blue-500",
    },
    {
      title: language === "en" ? "Junior Software Engineer" : "Ingeniero de Software Junior",
      company: "Luxury Now Cancún",
      period: language === "en" ? "May 2024 - January 2025" : "Mayo 2024 - Enero 2025",
      location: language === "en" ? "Remote" : "Remoto",
      description:
        language === "en"
          ? "Participated in the development of a tourist booking platform in Cancun. Integrated Stripe as payment gateway, developed functions for service management and administrative panel."
          : "Participé en el desarrollo de una plataforma de reservas turísticas en Cancún. Integré Stripe como pasarela de pagos, desarrollé funciones para gestión de servicios y panel administrativo.",
      responsibilities:
        language === "en"
          ? [
              "Development of tourist booking platform for Cancun services",
              "Stripe payment gateway integration for secure transactions",
              "Service management system development",
              "Administrative panel creation for booking management",
              "User interface optimization for better customer experience",
              "Database design and implementation for booking system",
              "API development for frontend-backend communication",
            ]
          : [
              "Desarrollo de plataforma de reservas turísticas para servicios en Cancún",
              "Integración de pasarela de pagos Stripe para transacciones seguras",
              "Desarrollo de sistema de gestión de servicios",
              "Creación de panel administrativo para gestión de reservas",
              "Optimización de interfaz de usuario para mejor experiencia del cliente",
              "Diseño e implementación de base de datos para sistema de reservas",
              "Desarrollo de APIs para comunicación frontend-backend",
            ],
      technologies: ["React", "Tailwind", "Strapi", "Stripe", "Git", "Railway", "Vercel"],
      icon: <Plane className="h-5 w-5" />,
      color: "bg-purple-500",
    },
    {
      title: language === "en" ? "Junior FullStack Developer" : "Desarrollador FullStack Junior",
      company: "Paycon",
      period: language === "en" ? "October 2023 - May 2024" : "Octubre 2023 - Mayo 2024",
      location: language === "en" ? "Hybrid" : "Híbrido",
      description:
        language === "en"
          ? "Developed web solutions focused on local commerce and digital content. E-commerce: minimalist store for selling oyster mushrooms with WhatsApp orders without registration or payments. Technical blog: informative magazine-style platform about sustainability, technology and agricultural innovation."
          : "Desarrollé soluciones web enfocadas en comercio local y contenido digital. Ecommerce: tienda minimalista para venta de setas orellanas con pedidos por WhatsApp sin registro ni pagos. Blog técnico: plataforma informativa estilo magazine sobre sostenibilidad, tecnología e innovación agrícola.",
      responsibilities:
        language === "en"
          ? [
              "Development of minimalist e-commerce for mushroom sales",
              "WhatsApp integration for order management without registration",
              "Technical blog platform development with magazine-style design",
              "Content management system for sustainability and technology articles",
              "Responsive web design implementation",
              "SEO optimization for better search engine visibility",
              "Performance optimization for fast loading times",
            ]
          : [
              "Desarrollo de e-commerce minimalista para venta de setas",
              "Integración con WhatsApp para gestión de pedidos sin registro",
              "Desarrollo de plataforma de blog técnico con diseño estilo magazine",
              "Sistema de gestión de contenido para artículos de sostenibilidad y tecnología",
              "Implementación de diseño web responsivo",
              "Optimización SEO para mejor visibilidad en motores de búsqueda",
              "Optimización de rendimiento para tiempos de carga rápidos",
            ],
      technologies: ["React", "Tailwind CSS", "Next.js", "Git", "Vercel"],
      icon: <Store className="h-5 w-5" />,
      color: "bg-green-500",
    },
  ]

  const academicExperience = [
    {
      title: language === "en" ? "Software Engineering" : "Ingeniería de Software",
      institution: language === "en" ? "Universidad Cooperativa de Colombia" : "Universidad Cooperativa de Colombia",
      period: language === "en" ? "2021 - Present" : "2021 - Presente",
      location: language === "en" ? "Pasto, Colombia" : "Pasto, Colombia",
      description:
        language === "en"
          ? "Currently in the sixth semester of Software Engineering. Study of the design, development, testing, and maintenance of computer applications and systems, applying engineering principles to ensure quality, efficiency, and sustainability in the software creation process."
          : "Actualmente cursando el sexto semestre de Ingeniería de Software. Estudio del diseño, desarrollo, prueba y mantenimiento de aplicaciones y sistemas informáticos, aplicando principios de ingeniería para garantizar calidad, eficiencia y sostenibilidad en el proceso de creación de software.",
      skills:
        language === "en"
          ? [
              "Object-oriented programming",
              "Software development",
              "Databases",
              "Software architecture",
              "Agile methodologies",
            ]
          : [
              "Programación orientada a objetos",
              "Desarrollo de software",
              "Bases de datos",
              "Arquitectura de software",
              "Metodologías ágiles",
            ],
      icon: <Code className="h-5 w-5" />,
      color: "bg-green-500",
    },
    {
      title: language === "en" ? "Python Course" : "Curso De Python",
      institution: "Cisco",
      period: language === "en" ? "2024 - 2024" : "2024 - 2024",
      location: language === "en" ? "Online Training" : "Formación Online",
      description:
        language === "en"
          ? "Programming fundamentals, data structures, patterns, and algorithms."
          : "Fundamentos de programación, estructuras de datos, patrones y algoritmos.",
      skills:
        language === "en"
          ? ["Python", "Algorithms", "Data structures", "Functional programming"]
          : ["Python", "Algoritmos", "Estructuras de datos", "Programación funcional"],
      icon: <Server className="h-5 w-5" />,
      color: "bg-yellow-500",
    },
    {
      title: language === "en" ? "Data Analysis Course" : "Curso Análisis de datos",
      institution: language === "en" ? "Talento Tech" : "Talento Tech",
      period: language === "en" ? "2024 - 2024" : "2024 - 2024",
      location: language === "en" ? "Online Training" : "Formación Online",
      description:
        language === "en"
          ? "Intensive 150-hour bootcamp in data analysis technologies."
          : "Bootcamp intensivo de 150 horas en tecnologías de análisis de datos.",
      skills:
        language === "en"
          ? ["Data analysis", "Visualization", "Python", "Pandas", "Matplotlib"]
          : ["Análisis de datos", "Visualización", "Python", "Pandas", "Matplotlib"],
      icon: <Database className="h-5 w-5" />,
      color: "bg-indigo-500",
    },
    {
      title: language === "en" ? "FullStack Development" : "Desarrollo FullStack",
      institution: language === "en" ? "Universidad Cooperativa de Colombia" : "Universidad Cooperativa de Colombia",
      period: language === "en" ? "2024 - 2024" : "2024 - 2024",
      location: language === "en" ? "Pasto, Colombia" : "Pasto, Colombia",
      description:
        language === "en"
          ? "Development of a LinkedIn-type web application to create posts and manage connections between people."
          : "Desarrollo de una aplicación web tipo LinkedIn para crear publicaciones y gestionar conexiones entre personas.",
      skills:
        language === "en"
          ? ["Frontend", "Backend", "Databases", "REST API", "Authentication"]
          : ["Frontend", "Backend", "Bases de datos", "API REST", "Autenticación"],
      icon: <Layout className="h-5 w-5" />,
      color: "bg-red-500",
    },
  ]

  const toggleSection = (section: "work" | "education") => {
    setOpenSection(openSection === section ? null : section)
  }

  if (!isMounted) {
    return null
  }

  return (
    <Card className="min-h-screen w-full bg-background text-foreground rounded-none">
      <CardBody className="p-0">
        {/* Header Component */}
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-180px)]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold text-[#ff4655] mb-4">{t.pageTitle}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">{t.pageSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                onClick={() => toggleSection("work")}
                className="w-full flex items-center justify-between p-4 bg-gray-200 dark:bg-[#1a2730] text-xl rounded-t-lg focus:outline-none cursor-pointer hover:bg-gray-300 dark:hover:bg-[#243440] transition-colors"
                aria-expanded={openSection === "work"}
              >
                <span className="flex items-center gap-2">
                  <div className="bg-[#ff4655]/10 p-2 rounded-full text-[#ff4655]">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <span className="font-semibold">{t.workExperience}</span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-[#ff4655] transition-transform ${
                    openSection === "work" ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openSection === "work" && (
                <Card className="bg-gray-200 dark:bg-[#1a2730] shadow-xl rounded-t-none">
                  <CardBody className="space-y-8 p-6">
                    {workExperience.map((job, index) => (
                      <motion.article
                        key={index}
                        className="relative bg-white dark:bg-[#0f1923] rounded-lg shadow-md overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                      >
                        <div className="h-2 bg-[#ff4655]"></div>
                        <div className="p-6">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div className="flex items-center gap-3">
                              <div className="bg-[#ff4655]/10 p-2 rounded-full text-[#ff4655]">{job.icon}</div>
                              <div>
                                <h3 className="text-xl font-semibold text-[#ff4655]">{job.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{job.company}</p>
                              </div>
                            </div>
                            <div className="mt-2 md:mt-0 flex items-center gap-2 bg-[#ff4655]/10 px-3 py-1 rounded-full">
                              <Calendar className="h-4 w-4 text-[#ff4655]" />
                              <span className="text-sm font-medium text-[#ff4655]">{job.period}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4 text-sm">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>

                          <p className="text-gray-700 dark:text-gray-300 mb-6">{job.description}</p>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-[#ff4655]" />
                              {t.responsibilities}
                            </h4>
                            <ul className="space-y-2 pl-6">
                              {job.responsibilities.map((responsibility, i) => (
                                <li
                                  key={i}
                                  className="text-gray-700 dark:text-gray-300 text-sm relative before:absolute before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#ff4655] before:rounded-full before:left-[-1rem] before:top-[0.5rem]"
                                >
                                  {responsibility}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Divider className="my-4" />

                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                              <Code className="h-4 w-4 text-[#ff4655]" />
                              {t.technologies}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </CardBody>
                </Card>
              )}
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                onClick={() => toggleSection("education")}
                className="w-full flex items-center justify-between p-4 bg-gray-200 dark:bg-[#1a2730] text-xl rounded-t-lg focus:outline-none cursor-pointer hover:bg-gray-300 dark:hover:bg-[#243440] transition-colors"
                aria-expanded={openSection === "education"}
              >
                <span className="flex items-center gap-2">
                  <div className="bg-[#ff4655]/10 p-2 rounded-full text-[#ff4655]">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <span className="font-semibold">{t.academicExperience}</span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-[#ff4655] transition-transform ${
                    openSection === "education" ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openSection === "education" && (
                <Card className="bg-gray-200 dark:bg-[#1a2730] shadow-xl rounded-t-none">
                  <CardBody className="space-y-8 p-6">
                    {academicExperience.map((edu, index) => (
                      <motion.article
                        key={index}
                        className="relative bg-white dark:bg-[#0f1923] rounded-lg shadow-md overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                      >
                        <div className="h-2 bg-[#ff4655]"></div>
                        <div className="p-6">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div className="flex items-center gap-3">
                              <div className="bg-[#ff4655]/10 p-2 rounded-full text-[#ff4655]">{edu.icon}</div>
                              <div>
                                <h3 className="text-xl font-semibold text-[#ff4655]">{edu.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.institution}</p>
                              </div>
                            </div>
                            <div className="mt-2 md:mt-0 flex items-center gap-2 bg-[#ff4655]/10 px-3 py-1 rounded-full">
                              <Calendar className="h-4 w-4 text-[#ff4655]" />
                              <span className="text-sm font-medium text-[#ff4655]">{edu.period}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4 text-sm">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>

                          <p className="text-gray-700 dark:text-gray-300 mb-6">{edu.description}</p>

                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                              <Award className="h-4 w-4 text-[#ff4655]" />
                              {language === "en" ? "Skills acquired" : "Habilidades adquiridas"}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </CardBody>
                </Card>
              )}
            </motion.section>
          </div>
        </main>

        {/* Footer Component */}
        <Footer rights={t.footer.rights} />
      </CardBody>
    </Card>
  )
}
