import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Events",
};

export default function Events() {
  return (
    <>
      <PageHero
        breadcrumbHref="/"
        title="What's On"
        description="Everything coming up in parish life — from Sunday coffee mornings to the roof fund table quiz."
      />

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.monthBlock}>
            <div className={styles.monthHead}>July 2026</div>
            <div className={styles.eventRow}>
              <div className={styles.eventDate}>
                <div className={styles.eventDay}>16</div>
                <div className={styles.eventDow}>Thu</div>
              </div>
              <div>
                <div className={styles.eventTitle}>Youth Holy Hour</div>
                <div className={styles.eventDesc}>
                  Eucharistic adoration with music, for young adults.
                </div>
              </div>
              <div className={styles.eventTime}>7:30 PM</div>
            </div>
            <div className={styles.eventRow}>
              <div className={styles.eventDate}>
                <div className={styles.eventDay}>20</div>
                <div className={styles.eventDow}>Mon</div>
              </div>
              <div>
                <div className={styles.eventTitle}>Parish coffee morning</div>
                <div className={styles.eventDesc}>
                  After 11 AM Mass — all welcome.
                </div>
              </div>
              <div className={styles.eventTime}>12:00 PM</div>
            </div>
            <div className={styles.eventRow}>
              <div className={styles.eventDate}>
                <div className={styles.eventDay}>27</div>
                <div className={styles.eventDow}>Mon</div>
              </div>
              <div>
                <div className={styles.eventTitle}>
                  First Communion registration opens
                </div>
                <div className={styles.eventDesc}>
                  Contact the parish office or your child&apos;s school.
                </div>
              </div>
              <div className={styles.eventTime}>All day</div>
            </div>
          </div>

          <div className={styles.monthBlock}>
            <div className={styles.monthHead}>August 2026</div>
            <div className={styles.eventRow}>
              <div className={styles.eventDate}>
                <div className={styles.eventDay}>03</div>
                <div className={styles.eventDow}>Mon</div>
              </div>
              <div>
                <div className={styles.eventTitle}>
                  Annual parish table quiz
                </div>
                <div className={styles.eventDesc}>
                  In aid of the roof fund — teams of four, all welcome.
                </div>
              </div>
              <div className={styles.eventTime}>8:00 PM</div>
            </div>
            <div className={styles.eventRow}>
              <div className={styles.eventDate}>
                <div className={styles.eventDay}>15</div>
                <div className={styles.eventDow}>Sat</div>
              </div>
              <div>
                <div className={styles.eventTitle}>
                  Feast of the Assumption
                </div>
                <div className={styles.eventDesc}>
                  Mass times as Sunday — Holy Day of Obligation.
                </div>
              </div>
              <div className={styles.eventTime}>See Mass times</div>
            </div>
            <div className={styles.eventRow}>
              <div className={styles.eventDate}>
                <div className={styles.eventDay}>31</div>
                <div className={styles.eventDow}>Mon</div>
              </div>
              <div>
                <div className={styles.eventTitle}>Young Adult Mass</div>
                <div className={styles.eventDesc}>
                  Part of the 11 AM Mass, with tea and coffee after.
                </div>
              </div>
              <div className={styles.eventTime}>11:00 AM</div>
            </div>
          </div>

          <div className={styles.monthBlock}>
            <div className={styles.monthHead}>Ongoing, every week</div>
            <div className={styles.eventRow}>
              <div className={styles.eventDate}>
                <div className={styles.eventDay}>—</div>
                <div className={styles.eventDow}>Tue</div>
              </div>
              <div>
                <div className={styles.eventTitle}>Youth Holy Hour</div>
                <div className={styles.eventDesc}>
                  Every Tuesday, in the church.
                </div>
              </div>
              <div className={styles.eventTime}>7:30 PM</div>
            </div>
            <div className={styles.eventRow}>
              <div className={styles.eventDate}>
                <div className={styles.eventDay}>—</div>
                <div className={styles.eventDow}>Wed</div>
              </div>
              <div>
                <div className={styles.eventTitle}>Eucharistic Adoration</div>
                <div className={styles.eventDesc}>
                  A quiet hour before the Blessed Sacrament.
                </div>
              </div>
              <div className={styles.eventTime}>7:00 PM</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
