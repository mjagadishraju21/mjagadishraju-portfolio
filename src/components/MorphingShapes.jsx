import { motion } from "framer-motion"

function MorphingShapes() {
  const shapes = [
    {
      initial: "M50,0 L100,50 L50,100 L0,50 Z",
      animate: "M50,0 L100,38 L82,100 L18,100 L0,38 Z",
      label: "Diamond",
    },
    {
      initial: "M0,50 Q50,0 100,50 Q50,100 0,50 Z",
      animate: "M0,25 Q50,0 100,25 Q100,100 50,100 Q0,100 0,25 Z",
      label: "Blob",
    },
    {
      initial: "M50,0 L100,38 L82,100 L18,100 L0,38 Z",
      animate: "M50,0 L100,50 L50,100 L0,50 Z",
      label: "Star",
    },
  ]

  return (
    <div className="flex justify-center items-center gap-12 py-12">
      {shapes.map((shape, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col items-center gap-4"
        >
          <motion.svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            className="drop-shadow-lg"
          >
            <motion.path
              d={shape.initial}
              animate={{ d: shape.animate }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: idx * 0.3,
              }}
              fill="url(#gradient)"
              opacity="0.8"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#22d3ee", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#a855f7", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </motion.svg>
          <p className="text-cyan-400 font-semibold text-sm">{shape.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default MorphingShapes
