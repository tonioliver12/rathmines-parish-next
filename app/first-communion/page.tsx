import type { Metadata } from "next";
import SacramentPage from "../components/SacramentPage";

export const metadata: Metadata = {
  title: "Eucharist — First Communion",
};

export default function FirstCommunion() {
  return (
    <SacramentPage
      number="02"
      name="Eucharist — First Communion"
      tagline="Receiving the Body of Christ for the first time, usually as a young child."
      paragraphs={[
        "First Communion is usually received around age seven or eight, once a child can understand — at their own level — what they are receiving. It's often the sacrament families remember most vividly.",
        "In Rathmines, preparation runs through the school year in partnership with local primary schools, combining classroom catechesis with parish-based preparation, so that the sacrament is understood as something rooted in parish life, not just a school occasion.",
      ]}
      steps={[
        "Registration typically opens in the autumn term through your child's school or directly with the parish office.",
        "Children attend preparation classes across the school year, usually alongside their class or parish group.",
        "A short family meeting or retreat day is usually held closer to the date.",
        "First Communion Masses are celebrated in late spring — the parish office will confirm dates each year.",
      ]}
    />
  );
}
