import { useState } from "react"
import { motion } from "framer-motion"
import sparkleIcon from "../assets/icons/sparkle.svg"

function ParticleBurst({ children, onBurst }) {
  const [particles, setParticles] = useState([])

  const createParticleBurst = () => {

    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: `${Date.now()}-${i}`,
      angle: (i / 12) * Math.PI * 2,
    }))

    setParticles((prev) => [...prev, ...newParticles])

    setTimeout(() => {
      setParticles([])
    }, 600)

    if (onBurst) onBurst()
  }

  return (
    <div
      onClick={createParticleBurst}
      className="relative cursor-pointer"
    >
      {children}

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: Math.cos(particle.angle) * 100,
            y: Math.sin(particle.angle) * 100,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute pointer-events-none"
          style={{
            left: "50%",
            top: "50%",
            marginLeft: "-10px",
            marginTop: "-10px",
          }}
        >
          <img src={sparkleIcon} alt="Sparkle" className="w-6 h-6" />
        </motion.div>
      ))}
    </div>
  )
}

export default ParticleBurst
