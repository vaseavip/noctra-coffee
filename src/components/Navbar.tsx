import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useScrolled } from "../hooks/useScrolled";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { Cta } from "./Cta";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#coffee", label: "Coffee" },
  { href: "#experience", label: "Experience" },
  { href: "#space", label: "Space" },
  { href: "#hours", label: "Hours" },
];

export function Navbar() {
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.navbar} ${scrolled || menuOpen ? styles.solid : ""}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="NOCTRA COFFEE — home">
          <span>NOCTRA</span>
          <span className={styles.brandSub}>COFFEE</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.desktopCta}>
          <Cta href="#visit" variant="ghost">
            Visit us
          </Cta>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpenTop : ""}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpenBottom : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id={menuId}
            aria-label="Mobile"
            className={styles.mobileNav}
            initial={reducedMotion ? undefined : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 0.8, 0.24, 1] }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#visit"
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              Visit us
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
