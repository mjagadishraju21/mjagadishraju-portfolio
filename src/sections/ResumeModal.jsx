import resume from "../assets/Jagadish_Resume_29_April_.pdf"

function ResumeModal() {
  return (
    <a
      href={resume}
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl text-black font-bold hover:scale-105 transition duration-300"
    >
      View Resume
    </a>
  )
}

export default ResumeModal
