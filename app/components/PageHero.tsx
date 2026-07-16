import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./PageHero.module.css";

export default function PageHero({
  breadcrumbHref,
  breadcrumbLabel = "← Back to home",
  eyebrow,
  title,
  description,
}: {
  breadcrumbHref: string;
  breadcrumbLabel?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description: ReactNode;
}) {
  return (
    <header className={styles.hero}>
      <div className="wrap">
        <Link className={styles.breadcrumb} href={breadcrumbHref}>
          {breadcrumbLabel}
        </Link>
        {eyebrow ? (
          <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span>
        ) : null}
        <h1 style={eyebrow ? undefined : { marginTop: 18 }}>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}
