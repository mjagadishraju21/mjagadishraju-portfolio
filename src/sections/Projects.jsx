import projects from "../data/projects"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import Card3DEffect from "../components/Card3DEffect"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function Projects() {

  const getTechColor = (tech) => {
    const colors = {
      React: "from-blue-500 to-cyan-400",
      Python: "from-yellow-500 to-orange-400",
      AI: "from-purple-500 to-pink-400",
      "Machine Learning": "from-red-500 to-pink-400",
      OpenCV: "from-orange-500 to-yellow-400",
      IoT: "from-green-500 to-emerald-400",
      Sensors: "from-teal-500 to-cyan-400",
      Analytics: "from-indigo-500 to-purple-400",
      Monitoring: "from-cyan-500 to-blue-400",
    }

    return colors[tech] || "from-cyan-500 to-purple-400"
  }

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-24 relative overflow-hidden border-b border-white/5"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-900/5 via-black to-purple-900/5"></div>

      {/* Floating Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2,
        }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured
            <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              {" "}Projects
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A collection of innovative projects showcasing expertise in AI,
            Machine Learning, IoT, and product development.
          </p>

        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div key={index} className="col-span-1">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1200}
                transitionSpeed={1500}
                glareEnable={true}
                glareMaxOpacity={0.12}
                scale={1.02}
                className="rounded-3xl h-full"
              >
                <Card3DEffect className="rounded-3xl h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -10,
                    }}
                    className="relative backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-8 overflow-hidden hover:border-cyan-400/50 transition duration-300 group shadow-[0_0_30px_rgba(34,211,238,0.08)] h-full flex flex-col justify-between"
                  >

                {/* Animated Hover Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>

                {/* Project Number */}
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.15,
                  }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 w-14 h-14 rounded-2xl bg-linear-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-lg font-bold mb-8 shadow-lg shadow-cyan-500/30"
                >
                  {index + 1}
                </motion.div>

                {/* Project Title */}
                <h3 className="relative z-10 text-3xl font-bold mb-4 group-hover:text-cyan-400 transition duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="relative z-10 flex flex-wrap gap-3 mb-8">

                  {project.tech.map((tech, i) => (

                    <motion.span
                      key={i}
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-semibold bg-linear-to-r ${getTechColor(tech)} text-white shadow-lg`}
                    >
                      {tech}
                    </motion.span>

                  ))}

                </div>

                {/* Buttons */}
                <div className="relative z-10 flex gap-4">

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-purple-500 rounded-xl text-black font-semibold shadow-lg shadow-cyan-500/20"
                  >
                    <FaGithub />
                    GitHub
                  </motion.a>

                </div>

              </motion.div>
                  </Card3DEffect>
                </Tilt>
              </div>
            ))}

        </div>

      </div>

    </section>
  )
}

export default Projects