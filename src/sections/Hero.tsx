import { motion } from "framer-motion";
import { Cta } from "../components/Cta";
import { Hero3D } from "../components/beans/Hero3D";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import styles from "./Hero.module.css";

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="top" className={styles.hero} aria-label="Introduction">
      <div className={styles.glow} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className={styles.beansLayer} aria-hidden="true">
        <Hero3D />
      </div>

      <div className={styles.content}>
        <motion.p
          className={`eyebrow ${styles.eyebrow}`}
          initial={reducedMotion ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 0.8, 0.24, 1] }}
        >
          Specialty coffee house
        </motion.p>

        <motion.h1
          className={styles.title}
          initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 0.8, 0.24, 1], delay: 0.1 }}
        >
          Coffee
          <br />
          after dark.
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 0.8, 0.24, 1], delay: 0.25 }}
        >
          Specialty coffee for slow mornings and late conversations.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 0.8, 0.24, 1], delay: 0.4 }}
        >
          <Cta href="#coffee" variant="primary">
            Explore the menu
          </Cta>
          <Cta href="#philosophy" variant="ghost">
            Our philosophy
          </Cta>
        </motion.div>
      </div>

      <a href="#philosophy" className={styles.scrollCue}>
        <span>Scroll</span>
        <span className={styles.scrollLine} aria-hidden="true" />
      </a>
    </section>
  );
}
