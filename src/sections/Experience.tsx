import { Reveal } from "../components/Reveal";
import { moments } from "../data/moments";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience" className={`section theme-dark ${styles.experience}`}>
      <div className="section-inner">
        <Reveal as="p" className="eyebrow">
          The experience
        </Reveal>
        <Reveal as="h2" className={styles.title} delay={0.05}>
          Four moods, one room.
        </Reveal>

        <div className={styles.collage}>
          {moments.map((moment, index) => (
            <Reveal
              as="article"
              key={moment.title}
              className={styles.panel}
              delay={0.08 * index}
            >
              <img
                src={moment.image}
                alt={moment.imageAlt}
                loading="lazy"
                decoding="async"
                className={`photo ${styles.panelImage}`}
              />
              <div className={styles.panelScrim} aria-hidden="true" />
              <div className="grain" aria-hidden="true" />
              <span className={styles.panelIndex} aria-hidden="true">
                {moment.index}
              </span>
              <div className={styles.panelText}>
                <h3 className={styles.panelTitle}>{moment.title}</h3>
                <p className={styles.panelCaption}>{moment.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
