import { motion } from "framer-motion"
// icons removed per user request — keeping text-only highlights

function About() {
  const highlights = [
    { title: "AIML Engineer", description: "Specialized in AI/ML development" },
    { title: "Problem Solver", description: "Building real-world solutions" },
    { title: "Continuous Learner", description: "Always exploring new technologies" },
  ]

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-24 flex items-center relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-900/5 via-black to-purple-900/5"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            About
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
              {" "}Me
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            I'm Muddaluru Jagadish Raju, an AIML Engineering student passionate
            about Artificial Intelligence, Product Development, and building
            impactful real-world solutions through technology. I combine technical
            expertise with creative problem-solving to develop innovative applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, borderColor: "rgb(34, 211, 238)" }}
              className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-cyan-400/50 transition duration-300 group shadow-lg shadow-cyan-500/5"
            >
              {/* icons removed — text only */}
              <h3 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-purple-400 transition duration-300">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About