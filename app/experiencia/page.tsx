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
  Home,
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
    workExperience: "Experiencia Profesional",
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
      title: language === "en" ? "Web Development" : "Desarrollo Web",
      company: "Xroofing and Solar",
      period: language === "en" ? "August 2025 - December 2025" : "Agosto 2025 - Diciembre 2025",
      location: language === "en" ? "Remote (Texas, United States)" : "Remoto (Texas, Estados Unidos)",
      description:
        language === "en"
          ? "Supported the development of a corporate blog with reusable components. Collaborated in content translation and application of development best practices. Implemented responsive design focused on mobile devices."
          : "Apoyé el desarrollo de un blog corporativo con componentes reutilizables. Colaboré en la traducción de contenidos y aplicación de buenas prácticas de desarrollo. Implementé diseño responsive enfocado en dispositivos móviles.",
      responsibilities:
        language === "en"
          ? [
              "Support in developing corporate blog with reusable components",
              "Collaboration in content translation and localization",
              "Application of development best practices",
              "Implementation of mobile-first responsive design",
              "Component optimization for better performance",
            ]
          : [
              "Apoyo en el desarrollo de blog corporativo con componentes reutilizables",
              "Colaboración en traducción y localización de contenidos",
              "Aplicación de buenas prácticas de desarrollo",
              "Implementación de diseño responsive con enfoque mobile-first",
              "Optimización de componentes para mejor rendimiento",
            ],
      technologies: ["React", "Tailwind CSS", "Git", "Vercel"],
      icon: <Home className="h-5 w-5" />,
      color: "bg-orange-500",
    },
    {
      title: language === "en" ? "FullStack Development Support" : "Apoyo en Desarrollo FullStack",
      company: "SoloCarnes",
      period: language === "en" ? "January 2025 - May 2025" : "Enero 2025 - Mayo 2025",
      location: language === "en" ? "Remote (Pasto, Colombia)" : "Remoto (Pasto, Colombia)",
      description:
        language === "en"
          ? "Participated in the development of an online store for selling meat products. Supported the implementation of product catalog, shopping cart and payment gateway (Wompi). Collaborated in creating an administrative panel and user role management."
          : "Participé en el desarrollo de una tienda online para venta de productos cárnicos. Apoyé la implementación del catálogo de productos, carrito de compras y pasarela de pagos (Wompi). Colaboré en la creación de un panel administrativo y en la gestión de roles de usuario.",
      responsibilities:
        language === "en"
          ? [
              "Participation in online store development for meat products",
              "Support in implementing product catalog system",
              "Collaboration in shopping cart and Wompi payment gateway integration",
              "Support in creating administrative panel",
              "Collaboration in user role management implementation",
              "Support in deployment on Railway and Vercel platforms",
            ]
          : [
              "Participación en desarrollo de tienda online para productos cárnicos",
              "Apoyo en implementación de sistema de catálogo de productos",
              "Colaboración en integración de carrito de compras y pasarela Wompi",
              "Apoyo en creación de panel administrativo",
              "Colaboración en implementación de gestión de roles de usuario",
              "Apoyo en despliegue en plataformas Railway y Vercel",
            ],
      technologies: ["React", "Tailwind", "Django REST", "PostgreSQL", "Wompi", "Git", "Railway", "Vercel"],
      icon: <ShoppingCart className="h-5 w-5" />,
      color: "bg-blue-500",
    },
    {
      title: language === "en" ? "FullStack Development Support" : "Apoyo en Desarrollo FullStack",
      company: "Luxury Now Cancún",
      period: language === "en" ? "May 2024 - January 2025" : "Mayo 2024 - Enero 2025",
      location: language === "en" ? "Remote (Cancun, Mexico)" : "Remoto (Cancún, México)",
      description:
        language === "en"
          ? "Collaborated in the development of a tourist booking platform. Supported Stripe payment gateway integration. Participated in developing administrative functionalities for service management."
          : "Colaboré en el desarrollo de una plataforma de reservas turísticas. Apoyé la integración de Stripe como pasarela de pagos. Participé en el desarrollo de funcionalidades administrativas para la gestión de servicios.",
      responsibilities:
        language === "en"
          ? [
              "Collaboration in tourist booking platform development",
              "Support in Stripe payment gateway integration",
              "Participation in developing administrative functionalities",
              "Support in service management system implementation",
              "Collaboration in user interface optimization",
              "Support in deployment on Railway and Vercel",
            ]
          : [
              "Colaboración en desarrollo de plataforma de reservas turísticas",
              "Apoyo en integración de pasarela de pagos Stripe",
              "Participación en desarrollo de funcionalidades administrativas",
              "Apoyo en implementación de sistema de gestión de servicios",
              "Colaboración en optimización de interfaz de usuario",
              "Apoyo en despliegue en Railway y Vercel",
            ],
      technologies: ["React", "Tailwind", "Strapi", "Stripe", "Git", "Railway", "Vercel"],
      icon: <Plane className="h-5 w-5" />,
      color: "bg-purple-500",
    },
    {
      title: language === "en" ? "Frontend Developer" : "Desarrollador Frontend",
      company: "Paycon",
      period: language === "en" ? "October 2023 - May 2024" : "Octubre 2023 - Mayo 2024",
      location: language === "en" ? "Hybrid (Pasto, Colombia)" : "Híbrido (Pasto, Colombia)",
      description:
        language === "en"
          ? "Developed web interfaces for local commerce and digital content. Built a simple online store for selling oyster mushrooms with automatic order generation via WhatsApp. Developed a blog with Next.js focused on technology and agricultural innovation."
          : "Desarrollé interfaces web para comercio local y contenido digital. Construí una tienda online sencilla para la venta de setas orellanas con generación automática de pedidos vía WhatsApp. Desarrollé un blog con Next.js orientado a tecnología e innovación agrícola.",
      responsibilities:
        language === "en"
          ? [
              "Development of web interfaces for local commerce",
              "Creation of simple online store for oyster mushroom sales",
              "Implementation of automatic WhatsApp order generation",
              "Development of technology blog with Next.js",
              "Focus on agricultural innovation content",
              "Responsive web design implementation",
            ]
          : [
              "Desarrollo de interfaces web para comercio local",
              "Creación de tienda online sencilla para venta de setas orellanas",
              "Implementación de generación automática de pedidos vía WhatsApp",
              "Desarrollo de blog tecnológico con Next.js",
              "Enfoque en contenido de innovación agrícola",
              "Implementación de diseño web responsivo",
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
      period: language === "en" ? "August 2022 - Present" : "Agosto 2022 - En curso",
      location: language === "en" ? "Pasto, Colombia" : "Pasto, Colombia",
      description:
        language === "en"
          ? "Focus on web development, databases, programming logic, architecture and IoT projects. Study of the design, development, testing, and maintenance of computer applications and systems, applying engineering principles to ensure quality, efficiency, and sustainability in the software creation process."
          : "Enfoque en desarrollo web, bases de datos, lógica de programación, arquitectura y proyectos con IoT. Estudio del diseño, desarrollo, prueba y mantenimiento de aplicaciones y sistemas informáticos, aplicando principios de ingeniería para garantizar calidad, eficiencia y sostenibilidad en el proceso de creación de software.",
      skills:
        language === "en"
          ? [
              "Web development",
              "Databases",
              "Programming logic",
              "Software architecture",
              "IoT projects",
            ]
          : [
              "Desarrollo web",
              "Bases de datos",
              "Lógica de programación",
              "Arquitectura de software",
              "Proyectos con IoT",
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
