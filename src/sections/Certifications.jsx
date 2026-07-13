import certifications from "../data/certifications"
import { motion } from "framer-motion"
import certificateIcon from "../assets/icons/certificate.svg"
import nccLogo from "../assets/logos/ncc.png"
import nccA from "../assets/certificates/ncc-a.pdf"
import nccB from "../assets/certificates/ncc-b.pdf"

const nccCertificates = [
  {
    title: "NCC A Certificate",
    file: nccA,
  },
  {
    title: "NCC B Certificate",
    file: nccB,
  },
]

function Certifications() {
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
      id="certifications"
      className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-24 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-900/5 via-black to-teal-900/5"></div>

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
            Certifications &
            <span className="bg-linear-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
              {" "}Credentials
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Professional certifications and recognized qualifications in my field.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {certifications.map((certificate, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="group backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl overflow-hidden shadow-lg shadow-cyan-500/10 transition duration-300"
            >
              <div className="relative p-5 sm:p-6 md:p-8">

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">

                  <img
                    src={certificate.logo || certificateIcon}
                    alt={`${certificate.subtitle} logo`}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white break-words">
                      {certificate.title}
                    </h3>

                    <p className="text-cyan-300 text-sm sm:text-base mt-1">
                      {certificate.subtitle}
                    </p>
                  </div>

                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-7 mb-8">
                  {certificate.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-linear-to-r from-cyan-500 to-purple-500 rounded-full text-black font-semibold text-center shadow-lg shadow-cyan-500/20"
                  >
                    View PDF
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href={certificate.file}
                    download
                    className="w-full sm:w-auto px-6 py-3 border border-cyan-400/30 rounded-full hover:border-cyan-400 hover:bg-white/5 transition duration-300 text-center"
                  >
                    Download
                  </motion.a>

                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* NCC Section */}
        <div className="mt-20 md:mt-24">

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16"
          >
            NCC
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Certificates
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

            {nccCertificates.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-5 sm:p-6 md:p-8 hover:border-cyan-400/50 transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.08)]"
              >

                <div className="mb-6">
                  <img
                    src={nccLogo}
                    alt="NCC logo"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-2xl bg-white/5 p-2 border border-white/10"
                  />
                </div>

                <h4 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-cyan-400 transition duration-300">
                  {certificate.title}
                </h4>

                <p className="text-gray-400 text-sm sm:text-base mb-8">
                  Official NCC certification document.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-linear-to-r from-cyan-500 to-purple-500 rounded-xl text-black font-semibold shadow-lg shadow-cyan-500/20 text-center"
                  >
                    View PDF
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={certificate.file}
                    download
                    className="w-full sm:w-auto px-6 py-3 border border-cyan-400/30 rounded-xl hover:border-cyan-400 hover:bg-white/5 transition duration-300 text-center"
                  >
                    Download
                  </motion.a>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default Certifications
