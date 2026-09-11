import { Reveal } from "../components/Reveal";
import { Cta } from "../components/Cta";
import styles from "./Visit.module.css";

export function Visit() {
  return (
    <section id="visit" className={`section ${styles.visit}`}>
      <div className="grain" aria-hidden="true" />
      <div className={`section-inner ${styles.inner}`}>
        <Reveal as="p" className="eyebrow">
          Visit
        </Reveal>

        <Reveal as="h2" className={styles.title} delay={0.05}>
          Follow the ritual.
        </Reveal>

        <Reveal className={styles.actions} delay={0.15}>
          <Cta href="mailto:hello@noctra.coffee" variant="primary">
            hello@noctra.coffee
          </Cta>
          <Cta href="https://instagram.com" variant="ghost" target="_blank" rel="noreferrer">
            @noctra.coffee
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}
