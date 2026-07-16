import type { Metadata } from "next";
import SacramentPage from "../components/SacramentPage";

export const metadata: Metadata = {
  title: "Marriage",
};

export default function Marriage() {
  return (
    <SacramentPage
      number="04"
      name="Marriage"
      tagline="A lifelong covenant of love between a man and a woman, blessed by the Church."
      paragraphs={[
        "In marriage, a couple freely and permanently give themselves to one another, and the Church witnesses and blesses that commitment. It's treated as one of the most significant days in parish life — and also one that needs real preparation time.",
        "Couples don't need to already be parishioners of Rathmines to marry here, but at least one party is usually expected to have a genuine connection to the parish or the area.",
      ]}
      steps={[
        "Contact the parish office at least six months before your intended date to check church availability.",
        "Complete the Archdiocese's required marriage preparation course (details provided by the parish office).",
        "Meet with the priest who will officiate to plan the ceremony, readings and any particular requests.",
        "Confirm final arrangements — music, flowers, photography access — with the parish sacristan closer to the date.",
      ]}
    />
  );
}
