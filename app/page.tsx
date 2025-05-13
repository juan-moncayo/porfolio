"use client"

import { useState, useEffect } from "react"
import { Card, CardBody, Image, Link, Accordion, AccordionItem, Button, Tooltip } from "@nextui-org/react"
import {
  Code,
  Gamepad2,
  VibrateIcon as Volleyball,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Briefcase,
  Award,
  Cpu,
  Database,
  Layout,
  Server,
  ArrowRight,
} from "lucide-react"
import { motion } from "framer-motion"
// Cambiamos las importaciones para usar rutas relativas en lugar de alias
import Header from "../app/components/Header"
import Footer from "../app/components/Footer"

export default function SobreMi() {
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

  const skills = [
    { name: "JavaScript", icon: <Code className="h-4 w-4" /> },
    { name: "React", icon: <Layout className="h-4 w-4" /> },
    { name: "Next.js", icon: <Server className="h-4 w-4" /> },
    { name: "Python", icon: <Code className="h-4 w-4" /> },
    { name: "Java", icon: <Cpu className="h-4 w-4" /> },
    { name: "PostgreSQL", icon: <Database className="h-4 w-4" /> },
  ]

  const technologies = [
    { name: "React", icon: "/react-logo.png?height=50&width=50&query=react logo" },
    { name: "Next.js", icon: "/nextjs-logo.png?height=50&width=50&query=nextjs logo" },
    { name: "Tailwind CSS", icon: "/tailwind-logo.png?height=50&width=50&query=tailwind css logo" },
    { name: "PostgreSQL", icon: "/postgresql-logo.png?height=50&width=50&query=postgresql logo" },
    { name: "Python", icon: "/python-logo.png?height=50&width=50&query=python logo" },
    { name: "Java", icon: "/java-logo.png?height=50&width=50&query=java logo" },
    { name: "Spring Boot", icon: "/spring-logo.png?height=50&width=50&query=spring boot logo" },
    { name: "Django", icon: "/django-logo.png?height=50&width=50&query=django logo" },
  ]

  const achievements = [
    {
      title: language === "en" ? "Completed Projects" : "Proyectos Completados",
      value: "15+",
      icon: <Layout className="h-6 w-6 text-[#ff4655]" />,
    },
    {
      title: language === "en" ? "Years of Experience" : "Años de Experiencia",
      value: language === "en" ? "In development" : "En desarrollo",
      icon: <Briefcase className="h-6 w-6 text-[#ff4655]" />,
    },
    {
      title: language === "en" ? "Certifications" : "Certificaciones",
      value: "5+",
      icon: <Award className="h-6 w-6 text-[#ff4655]" />,
    },
    {
      title: language === "en" ? "Technologies Mastered" : "Tecnologías Dominadas",
      value: "10+",
      icon: <Cpu className="h-6 w-6 text-[#ff4655]" />,
    },
  ]

  const featuredProjects = [
    {
      title: language === "en" ? "Luxury Now" : "Luxury Now",
      description:
        language === "en"
          ? "Booking platform for services in Cancun with modern design and optimized experience."
          : "Plataforma de reserva de servicios en Cancún con diseño moderno y experiencia optimizada.",
      image: "/luxury.png?height=200&width=300",
      link: "/mis-proyectos",
    },
    {
      title: language === "en" ? "Paycon Ecommerce" : "Paycon Ecommerce",
      description:
        language === "en"
          ? "Online store for Paycon with shopping cart and product management."
          : "Tienda en línea para Paycon con carrito de compras y gestión de productos.",
      image: "/paycon-ecommerce.png?height=200&width=300",
      link: "/mis-proyectos",
    },
  ]

  if (!isMounted) {
    return null
  }

  return (
    <Card className="min-h-screen w-full bg-background text-foreground rounded-none">
      <CardBody className="p-0">
        {/* Use the Header component */}
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#271d28] to-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Juan David <span className="text-[#ff4655]">Moncayo</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
                  {language === "en" ? "Junior Full Stack Developer" : "Desarrollador Junior Full Stack"}
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                  {language === "en"
                    ? "I am a developer passionate about creating innovative technological solutions. I combine my experience in web development with my creativity to build applications that make a difference."
                    : "Soy un desarrollador apasionado por crear soluciones tecnológicas innovadoras. Combino mi experiencia en desarrollo web con mi creatividad para construir aplicaciones que marcan la diferencia."}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    as={Link}
                    href="/referencias-contactos"
                    className="bg-[#ff4655] text-white font-medium"
                    endContent={<Mail size={16} />}
                  >
                    {language === "en" ? "Contact Me" : "Contáctame"}
                  </Button>
                  <Button
                    as={Link}
                    href="/mis-proyectos"
                    variant="bordered"
                    className="border-[#ff4655] text-[#ff4655]"
                    endContent={<ExternalLink size={16} />}
                  >
                    {language === "en" ? "View Projects" : "Ver Proyectos"}
                  </Button>
                  <Button
                    as="a"
                    href="/cv-juan-moncayo.pdf"
                    download
                    variant="light"
                    className="text-white"
                    endContent={<Download size={16} />}
                  >
                    {language === "en" ? "Download CV" : "Descargar CV"}
                  </Button>
                </div>
                <div className="flex gap-4 mt-8">
                  <Tooltip content="GitHub">
                    <Link
                      href="https://github.com/juan-moncayo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-3 rounded-full text-white hover:bg-[#ff4655] hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </Link>
                  </Tooltip>
                  <Tooltip content="LinkedIn">
                    <Link
                      href="https://www.linkedin.com/in/juan-moncayo-19a2a7306/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-3 rounded-full text-white hover:bg-[#ff4655] hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </Link>
                  </Tooltip>
                  <Tooltip content="Email">
                    <Link
                      href="mailto:Juan.moncayo627@gmail.com"
                      className="bg-white/10 p-3 rounded-full text-white hover:bg-[#ff4655] hover:text-white transition-colors"
                    >
                      <Mail size={20} />
                    </Link>
                  </Tooltip>
                </div>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#ff4655] rounded-full blur-3xl opacity-20"></div>
                  <Image
                    src="/Me.jpg?height=400&width=400"
                    alt="Profile"
                    width={400}
                    height={400}
                    className="object-cover rounded-full border-4 border-[#ff4655] z-10 relative"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-16 bg-background" id="sobre-mi">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold text-[#ff4655] mb-4">{language === "en" ? "ABOUT ME" : "SOBRE MÍ"}</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {language === "en"
                  ? "Learn more about my journey, passions, and skills that define me as a professional and person."
                  : "Conoce más sobre mi trayectoria, pasiones y habilidades que me definen como profesional y persona."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="bg-gray-200 dark:bg-[#1a2730] shadow-xl h-full">
                  <CardBody className="p-6">
                    <h3 className="text-2xl font-bold text-[#ff4655] mb-4">
                      {language === "en" ? "My Story" : "Mi Historia"}
                    </h3>
                    <p className="text-gray-800 dark:text-gray-300 mb-4">
                      {language === "en"
                        ? "I am a developer and technology enthusiast based in Pasto, Colombia. I am currently in the sixth semester of Software Engineering at Universidad Cooperativa de Colombia, where I have acquired solid knowledge in software development and project management."
                        : "Soy un desarrollador y entusiasta de la tecnología con base en Pasto, Colombia. Actualmente curso el sexto semestre de Ingeniería de Software en la Universidad Cooperativa de Colombia, donde he adquirido sólidos conocimientos en desarrollo de software y gestión de proyectos."}
                    </p>
                    <p className="text-gray-800 dark:text-gray-300 mb-4">
                      {language === "en"
                        ? "My passion for programming began at an early age, exploring how the video games I enjoyed so much worked. This curiosity led me to immerse myself in the world of development, where I have found my vocation creating innovative technological solutions."
                        : "Mi pasión por la programación comenzó desde temprana edad, explorando cómo funcionaban los videojuegos que tanto disfrutaba. Esta curiosidad me llevó a sumergirme en el mundo del desarrollo, donde he encontrado mi vocación creando soluciones tecnológicas innovadoras."}
                    </p>
                    <p className="text-gray-800 dark:text-gray-300">
                      {language === "en"
                        ? "In addition to my academic training, I have complemented my knowledge with specialized courses in data analysis, Python, and web development, which has allowed me to broaden my perspective and technical skills."
                        : "Además de mi formación académica, he complementado mis conocimientos con cursos especializados en análisis de datos, Python y desarrollo web, lo que me ha permitido ampliar mi perspectiva y habilidades técnicas."}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Accordion variant="splitted" selectionMode="multiple" className="p-0">
                  <AccordionItem
                    key="programar"
                    aria-label="PROGRAMAR"
                    title={
                      <div className="flex items-center gap-2">
                        <div className="bg-[#ff4655]/10 p-2 rounded-full">
                          <Code className="h-5 w-5 text-[#ff4655]" />
                        </div>
                        <span className="font-semibold text-lg">{language === "en" ? "PROGRAMMING" : "PROGRAMAR"}</span>
                      </div>
                    }
                    classNames={{
                      base: "bg-gray-200 dark:bg-[#1a2730] shadow-md mb-4",
                      title: "text-gray-800 dark:text-white",
                      content: "text-gray-700 dark:text-gray-300",
                      trigger: "px-4 py-3 data-[hover=true]:bg-gray-300/50 dark:data-[hover=true]:bg-[#243440]/50",
                    }}
                  >
                    <div className="p-4">
                      <p className="mb-4">
                        {language === "en"
                          ? "I am a Software Engineering student with experience in backend development using frameworks like Django and Spring Boot, and languages like Python and Java. I also work in frontend with React and manage databases like PostgreSQL and MySQL."
                          : "Soy estudiante de Ingeniería de Software con experiencia en desarrollo backend utilizando frameworks como Django y Spring Boot, y lenguajes como Python y Java. También trabajo en frontend con React y gestiono bases de datos como PostgreSQL y MySQL."}
                      </p>
                      <p>
                        {language === "en"
                          ? "I have developed automation and control projects with ESP32 and Arduino. I enjoy learning new technologies and applying my creativity to innovative projects."
                          : "He desarrollado proyectos de automatización y control con ESP32 y Arduino. Disfruto aprender nuevas tecnologías y aplicar mi creatividad en proyectos innovadores."}
                      </p>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="video-juegos"
                    aria-label="VIDEO JUEGOS"
                    title={
                      <div className="flex items-center gap-2">
                        <div className="bg-[#ff4655]/10 p-2 rounded-full">
                          <Gamepad2 className="h-5 w-5 text-[#ff4655]" />
                        </div>
                        <span className="font-semibold text-lg">
                          {language === "en" ? "VIDEO GAMES" : "VIDEO JUEGOS"}
                        </span>
                      </div>
                    }
                    classNames={{
                      base: "bg-gray-200 dark:bg-[#1a2730] shadow-md mb-4",
                      title: "text-gray-800 dark:text-white",
                      content: "text-gray-700 dark:text-gray-300",
                      trigger: "px-4 py-3 data-[hover=true]:bg-gray-300/50 dark:data-[hover=true]:bg-[#243440]/50",
                    }}
                  >
                    <div className="p-4">
                      <p className="mb-4">
                        {language === "en"
                          ? "My passion for video games, especially Valorant, Minecraft, Fortnite, and League of Legends (LoL), has been a great source of inspiration for my work in programming. These games not only fuel my creativity but also influence the design of my projects."
                          : "Mi pasión por los videojuegos, especialmente Valorant, Minecraft, Fortnite y League of Legends (LoL), ha sido una gran fuente de inspiración para mi trabajo en programación. Estos juegos no solo alimentan mi creatividad, sino que también influyen en el diseño de mis proyectos."}
                      </p>
                      <p>
                        {language === "en"
                          ? "The interest in strategic and competitive games like Valorant and LoL has taught me to solve problems efficiently and think of quick solutions, while Minecraft and Fortnite reinforce my passion for creating interactive environments and systems."
                          : "El interés por juegos estratégicos y competitivos como Valorant y LoL me ha enseñado a resolver problemas de manera eficiente y a pensar en soluciones rápidas, mientras que Minecraft y Fortnite refuerzan mi pasión por crear entornos y sistemas interactivos."}
                      </p>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="voleibol"
                    aria-label="VOLEIBOL"
                    title={
                      <div className="flex items-center gap-2">
                        <div className="bg-[#ff4655]/10 p-2 rounded-full">
                          <Volleyball className="h-5 w-5 text-[#ff4655]" />
                        </div>
                        <span className="font-semibold text-lg">{language === "en" ? "VOLLEYBALL" : "VOLEIBOL"}</span>
                      </div>
                    }
                    classNames={{
                      base: "bg-gray-200 dark:bg-[#1a2730] shadow-md",
                      title: "text-gray-800 dark:text-white",
                      content: "text-gray-700 dark:text-gray-300",
                      trigger: "px-4 py-3 data-[hover=true]:bg-gray-300/50 dark:data-[hover=true]:bg-[#243440]/50",
                    }}
                  >
                    <div className="p-4">
                      <p className="mb-4">
                        {language === "en"
                          ? "Volleyball is one of my hobbies, and it has taught me valuable lessons that I apply in my professional development. The importance of teamwork, effective communication, and the discipline that the sport demands have helped me to be more organized and to approach challenges collaboratively in my programming projects."
                          : "El voleibol es uno de mis hobbies, y me ha enseñado valiosas lecciones que aplico en mi desarrollo profesional. La importancia del trabajo en equipo, la comunicación efectiva y la disciplina que exige el deporte me han ayudado a ser más organizado y a abordar desafíos de manera colaborativa en mis proyectos de programación."}
                      </p>
                      <p>
                        {language === "en"
                          ? "Additionally, it has taught me to maintain perseverance and to adapt quickly to new situations, skills that I consider essential in my career."
                          : "Además, me ha enseñado a mantener la perseverancia y a adaptarme rápidamente a nuevas situaciones, habilidades que considero esenciales en mi carrera."}
                      </p>
                    </div>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-[#ff4655] mb-6 text-center">
                {language === "en" ? "My Skills" : "Mis Habilidades"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-gray-200 dark:bg-[#1a2730] shadow-xl">
                  <CardBody className="p-6">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                      {language === "en" ? "Technical Skills" : "Habilidades Técnicas"}
                    </h4>
                    <div className="space-y-4">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 bg-white/10 dark:bg-white/5 p-3 rounded-lg hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
                        >
                          <div className="bg-[#ff4655]/10 p-1.5 rounded-full text-[#ff4655]">{skill.icon}</div>
                          <span className="font-medium text-gray-800 dark:text-white">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>

                <Card className="bg-gray-200 dark:bg-[#1a2730] shadow-xl">
                  <CardBody className="p-6">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                      {language === "en" ? "Soft Skills" : "Habilidades Blandas"}
                    </h4>
                    <ul className="space-y-4">
                      {[
                        language === "en" ? "Teamwork and collaboration" : "Trabajo en equipo y colaboración",
                        language === "en" ? "Effective communication" : "Comunicación efectiva",
                        language === "en" ? "Problem solving" : "Resolución de problemas",
                        language === "en"
                          ? "Adaptability and continuous learning"
                          : "Adaptabilidad y aprendizaje continuo",
                        language === "en" ? "Time management" : "Gestión del tiempo",
                        language === "en" ? "Critical and analytical thinking" : "Pensamiento crítico y analítico",
                        language === "en" ? "Creativity and innovation" : "Creatividad e innovación",
                        language === "en" ? "Leadership and decision making" : "Liderazgo y toma de decisiones",
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#ff4655] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-800 dark:text-gray-300">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </div>
            </motion.div>

            {/* Technologies Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-[#ff4655] mb-6 text-center">
                {language === "en" ? "Technologies I Master" : "Tecnologías que Domino"}
              </h3>
              <Card className="bg-gray-200 dark:bg-[#1a2730] shadow-xl">
                <CardBody className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-4 bg-white dark:bg-[#0f1923] rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      >
                        <Image
                          src={tech.icon || "/placeholder.svg"}
                          alt={tech.name}
                          width={50}
                          height={50}
                          className="mb-3 object-contain"
                        />
                        <span className="text-gray-800 dark:text-white font-medium text-center">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-[#ff4655] mb-6 text-center">
                {language === "en" ? "Achievements" : "Logros"}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="bg-gray-200 dark:bg-[#1a2730] shadow-xl">
                    <CardBody className="p-6 flex flex-col items-center text-center">
                      <div className="bg-[#ff4655]/10 p-4 rounded-full mb-4">{achievement.icon}</div>
                      <h4 className="text-3xl font-bold text-[#ff4655] mb-2">{achievement.value}</h4>
                      <p className="text-gray-700 dark:text-gray-300">{achievement.title}</p>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Featured Projects Section - UPDATED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#ff4655]">
                  {language === "en" ? "Featured Projects" : "Proyectos Destacados"}
                </h3>
                <Button
                  as={Link}
                  href="/mis-proyectos"
                  variant="light"
                  className="text-[#ff4655]"
                  endContent={<ChevronRight size={16} />}
                >
                  {language === "en" ? "View all projects" : "Ver todos los proyectos"}
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <Card className="bg-gray-200 dark:bg-[#1a2730] shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                      <CardBody className="p-0 flex flex-col h-full">
                        <div className="relative h-[200px] overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                            removeWrapper
                          />
                        </div>
                        <div className="p-6 flex-grow">
                          <h4 className="text-xl font-bold text-[#ff4655] mb-2">{project.title}</h4>
                          <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                        </div>
                        <div className="p-6 pt-0 mt-auto">
                          <Button
                            as={Link}
                            href="/mis-proyectos"
                            className="bg-[#ff4655] text-white w-full"
                            endContent={<ArrowRight size={16} />}
                          >
                            {language === "en" ? "View More" : "Ver Más"}
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer
          rights={
            language === "en"
              ? "© 2025 Juan David Moncayo. All rights reserved."
              : "© 2025 Juan David Moncayo. Todos los derechos reservados."
          }
        />
      </CardBody>
    </Card>
  )
}
