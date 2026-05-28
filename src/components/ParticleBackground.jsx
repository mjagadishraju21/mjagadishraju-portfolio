import { useEffect, useRef } from "react"

function ParticleBackground() {

  const canvasRef = useRef(null)

  useEffect(() => {

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()

    const mouse = {
      x: null,
      y: null,
      radius: 120,
    }

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x
      mouse.y = event.y
    })

    class Particle {

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height

        this.vx = (Math.random() - 0.5) * 0.6
        this.vy = (Math.random() - 0.5) * 0.6

        this.radius = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {

        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -1
        }

        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -1
        }

        // Mouse interaction
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y

        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouse.radius) {
          this.x -= dx * 0.01
          this.y -= dy * 0.01
        }
      }

      draw() {

        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius * 4
        )

        gradient.addColorStop(
          0,
          `rgba(34, 211, 238, ${this.opacity})`
        )

        gradient.addColorStop(
          1,
          "rgba(168, 85, 247, 0)"
        )

        ctx.fillStyle = gradient
        ctx.shadowBlur = 20
        ctx.shadowColor = `rgba(34, 211, 238, ${this.opacity})`

        ctx.beginPath()

        ctx.arc(
          this.x,
          this.y,
          this.radius,
          0,
          Math.PI * 2
        )

        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    const particles = []
    const particleCount = 70

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const connectParticles = () => {

      for (let a = 0; a < particles.length; a++) {

        for (let b = a; b < particles.length; b++) {

          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y

          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {

            ctx.strokeStyle = `rgba(34, 211, 238, ${0.08 - distance / 1500})`

            ctx.lineWidth = 1

            ctx.beginPath()

            ctx.moveTo(particles[a].x, particles[a].y)

            ctx.lineTo(particles[b].x, particles[b].y)

            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      connectParticles()

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("resize", setCanvasSize)

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }

  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40"
      style={{
        zIndex: 1,
      }}
    />
  )
}

export default ParticleBackground