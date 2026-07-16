import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Youth Section",
};

export default function Youth() {
  return (
    <>
      <PageHero
        breadcrumbHref="/"
        title="Youth Section"
        description="Faith formation and community for every age — from Children's Corner to our Young Adults group."
      />

      <div className={styles.subnav}>
        <div className={`wrap ${styles.subnavInner}`}>
          <a href="#children">Children&apos;s Corner</a>
          <a href="#young-adults">Young Adults</a>
        </div>
      </div>

      <section className={styles.section} id="children">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2>Children&apos;s Corner</h2>
            <p>
              A few short, faith-filled videos to watch as a family, from
              Catholic Kids Media — a channel making cartoons and
              reflections that explain the faith at a child&apos;s level,
              without watering it down.
            </p>
          </div>

          <div className={styles.videoGrid}>
            <div className={styles.videoCard}>
              <iframe
                className={styles.videoFrame}
                src="https://www.youtube-nocookie.com/embed/nZFUzC6Cduk"
                title="Guided Prayer - Act of Spiritual Communion — Catholic Kids Media"
                loading="lazy"
                allow="encrypted-media"
                allowFullScreen
              />
              <div className={styles.videoMeta}>
                <div className={styles.videoTitle}>
                  Guided Prayer - Act of Spiritual Communion
                </div>
                <div className={styles.videoSub}>Catholic Kids Media</div>
              </div>
            </div>
            <div className={styles.videoCard}>
              <iframe
                className={styles.videoFrame}
                src="https://www.youtube-nocookie.com/embed/NWO37TlThuI"
                title="Peace be with you! — Catholic Kids Media"
                loading="lazy"
                allow="encrypted-media"
                allowFullScreen
              />
              <div className={styles.videoMeta}>
                <div className={styles.videoTitle}>Peace Be With You!</div>
                <div className={styles.videoSub}>Catholic Kids Media</div>
              </div>
            </div>
            <div className={styles.videoCard}>
              <iframe
                className={styles.videoFrame}
                src="https://www.youtube-nocookie.com/embed/Slxlzo7DbEI"
                title="What's Faith? — Catholic Kids Media"
                loading="lazy"
                allow="encrypted-media"
                allowFullScreen
              />
              <div className={styles.videoMeta}>
                <div className={styles.videoTitle}>What&apos;s Faith?</div>
                <div className={styles.videoSub}>Catholic Kids Media</div>
              </div>
            </div>
          </div>

          <div className={styles.resourceList}>
            <a
              className={styles.resourceItem}
              href="https://www.youtube.com/@catholickidsmedia"
              target="_blank"
              rel="noopener"
            >
              <div>
                <div className={styles.resourceName}>
                  More videos on Catholic Kids Media →
                </div>
                <div className={styles.resourceSub}>
                  Visit their full YouTube channel
                </div>
              </div>
            </a>
            <a className={styles.resourceItem} href="#">
              <div>
                <div className={styles.resourceName}>
                  Colouring sheets for this Sunday&apos;s Gospel
                </div>
                <div className={styles.resourceSub}>
                  Printable, updated weekly
                </div>
              </div>
            </a>
            <a className={styles.resourceItem} href="#">
              <div>
                <div className={styles.resourceName}>
                  Family Mass — 4th Sunday of the month
                </div>
                <div className={styles.resourceSub}>
                  A shorter, child-friendly celebration
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.sectionLast}`}
        id="young-adults"
      >
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2>Young Adults</h2>
            <p>
              A community for parishioners in their late teens, twenties and
              thirties — faith, friendship, and a fair bit of tea and
              biscuits afterwards.
            </p>
          </div>

          <div className={styles.yaGrid}>
            <div className={styles.yaCard}>
              <span className="eyebrow">Weekly</span>
              <h3>Youth Holy Hour</h3>
              <p>
                Every Tuesday, 7:30–8:30 PM. Quiet Eucharistic adoration
                with music, open to all young adults — no experience of
                prayer needed, just come as you are.
              </p>
            </div>
            <div className={styles.yaCard}>
              <span className="eyebrow">Monthly</span>
              <h3>Young Adult Mass</h3>
              <p>
                Last Sunday of the month, part of our regular 11 AM Mass,
                followed by tea, coffee and a chance to meet others in the
                group afterwards.
              </p>
            </div>
          </div>

          <div className={styles.yaCard} style={{ marginTop: 1 }}>
            <span className="eyebrow">What we get up to</span>
            <h3>Recent &amp; upcoming</h3>
            <div className={styles.eventList}>
              <div className={styles.eventRow}>
                <span>Rathmines Young Adult Jubilee Pilgrimage to Rome</span>
                <span className={styles.eventWhen}>2025</span>
              </div>
              <div className={styles.eventRow}>
                <span>Weekly Tuesday Holy Hour, with music</span>
                <span className={styles.eventWhen}>ongoing</span>
              </div>
              <div className={styles.eventRow}>
                <span>
                  Table quiz &amp; social night, in aid of the roof fund
                </span>
                <span className={styles.eventWhen}>most terms</span>
              </div>
            </div>
            <p style={{ marginTop: 18, fontSize: "0.86rem", color: "#B7BFB2" }}>
              To be added to the Young Adults mailing list, or to find out
              what&apos;s coming up next, contact the parish office.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
