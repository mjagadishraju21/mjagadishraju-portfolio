import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

function Footer() {
  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/mjagadishraju21", label: "GitHub" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/muddaluru-jagadish-raju/", label: "LinkedIn" },
    { icon: FaInstagram, link: "https://www.instagram.com/mjagadishraju/", label: "Instagram" },
    { icon: FaEnvelope, link: "https://mail.google.com/mail/?view=cm&fs=1&to=jagadishrajumuddaluru@gmail.com", label: "Email" },
  ]

  const quickLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Footer */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Muddaluru Jagadish Raju</h3>
            <p className="text-sm text-gray-500">
              AIML Engineer passionate about building innovative solutions through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.id}`}
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#22d3ee" }}
                    className="text-gray-400 text-2xl transition duration-300"
                    aria-label={social.label}
                  >
                    <Icon />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            © 2026 Muddaluru Jagadish Raju. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer