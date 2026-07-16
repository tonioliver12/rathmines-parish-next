import type { Metadata } from "next";
import SacramentPage from "../components/SacramentPage";

export const metadata: Metadata = {
  title: "Funerals",
};

export default function Funerals() {
  return (
    <SacramentPage
      number="06"
      name="Funerals"
      tagline="Accompanying a family through loss, and commending a loved one into God's care."
      paragraphs={[
        "A funeral in the Catholic tradition is both a farewell and an act of hope — the community gathers to pray for the person who has died and to support the family left behind. The parish office and clergy are there to help at every step, at any hour.",
        "Arrangements are usually made together with a funeral director, who will typically liaise directly with the parish on timing.",
      ]}
      steps={[
        "Contact the parish office as soon as possible — day or night — usually through your chosen funeral director.",
        "A member of the clergy will meet with the family to plan the Funeral Mass, readings and music.",
        "The removal, Funeral Mass and burial or cremation are scheduled together with the funeral director.",
        "The parish remains available afterwards for anniversary Masses and ongoing support.",
      ]}
    />
  );
}
