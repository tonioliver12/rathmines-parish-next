import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div>
          <div className={styles.brandName}>Rathmines Parish</div>
          <p className={styles.fine}>
            Prototype redesign, built with publicly available information
            from the parish&apos;s own website. Registered Charity Number
            20016166. Working in partnership with Rathgar Parish.
          </p>
        </div>
        <ul className={styles.links}>
          <li>
            <Link href="/#rhythm">Mass Times</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/mass-intentions">Mass Intentions</Link>
          </li>
          <li>
            <Link href="/certificates">Certificates</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
