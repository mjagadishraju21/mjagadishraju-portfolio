import experience from "../data/experience"
import { motion } from "framer-motion"
import { useState } from "react"
import certIcon from "../assets/icons/certificate.svg"
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

function Experience() {
  const [previewUrl, setPreviewUrl] = useState(null)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white px-6 py-24 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-900/5 via-black to-purple-900/5"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            Professional
            <span className="bg-linear-to-r from-cyan-400 via-teal-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
              {" "}Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Diverse experience across various domains and technologies, building 
            impactful solutions and leading technical initiatives.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ borderColor: "rgb(34, 211, 238)", x: 5 }}
              className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition duration-300 relative shadow-lg shadow-cyan-500/5"
            >
              {/* Timeline dot with gradient */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-linear-to-r from-cyan-500 to-purple-500 border-4 border-black shadow-lg shadow-cyan-500/30"
              ></motion.div>

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-bold hover:text-cyan-400 transition duration-300">
                    {item.role}
                  </h3>
                  <p className="text-cyan-400 mt-2 font-semibold">
                    {item.company}
                  </p>
                </div>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 backdrop-blur-md bg-cyan-500/10 border border-cyan-400/50 rounded-full text-sm text-cyan-300 whitespace-nowrap hover:bg-cyan-500/20"
                >
                  {item.duration}
                </motion.span>
              </div>

              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
              {item.certificate && (
                <div className="mt-4">
                  <button
                    onClick={() => setPreviewUrl(item.certificate)}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-cyan-400/20 rounded-full text-cyan-300 hover:bg-white/10 transition duration-200"
                  >
                    <img src={certIcon} alt="Certificate" className="w-5 h-5" />
                    <span>View Certificate</span>
                  </button>
                </div>
              )}

              {previewUrl && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                  <div className="w-[90%] md:w-3/4 lg:w-2/3 h-[80%] bg-black rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between p-3 border-b border-white/10">
                      <div className="text-white font-semibold">Certificate Preview</div>
                      <div className="flex items-center gap-2">
                        <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">Open in new tab</a>
                        <button onClick={() => setPreviewUrl(null)} className="px-3 py-1 bg-white/5 rounded">Close</button>
                      </div>
                    </div>
                    <div className="w-full h-full bg-white flex flex-col">
                      <div className="flex-1 overflow-auto">
                        <Document file={previewUrl} onLoadSuccess={onDocumentLoadSuccess} loading={<div className="p-6">Loading...</div>}>
                          <Page pageNumber={pageNumber} width={1000} />
                        </Document>
                      </div>
                      <div className="flex items-center justify-between p-3 border-t border-white/10">
                        <div className="text-sm text-gray-300">Page {pageNumber} of {numPages ?? '–'}</div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                            disabled={pageNumber <= 1}
                            className="px-3 py-1 bg-white/5 rounded disabled:opacity-40"
                          >Prev</button>
                          <button
                            onClick={() => setPageNumber((p) => (numPages ? Math.min(numPages, p + 1) : p + 1))}
                            disabled={numPages && pageNumber >= numPages}
                            className="px-3 py-1 bg-white/5 rounded disabled:opacity-40"
                          >Next</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience