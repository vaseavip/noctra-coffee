import { motion } from "framer-motion";
import { type ComponentType, type ReactNode } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type RevealTag = "div" | "p" | "h1" | "h2" | "h3" | "ul" | "li" | "article" | "dl";

// Each `motion.<tag>` component has a distinct element/prop generic; a single
// looser record avoids the (harmless, since only shared props are ever passed
// through) variance mismatch between them.
type MotionComponent = ComponentType<Record<string, unknown>>;

const MOTION_TAG: Record<RevealTag, MotionComponent> = {
  div: motion.div,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  ul: motion.ul,
  li: motion.li,
  article: motion.article,
  dl: motion.dl,
};

type RevealProps = {
  children: ReactNode;
  as?: RevealTag;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
};

/** Elegant, single-purpose scroll reveal. Disabled entirely for reduced-motion users. */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 28,
  className,
  once = true,
  amount = 0.3,
}: RevealProps) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = MOTION_TAG[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: [0.16, 0.8, 0.24, 1], delay },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
