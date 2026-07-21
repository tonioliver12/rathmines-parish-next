"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { href: "/#rhythm", label: "Mass Times" },
  { href: "/events", label: "Events" },
  { href: "/#sacraments", label: "Sacraments" },
  { href: "/news", label: "Latest News" },
  { href: "/youth", label: "Youth" },
  { href: "/#visit", label: "Visit" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

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
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={styles.actions}>
          <Link href="/mass-intentions" className={styles.requestBtn}>
            Request a Mass
          </Link>
          <Link href="/#give" className={styles.cta}>
            Donate
          </Link>
        </div>
      </div>

      {menuOpen ? (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileActions}>
            <Link
              href="/mass-intentions"
              className={styles.requestBtn}
              onClick={closeMenu}
            >
              Request a Mass
            </Link>
            <Link href="/#give" className={styles.cta} onClick={closeMenu}>
              Donate
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
