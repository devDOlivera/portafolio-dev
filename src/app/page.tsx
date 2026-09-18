"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="relative z-10 selection:bg-blue-600/30">
      {/* Navegación */}
      <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
          <a 
            href="#" 
            onClick={scrollToTop}
            className="font-mono text-blue-500 font-bold text-base tracking-tight hover:text-blue-400 transition-colors"
          >
            diego.dev<span className="animate-blink text-blue-500 font-normal">_</span>
          </a>

          {/* Botón Menú Móvil */}
          <button 
            className="md:hidden text-zinc-400 hover:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Nav Desktop */}
          <nav className="hidden md:flex gap-8 font-mono text-xs tracking-widest text-zinc-500 uppercase">
            <a href="#about" className="hover:text-zinc-200 transition-colors">Acerca de mí</a>
            <a href="#skills" className="hover:text-zinc-200 transition-colors">Habilidades</a>
            <a href="#projects" className="hover:text-zinc-200 transition-colors">Proyectos</a>
            <a href="#contact" className="hover:text-zinc-200 transition-colors">Contacto</a>
          </nav>
        </div>

        {/* Nav Mobile (Desplegable) */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#050505] border-b border-zinc-900/50 px-6 py-4 font-mono text-xs tracking-widest text-zinc-500 uppercase flex flex-col gap-6 shadow-2xl"
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Acerca de mí</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Habilidades</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Proyectos</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Contacto</a>
          </motion.div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-12 border-b border-zinc-900/50"
        >
          <div className="space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-500 font-semibold">
              Disponible para trabajar
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
              <span className="text-white block">Diego</span>
              <span className="text-zinc-500 block">Olivera</span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 max-w-md leading-relaxed">
              Programador full stack especializado en el desarrollo web. Centrado en herramientas para comercios, infraestructura distribuida y excelentes experiencias de usuario.
            </p>
            <div className="flex flex-wrap gap-4 items-center pt-4">
              <a href="#contact" className="bg-[#3b82f6] hover:bg-[#2563eb] text-black px-6 py-2.5 rounded text-sm font-semibold transition-colors">
                Ponte en contacto
              </a>
              <a href="#projects" className="bg-transparent border border-zinc-800 text-white hover:bg-zinc-900/50 px-6 py-2.5 rounded text-sm font-semibold transition-colors">
                Ver mi trabajo
              </a>
            </div>
          </div>

          <div className="flex justify-start lg:justify-end lg:items-end lg:h-full lg:pb-12 font-mono text-xs sm:text-sm text-zinc-500">
            <pre className="text-left bg-transparent">
              <code>{`const developer = {
  location: 'Catamarca, AR',
  exp: '+1 years',
  focus: 'webpages',
  open: true
}`}</code>
            </pre>
          </div>
        </motion.section>

        {/* Acerca de mí */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="py-24 scroll-mt-24 border-b border-zinc-900/50"
        >
          <div className="mb-12">
            <span className="font-mono text-blue-600 text-sm block mb-2">01</span>
            <h2 className="text-3xl font-semibold">Acerca de mí</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3">
              <div className="aspect-4/5 bg-zinc-900 rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-800">
                <img 
                  src="/Foto_Profesional.webp" 
                  alt="Diego Olivera" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3 text-lg text-zinc-400">
              <p className="mb-6">
                Soy desarrollador de software enfocado en construir aplicaciones web robustas, escalables y centradas en el usuario.
              </p>
              <p className="mb-12">
                Más allá de escribir código limpio y testeable, mi objetivo es entender el impacto detrás de cada funcionalidad. Constantemente investigo nuevas tecnologías para compartir contenido informativo, tips y recursos con una audiencia global, buscando aportar valor técnico más allá de la prestación de servicios de desarrollo.
              </p>
              
              <div className="pt-8 border-t border-zinc-800">
                <article className="flex flex-col sm:flex-row py-4 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors px-4 -mx-4 rounded-lg">
                  <span className="font-mono text-sm text-zinc-500 w-40 shrink-0 pt-1">2025 — Actualidad</span>
                  <div>
                    <h3 className="text-white font-medium text-base">Desarrollador Junior Freelance</h3>
                    <p className="text-sm mt-1">Desarrollo de software y creación de contenido tecnológico</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Habilidades */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="py-24 scroll-mt-24 border-b border-zinc-900/50"
        >
          <div className="mb-12">
            <span className="font-mono text-blue-600 text-sm block mb-2">02</span>
            <h2 className="text-3xl font-semibold">Habilidades</h2>
          </div>
          <div className="flex flex-col w-full">
            {[
              { name: "JavaScript / Node.js", time: "+1 año" },
              { name: "Python", time: "+1 año" },
              { name: "HTML / CSS", time: "+1 año" },
              { name: "React / Next.js", time: "Explorando" }
            ].map((skill, i) => (
              <div key={i} className="flex justify-between items-center py-5 border-b border-zinc-800 hover:px-6 hover:bg-zinc-900/30 transition-all duration-300 -mx-6 px-6 rounded-lg">
                <span className="text-zinc-200 font-medium">{skill.name}</span>
                <span className="font-mono text-sm text-zinc-500">{skill.time}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Proyectos */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="py-24 scroll-mt-24 border-b border-zinc-900/50"
        >
          <div className="mb-12">
            <span className="font-mono text-blue-600 text-sm block mb-2">03</span>
            <h2 className="text-3xl font-semibold">Proyectos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                id: "01",
                type: "// producción",
                title: "Sistema de Facturación",
                desc: "Sistema de facturación electrónica integral con control de stock y gestión de clientes.",
                tags: ["PHP", "React", "Laravel"]
              },
              {
                id: "02",
                type: "// e-commerce",
                title: "Catálogo Web",
                desc: "Catálogo interactivo de productos optimizado para concretar ventas a través de WhatsApp.",
                tags: ["React", "Node.js", "Sanity"]
              }
            ].map((project, i) => (
              <article key={i} className="group bg-[#111113] border border-zinc-800 rounded-lg p-8 hover:border-zinc-600 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col h-full cursor-pointer">
                <div className="flex justify-between items-center font-mono text-xs mb-6">
                  <span className="text-white">{project.id}</span>
                  <span className="text-zinc-500">{project.type}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 mb-8 grow">{project.desc}</p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-800/80">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="font-mono text-xs text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Contacto */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="py-24 scroll-mt-24 border-b border-zinc-900/50"
        >
          <div className="mb-12">
            <span className="font-mono text-blue-600 text-sm block mb-2">04</span>
            <h2 className="text-3xl font-semibold">Contacto</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-16">
            <p className="text-zinc-400 text-lg max-w-md">
              Abierto a colaboraciones, intercambio de ideas tecnológicas y nuevos proyectos. Responderé a la brevedad.
            </p>
            <ul className="flex flex-col gap-8 grow">
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                <span className="font-mono text-sm text-zinc-500 w-24 uppercase tracking-wider">Email</span>
                <a href="mailto:diegoolivera539@gmail.com" className="text-lg text-zinc-200 hover:text-white hover:underline underline-offset-4 transition-all">diegoolivera539@gmail.com</a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                <span className="font-mono text-sm text-zinc-500 w-24 uppercase tracking-wider">GitHub</span>
                <a href="https://github.com/devDOlivera" target="_blank" rel="noopener noreferrer" className="text-lg text-zinc-200 hover:text-white hover:underline underline-offset-4 transition-all">github.com/devDOlivera</a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                <span className="font-mono text-sm text-zinc-500 w-24 uppercase tracking-wider">Ubicación</span>
                <a href="https://maps.app.goo.gl/ThT87W3U7aE6Jcsk8" target="_blank" rel="noopener noreferrer" className="text-lg text-zinc-200">Catamarca, Argentina</a>
              </li>
            </ul>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900/80 mt-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-zinc-600">
          <span>&copy; 2026 Diego Olivera. Todos los derechos reservados.</span>
          <span>built with Next.js + Tailwind</span>
        </div>
      </footer>
    </div>
  )
}