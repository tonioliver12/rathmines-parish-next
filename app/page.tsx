import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <ScrollReveal />

      <header className={styles.hero}>
        <div className={`wrap ${styles.heroInner}`}>
          <div>
            <p className="eyebrow">
              Founded 1823 &nbsp;·&nbsp; Working in partnership with Rathgar
              Parish
            </p>
            <h1>
              Fáilte to
              <br />
              <em>Rathmines Parish</em>.
            </h1>
            <p className={styles.heroLede}>
              The Church of Mary Immaculate, Refuge of Sinners, has stood on
              Rathmines Road for over two hundred years. This is our online
              doorway — Mass times, parish news, and a way to stay close
              whether you&apos;re across the road or across the world.
            </p>
            <div className={styles.heroActions}>
              <a className="btn-primary" href="#rhythm">
                See Mass times
              </a>
              <Link className="btn-ghost" href="/webcam">
                Watch the webcam
              </Link>
            </div>
          </div>
          <div className={styles.todayCard}>
            <div className={styles.todayTop}>
              <span className="eyebrow">
                <span className={styles.seasonDot} />
                THIS SUNDAY
              </span>
              <div className={styles.todayTitle}>
                Church of Mary Immaculate
              </div>
            </div>
            <div className={styles.massRow}>
              <span>Mass</span>
              <span className={styles.massTime}>11:00 AM</span>
            </div>
            <div className={styles.massRow}>
              <span>Folk Mass</span>
              <span className={styles.massTime}>6:00 PM</span>
            </div>
            <div className={styles.massRow}>
              <span>Young Adult Mass</span>
              <span className={styles.massTime}>last Sun/month</span>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.rhythm} id="rhythm">
        <div className="wrap">
          <div className={styles.rhythmGrid}>
            <div className={`${styles.rhythmDay} ${styles.rest}`}>
              <span className={styles.d}>MON</span>
              <div className={styles.colorbar} style={{ background: "var(--line)" }} />
              <div className={styles.what}>No public Mass</div>
            </div>
            <div className={styles.rhythmDay}>
              <span className={styles.d}>TUE</span>
              <div className={styles.colorbar} style={{ background: "var(--sage)" }} />
              <div className={styles.what}>
                Mass, 10:00 AM
                <br />
                Youth Holy Hour, 7:30 PM
              </div>
            </div>
            <div className={`${styles.rhythmDay} ${styles.rest}`}>
              <span className={styles.d}>WED</span>
              <div className={styles.colorbar} style={{ background: "var(--line)" }} />
              <div className={styles.what}>No public Mass</div>
            </div>
            <div className={styles.rhythmDay}>
              <span className={styles.d}>THU</span>
              <div className={styles.colorbar} style={{ background: "var(--sage)" }} />
              <div className={styles.what}>Mass, 10:00 AM</div>
            </div>
            <div className={styles.rhythmDay}>
              <span className={styles.d}>FRI</span>
              <div className={styles.colorbar} style={{ background: "var(--sage)" }} />
              <div className={styles.what}>Mass, 10:00 AM</div>
            </div>
            <div className={styles.rhythmDay}>
              <span className={styles.d}>SAT</span>
              <div className={styles.colorbar} style={{ background: "var(--brass)" }} />
              <div className={styles.what}>Vigil Mass, 6:00 PM</div>
            </div>
            <div className={`${styles.rhythmDay} ${styles.today}`}>
              <span className={styles.d}>SUN</span>
              <div className={styles.colorbar} style={{ background: "var(--brass)" }} />
              <div className={styles.what}>
                Mass 11 AM
                <br />
                Folk Mass 6 PM
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.welcome}`} id="story">
        <div className="wrap">
          <div className={styles.sectionHead} data-reveal>
            <h2>
              Two hundred years
              <br />
              on Rathmines Road.
            </h2>
          </div>
          <div className={styles.welcomeGrid}>
            <div>
              <p className={styles.dropCap} data-reveal>
                Our parish marked its 200th anniversary in 2023 — two
                centuries of baptisms, weddings, funerals, and ordinary
                Tuesday mornings that quietly hold a community together. The
                church still carries that history in its walls: a permanent
                exhibition of reliquaries, including a relic of the True
                Cross and historic Papal vestments, is now open to visitors
                during opening hours.
              </p>
              <p data-reveal>
                We work in partnership with neighbouring Rathgar Parish, and
                our reach goes further still — through Friends of Kyuso, a
                parish partnership supporting a community in Kenya.
              </p>
            </div>
            <div className={styles.statList} data-reveal>
              <div className={styles.statItem}>
                <span className={styles.statNum}>200+</span>
                <span className={styles.statLabel}>
                  years since the parish was founded
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>2</span>
                <span className={styles.statLabel}>
                  parishes working in partnership — Rathmines &amp; Rathgar
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>1</span>
                <span className={styles.statLabel}>
                  relic of the True Cross, on permanent display
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>∞</span>
                <span className={styles.statLabel}>
                  km to Kyuso, Kenya, our partner community
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.photoStrip}>
        <div className="wrap">
          <div className={styles.photoGrid} data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.rathminesparish.ie/wp-content/uploads/2020/12/side.jpg"
              alt="Side view of Rathmines Parish church"
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.rathminesparish.ie/wp-content/uploads/2020/12/bottom-front.jpg"
              alt="Front entrance of Rathmines Parish church"
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.rathminesparish.ie/wp-content/uploads/2021/09/DJI_0689-HDR.jpg"
              alt="Aerial view of Rathmines Parish church"
              loading="lazy"
            />
          </div>
          <Link href="/gallery" className={styles.galleryLink}>
            View full gallery →
          </Link>
        </div>
      </section>

      <section className={styles.featureBand}>
        <div className="wrap">
          <div className={styles.sectionHead} data-reveal>
            <h2>More than a Sunday</h2>
            <p>Two things that make this parish distinctly ours.</p>
          </div>
        </div>
        <div className="wrap" style={{ padding: "0 32px" }}>
          <div className={styles.featureGrid} data-reveal>
            <div className={styles.featureCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.rathminesparish.ie/wp-content/uploads/2020/12/dome.jpg"
                alt="Interior of Rathmines Parish church"
                loading="lazy"
              />
              <span className="eyebrow">Reliquaries &amp; Exhibition</span>
              <h3>Walk through 200 years of history</h3>
              <p>
                Since our bicentenary in 2023, the church has held a
                permanent exhibition of historical and reliquary displays —
                including a relic of the True Cross and Papal vestments.
                Open during church hours.
              </p>
              <a href="#">Plan a visit →</a>
            </div>
            <div className={styles.featureCard}>
              <span className="eyebrow">Friends of Kyuso</span>
              <h3>A parish partnership with Kenya</h3>
              <p>
                Rathmines Parish supports Friends of Kyuso, a long-standing
                partnership with a community in Kenya — one small way our
                parish looks outward as well as inward.
              </p>
              <a href="#">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sacraments}`} id="sacraments">
        <div className="wrap">
          <div className={styles.sectionHead} data-reveal>
            <h2>The sacraments</h2>
            <p>
              Marking the moments that matter, from a first welcome to a
              final farewell.
            </p>
          </div>
          <div className={styles.sacGrid} data-reveal>
            <Link className={styles.sacCard} href="/baptism">
              <span className="eyebrow">01</span>
              <h3>Baptism</h3>
              <p>Contact the parish office to arrange preparation and a date.</p>
            </Link>
            <Link className={styles.sacCard} href="/first-communion">
              <span className="eyebrow">02</span>
              <h3>Eucharist — First Communion</h3>
              <p>Prepared through the parish alongside local primary schools.</p>
            </Link>
            <Link className={styles.sacCard} href="/confirmation">
              <span className="eyebrow">03</span>
              <h3>Confirmation</h3>
              <p>Details and preparation timelines available from the office.</p>
            </Link>
            <Link className={styles.sacCard} href="/marriage">
              <span className="eyebrow">04</span>
              <h3>Marriage</h3>
              <p>Please get in touch well in advance to begin preparation.</p>
            </Link>
            <Link className={styles.sacCard} href="/reconciliation">
              <span className="eyebrow">05</span>
              <h3>Reconciliation</h3>
              <p>Confession is heard regularly — see the parish office for times.</p>
            </Link>
            <Link className={styles.sacCard} href="/funerals">
              <span className="eyebrow">06</span>
              <h3>Funerals</h3>
              <p>Our office supports families through every arrangement.</p>
            </Link>
          </div>
          <p className={styles.sacramentsCta}>
            <Link href="/certificates" className="btn-ghost-ink">
              Request a certificate →
            </Link>
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.notices}`} id="notices">
        <div className="wrap">
          <div className={styles.sectionHead} data-reveal>
            <h2>Parish notices</h2>
            <p>What&apos;s on, recently.</p>
          </div>
          <div className={styles.noticeList} data-reveal>
            <a className={styles.noticeItem} href="#">
              <span className={styles.noticeDate}>11 JUN</span>
              <span className={styles.noticeTitle}>
                Summer Masses schedule now available
              </span>
              <span className={styles.noticeArrow}>→</span>
            </a>
            <Link className={styles.noticeItem} href="/volunteers">
              <span className={styles.noticeDate}>11 JUN</span>
              <span className={styles.noticeTitle}>
                Volunteers needed — get involved in parish life
              </span>
              <span className={styles.noticeArrow}>→</span>
            </Link>
            <a className={styles.noticeItem} href="#">
              <span className={styles.noticeDate}>08 JUN</span>
              <span className={styles.noticeTitle}>
                Archdiocese of Dublin Summer Dues appeal
              </span>
              <span className={styles.noticeArrow}>→</span>
            </a>
            <a className={styles.noticeItem} href="#">
              <span className={styles.noticeDate}>01 JUN</span>
              <span className={styles.noticeTitle}>
                Family Camino: a free guided tour of Dublin&apos;s historic
                churches
              </span>
              <span className={styles.noticeArrow}>→</span>
            </a>
          </div>
          <Link href="/news" className={styles.newsLink}>
            See all news, the newsletter, homilies &amp; readings →
          </Link>
        </div>
      </section>

      <section className={`${styles.section} ${styles.visit}`} id="visit">
        <div className={`wrap ${styles.visitGrid}`}>
          <div>
            <div className={styles.visitBlock} data-reveal>
              <h3>Address</h3>
              <p>
                Church of Mary Immaculate, Refuge of Sinners
                <br />
                Rathmines Road Lower
                <br />
                Rathmines, Dublin 6
              </p>
              <a
                className="btn-ghost"
                style={{ display: "inline-block", marginTop: 14, padding: "11px 18px", fontSize: "0.84rem" }}
                href="https://www.google.com/maps/search/?api=1&query=Church+of+Mary+Immaculate+Refuge+of+Sinners+Rathmines+Road+Lower+Dublin+6"
                target="_blank"
                rel="noopener"
              >
                Get directions →
              </a>
            </div>
            <div className={styles.visitBlock} data-reveal>
              <h3>Contact</h3>
              <p>
                <a href="mailto:secretary@rathminesparish.com">
                  secretary@rathminesparish.com
                </a>
                <br />
                <a href="tel:+35314971531">01 497 1531</a>
              </p>
            </div>
            <div className={styles.visitBlock} data-reveal id="give">
              <h3>Support the parish</h3>
              <p>
                Online donations help keep the parish, and its partnership
                with Kyuso, running.
                <br />
                <a
                  className="btn-primary"
                  href="#"
                  style={{ display: "inline-block", marginTop: 12 }}
                >
                  Donate online →
                </a>
              </p>
              <p style={{ marginTop: 16, fontSize: "0.86rem" }}>
                <Link href="/mass-intentions" style={{ textDecoration: "underline" }}>
                  Request a Mass intention
                </Link>{" "}
                ·{" "}
                <Link href="/certificates" style={{ textDecoration: "underline" }}>
                  Request a certificate
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.mapBox} data-reveal>
            <iframe
              title="Map — Church of Mary Immaculate, Refuge of Sinners, Rathmines"
              src="https://www.google.com/maps?q=Church+of+Mary+Immaculate+Refuge+of+Sinners+Rathmines+Road+Lower+Dublin+6&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
