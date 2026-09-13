import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Cta } from "../components/Cta";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import styles from "./Hero.module.css";

const HERO_VIDEO_SRC =
  "/hailuo-2_3_Create_a_6-second_seamless_looping_cinematic_hero_video_for_the_premium_specialt-0.mp4";

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  // The video carries its own animation — this only adds a very subtle,
  // heavily damped cursor-driven drift (a few px) on top of it. Disabled
  // entirely for reduced-motion users, along with playback itself.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reducedMotion) {
      video.pause();
      return;
    }

    const maxShift = 8;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let raf = 0;

    function onPointerMove(event: PointerEvent) {
      target.x = (event.clientX / window.innerWidth) * 2 - 1;
      target.y = (event.clientY / window.innerHeight) * 2 - 1;
    }

    function tick() {
      current.x += (target.x - current.x) * 0.04;
      current.y += (target.y - current.y) * 0.04;
      if (video) {
        video.style.transform = `translate3d(${current.x * maxShift}px, ${current.y * maxShift}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onPointerMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  return (
    <section id="top" className={styles.hero} aria-label="Introduction">
      <video
        ref={videoRef}
        className={styles.video}
        src={HERO_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

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
