import styles from "./Vessel.module.css";

/**
 * Static poster used when WebGL is unavailable, reduced-motion is on,
 * or the device is judged too low-power for the live scene. Mirrors the
 * silhouette of the 3D vessel so the swap is seamless.
 */
export function VesselFallback() {
  return (
    <div className={styles.fallback} role="img" aria-label="A sculptural ceramic coffee vessel">
      <svg viewBox="0 0 220 260" width="100%" height="100%" aria-hidden="true">
        <defs>
          <linearGradient id="vesselBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#efdcb8" />
            <stop offset="55%" stopColor="#d9bd8c" />
            <stop offset="100%" stopColor="#b98d55" />
          </linearGradient>
          <radialGradient id="vesselSurface" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#2a1c10" />
            <stop offset="100%" stopColor="#140d07" />
          </radialGradient>
        </defs>
        <ellipse cx="110" cy="238" rx="70" ry="12" fill="#0f0c09" opacity="0.4" />
        <path
          d="M62 30 C40 60, 44 92, 66 118 C82 138, 86 168, 70 196 C64 208, 68 222, 92 222 L150 222 C168 222, 170 206, 160 194 C142 172, 140 140, 156 116 C172 92, 168 56, 148 30 Z"
          fill="url(#vesselBody)"
        />
        <ellipse cx="106" cy="34" rx="42" ry="14" fill="url(#vesselSurface)" />
      </svg>
    </div>
  );
}
