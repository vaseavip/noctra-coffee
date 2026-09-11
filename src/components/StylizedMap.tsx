import styles from "./StylizedMap.module.css";

/** An abstract, hand-drawn location mark — never a real map, no real address implied. */
export function StylizedMap() {
  return (
    <svg
      viewBox="0 0 400 400"
      className={styles.map}
      role="img"
      aria-label="Stylized illustration of the NOCTRA COFFEE neighborhood"
    >
      <defs>
        <pattern id="dotgrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="1.2" fill="currentColor" opacity="0.18" />
        </pattern>
      </defs>

      <rect width="400" height="400" fill="url(#dotgrid)" />

      <path
        d="M40 320 C 100 300, 120 220, 90 160 C 70 120, 110 70, 180 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="2 8"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M180 60 C 230 52, 270 90, 250 140 C 235 178, 270 210, 320 205"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="2 8"
        strokeLinecap="round"
        opacity="0.5"
      />

      <g transform="translate(200 168)">
        <circle r="34" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <circle r="52" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <path
          d="M0 -20 C 11 -20 20 -11.5 20 -1 C 20 12 0 30 0 30 C 0 30 -20 12 -20 -1 C -20 -11.5 -11 -20 0 -20 Z"
          fill="currentColor"
        />
        <circle cx="0" cy="-2" r="6" fill="var(--surface-light-alt)" />
      </g>
    </svg>
  );
}
