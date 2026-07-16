import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true" />
          <div>
            <div className={styles.brandName}>
              Mary Immaculate,
              <br />
              Refuge of Sinners
            </div>
            <div className={styles.brandSub}>
              RATHMINES · ARCHDIOCESE OF DUBLIN
            </div>
          </div>
        </div>
        <ul className={styles.links}>
          <li>
            <Link href="/#rhythm">Mass Times</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/#sacraments">Sacraments</Link>
          </li>
          <li>
            <Link href="/news">Latest News</Link>
          </li>
          <li>
            <Link href="/youth">Youth</Link>
          </li>
          <li>
            <Link href="/#visit">Visit</Link>
          </li>
        </ul>
        <div className={styles.actions}>
          <Link href="/mass-intentions" className={styles.requestBtn}>
            Request a Mass
          </Link>
          <Link href="/#give" className={styles.cta}>
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}
