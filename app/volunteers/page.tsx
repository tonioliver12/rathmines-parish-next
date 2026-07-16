import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Volunteers Needed",
};

export default function Volunteers() {
  return (
    <>
      <ScrollReveal />

      <PageHero
        breadcrumbHref="/#notices"
        breadcrumbLabel="← Back to notices"
        title={
          <>
            Volunteers needed
            <br />— get involved.
          </>
        }
        description="Volunteers are indispensable to the life of our parish partnership. All baptised people are called by God to minister — there's a role here for whatever time and skills you can offer."
      />

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.contentBlock} data-reveal>
            <p>
              Rathmines Parish is blessed to have so many volunteers in
              various roles and ministries. New volunteers are always
              welcome to join our team, whether you&apos;re looking to give
              an hour a month or take on a regular ministry.
            </p>
          </div>

          <div className={styles.groupColumns} data-reveal>
            <div className={styles.groupCol}>
              <h3>Service</h3>
              <ul>
                <li>Eucharistic Ministers</li>
                <li>Readers — Ministers of the Word</li>
                <li>Eucharistic Adoration Group</li>
                <li>Liturgy Group</li>
                <li>Sacristans</li>
                <li>Church Cleaners</li>
                <li>Collectors &amp; Counters</li>
                <li>Baptism Team</li>
                <li>Funeral Ministry Team</li>
                <li>Family Mass Group</li>
                <li>RCIA — Rite of Christian Initiation of Adults</li>
                <li>Morning Prayer Group</li>
              </ul>
            </div>
            <div className={styles.groupCol}>
              <h3>Music</h3>
              <ul>
                <li>International Music Group</li>
                <li>Rathmines Folk Group</li>
              </ul>
            </div>
            <div className={styles.groupCol}>
              <h3>Outreach &amp; Ministry</h3>
              <ul>
                <li>Rathmines International Group</li>
                <li>Bethany Support Group</li>
                <li>Legion of Mary</li>
                <li>Crosscare</li>
                <li>St Vincent de Paul Society</li>
                <li>Pioneers Society</li>
                <li>Pax Christi</li>
                <li>St Joseph&apos;s Young Priests Society</li>
                <li>Active Retirement Group</li>
                <li>Equipes Notre-Dame</li>
                <li>ACCORD — Relationship Counselling</li>
                <li>World Missions Ireland</li>
              </ul>
            </div>
          </div>

          <div className={styles.ctaBox} data-reveal>
            <h3>How to apply</h3>
            <p>
              Download and complete the Expression of Interest Volunteer
              Form, and email it to the parish office. You&apos;re invited
              to consider sharing your skills, whatever they may be —
              practical, musical, pastoral, or administrative.
            </p>
            <p style={{ marginTop: 16 }}>
              <a className="btn-primary" href="#" style={{ display: "inline-block" }}>
                Download Volunteer Form →
              </a>
            </p>
            <p style={{ marginTop: 20, fontSize: "0.86rem", color: "#5b5648" }}>
              Email{" "}
              <a className={styles.contactLink} href="mailto:secretary@rathminesparish.com">
                secretary@rathminesparish.com
              </a>{" "}
              or call{" "}
              <a className={styles.contactLink} href="tel:+35314971531">
                01 497 1531
              </a>{" "}
              with any questions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
