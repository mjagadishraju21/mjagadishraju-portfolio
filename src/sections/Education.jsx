import { motion } from "framer-motion"

function Education() {
  const education = [
    {
      year: "2023 - Present",
      degree: "Bachelor of Technology",
      field: "Computer Science Engineering (Artificial Intelligence & Machine Learning)",
      institution: "GITAM (Deemed to be University), Bengaluru Campus",
      result: "CGPA: 8.08",
      details: [
        "Focused on Artificial Intelligence, Machine Learning and Software Development",
        "Built multiple AI, Computer Vision and Full Stack projects",
        "Active participant in technical events, hackathons and innovation activities",
        "Developing expertise in modern web technologies and intelligent systems"
      ]
    },
    {
      year: "2021 - 2023",
      degree: "Intermediate Education",
      field: "Mathematics, Physics and Chemistry (MPC)",
      institution: "CN Raju Junior College",
      result: "847 Marks • Grade A",
      details: [
        "Established a strong foundation in Mathematics and Science",
        "Strengthened analytical thinking and problem-solving abilities",
        "Achieved Grade A in Intermediate Public Examinations"
      ]
    },
    {
      year: "2020 - 2021",
      degree: "Secondary School Certificate (SSC)",
      field: "State Board of Andhra Pradesh",
      institution: "Raju High School, Rayachoty",
      result: "600/600 Marks • First Division",
      details: [
        "Achieved a perfect score of 600/600",
        "Demonstrated consistent academic excellence",
        "Graduated with outstanding performance across all subjects"
      ]
    }
  ]

  return (
    <section
      id="education"
      className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 via-black to-purple-900/5"></div>

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
            Academic
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Journey
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
            My educational background has built a strong foundation in
            technology, innovation, problem-solving, and Artificial Intelligence.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16">

          <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-5 sm:p-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">8.08</h3>
            <p className="text-sm sm:text-base text-gray-400">CGPA</p>
          </div>

          <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-5 sm:p-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">600/600</h3>
            <p className="text-sm sm:text-base text-gray-400">SSC</p>
          </div>

          <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-5 sm:p-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">847</h3>
            <p className="text-sm sm:text-base text-gray-400">Intermediate</p>
          </div>

          <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-5 sm:p-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">2027</h3>
            <p className="text-sm sm:text-base text-gray-400">Graduation</p>
          </div>

        </div>

        {/* Education Cards */}
        <div className="space-y-6 md:space-y-8">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-5 sm:p-6 md:p-8 hover:border-cyan-400/50 transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5">

                <div className="flex-1">

                  <h3 className="text-xl sm:text-2xl font-bold text-cyan-400">
                    {item.degree}
                  </h3>

                  <p className="text-base sm:text-lg text-white mt-2 leading-relaxed">
                    {item.field}
                  </p>

                  <p className="text-sm sm:text-base text-gray-400 mt-2">
                    {item.institution}
                  </p>

                </div>

                <div className="text-left md:text-right shrink-0">

                  <p className="text-cyan-300 font-semibold text-sm sm:text-base">
                    {item.year}
                  </p>

                  <p className="text-gray-300 mt-2 text-sm sm:text-base">
                    {item.result}
                  </p>

                </div>

              </div>

              <ul className="mt-5 md:mt-6 space-y-2 text-sm sm:text-base text-gray-400 leading-relaxed">
                {item.details.map((detail, i) => (
                  <li key={i}>• {detail}</li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Education
