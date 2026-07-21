import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Webcam",
};

const CHURCHSERVICES_URL = "https://www.churchservices.tv/maryimmacdublin";

export default function Webcam() {
  return (
    <>
      <PageHero
        breadcrumbHref="/"
        title={
          <>
            Join us, wherever
            <br />
            you are.
          </>
        }
        description="Watch Mass live from the Church of Mary Immaculate, Refuge of Sinners. The stream is active during Mass times — see the schedule below."
      />

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.playerFrame}>
            <div className={styles.watchContent}>
              <a
                className={`btn-primary ${styles.watchBtn}`}
                href={CHURCHSERVICES_URL}
                target="_blank"
                rel="noopener"
              >
                ▶ Watch Mass Live
              </a>
              <p className={styles.watchSchedule}>
                Vigil Mass, Saturday 6:00 PM · Sunday 11:00 AM &amp; 6:00 PM
                (Folk Mass) · Weekday Masses Tue, Thu &amp; Fri, 10:00 AM
              </p>
            </div>
          </div>

          <div className={styles.infoRow}>
            <div>
              <h3>When the webcam is live</h3>
              <p>
                Vigil Mass, Saturday 6:00 PM
                <br />
                Mass, Sunday 11:00 AM &amp; 6:00 PM (Folk Mass)
                <br />
                Weekday Masses, Tuesday, Thursday &amp; Friday, 10:00 AM
              </p>
            </div>
            <div>
              <h3>A note on privacy</h3>
              <p>
                The camera is fixed on the altar and sanctuary only. If
                you&apos;d rather not appear on stream, seating toward the
                back of the church is outside the camera&apos;s view.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
