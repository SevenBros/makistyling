import type { Metadata } from "next";
import { photos } from "@/data/photos";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <div className="wrap-s scontact">
      <p className="eyebrow">Contact</p>
      <h1 className="scontact-title">Let&rsquo;s create together.</h1>
      <p className="scontact-lede">For bookings, availability and estimates, please e-mail me.</p>
      <a className="scontact-mail" href={`mailto:${site.email}`}>{site.email}</a>
      <div className="scontact-img">
        <img src={photos[31].src} alt="" />
      </div>
    </div>
  );
}
