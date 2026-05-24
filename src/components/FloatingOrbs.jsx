import { useState } from "react"
import { motion } from "framer-motion"

function FloatingOrbs() {
  const [orbsData] = useState(() => [
      {
        id: 1,
        size: 40,
        delay: 0,
        color: "from-cyan-400 to-blue-500",
        duration: 6,
        initialX: Math.random() * window.innerWidth,
        initialY: Math.random() * window.innerHeight,
        xTargets: [
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
        ],
        yTargets: [
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
        ],
      },
      {
        id: 2,
        size: 60,
        delay: 1,
        color: "from-purple-400 to-pink-500",
        duration: 8,
        initialX: Math.random() * window.innerWidth,
        initialY: Math.random() * window.innerHeight,
        xTargets: [
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
        ],
        yTargets: [
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
        ],
      },
      {
        id: 3,
        size: 35,
        delay: 2,
        color: "from-green-400 to-cyan-500",
        duration: 7,
        initialX: Math.random() * window.innerWidth,
        initialY: Math.random() * window.innerHeight,
        xTargets: [
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
        ],
        yTargets: [
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
        ],
      },
      {
        id: 4,
        size: 50,
        delay: 0.5,
        color: "from-orange-400 to-red-500",
        duration: 9,
        initialX: Math.random() * window.innerWidth,
        initialY: Math.random() * window.innerHeight,
        xTargets: [
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
        ],
        yTargets: [
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
        ],
      },
      {
        id: 5,
        size: 45,
        delay: 1.5,
        color: "from-pink-400 to-purple-500",
        duration: 6.5,
        initialX: Math.random() * window.innerWidth,
        initialY: Math.random() * window.innerHeight,
        xTargets: [
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
        ],
        yTargets: [
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
        ],
      },
  ])

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 mix-blend-screen">
      {orbsData.map((orb) => (
        <motion.div
          key={orb.id}
          initial={{
            x: orb.initialX,
            y: orb.initialY,
          }}
          animate={{
            x: orb.xTargets,
            y: orb.yTargets,
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
          className={`absolute bg-linear-to-br ${orb.color} rounded-full blur-3xl opacity-35`}
          style={{
            width: orb.size,
            height: orb.size,
            filter: `blur(${orb.size / 1.5}px)`,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingOrbs
