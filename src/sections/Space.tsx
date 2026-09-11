import { Reveal } from "../components/Reveal";
import { StylizedMap } from "../components/StylizedMap";
import spaceImage from "../assets/photos/space-interior.webp";
import styles from "./Space.module.css";

export function Space() {
  return (
    <section id="space" className={`section theme-light ${styles.space}`}>
      <div className={`section-inner ${styles.grid}`}>
        <Reveal>
          <p className="eyebrow">Our space</p>
          <h2 className={styles.title}>
            Designed for slow mornings
            <br />
            and long conversations.
          </h2>
          <p className={styles.paragraph}>
            Concrete, walnut, and low copper light. NOCTRA sits a few steps
            below street level — tucked away on purpose, easy to miss, easy to
            stay in once you find it.
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Seating</dt>
              <dd>28 seats, 4 window tables</dd>
            </div>
            <div>
              <dt>Sound</dt>
              <dd>Low, mostly instrumental</dd>
            </div>
            <div>
              <dt>Wifi</dt>
              <dd>Available, not advertised</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.15} className={styles.mediaWrap}>
          <div className={styles.photoFrame}>
            <img
              src={spaceImage}
              alt="Concrete and dark wood interior of the NOCTRA space, lit by a single warm ceiling light"
              loading="lazy"
              decoding="async"
              className="photo"
            />
          </div>
          <div className={styles.mapBadge}>
            <StylizedMap />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
