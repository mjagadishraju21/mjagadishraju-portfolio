import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaArrowUp } from "react-icons/fa"

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-linear-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/40 hover:shadow-lg hover:shadow-purple-500/40 transition duration-300"
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
    </>
  )
}

export default BackToTop
