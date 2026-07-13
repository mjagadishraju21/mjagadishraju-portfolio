import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-scroll"
import profile from "../assets/profile/jagadish.jpg"
import { FiCode, FiTrendingUp, FiZap } from "react-icons/fi"

function Hero() {
  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 0.18], [0, -50])

  const stats = [
    { icon: FiCode, label: "Projects", value: "5+" },
    { icon: FiTrendingUp, label: "CGPA", value: "8.08" },
    { icon: FiZap, label: "Certificates", value: "7+" },
  ]

  return (
    <section
      id="top"
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-5 sm:px-8 lg:px-12 pt-28 pb-16 lg:py-24"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-black to-purple-900/10 animate-pulse" />

      {/* Glow Effects */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-cyan-500 rounded-full blur-3xl top-10 left-10 pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-500 rounded-full blur-3xl bottom-10 right-10 pointer-events-none"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center content-center"
      >
        {/* Left Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <p className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-300 uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-6">
            Welcome To My Portfolio
          </p>

          {/* Optimized Main Heading */}
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight block text-center lg:text-left">
  <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
    Muddaluru
  </span>
  <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
    Jagadish Raju
  </span>
</h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            AI/ML Engineer • Full Stack Developer • AI Enthusiast
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 mb-10 max-w-xl mx-auto lg:mx-0">
            {stats.map((stat, index) => {
              const Icon = stat.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-2xl p-4 hover:bg-white/10 hover:border-cyan-400/50 transition duration-300 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <Icon className="text-2xl text-cyan-400 mb-2" />
                  <p className="text-2xl font-bold text-cyan-400">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <a
              href="/Jagadish_Resume_29_April_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl text-black font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition duration-300"
              >
                View Resume
              </motion.button>
            </a>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 border border-cyan-400 rounded-2xl text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="flex justify-center order-1 lg:order-2">
          {/* Outer div handles Parallax on scroll */}
          <motion.div style={{ y: parallaxY }} className="relative">
            {/* Inner div handles active hover & float styling */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 12,
              }}
              className="relative perspective-1000"
            >
              {/* Background radial glow specifically for the image */}
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-25" />

              <img
                src={profile}
                alt="Muddaluru Jagadish Raju"
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/40"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex flex-col items-center"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-cyan-400 rounded-full"
          />
        </div>
        <p className="text-cyan-400 text-xs mt-2 text-center font-semibold tracking-wider">
          Scroll to explore
        </p>
      </motion.div>
    </section>
  )
}

export default Hero
