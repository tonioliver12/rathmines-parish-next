import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import CertificateForm from "./CertificateForm";
import formStyles from "../components/RequestForm.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Request a Certificate",
};

export default function Certificates() {
  return (
    <>
      <PageHero
        breadcrumbHref="/"
        eyebrow="Parish Office"
        title="Request a Certificate"
        description="Need a copy of a baptism, First Communion, Confirmation or marriage record? Request it here instead of calling the office."
      />

      <section className={formStyles.section}>
        <div className="wrap">
          <div className={styles.certTypes}>
            <div className={styles.certType}>
              <h3>Baptism</h3>
              <p>Often needed for Confirmation, marriage, or school enrolment.</p>
            </div>
            <div className={styles.certType}>
              <h3>First Communion</h3>
              <p>A record of the date and church where it took place.</p>
            </div>
            <div className={styles.certType}>
              <h3>Confirmation</h3>
              <p>Commonly requested for marriage preparation.</p>
            </div>
            <div className={styles.certType}>
              <h3>Marriage</h3>
              <p>A copy of your church marriage record.</p>
            </div>
          </div>

          <p className={formStyles.explainer}>
            Sacramental records for Rathmines Parish are held at the parish
            office. Certificates are usually ready within a few working days
            — for records before a certain date, or if the sacrament took
            place in another parish, we may need to direct you to the right
            archive.
          </p>

          <CertificateForm />
        </div>
      </section>
    </>
  );
}
