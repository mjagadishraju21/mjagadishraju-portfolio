import skills from "../data/skills"
import { motion } from "framer-motion"
import {
  SiPython,
  SiC,
  SiTensorflow,
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiMysql,
  SiGit,
  SiGithub,
  SiOpencv,
} from "react-icons/si"
import { DiJava } from "react-icons/di"

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-24 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/5 via-black to-cyan-900/5"></div>

      <div className="w-full max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Technical
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
              {" "}Skills
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
            Proficient in various technologies and programming languages for
            AI, web development, and product creation.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.08, borderColor: "rgb(34, 211, 238)" }}
              className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/10 hover:border-cyan-400/50 transition duration-300 group shadow-lg shadow-cyan-500/5"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-3 group-hover:scale-110 transition duration-300"
              >
                {(() => {
                  const iconMap = {
                    Python: SiPython,
                    Java: DiJava,
                    C: SiC,
                    "Machine Learning": SiTensorflow,
                    React: SiReact,
                    HTML: SiHtml5,
                    CSS: SiCss,
                    JavaScript: SiJavascript,
                    SQL: SiMysql,
                    Git: SiGit,
                    GitHub: SiGithub,
                    OpenCV: SiOpencv,
                  }

                  const Icon = iconMap[skill.name] || SiPython

                  return (
                    <Icon className="text-3xl sm:text-4xl text-cyan-400 mx-auto" />
                  )
                })()}
              </motion.div>

              <h3 className="text-sm sm:text-base font-semibold group-hover:text-cyan-400 transition duration-300 break-words">
                {skill.name}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                {skill.level}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
