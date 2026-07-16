import type { Metadata } from "next";
import SacramentPage from "../components/SacramentPage";

export const metadata: Metadata = {
  title: "Baptism",
};

export default function Baptism() {
  return (
    <SacramentPage
      number="01"
      name="Baptism"
      tagline="The first step into the Christian community, and the washing away of original sin."
      paragraphs={[
        "Baptism is the doorway into the Christian life. Through water and the Holy Spirit, the person baptised is freed from original sin, welcomed into the Church, and becomes a child of God.",
        "For infants, it's traditionally celebrated as early as possible, though there's no strict deadline. For older children or adults, baptism is prepared through a slightly longer process, often alongside First Communion and Confirmation.",
        "Godparents play a real role — they commit to supporting the child's faith throughout their life, so at least one godparent should be a confirmed, practising Catholic.",
      ]}
      steps={[
        "Contact the parish office to check available dates — baptisms are usually celebrated on a Sunday afternoon.",
        "Attend a short baptism preparation meeting with the priest or parish catechist.",
        "Confirm your godparents and, if they belong to another parish, ask them to bring a letter of eligibility from their own parish priest.",
        "Celebrate the baptism, usually a simple, warm ceremony for family and friends.",
      ]}
    />
  );
}
