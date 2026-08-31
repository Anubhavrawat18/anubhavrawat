import { useState, useEffect } from "react";

export function useSpriteAnimation(frames, fps = 8) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % frames.length);
    }, 1000 / fps);
    return () => clearInterval(interval);
  }, [frames, fps]);
  return frames[current];
}
