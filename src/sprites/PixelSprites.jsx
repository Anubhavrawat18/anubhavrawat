// ── Pixel Sprites as SVG ────────────────────────────────────────────────────
// All sprites use pixel-perfect SVG rectangles for authentic 8-bit look

// import 17 other images
import golem1 from '../assets/0_Golem_Idle_000.png';
import golem2 from '../assets/0_Golem_Idle_001.png';
import golem3 from '../assets/0_Golem_Idle_002.png';
import golem4 from '../assets/0_Golem_Idle_003.png';
import golem5 from '../assets/0_Golem_Idle_004.png';
import golem6 from '../assets/0_Golem_Idle_005.png';
import golem7 from '../assets/0_Golem_Idle_006.png';
import golem8 from '../assets/0_Golem_Idle_007.png';
import golem9 from '../assets/0_Golem_Idle_008.png';
import golem10 from '../assets/0_Golem_Idle_009.png';
import golem11 from '../assets/0_Golem_Idle_010.png';
import golem12 from '../assets/0_Golem_Idle_011.png';
import golem13 from '../assets/0_Golem_Idle_012.png';
import golem14 from '../assets/0_Golem_Idle_013.png';
import golem15 from '../assets/0_Golem_Idle_014.png';
import golem16 from '../assets/0_Golem_Idle_015.png';
import golem17 from '../assets/0_Golem_Idle_016.png';
import golem18 from '../assets/0_Golem_Idle_017.png';


export function GhostSprite({ color = '#00ff41', size = 24, style = {} }) {
  const s = size / 8;
  const px = (x, y, w = 1, h = 1) => (
    <rect key={`${x}-${y}`} x={x * s} y={y * s} width={w * s} height={h * s} fill={color} />
  );
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
      style={{ imageRendering: 'pixelated', ...style }}>
      {/* body */}
      {px(2,0,4,1)}{px(1,1,6,1)}{px(0,2,8,1)}{px(0,3,8,1)}
      {px(0,4,8,1)}{px(0,5,8,1)}{px(0,6,8,1)}
      {/* feet */}
      {px(0,7,2,1)}{px(3,7,2,1)}{px(6,7,2,1)}
      {/* eyes */}
      <rect x={1*s} y={3*s} width={2*s} height={2*s} fill="#000" />
      <rect x={5*s} y={3*s} width={2*s} height={2*s} fill="#000" />
      <rect x={2*s} y={3*s} width={s} height={s} fill="#fff" />
      <rect x={6*s} y={3*s} width={s} height={s} fill="#fff" />
    </svg>
  );
}

export function StarSprite({ color = '#00ff41', size = 16, style = {} }) {
  const s = size / 8;
  const px = (x, y, w = 1, h = 1) => (
    <rect key={`${x}-${y}`} x={x * s} y={y * s} width={w * s} height={h * s} fill={color} />
  );
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
      style={{ imageRendering: 'pixelated', ...style }}>
      {px(3,0,2,1)}{px(3,1,2,1)}{px(1,2,6,1)}{px(0,3,8,1)}
      {px(1,4,6,1)}{px(2,5,4,1)}{px(1,6,2,1)}{px(5,6,2,1)}
      {px(0,7,2,1)}{px(6,7,2,1)}
    </svg>
  );
}

export function SpaceshipSprite({ color = '#00ff41', size = 32, style = {} }) {
  const s = size / 10;
  const px = (x, y, w = 1, h = 1) => (
    <rect key={`${x}-${y}`} x={x * s} y={y * s} width={w * s} height={h * s} fill={color} />
  );
  return (
    <svg width={size} height={size * 1.2} viewBox={`0 0 ${size} ${size * 1.2}`}
      style={{ imageRendering: 'pixelated', ...style }}>
      {px(4,0,2,1)}{px(3,1,4,1)}{px(2,2,6,1)}{px(1,3,8,1)}
      {px(0,4,10,1)}{px(0,5,10,1)}{px(1,6,8,1)}
      {px(0,7,3,1)}{px(7,7,3,1)}
      <rect x={4*s} y={4*s} width={2*s} height={2*s} fill="#fff" opacity="0.8" />
    </svg>
  );
}

export function RobotSprite({ color = '#00ff41', size = 32, style = {} }) {
  const s = size / 10;
  const px = (x, y, w = 1, h = 1, c = color) => (
    <rect key={`${x}-${y}-${c}`} x={x * s} y={y * s} width={w * s} height={h * s} fill={c} />
  );
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
      style={{ imageRendering: 'pixelated', ...style }}>
      {/* antenna */}{px(4,0,2,1)}{px(3,1,1,1)}{px(6,1,1,1)}
      {/* head */}{px(2,2,6,1)}{px(1,3,8,1)}{px(1,4,8,1)}{px(1,5,8,1)}{px(2,6,6,1)}
      {/* eyes */}
      {px(2,3,2,2,'#000')}{px(6,3,2,2,'#000')}
      {px(2,3,1,1,'#fff')}{px(6,3,1,1,'#fff')}
      {/* mouth */}{px(3,5,4,1,'#000')}{px(3,5,1,1,color)}{px(5,5,1,1,color)}
      {/* body */}{px(2,7,6,1)}{px(1,8,8,2)}{px(2,10,2,1)}{px(6,10,2,1)}
    </svg>
  );
}

export function CoinSprite({ color = '#f59e0b', size = 16, style = {} }) {
  const s = size / 8;
  const px = (x, y, w = 1, h = 1) => (
    <rect key={`${x}-${y}`} x={x * s} y={y * s} width={w * s} height={h * s} fill={color} />
  );
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
      style={{ imageRendering: 'pixelated', ...style }}>
      {px(2,0,4,1)}{px(1,1,6,1)}{px(0,2,8,1)}{px(0,3,8,1)}
      {px(0,4,8,1)}{px(0,5,8,1)}{px(1,6,6,1)}{px(2,7,4,1)}
      <rect x={3*s} y={2*s} width={s} height={4*s} fill="#000" opacity="0.3" />
      <rect x={2*s} y={3*s} width={s} height={2*s} fill="#fff" opacity="0.4" />
    </svg>
  );
}

export function HeartSprite({ color = '#ff4444', size = 16, style = {} }) {
  const s = size / 8;
  const px = (x, y, w = 1, h = 1) => (
    <rect key={`${x}-${y}`} x={x * s} y={y * s} width={w * s} height={h * s} fill={color} />
  );
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
      style={{ imageRendering: 'pixelated', ...style }}>
      {px(1,0,2,1)}{px(5,0,2,1)}
      {px(0,1,3,1)}{px(4,1,4,1)}
      {px(0,2,8,1)}{px(0,3,8,1)}{px(0,4,8,1)}
      {px(1,5,6,1)}{px(2,6,4,1)}{px(3,7,2,1)}
    </svg>
  );
}

export function MushSprite({ size = 24, style = {} }) {
  const s = size / 8;
  const px = (x, y, w = 1, h = 1, c = '#ff4444') => (
    <rect key={`${x}-${y}-${c}`} x={x * s} y={y * s} width={w * s} height={h * s} fill={c} />
  );
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
      style={{ imageRendering: 'pixelated', ...style }}>
      {px(2,0,4,1)}{px(1,1,6,1)}{px(0,2,8,1)}{px(0,3,8,1)}
      {px(1,4,6,1)}
      {px(2,4,1,1,'#fff')}{px(5,4,1,1,'#fff')}
      {px(1,2,2,2,'#fff')}{px(5,2,2,2,'#fff')}
      {px(2,5,4,2,'#f5cba7')}{px(1,5,1,2,'#f5cba7')}{px(6,5,1,2,'#f5cba7')}
      {px(2,7,4,1,'#f5cba7')}
    </svg>
  );
}

import { useSpriteAnimation } from '../hooks/useSpriteAnimation';

const GOLEM_IDLE_FRAMES = [
  golem1, golem2, golem3, golem4, golem5, golem6,
  golem7, golem8, golem9, golem10, golem11, golem12,
  golem13, golem14, golem15, golem16, golem17, golem18,
];

export function GolemSprite({ size = 64, fps = 10, style = {} }) {
  const frame = useSpriteAnimation(GOLEM_IDLE_FRAMES, fps);
  return (
    <img
      src={frame}
      width={size}
      height={size}
      style={{ imageRendering: 'pixelated', ...style }}
    />
  );
}