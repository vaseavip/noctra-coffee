import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`section-inner ${styles.inner}`}>
        <div className={styles.brand}>
          <span>NOCTRA</span>
          <span className={styles.brandSub}>COFFEE</span>
        </div>

        <p className={styles.meta}>
          © {new Date().getFullYear()} NOCTRA COFFEE. A concept brand, built for portfolio
          purposes.
        </p>

        <a href="#top" className={styles.top}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
