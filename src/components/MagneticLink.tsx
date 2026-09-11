import { motion, useMotionValue, useSpring } from "framer-motion";
import { type AnchorHTMLAttributes, type ReactNode, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useMediaQuery } from "../hooks/useMediaQuery";

type NativeAnchorProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
>;

type MagneticLinkProps = NativeAnchorProps & {
  children: ReactNode;
  strength?: number;
};

/**
 * A CTA with a very subtle magnetic pull toward the cursor.
 * Disabled on touch devices (no cursor) and for reduced-motion users.
 */
export function MagneticLink({ children, strength = 14, className, ...anchorProps }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isCoarsePointer = useMediaQuery("(pointer: coarse)");

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 150, damping: 18, mass: 0.6 });

  const disabled = reducedMotion || isCoarsePointer;

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      className={className}
      style={disabled ? undefined : { x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...anchorProps}
    >
      {children}
    </motion.a>
  );
}
