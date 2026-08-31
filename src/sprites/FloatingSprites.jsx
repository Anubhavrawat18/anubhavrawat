import { useRef } from "react";

import {
  GhostSprite,
  StarSprite,
  SpaceshipSprite,
  RobotSprite,
  CoinSprite,
  HeartSprite,
  MushSprite,
  GolemSprite,
} from "../sprites/PixelSprites";

const SPRITE_POOL = [
  (k, color, size, style) => (
    <GhostSprite key={k} color={color} size={size} style={style} />
  ),
  (k, color, size, style) => (
    <StarSprite key={k} color={color} size={size} style={style} />
  ),
  (k, color, size, style) => (
    <SpaceshipSprite key={k} color={color} size={size} style={style} />
  ),
  (k, color, size, style) => (
    <RobotSprite key={k} color={color} size={size} style={style} />
  ),
  (k, color, size, style) => (
    <CoinSprite key={k} color={color} size={size} style={style} />
  ),
  (k, color, size, style) => (
    <HeartSprite key={k} color={color} size={size} style={style} />
  ),
  (k, color, size, style) => (
    <MushSprite key={k} color={color} size={size} style={style} />
  ),
  (k, color, size, style) => (
    <GolemSprite key={k} color={color} size={size} style={style} />
  ),
];

const COLORS = [
  "#00ff41",
  "#00ff41",
  "#00ff41",
  "#b347ff",
  "#f59e0b",
  "#00cc33",
];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingSprites({ count = 14 }) {
  const items = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      spriteIdx: Math.floor(Math.random() * SPRITE_POOL.length),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: Math.floor(rand(16, 36)),
      left: `${rand(2, 96)}%`,
      top: `${rand(2, 96)}%`,
      duration: rand(5, 14),
      delay: rand(0, 6),
      floatY: rand(10, 30),
      opacity: rand(0.07, 0.18),
    })),
  ).current;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {items.map((s) => {
        const style = {
          position: "absolute",
          left: s.left,
          top: s.top,
          opacity: s.opacity,
          animation: `floatSprite ${s.duration}s ease-in-out ${s.delay}s infinite`,
          filter: `drop-shadow(0 0 4px ${s.color}88)`,
        };
        return SPRITE_POOL[s.spriteIdx](s.id, s.color, s.size, style);
      })}
      <style>{`
        @keyframes floatSprite {
          0%   { transform: translateY(0px) rotate(0deg); }
          33%  { transform: translateY(-18px) rotate(3deg); }
          66%  { transform: translateY(-8px) rotate(-2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
