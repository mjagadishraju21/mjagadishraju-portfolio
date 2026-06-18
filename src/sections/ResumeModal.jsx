import { useState, useEffect } from "react"
import resume from "../assets/Jagadish_Resume_29_April_.pdf"

function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl text-black font-bold hover:scale-105 transition duration-300"
      >
        View Resume
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[999999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onWheel={(e) => e.stopPropagation()}
        >
          <div className="relative isolate bg-[#0a0a0a] border border-cyan-400/20 rounded-3xl w-full max-w-6xl h-[90vh] overflow-hidden">

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

            {/* PDF Viewer */}
            <iframe
              src={`${resume}#toolbar=1&navpanes=0&scrollbar=1`}
              title="Resume"
              className="w-full h-[calc(100%-80px)] bg-white"
            />

            {/* Download Button */}
            <a
              href={resume}
              download
              className="absolute bottom-5 right-5 px-6 py-3 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition"
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
