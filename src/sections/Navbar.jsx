import { Link } from "react-scroll"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "About", to: "top" }, // Pointed to 'top' to match your Hero id
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">

        {/* Logo / Brand Name */}
        <Link
          to="top"
          smooth={true}
          duration={500}
          className="cursor-pointer flex-shrink-0"
        >
          <h1 className="text-base sm:text-lg lg:text-xl font-black tracking-wider text-white hover:text-cyan-400 transition whitespace-nowrap bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            MUDDALURU
            <span className="inline"> JAGADISH RAJU</span>
          </h1>
        </Link>

        {/* Desktop Navigation - Responsive scaling prevents collisions */}
        <ul className="hidden xl:flex items-center xl:gap-3 2xl:gap-6 xl:text-xs 2xl:text-sm font-semibold text-gray-400 dynamic-nav">
          {navLinks.map((link) => (
            <li key={link.to} className="flex-shrink-0">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-cyan-400 border-b-2 border-cyan-400 pb-1"
                className="cursor-pointer transition hover:text-white py-2"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden flex items-center justify-center text-2xl text-white hover:text-cyan-400 transition z-50 p-2"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden w-full bg-black/95 backdrop-blur-2xl border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col py-3 max-h-[75vh] overflow-y-auto">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    activeClass="text-cyan-400 bg-cyan-500/5 font-bold"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-3.5 text-base text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition cursor-pointer"
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
