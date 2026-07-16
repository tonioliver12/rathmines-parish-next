import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Latest News",
};

export default function News() {
  return (
    <>
      <PageHero
        breadcrumbHref="/"
        title="Latest News"
        description="Parish notices, the monthly newsletter, homilies, and the day's Mass readings — all in one place."
      />

      <div className={styles.subnav}>
        <div className={`wrap ${styles.subnavInner}`}>
          <a href="#news">News</a>
          <a href="#newsletter">Newsletter</a>
          <a href="#homilies">Homilies</a>
          <a href="#today">Today&apos;s Readings</a>
          <a href="#sunday">Sunday Readings</a>
        </div>
      </div>

      <section className={styles.section} id="news">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2>
              News<span className={styles.editableTag}>Updated weekly</span>
            </h2>
            <p>
              Parish announcements, in the style of a running blog — newest
              first.
            </p>
          </div>
          <div className={styles.blogList}>
            <a className={styles.blogCard} href="#">
              <span className={styles.blogDate}>11 JUN 2026</span>
              <span>
                <span className={styles.blogTitle}>
                  Summer Masses schedule now available
                </span>
                <div className={styles.blogExcerpt}>
                  Our summer Mass times run slightly differently from the
                  rest of the year — full schedule now posted.
                </div>
              </span>
              <span className={styles.blogArrow}>→</span>
            </a>
            <Link className={styles.blogCard} href="/volunteers">
              <span className={styles.blogDate}>11 JUN 2026</span>
              <span>
                <span className={styles.blogTitle}>
                  Volunteers needed — get involved in parish life
                </span>
                <div className={styles.blogExcerpt}>
                  New volunteers are always welcome, whatever time or skills
                  you can offer.
                </div>
              </span>
              <span className={styles.blogArrow}>→</span>
            </Link>
            <a className={styles.blogCard} href="#">
              <span className={styles.blogDate}>08 JUN 2026</span>
              <span>
                <span className={styles.blogTitle}>
                  Archdiocese of Dublin Summer Dues appeal
                </span>
                <div className={styles.blogExcerpt}>
                  This year&apos;s Summer Dues collection supports priests
                  across the archdiocese.
                </div>
              </span>
              <span className={styles.blogArrow}>→</span>
            </a>
            <a className={styles.blogCard} href="#">
              <span className={styles.blogDate}>01 JUN 2026</span>
              <span>
                <span className={styles.blogTitle}>
                  Family Camino: a free guided tour of Dublin&apos;s
                  historic churches
                </span>
                <div className={styles.blogExcerpt}>
                  A gentle walking tour for families, visiting some of the
                  city&apos;s oldest churches.
                </div>
              </span>
              <span className={styles.blogArrow}>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section} id="newsletter">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2>
              Parish Newsletter
              <span className={styles.editableTag}>PDF, weekly</span>
            </h2>
            <p>Download the latest edition, or browse the archive.</p>
          </div>
          <div className={styles.fileList}>
            <a className={styles.fileItem} href="#">
              <div className={styles.fileLeft}>
                <span className={styles.fileIcon}>PDF</span>
                <div>
                  <div className={styles.fileName}>
                    Newsletter — 12 July 2026
                  </div>
                  <div className={styles.fileMeta}>Published 12 July 2026</div>
                </div>
              </div>
              <span className={styles.fileDownload}>Download ↓</span>
            </a>
            <a className={styles.fileItem} href="#">
              <div className={styles.fileLeft}>
                <span className={styles.fileIcon}>PDF</span>
                <div>
                  <div className={styles.fileName}>
                    Newsletter — 5 July 2026
                  </div>
                  <div className={styles.fileMeta}>Published 5 July 2026</div>
                </div>
              </div>
              <span className={styles.fileDownload}>Download ↓</span>
            </a>
            <a className={styles.fileItem} href="#">
              <div className={styles.fileLeft}>
                <span className={styles.fileIcon}>PDF</span>
                <div>
                  <div className={styles.fileName}>
                    Newsletter — 28 June 2026
                  </div>
                  <div className={styles.fileMeta}>Published 28 June 2026</div>
                </div>
              </div>
              <span className={styles.fileDownload}>Download ↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section} id="homilies">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2>
              Homilies<span className={styles.editableTag}>Updated weekly</span>
            </h2>
            <p>Text or audio from recent Sunday homilies.</p>
          </div>
          <div className={styles.fileList}>
            <a className={styles.homilyItem} href="#">
              <div>
                <div className={styles.homilyTitle}>
                  14th Sunday in Ordinary Time
                </div>
                <div className={styles.homilyDate}>5 July 2026</div>
              </div>
              <span className={styles.homilyTag}>Listen</span>
            </a>
            <a className={styles.homilyItem} href="#">
              <div>
                <div className={styles.homilyTitle}>
                  Feast of Sts Peter and Paul
                </div>
                <div className={styles.homilyDate}>29 June 2026</div>
              </div>
              <span className={styles.homilyTag}>Read</span>
            </a>
            <a className={styles.homilyItem} href="#">
              <div>
                <div className={styles.homilyTitle}>
                  12th Sunday in Ordinary Time
                </div>
                <div className={styles.homilyDate}>21 June 2026</div>
              </div>
              <span className={styles.homilyTag}>Listen</span>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section} id="today">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2>
              Today&apos;s Mass Readings
              <span className={styles.editableTag}>Updated daily</span>
            </h2>
          </div>
          <div className={styles.readingsCard}>
            <span className="eyebrow">Wednesday, Week 15 in Ordinary Time</span>
            <h3>15 July 2026</h3>
            <div style={{ marginTop: 20 }}>
              <div className={styles.readingEntry}>
                <div className={styles.readingLabel}>First Reading</div>
                <div className={styles.readingRef}>Isaiah 10:5–7, 13–16</div>
              </div>
              <div className={styles.readingEntry}>
                <div className={styles.readingLabel}>Responsorial Psalm</div>
                <div className={styles.readingRef}>Psalm 94</div>
              </div>
              <div className={styles.readingEntry}>
                <div className={styles.readingLabel}>Gospel</div>
                <div className={styles.readingRef}>Matthew 11:25–27</div>
              </div>
            </div>
            <p className={styles.readingsNote}>
              Full texts available in the missalette at the back of the
              church, or your parish&apos;s usual online liturgy source.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionLast}`} id="sunday">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2>
              This Sunday&apos;s Readings
              <span className={styles.editableTag}>Updated weekly</span>
            </h2>
          </div>
          <div className={styles.readingsCard}>
            <span className="eyebrow">16th Sunday in Ordinary Time</span>
            <h3>19 July 2026</h3>
            <div className={styles.readingsTwo} style={{ marginTop: 20 }}>
              <div>
                <div className={styles.readingEntry}>
                  <div className={styles.readingLabel}>First Reading</div>
                  <div className={styles.readingRef}>Genesis 18:1–10</div>
                </div>
                <div className={styles.readingEntry}>
                  <div className={styles.readingLabel}>
                    Responsorial Psalm
                  </div>
                  <div className={styles.readingRef}>Psalm 14</div>
                </div>
              </div>
              <div>
                <div className={styles.readingEntry}>
                  <div className={styles.readingLabel}>Second Reading</div>
                  <div className={styles.readingRef}>
                    Colossians 1:24–28
                  </div>
                </div>
                <div className={styles.readingEntry}>
                  <div className={styles.readingLabel}>Gospel</div>
                  <div className={styles.readingRef}>Luke 10:38–42</div>
                </div>
              </div>
            </div>
            <p className={styles.readingsNote}>
              Full texts available in the missalette at the back of the
              church, or your parish&apos;s usual online liturgy source.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
