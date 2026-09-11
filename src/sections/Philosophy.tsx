import { Reveal } from "../components/Reveal";
import styles from "./Philosophy.module.css";

const RITUAL_WORDS = ["Ritual", "Atmosphere", "Conversation", "Pause"];

export function Philosophy() {
  return (
    <section id="philosophy" className={`section theme-dark-alt ${styles.philosophy}`}>
      <span className={styles.bigNumeral} aria-hidden="true">
        01
      </span>

      <div className="section-inner">
        <Reveal as="p" className="eyebrow">
          Philosophy
        </Reveal>

        <div className={styles.grid}>
          <Reveal as="h2" className={styles.heading} delay={0.05}>
            Coffee is not
            <br />
            the point.
            <br />
            <em>The pause is.</em>
          </Reveal>

          <div className={styles.copy}>
            <Reveal as="p" className={styles.paragraph} delay={0.1}>
              NOCTRA was built for the quarter-hour between one thing and the
              next — the one you almost skip. We roast in small batches and
              pour with no rush, because the point was never speed.
            </Reveal>

            <Reveal as="ul" className={styles.wordList} delay={0.2}>
              {RITUAL_WORDS.map((word, index) => (
                <li key={word} className={styles.wordItem}>
                  <span className={styles.wordIndex}>0{index + 1}</span>
                  <span>{word}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
