import { useState } from "react"
import { motion } from "framer-motion"
import sparkleIcon from "../assets/icons/sparkle.svg"

function Sparkles({ children, className = "" }) {
  const [sparkles, setSparkles] = useState([])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newSparkle = {
      id: Date.now(),
      x,
      y,
    }

    setSparkles((prev) => [...prev, newSparkle])

    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id))
    }, 600)
  }

  return (
    <div onMouseMove={handleMouseMove} className={`relative ${className}`}>
      {children}

      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 0, opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="absolute pointer-events-none"
          style={{
            left: sparkle.x,
            top: sparkle.y,
          }}
        >
          <img src={sparkleIcon} alt="Sparkle" className="w-6 h-6" />
        </motion.div>
      ))}
    </div>
  )
}

export default Sparkles
