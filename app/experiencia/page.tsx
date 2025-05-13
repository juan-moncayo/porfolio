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
    workExperience: "Experiencia Laboral",
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
      title: language === "en" ? "Founder and Developer" : "Fundador y Desarrollador",
      company: "PAYCON",
      period: language === "en" ? "January 2023 - Present" : "Enero 2023 - Presente",
      location: language === "en" ? "Pasto, Colombia" : "Pasto, Colombia",
      description:
        language === "en"
          ? "At PAYCON, we combine tradition in mushroom cultivation with advanced technology to transform the agro-industrial sector. I developed the e-commerce platform using Next.js, React, and Tailwind CSS, implementing a scalable architecture with PostgreSQL as the database. The platform allows users to explore products, add them to the cart, and make purchases securely."
          : "En PAYCON, unimos la tradición en el cultivo de hongos con tecnología avanzada para transformar el sector agroindustrial. Desarrollé la plataforma de comercio electrónico utilizando Next.js, React y Tailwind CSS, implementando una arquitectura escalable con PostgreSQL como base de datos. La plataforma permite a los usuarios explorar productos, añadirlos al carrito y realizar compras de manera segura.",
      responsibilities:
        language === "en"
          ? [
              "Leadership of the business project from conception to implementation",
              "Development of the e-commerce platform using Next.js",
              "Implementation of the database architecture with PostgreSQL",
              "Design of the user experience and interface of the online store",
              "Management of the product catalog and inventory system",
            ]
          : [
              "Liderazgo del proyecto empresarial desde su concepción hasta su implementación",
              "Desarrollo de la plataforma de comercio electrónico utilizando Next.js",
              "Implementación de la arquitectura de base de datos con PostgreSQL",
              "Diseño de la experiencia de usuario y la interfaz de la tienda online",
              "Gestión del catálogo de productos y sistema de inventario",
            ],
      technologies: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Vercel"],
      icon: <Database className="h-5 w-5" />,
      color: "bg-blue-500",
    },
    {
      title: language === "en" ? "Full Stack Developer" : "Desarrollador Full Stack",
      company: "LuxuryNow",
      period: language === "en" ? "January 2024 - April 2024" : "Enero 2024 - Abril 2024",
      location: language === "en" ? "Personal Project" : "Proyecto Personal",
      description:
        language === "en"
          ? "Design and development of an interactive platform that facilitates service scheduling in Cancun, allowing users to book and manage appointments efficiently. With an intuitive design and easy-to-access tools, this platform seeks to improve the customer experience and optimize management for service providers in the region."
          : "Diseño y desarrollo de una plataforma interactiva que facilita la agenda de servicios en Cancún, permitiendo a los usuarios reservar y gestionar citas de manera eficiente. Con un diseño intuitivo y herramientas de fácil acceso, esta plataforma busca mejorar la experiencia de los clientes y optimizar la gestión para los proveedores de servicios en la región.",
      responsibilities:
        language === "en"
          ? [
              "Design and development of the platform using Next.js for frontend and backend",
              "Implementation of Stripe integration for payment processing",
              "Configuration of Strapi as a headless CMS for content management",
              "Development of the database with PostgreSQL",
              "Creation of a scalable and high-performance architecture",
              "Deployment on Vercel for the frontend and Railway for the backend",
            ]
          : [
              "Diseño y desarrollo de la plataforma utilizando Next.js para el frontend y backend",
              "Implementación de integración con Stripe para procesamiento de pagos",
              "Configuración de Strapi como CMS headless para la gestión de contenido",
              "Desarrollo de la base de datos con PostgreSQL",
              "Creación de una arquitectura escalable y de alto rendimiento",
              "Despliegue en Vercel para el frontend y Railway para el backend",
            ],
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
      icon: <Layout className="h-5 w-5" />,
      color: "bg-purple-500",
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
