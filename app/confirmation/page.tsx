import type { Metadata } from "next";
import SacramentPage from "../components/SacramentPage";

export const metadata: Metadata = {
  title: "Confirmation",
};

export default function Confirmation() {
  return (
    <SacramentPage
      number="03"
      name="Confirmation"
      tagline="Completing Christian initiation, and being sealed with the gifts of the Holy Spirit."
      paragraphs={[
        "Confirmation completes what was begun at Baptism. Through the laying on of hands and anointing with sacred chrism, the person confirmed receives the strengthening gifts of the Holy Spirit and is called to live their faith more fully, as an adult member of the Church.",
        "It's usually received in the early teenage years, prepared over one school year, often including a sponsor (similar in role to a godparent) and a period of reflection on what it means to choose faith for oneself.",
      ]}
      steps={[
        "Confirmation is prepared through your child's primary or secondary school, in partnership with the parish.",
        "A sponsor is chosen — usually a confirmed Catholic who has played a role in the young person's life.",
        "Preparation includes classes and a reflection or retreat day organised through the school and parish.",
        "The Sacrament is usually administered by the Archbishop or a delegated priest at a set date each year — contact the parish office for the current year's arrangements.",
      ]}
    />
  );
}
