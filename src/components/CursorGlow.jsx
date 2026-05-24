import { useEffect, useState } from "react"

function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const moveCursor = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
      setVisible(true)
    }

    const hideCursor = () => {
      setVisible(false)
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseleave", hideCursor)
    window.addEventListener("mouseout", hideCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseleave", hideCursor)
      window.removeEventListener("mouseout", hideCursor)
    }
  }, [])

  return (
    <>
      <div
        className={`custom-cursor-ring ${visible ? "opacity-100" : "opacity-0"}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      <div
        className={`custom-cursor-dot ${visible ? "opacity-100" : "opacity-0"}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
    </>
  )
}

export default CursorGlow
