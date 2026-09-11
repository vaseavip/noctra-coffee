import styles from "./Beans.module.css";

type BeanSpec = {
  x: number;
  y: number;
  size: number;
  rotate: number;
  opacity: number;
};

// Hand-placed, not a grid — mirrors the loose, asymmetric drift of the live scene.
const BEANS: BeanSpec[] = [
  { x: 30, y: 22, size: 1, rotate: -18, opacity: 1 },
  { x: 62, y: 12, size: 0.72, rotate: 34, opacity: 0.85 },
  { x: 80, y: 30, size: 0.85, rotate: -8, opacity: 0.9 },
  { x: 18, y: 48, size: 0.6, rotate: 52, opacity: 0.7 },
  { x: 48, y: 44, size: 0.95, rotate: 12, opacity: 1 },
  { x: 72, y: 58, size: 0.68, rotate: -40, opacity: 0.75 },
  { x: 34, y: 70, size: 0.78, rotate: 24, opacity: 0.85 },
  { x: 58, y: 78, size: 0.55, rotate: -22, opacity: 0.6 },
  { x: 12, y: 78, size: 0.5, rotate: 8, opacity: 0.5 },
];

function Bean({ x, y, size, rotate, opacity }: BeanSpec) {
  const w = 26 * size;
  const h = 34 * size;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`} opacity={opacity}>
      <ellipse cx={0} cy={0} rx={w / 2} ry={h / 2} fill="url(#beanGradient)" />
      <path
        d={`M0 ${-h / 2 + 2} C ${w * 0.12} ${-h * 0.15}, ${w * 0.12} ${h * 0.15}, 0 ${h / 2 - 2}`}
        stroke="#14100c"
        strokeWidth={Math.max(0.6, size)}
        strokeLinecap="round"
        fill="none"
        opacity={0.55}
      />
    </g>
  );
}

/** Static poster used for prefers-reduced-motion, missing WebGL, or low-power devices. */
export function BeansFallback() {
  return (
    <div className={styles.fallback} role="img" aria-label="Coffee beans drifting in soft light">
      <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
        <defs>
          <radialGradient id="beanGradient" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#8a5a34" />
            <stop offset="55%" stopColor="#5c3a22" />
            <stop offset="100%" stopColor="#2a1810" />
          </radialGradient>
        </defs>
        {BEANS.map((bean, i) => (
          <Bean key={i} {...bean} />
        ))}
      </svg>
    </div>
  );
}
