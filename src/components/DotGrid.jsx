import { useEffect, useRef } from 'react'

const SPACING   = 28      // gap between dots
const DOT_RADIUS = 1.2    // base dot size
const INFLUENCE  = 80    // how far cursor affects dots (px)
const STRENGTH   = 15     // how far dots move at max (px)
const SPRING     = 0.08   // how fast they spring back (0–1)
const DAMPING    = 0.75   // smoothness of spring

export default function DotGrid() {
  const canvasRef = useRef(null)
  const mouse     = useRef({ x: -9999, y: -9999 })
  const dots      = useRef([])
  const rafRef    = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      buildDots()
    }

    const buildDots = () => {
      dots.current = []
      const cols = Math.ceil(canvas.width  / SPACING) + 1
      const rows = Math.ceil(canvas.height / SPACING) + 1
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.current.push({
            ox: c * SPACING,   // origin x
            oy: r * SPACING,   // origin y
            x:  c * SPACING,   // current x
            y:  r * SPACING,   // current y
            vx: 0,
            vy: 0,
          })
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mx = mouse.current.x
      const my = mouse.current.y

      for (const dot of dots.current) {
        // Vector from dot to mouse
        const dx   = mx - dot.ox
        const dy   = my - dot.oy
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Target position — repel away from cursor
        let tx = dot.ox
        let ty = dot.oy

        if (dist < INFLUENCE && dist > 0) {
          const force  = (1 - dist / INFLUENCE) * STRENGTH
          tx = dot.ox - (dx / dist) * force
          ty = dot.oy - (dy / dist) * force
        }

        // Spring physics toward target
        const ax = (tx - dot.x) * SPRING
        const ay = (ty - dot.y) * SPRING
        dot.vx = (dot.vx + ax) * DAMPING
        dot.vy = (dot.vy + ay) * DAMPING
        dot.x += dot.vx
        dot.y += dot.vy

        // Opacity based on proximity to cursor
        const proximity = Math.max(0, 1 - dist / (INFLUENCE * 1.5))
        const opacity   = 0.15 + proximity * 0.5

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    const onMouseLeave = () => {
      mouse.current = { x: -9999, y: -9999 }
    }

    resize()
    draw()

    window.addEventListener('resize',      resize)
    window.addEventListener('mousemove',   onMouseMove)
    window.addEventListener('mouseleave',  onMouseLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize',     resize)
      window.removeEventListener('mousemove',  onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}