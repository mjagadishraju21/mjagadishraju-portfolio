import { motion } from "framer-motion"

import nccLogo from "../assets/logos/ncc.png"
import eclubLogo from "../assets/logos/eclub.jpg"

function Leadership() {

  const leadershipItems = [
    {
      title: "NATIONAL CADET CORPS(NCC)",
      logo: nccLogo,

      description:
        "Developed leadership, discipline, teamwork, and organizational skills through National Cadet Corps activities and camps.",

      highlight: "Defense & Leadership",
    },

    {
      title: "ENTREPRENEURSHIP CLUB(E-CLUB)",
      logo: eclubLogo,

      description:
        "Organized workshops, entrepreneurship events, and technical bootcamps as part of E-Club activities.",

      highlight: "Community & Entrepreneurship",
    },
  ]

  return (
    <section
      id="leadership"
      className="min-h-screen bg-black text-white px-6 py-24 relative overflow-hidden border-b border-white/5"
    >

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-pink-900/5 via-black to-cyan-900/5"></div>

      {/* Glow Effects */}
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
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2,
        }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
      ></motion.div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Leadership &
            <span className="bg-linear-to-r from-cyan-400 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
              {" "}Initiative
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Leadership experiences and initiatives that shaped my growth,
            teamwork, and contribution to communities.
          </p>

        </motion.div>

        {/* Leadership Cards */}
        <div className="space-y-8">

          {leadershipItems.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
              }}
              className="relative backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-8 overflow-hidden hover:border-cyan-400/50 transition duration-300 group shadow-[0_0_30px_rgba(34,211,238,0.08)]"
            >

              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-cyan-500/10 via-transparent to-purple-500/10"></div>

              <div className="relative z-10 flex items-start gap-6">

                {/* Logo */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  className="shrink-0"
                >

                  <img
                    src={item.logo}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded-2xl bg-white/5 p-2 border border-white/10"
                  />

                </motion.div>

                {/* Content */}
                <div className="flex-1">

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">

                    <h3 className="text-3xl font-bold group-hover:text-cyan-400 transition duration-300">
                      {item.title}
                    </h3>

                    <motion.span
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="w-fit px-4 py-2 backdrop-blur-md bg-purple-500/10 border border-purple-400/50 rounded-full text-sm text-purple-300 hover:bg-purple-500/20 transition duration-300"
                    >
                      {item.highlight}
                    </motion.span>

                  </div>

                  <p className="text-gray-400 leading-relaxed text-lg">
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Leadership