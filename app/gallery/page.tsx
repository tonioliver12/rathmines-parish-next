import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function Gallery() {
  return (
    <>
      <PageHero
        breadcrumbHref="/"
        title="Gallery"
        description="The church, the community, and two hundred years of history — in pictures."
      />

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2>Our Church</h2>
            <p>Rathmines Road Lower, inside and out.</p>
          </div>
          <div className={styles.galleryGrid}>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.rathminesparish.ie/wp-content/uploads/2021/09/DJI_0689-HDR.jpg"
                alt="Aerial view of the church"
                loading="lazy"
              />
              <figcaption>Aerial view</figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.rathminesparish.ie/wp-content/uploads/2020/12/side.jpg"
                alt="Side view of the church"
                loading="lazy"
              />
              <figcaption>Side elevation</figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.rathminesparish.ie/wp-content/uploads/2020/12/bottom-front.jpg"
                alt="Front entrance of the church"
                loading="lazy"
              />
              <figcaption>Front entrance</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2>200th Anniversary &amp; the Reliquary Exhibition</h2>
            <p>Marking two centuries on Rathmines Road.</p>
          </div>
          <div className={styles.galleryGrid}>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.rathminesparish.ie/wp-content/uploads/2020/12/dome.jpg"
                alt="Interior dome of the church"
                loading="lazy"
              />
              <figcaption>Interior, near the sanctuary</figcaption>
            </figure>
          </div>
          <div className={styles.noticeBox}>
            More photos from the bicentenary celebrations and the reliquary
            exhibition (the relic of the True Cross, the Papal vestments)
            will go here — ask the parish office for a few favourites from
            their own archive to round this section out.
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionLast}`}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2>Community Life</h2>
            <p>
              Weddings, First Communions, the Young Adults&apos; trip to
              Rome, and everything in between.
            </p>
          </div>
          <div className={styles.noticeBox}>
            This is where the parish&apos;s own photos will make the biggest
            difference — a handful from recent weddings, First Communion
            day, or the 2025 Rome pilgrimage would bring this section to
            life. Happy to help organise and lay these out as soon as we
            have a few to work with.
          </div>
        </div>
      </section>
    </>
  );
}
