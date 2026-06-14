import { useState } from "react"
import resume from "../assets/Jagadish_Resume_29_April_.pdf"

function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl text-black font-bold hover:scale-105 transition duration-300"
      >
        View Resume
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          
          <div className="bg-[#0a0a0a] border border-cyan-400/20 rounded-3xl w-full max-w-5xl h-[90vh] overflow-hidden relative">

            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b border-gray-800">
              <h2 className="text-white text-xl font-bold">
                Resume Preview
              </h2>

              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>

            {/* PDF */}
            <iframe
              src={resume}
              title="Resume"
              className="w-full h-[calc(100%-80px)]"
            />

            {/* Download Button */}
            <a
              href={resume}
              download
              className="absolute bottom-5 right-5 px-6 py-3 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400"
            >
              Download PDF
            </a>

          </div>
        </div>
      )}
    </>
  )
}

export default ResumeModal
