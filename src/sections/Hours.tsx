import { Reveal } from "../components/Reveal";
import { hours } from "../data/hours";
import styles from "./Hours.module.css";

export function Hours() {
  return (
    <section id="hours" className={`section theme-dark-alt ${styles.hours}`}>
      <div className={`section-inner ${styles.grid}`}>
        <Reveal>
          <p className="eyebrow">Hours</p>
          <h2 className={styles.title}>Open late. On purpose.</h2>
        </Reveal>

        <Reveal as="dl" className={styles.table} delay={0.1}>
          {hours.map((row) => (
            <div key={row.days} className={styles.row}>
              <dt className={styles.days}>{row.days}</dt>
              <dd className={styles.time}>{row.time}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
