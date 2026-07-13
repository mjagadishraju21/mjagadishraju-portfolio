import { Link } from "react-scroll"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Education", to: "education" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Achievements", to: "achievements" },
    { name: "Certifications", to: "certifications" },
    { name: "Leadership", to: "leadership" },
    { name: "Contact", to: "contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="top"
          smooth={true}
          duration={500}
          className="cursor-pointer flex-shrink-0"
        >
          <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wide text-white hover:text-cyan-400 transition whitespace-nowrap">
            MUDDALURU
            <span className="hidden sm:inline"> JAGADISH RAJU</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center gap-8 text-[15px] font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-cyan-400"
                className="cursor-pointer transition hover:text-cyan-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden flex items-center justify-center text-2xl text-white hover:text-cyan-400 transition"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden w-full bg-[#050505]/95 backdrop-blur-xl border-t border-white/10"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    activeClass="text-cyan-400"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-4 text-base text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
