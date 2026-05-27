import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const [hovering, setHovering] = useState(false)

  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    // Disable custom cursor on mobile/tablet
    if (window.innerWidth < 768) {
      setIsDesktop(false)
      return
    }

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleHover = (e) => {
      const target = e.target

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleHover)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleHover)
    }
  }, [])

  // Prevent rendering on mobile
  if (!isDesktop) return null

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: hovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
          mass: 0.5,
        }}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-cyan-400 pointer-events-none z-[9999]"
        style={{
          boxShadow: "0 0 30px rgba(34,211,238,0.9)",
          background: "rgba(34,211,238,0.05)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Inner Core */}
      <motion.div
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: hovering ? 0.6 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
        }}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]"
        style={{
          background:
            "linear-gradient(to right, #22d3ee, #a855f7)",
          boxShadow:
            "0 0 20px rgba(168,85,247,1)",
        }}
      />
    </>
  )
}

export default CursorGlow