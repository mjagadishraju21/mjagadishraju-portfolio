import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Achievements from "./sections/Achievements"
import Certifications from "./sections/Certifications"
import Leadership from "./sections/Leadership"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

import BackToTop from "./components/BackToTop"
import ParticleBackground from "./components/ParticleBackground"
import CursorGlow from "./components/CursorGlow"

function App() {
  return (
    <div className="relative min-h-screen bg-[#03060e] text-white overflow-x-hidden">

      {/* Background */}
      <ParticleBackground />

      {/* Cursor */}
      <CursorGlow />

      {/* Website Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Leadership />
        <Contact />
        <Footer />
      </div>

      <BackToTop />
    </div>
  )
}

export default App