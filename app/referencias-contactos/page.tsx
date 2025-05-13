"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardBody, Link, Button, Input, Textarea, Tooltip, Divider } from "@nextui-org/react"
import { Mail, Linkedin, Phone, MapPin, Send, Quote, Github, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
// Cambiamos las importaciones para usar rutas relativas en lugar de alias
import Header from "../components/Header"
import Footer from "../components/Footer"

// Translations object
const translations = {
  en: {
    // Page content
    pageTitle: "REFERENCES AND CONTACT",
    pageSubtitle:
      "I'm available for new opportunities and collaborations. If you have any questions or proposals, don't hesitate to contact me through any of the following means.",
    // References section
    professionalReferences: "Professional References",
    // Contact section
    contact: "Contact",
    contactText:
      "Thank you for coming this far. If you think I can add value to your team or simply have a question, don't hesitate to contact me through any of the following means.",
    // Form
    name: "Name",
    yourName: "Your name",
    email: "Email",
    yourEmail: "your@email.com",
    phone: "Phone",
    yourPhone: "+57 300 000 0000",
    message: "Message",
    writeMessage: "Write your message here...",
    sending: "SENDING...",
    sendMessage: "SEND MESSAGE",
    successTitle: "Message sent successfully!",
    successMessage: "Thank you for contacting me. I will respond as soon as possible.",
    // Contact info
    contactInfo: "Contact Information",
    location: "Location",
    // Footer
    footer: {
      rights: "© 2025 Juan David Moncayo. All rights reserved.",
    },
  },
  es: {
    // Page content
    pageTitle: "REFERENCIAS Y CONTACTO",
    pageSubtitle:
      "Estoy disponible para nuevas oportunidades y colaboraciones. Si tienes alguna pregunta o propuesta, no dudes en contactarme a través de cualquiera de los siguientes medios.",
    // References section
    professionalReferences: "Referencias Profesionales",
    // Contact section
    contact: "Contacto",
    contactText:
      "Gracias por llegar hasta aquí. Si crees que puedo aportar valor a tu equipo o simplemente tienes una pregunta, no dudes en escribirme.",
    // Form
    name: "Nombre",
    yourName: "Tu nombre",
    email: "Correo electrónico",
    yourEmail: "tu@email.com",
    phone: "Teléfono",
    yourPhone: "+57 300 000 0000",
    message: "Mensaje",
    writeMessage: "Escribe tu mensaje aquí...",
    sending: "ENVIANDO...",
    sendMessage: "ENVIAR MENSAJE",
    successTitle: "¡Mensaje enviado con éxito!",
    successMessage: "Gracias por contactarme. Te responderé lo antes posible.",
    // Contact info
    contactInfo: "Información de Contacto",
    location: "Ubicación",
    // Footer
    footer: {
      rights: "© 2025 Juan David Moncayo. Todos los derechos reservados.",
    },
  },
}

export default function ReferenciasContacto() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const references = [
    {
      name: "Jhonata Midreos",
      title: language === "en" ? "Web Development Professor" : "Profesor de Desarrollo Web",
      testimonial:
        language === "en"
          ? "An exceptional student with outstanding web development skills and a great ability to solve complex problems. His dedication and creativity stand out as a promising professional in the field of software development."
          : "Un estudiante excepcional con habilidades sobresalientes en desarrollo web y una gran capacidad para resolver problemas complejos. Su dedicación y creatividad lo destacan como un profesional prometedor en el campo del desarrollo de software.",
    },
    {
      name: "Luis Carlos Revelo",
      title: language === "en" ? "Software Engineering Professor" : "Profesor de Ingeniería de Software",
      testimonial:
        language === "en"
          ? "Demonstrates a deep understanding of software engineering principles and a remarkable ability to apply them in practical projects. His ability to work in a team and his methodical approach to problem-solving are qualities that distinguish him."
          : "Demuestra un profundo entendimiento de los principios de ingeniería de software y una habilidad notable para aplicarlos en proyectos prácticos. Su capacidad para trabajar en equipo y su enfoque metódico en la resolución de problemas son cualidades que lo distinguen.",
    },
    {
      name: "Santiago Portillo Alvarez",
      title: language === "en" ? "Technology Projects Coordinator" : "Coordinador de Proyectos Tecnológicos",
      testimonial:
        language === "en"
          ? "Juan has proven to be a talented and committed developer. His ability to adapt to new technologies and his solution-oriented approach have been fundamental to the success of the projects in which he has participated. He is a professional I highly recommend."
          : "Juan ha demostrado ser un desarrollador talentoso y comprometido. Su capacidad para adaptarse a nuevas tecnologías y su enfoque orientado a soluciones han sido fundamentales para el éxito de los proyectos en los que ha participado. Es un profesional que recomiendo ampliamente.",
    },
  ]

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "Juan.moncayo627@gmail.com",
      href: "mailto:Juan.moncayo627@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Juan Moncayo",
      href: "https://www.linkedin.com/in/juan-moncayo-19a2a7306/",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "WhatsApp",
      value: "+57 3163535347",
      href: "https://wa.me/573163535347",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "juan-moncayo",
      href: "https://github.com/juan-moncayo",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: t.location,
      value: "Colombia - Pasto - Nariño",
      href: null,
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.target as HTMLFormElement

    try {
      const response = await fetch("https://formspree.io/f/xovqwjrz", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")

        // Opcional: redirigir a WhatsApp después de un breve retraso
        setTimeout(() => {
          window.open("https://wa.me/3163535347", "_blank")
        }, 2000)
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-gray-200 dark:bg-[#1a2730] shadow-xl">
                <CardBody className="space-y-8">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{t.professionalReferences}</h2>
                  {references.map((ref, index) => (
                    <motion.article
                      key={index}
                      className="relative p-6 bg-white dark:bg-[#0f1923] rounded-lg shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    >
                      <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-200 dark:text-gray-800" />
                      <div className="flex-1">
                        <p className="text-gray-700 dark:text-[#bbb5b2] italic mb-4">{ref.testimonial}</p>
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                          <h3 className="text-[#ff4655] font-semibold">{ref.name}</h3>
                          <p className="text-gray-600 dark:text-[#bbb5b2] text-sm">{ref.title}</p>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-gray-200 dark:bg-[#1a2730] shadow-xl mb-8">
                <CardBody>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{t.contact}</h2>
                  <p className="text-gray-600 dark:text-[#bbb5b2] mb-6">{t.contactText}</p>

                  {isSubmitted ? (
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center gap-3">
                      <CheckCircle className="text-green-500 h-6 w-6" />
                      <div>
                        <p className="text-green-800 dark:text-green-300 font-medium">{t.successTitle}</p>
                        <p className="text-green-600 dark:text-green-400 text-sm">{t.successMessage}</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} method="POST" className="space-y-4">
                      <Input
                        name="name"
                        label={t.name}
                        placeholder={t.yourName}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant="bordered"
                        classNames={{
                          input: "text-gray-800 dark:text-white",
                          inputWrapper: "bg-white dark:bg-[#0f1923] border-[#ff4655]",
                        }}
                        required
                      />
                      <Input
                        name="email"
                        type="email"
                        label={t.email}
                        placeholder={t.yourEmail}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="bordered"
                        classNames={{
                          input: "text-gray-800 dark:text-white",
                          inputWrapper: "bg-white dark:bg-[#0f1923] border-[#ff4655]",
                        }}
                        required
                      />
                      <Input
                        name="phone"
                        type="tel"
                        label={t.phone}
                        placeholder={t.yourPhone}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        variant="bordered"
                        classNames={{
                          input: "text-gray-800 dark:text-white",
                          inputWrapper: "bg-white dark:bg-[#0f1923] border-[#ff4655]",
                        }}
                        required
                      />
                      <Textarea
                        name="message"
                        label={t.message}
                        placeholder={t.writeMessage}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        variant="bordered"
                        classNames={{
                          input: "text-gray-800 dark:text-white",
                          inputWrapper: "bg-white dark:bg-[#0f1923] border-[#ff4655]",
                        }}
                        minRows={3}
                        required
                      />
                      <Button
                        type="submit"
                        className="bg-[#ff4655] text-white w-full"
                        endContent={<Send size={16} />}
                        isLoading={isSubmitting}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? t.sending : t.sendMessage}
                      </Button>
                    </form>
                  )}
                </CardBody>
              </Card>

              <Card className="bg-gray-200 dark:bg-[#1a2730] shadow-xl">
                <CardBody>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{t.contactInfo}</h2>
                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        <div className="bg-[#ff4655]/10 p-2 rounded-full text-[#ff4655]">{contact.icon}</div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{contact.label}</p>
                          {contact.href ? (
                            <Link
                              href={contact.href}
                              target={contact.href.startsWith("mailto:") ? "_self" : "_blank"}
                              rel="noopener noreferrer"
                              className="text-gray-800 dark:text-white hover:text-[#ff4655] dark:hover:text-[#ff4655] transition-colors"
                            >
                              {contact.value}
                            </Link>
                          ) : (
                            <p className="text-gray-800 dark:text-white">{contact.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <Divider className="my-6" />

                  <div className="flex justify-center gap-4">
                    <Tooltip content="LinkedIn">
                      <Link
                        href="https://www.linkedin.com/in/juan-moncayo-19a2a7306/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#ff4655]/10 p-3 rounded-full text-[#ff4655] hover:bg-[#ff4655] hover:text-white transition-colors"
                      >
                        <Linkedin size={20} />
                      </Link>
                    </Tooltip>
                    <Tooltip content="GitHub">
                      <Link
                        href="https://github.com/juan-moncayo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#ff4655]/10 p-3 rounded-full text-[#ff4655] hover:bg-[#ff4655] hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </Link>
                    </Tooltip>
                    <Tooltip content="Email">
                      <Link
                        href="mailto:Juan.moncayo627@gmail.com"
                        className="bg-[#ff4655]/10 p-3 rounded-full text-[#ff4655] hover:bg-[#ff4655] hover:text-white transition-colors"
                      >
                        <Mail size={20} />
                      </Link>
                    </Tooltip>
                    <Tooltip content="WhatsApp">
                      <Link
                        href="https://wa.me/573163535347"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#ff4655]/10 p-3 rounded-full text-[#ff4655] hover:bg-[#ff4655] hover:text-white transition-colors"
                      >
                        <Phone size={20} />
                      </Link>
                    </Tooltip>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </main>

        {/* Footer Component */}
        <Footer rights={t.footer.rights} />
      </CardBody>
    </Card>
  )
}
