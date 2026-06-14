import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-scroll"
import resume from "../assets/Jagadish_Resume_29_April_.pdf"
import ResumeModal from "../components/ResumeModal"
import profile from "../assets/profile/jagadish.png"
import { FiCode, FiTrendingUp, FiZap } from "react-icons/fi"

function Hero() {
  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 0.18], [0, -50])
  const stats = [
    { icon: FiCode, label: "Projects", value: "5" },
    { icon: FiTrendingUp, label: "Skills", value: "12" },
    { icon: FiZap, label: "Experience", value: "1" },
  ]

  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-6 pt-20">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-900/10 via-black to-purple-900/10 animate-pulse"></div>

      {/* Glow Effects */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl top-10 left-10"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl bottom-10 right-10"
      ></motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-6 text-sm md:text-base font-semibold">
            Welcome To My Portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-2">
            Muddaluru
            <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Jagadish Raju
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-gray-400 leading-relaxed">
            AIML Engineer • Product Developer • AI Enthusiast
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 mb-10">

            {stats.map((stat, index) => {
              const Icon = stat.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-2xl p-4 hover:bg-white/10 hover:border-cyan-400/50 transition duration-300"
                >
                  <Icon className="text-2xl text-cyan-400 mx-auto md:mx-0 mb-2" />

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

          {/* Buttons */}
<div className="mt-8 flex flex-wrap gap-4">

  <ResumeModal />

  <a href={resume} download>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 border border-cyan-400/30 bg-white/5 backdrop-blur-md rounded-2xl text-white font-semibold hover:bg-white/10 transition duration-300"
    >
      Download Resume
    </motion.button>
  </a>

  <Link
    to="contact"
    smooth={true}
    duration={500}
  >
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-500 rounded-2xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition duration-300"
    >
      Contact Me
    </motion.button>
  </Link>

</div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">

          <motion.div
            style={{ y: parallaxY }}
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

            {/* Glow Behind Image */}
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

            {/* Profile Image */}
            <img
              src={profile}
              alt="Muddaluru Jagadish Raju"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/40"
            />

          </motion.div>

        </div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >

        <motion.div
          animate={{
            borderColor: [
              "rgba(34, 211, 238, 1)",
              "rgba(168, 85, 247, 1)",
              "rgba(34, 211, 238, 1)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
        >

          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-linear-to-b from-cyan-400 to-purple-500 rounded-full"
          ></motion.div>

        </motion.div>

        <p className="text-cyan-400 text-xs mt-2 text-center font-semibold">
          Scroll to explore
        </p>

      </motion.div>

    </section>
  )
}

export default Hero
