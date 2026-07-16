import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import LivePlayer from "./LivePlayer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Webcam",
};

const STREAM_URL =
  "https://cdn3.wowza.com/5/TXkrK21OZktJNm91/CSTV-HTTP/maryimmacnewip.stream/playlist.m3u8";
const FALLBACK_URL = "https://www.churchservices.tv/maryimmacdublin";

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
            <LivePlayer src={STREAM_URL} fallbackHref={FALLBACK_URL} />
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
