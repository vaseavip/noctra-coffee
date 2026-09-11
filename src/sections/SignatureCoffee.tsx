import { Reveal } from "../components/Reveal";
import { featuredItem, secondaryItems } from "../data/menu";
import styles from "./SignatureCoffee.module.css";

export function SignatureCoffee() {
  return (
    <section id="coffee" className={`section theme-light ${styles.coffee}`}>
      <div className="section-inner">
        <div className={styles.heading}>
          <Reveal as="p" className="eyebrow">
            Signature coffee
          </Reveal>
          <Reveal as="h2" className={styles.title} delay={0.05}>
            Drawn slowly, served darker.
          </Reveal>
        </div>

        <Reveal className={styles.featured} delay={0.1}>
          <div className={styles.featuredMedia}>
            <img
              src={featuredItem.image}
              alt={featuredItem.imageAlt}
              width={880}
              height={1100}
              loading="lazy"
              decoding="async"
              className={`photo ${styles.featuredImage}`}
            />
          </div>
          <div className={styles.featuredInfo}>
            <span className={styles.tag}>{featuredItem.note}</span>
            <h3 className={styles.featuredName}>{featuredItem.name}</h3>
            <p className={styles.featuredDescription}>{featuredItem.description}</p>
            <span className={styles.featuredPrice}>{featuredItem.price}</span>
          </div>
        </Reveal>

        <ul className={styles.list}>
          {secondaryItems.map((item, index) => (
            <Reveal as="li" key={item.name} className={styles.listItem} delay={0.05 * index}>
              <div className={styles.listMedia}>
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  width={200}
                  height={200}
                  loading="lazy"
                  decoding="async"
                  className={`photo ${styles.listImage}`}
                />
              </div>
              <div className={styles.listText}>
                <h3 className={styles.listName}>{item.name}</h3>
                <p className={styles.listDescription}>{item.description}</p>
              </div>
              <span className={styles.listPrice}>{item.price}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
