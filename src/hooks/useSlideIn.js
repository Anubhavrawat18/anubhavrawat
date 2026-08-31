import { useEffect, useRef, useState } from 'react'

const directionMap = {
  up:    'translateY(40px)',
  down:  'translateY(-40px)',
  left:  'translateX(60px)',
  right: 'translateX(-60px)',
}

export default function useSlideIn(direction = 'up', threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate(0,0)' : directionMap[direction],
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  }

  return { ref, style }
}