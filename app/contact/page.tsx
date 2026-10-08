import type { Metadata } from "next";
import { photos } from "@/data/photos";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <div className="wrap-s scontact">
      <h1 className="eyebrow">Contact</h1>
      <p className="scontact-lede">For bookings, availability and estimates, please e-mail me.</p>
      <div className="scontact-lines">
        <a className="scontact-mail" href={`mailto:${site.email}`}>{site.email}</a>
        <a className="scontact-mail" href={`tel:+1${site.phone.replace(/-/g, "")}`}>{site.phone}</a>
      </div>
      <div className="scontact-img">
        <img src={photos[31].src} alt="" />
      </div>
    </div>
  );
}
