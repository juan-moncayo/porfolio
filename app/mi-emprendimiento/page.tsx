"use client"

import { useState, useEffect } from "react"
import { Card, CardBody, CardHeader, CardFooter, Image, Link, Button } from "@nextui-org/react"
import { ExternalLink, ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

// Translations object
const translations = {
  en: {
    // Page content
    pageTitle: "MY ENTERPRISE",
    pageSubtitle: "Entrepreneurship and development project",
    // Project details
    paycon: {
      title: "PAYCON",
      description:
        "At PAYCON, we combine tradition in mushroom cultivation with advanced technology to transform the agro-industrial sector. We produce high-quality mushrooms in a controlled and sustainable environment, optimizing each stage of the process to ensure freshness and excellence.",
      features: [
        "High-quality mushroom cultivation",
        "Advanced production technology",
        "Sustainable and controlled processes",
        "Commitment to excellence",
        "Continuous innovation",
      ],
      visitSite: "VISIT SITE",
    },
    payconEcommerce: {
      title: "PAYCON ECOMMERCE",
      description:
        "Our online store offers an intuitive and secure shopping experience for our products. With a user-centered design, we facilitate access to our selection of high-quality mushrooms and derivative products, with secure payment options and efficient shipping.",
      features: ["Intuitive and user-friendly interface", "Complete product catalog", "Real-time order tracking"],
      visitSite: "VISIT SITE",
    },
    viewProject: "View project",
    // Footer
    footer: {
      rights: "© 2025 Juan David Moncayo. All rights reserved.",
    },
  },
  es: {
    // Page content
    pageTitle: "MI EMPRENDIMIENTO",
    pageSubtitle: "Proyecto de emprendimiento y desarrollo",
    // Project details
    paycon: {
      title: "PAYCON",
      description:
        "En PAYCON, unimos la tradición en el cultivo de hongos con tecnología avanzada para transformar el sector agroindustrial. Producimos hongos de alta calidad en un entorno controlado y sostenible, optimizando cada etapa del proceso para garantizar frescura y excelencia.",
      features: [
        "Cultivo de hongos de alta calidad",
        "Tecnología avanzada en producción",
        "Procesos sostenibles y controlados",
        "Compromiso con la excelencia",
        "Innovación continua",
      ],
      visitSite: "VISITAR SITIO",
    },
    payconEcommerce: {
      title: "PAYCON ECOMMERCE",
      description:
        "Nuestra tienda en línea ofrece una experiencia de compra intuitiva y segura para nuestros productos. Con un diseño centrado en el usuario, facilitamos el acceso a nuestra selección de hongos de alta calidad y productos derivados, con opciones de pago seguras y envío eficiente.",
      features: [
        "Interfaz intuitiva y amigable",
        "Catálogo completo de productos",
        "Seguimiento de pedidos en tiempo real",
      ],
      visitSite: "VISITAR SITIO",
    },
    viewProject: "Ver proyecto",
    // Footer
    footer: {
      rights: "© 2025 Juan David Moncayo. Todos los derechos reservados.",
    },
  },
}

export default function MiEmprendimiento() {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()
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

  const emprendimientos = [
    {
      id: 1,
      title: t.paycon.title,
      image: "/paycon.png",
      description: t.paycon.description,
      features: t.paycon.features,
      url: "https://blog-paycon-637u.vercel.app",
    },
    {
      id: 2,
      title: t.payconEcommerce.title,
      image: "/paycon-ecommerce.png",
      description: t.payconEcommerce.description,
      features: t.payconEcommerce.features,
      url: "https://paycon-ecommerce.vercel.app/",
    },
  ]

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
            <div className="space-y-16">
              {emprendimientos.map((emprendimiento, index) => (
                <motion.div
                  key={emprendimiento.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-transparent shadow-none border-none">
                    <CardBody className="p-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="order-2 md:order-1 md:even:order-2">
                        <Card className="bg-gray-200 dark:bg-gray-700 shadow-xl rounded-lg border border-gray-300 dark:border-gray-600 h-full">
                          <CardHeader className="flex-col items-start">
                            <h3 className="text-2xl font-bold text-[#ff4655]">{emprendimiento.title}</h3>
                          </CardHeader>
                          <CardBody className="space-y-6">
                            <p className="text-gray-800 dark:text-gray-200">{emprendimiento.description}</p>
                            <div>
                              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                                {language === "en" ? "Features:" : "Características:"}
                              </h4>
                              <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                                {emprendimiento.features.map((feature, i) => (
                                  <li key={i}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                            <Button
                              className="bg-[#ff4655] text-white font-bold"
                              size="lg"
                              href={emprendimiento.url}
                              as={Link}
                              target="_blank"
                              endContent={<ExternalLink size={16} />}
                            >
                              {emprendimiento.id === 1 ? t.paycon.visitSite : t.payconEcommerce.visitSite}
                            </Button>
                          </CardBody>
                        </Card>
                      </div>
                      <div className="order-1 md:order-2 md:even:order-1">
                        <Card className="border-none shadow-none bg-transparent h-full flex items-center justify-center">
                          <CardBody className="p-0">
                            <Link
                              href={emprendimiento.url}
                              target="_blank"
                              className="relative block overflow-hidden rounded-lg group"
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Button className="bg-white text-[#ff4655]" endContent={<ArrowRight />}>
                                  {t.viewProject}
                                </Button>
                              </div>
                              <div className="w-full h-[450px] overflow-hidden">
                                <Image
                                  src={emprendimiento.image || "/placeholder.svg"}
                                  alt={emprendimiento.title}
                                  width={800}
                                  height={450}
                                  className="object-cover object-center w-full h-full rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
                                />
                              </div>
                            </Link>
                          </CardBody>
                          <CardFooter className="bg-[#ff4655] py-2 px-0">
                            <h3 className="text-white text-center w-full font-bold">{emprendimiento.title}</h3>
                          </CardFooter>
                        </Card>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Footer Component */}
        <Footer rights={t.footer.rights} />
      </CardBody>
    </Card>
  )
}
