import type { Metadata } from "next";
import SacramentPage from "../components/SacramentPage";

export const metadata: Metadata = {
  title: "Reconciliation",
};

export default function Reconciliation() {
  return (
    <SacramentPage
      number="05"
      name="Reconciliation"
      tagline="Confession, healing, and the ordinary, regular experience of being forgiven."
      paragraphs={[
        "Reconciliation — confession — is where sins are brought honestly before God, through a priest, and forgiveness is received. It's meant to be a fairly ordinary, regular part of Catholic life, not just an occasional event before a big feast.",
        "Many people find it easier than they expect once they're back in the habit — the priest is there to help, not to judge.",
      ]}
      steps={[
        "Check the parish notices or Mass sheet for the current weekly confession time.",
        "No appointment is usually necessary for the regular weekly slot.",
        "For a specific time outside those hours — for example before a wedding or First Communion — contact the parish office directly to arrange with a priest.",
        "First Confession for children is prepared alongside First Communion, through the school and parish programme.",
      ]}
    />
  );
}
