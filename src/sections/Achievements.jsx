import achievements from "../data/achievements"
import { motion } from "framer-motion"
import trophyIcon from "../assets/icons/trophy.svg"

function Achievements() {
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
      id="achievements"
      className="min-h-screen bg-black text-white px-6 py-24 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/5 via-black to-cyan-900/5"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            Achievements &
            <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
              {" "}Awards
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition and accomplishments in my professional journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="backdrop-blur-xl bg-white/5 border border-purple-400/20 rounded-3xl overflow-hidden hover:border-purple-300/50 transition duration-300 shadow-lg shadow-purple-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="relative z-10 p-6 bg-black/70">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-cyan-300 font-semibold mb-3">
                  {achievement.subtitle}
                </p>
                <p className="text-gray-300 leading-7">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements