import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import MassIntentionForm from "./MassIntentionForm";
import styles from "../components/RequestForm.module.css";

export const metadata: Metadata = {
  title: "Request a Mass Intention",
};

export default function MassIntentions() {
  return (
    <>
      <PageHero
        breadcrumbHref="/"
        eyebrow="Parish Office"
        title="Request a Mass Intention"
        description="Ask that a Mass be offered for a loved one — living or deceased — for a birthday, anniversary, or in memory of someone who has died."
      />

      <section className={styles.section}>
        <div className="wrap">
          <p className={styles.explainer}>
            It&apos;s a long-held tradition to have a Mass offered for a
            particular person or intention — in thanksgiving, for
            someone&apos;s healing, or in loving memory of someone who has
            died. A small stipend is customary and goes toward the support
            of the priest and parish. Fill in the form below and our parish
            office will confirm your requested date, or suggest the next
            available one.
          </p>

          <MassIntentionForm />
        </div>
      </section>
    </>
  );
}
