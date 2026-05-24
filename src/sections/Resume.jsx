import resume from "../assets/Jagadish_Resume_29_April_.pdf"

function Resume() {
  return (
    <div className="text-center py-12">
      <a
        href={resume}
        download
        className="px-8 py-4 border border-gray-700 hover:border-cyan-400 rounded-2xl text-white font-semibold transition duration-300"
      >
        Download Resume
      </a>
    </div>
  )
}

export default Resume