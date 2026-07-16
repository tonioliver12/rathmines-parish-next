import type { ReactNode } from "react";
import Link from "next/link";
import PageHero from "./PageHero";
import styles from "./SacramentPage.module.css";

export type SacramentData = {
  number: string;
  name: ReactNode;
  tagline: ReactNode;
  paragraphs: ReactNode[];
  steps: ReactNode[];
  certificateType?: string;
  certificateLabel?: string;
};

export default function SacramentPage({
  number,
  name,
  tagline,
  paragraphs,
  steps,
  certificateType,
  certificateLabel,
}: SacramentData) {
  return (
    <>
      <PageHero
        breadcrumbHref="/#sacraments"
        eyebrow={`Sacrament ${number}`}
        title={name}
        description={tagline}
      />

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.contentGrid}>
            <div>
              {paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              {certificateType ? (
                <p>
                  <Link
                    href={`/certificates?type=${certificateType}`}
                    className="btn-ghost-ink"
                  >
                    Request a {certificateLabel} certificate →
                  </Link>
                </p>
              ) : null}
            </div>
            <div className={styles.stepsCard}>
              <h3>How to arrange it</h3>
              {steps.map((step, i) => (
                <div className={styles.step} key={i}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <span className={styles.stepText}>{step}</span>
                </div>
              ))}
              <a className={`btn-primary ${styles.cta}`} href="/#visit">
                Contact the parish office →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
