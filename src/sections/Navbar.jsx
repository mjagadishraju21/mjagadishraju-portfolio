import { Link } from "react-scroll"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { motion } from "framer-motion"

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
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white px-6 md:px-8 py-4 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="top"
          smooth={true}
          duration={500}
          className="text-lg md:text-2xl font-bold tracking-wide cursor-pointer hover:text-cyan-400 transition duration-300"
        >
          MUDDALURU JAGADISH RAJU
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-gray-300 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-cyan-400 cursor-pointer transition duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden mt-4 pb-4 border-t border-gray-800"
        >
          <ul className="flex flex-col gap-4 pt-4 text-gray-300 font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:text-cyan-400 cursor-pointer transition duration-300 block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
