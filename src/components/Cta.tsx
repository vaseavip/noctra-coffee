import type { AnchorHTMLAttributes, ReactNode } from "react";
import { MagneticLink } from "./MagneticLink";
import styles from "./Buttons.module.css";

type CtaProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function Cta({ children, variant = "primary", className, ...rest }: CtaProps) {
  const variantClass = variant === "primary" ? styles.primary : styles.ghost;
  return (
    <MagneticLink className={[variantClass, className].filter(Boolean).join(" ")} {...rest}>
      {children}
      {variant === "primary" && (
        <span className={styles.icon} aria-hidden="true">
          →
        </span>
      )}
    </MagneticLink>
  );
}
