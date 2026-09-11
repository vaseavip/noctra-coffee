type CupMarkProps = {
  className?: string;
  rotate?: number;
};

/**
 * A single hand-drawn line mark reused (at slight rotations) across the menu —
 * one consistent icon language rather than a mismatched icon pack.
 */
export function CupMark({ className, rotate = 0 }: CupMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <path
        d="M16 22h28l-2.5 22a6 6 0 0 1-6 5.4H24.5a6 6 0 0 1-6-5.4L16 22Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M44 26h4a6 6 0 0 1 0 12h-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M25 10c-2 2.5 2 4-0.5 7M32 8c-2 2.5 2 4-0.5 7M39 10c-2 2.5 2 4-0.5 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
