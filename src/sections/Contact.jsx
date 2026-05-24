import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa"

import { motion } from "framer-motion"
import rocketIcon from "../assets/icons/rocket.svg"

function Contact() {

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "jagadishrajumuddaluru@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=jagadishrajumuddaluru@gmail.com",
      border: "border-cyan-400/20",
      hover: "hover:border-cyan-400/50 hover:shadow-cyan-500/10",
      iconColor: "text-cyan-400",
    },

    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 8121488115",
      link: "tel:+918121488115",
      border: "border-purple-400/20",
      hover: "hover:border-purple-400/50 hover:shadow-purple-500/10",
      iconColor: "text-purple-400",
    },

    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Bengaluru, India — Available for onsite & remote opportunities",
      link: "#contact",
      border: "border-pink-400/20",
      hover: "hover:border-pink-400/50 hover:shadow-pink-500/10",
      iconColor: "text-pink-400",
    },

    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/muddaluru-jagadish-raju/",
      border: "border-blue-400/20",
      hover: "hover:border-blue-400/50 hover:shadow-blue-500/10",
      iconColor: "text-blue-400",
    },

    {
      icon: FaGithub,
      label: "GitHub",
      value: "See my projects",
      link: "https://github.com/mjagadishraju21",
      border: "border-gray-400/20",
      hover: "hover:border-gray-400/50 hover:shadow-gray-500/10",
      iconColor: "text-gray-300",
    },

    {
      icon: FaInstagram,
      label: "Instagram",
      value: "@mjagadishraju",
      link: "https://www.instagram.com/mjagadishraju/",
      border: "border-pink-400/20",
      hover: "hover:border-pink-400/50 hover:shadow-pink-500/10",
      iconColor: "text-pink-400",
    },
  ]

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-24 relative overflow-hidden border-b border-white/5"
    >

      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/5 via-black to-cyan-900/5"></div>

      {/* Glow Effects */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl top-1/4 left-10"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 3,
        }}
        className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl bottom-1/4 right-10"
      ></motion.div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get In
            <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              {" "}Touch
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project idea, collaboration opportunity, or just want to connect?
            Feel free to reach out through any platform below.
          </p>

        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          {contactMethods.map((method, index) => {

            const Icon = method.icon

            return (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className={`backdrop-blur-xl bg-white/5 border rounded-3xl p-8 transition duration-300 group shadow-lg ${method.border} ${method.hover}`}
              >

                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                  }}
                  className={`text-4xl mb-5 ${method.iconColor}`}
                >
                  <Icon />
                </motion.div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition duration-300">
                  {method.label}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {method.value}
                </p>

              </motion.a>
            )
          })}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-10 md:p-14 text-center hover:border-cyan-400/50 transition duration-300 shadow-lg shadow-cyan-500/5"
        >

          <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-4">
            <img src={rocketIcon} alt="Rocket" className="w-10 h-10" />
            Let’s Build Something Amazing
          </h3>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing AI projects, collaborations,
            innovative ideas, and opportunities in technology.
          </p>

          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jagadishrajumuddaluru@gmail.com"
            className="inline-block px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-500 rounded-2xl text-black font-bold transition duration-300 shadow-lg shadow-cyan-500/40 hover:shadow-purple-500/40"
          >
            Email Me
          </motion.a>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact