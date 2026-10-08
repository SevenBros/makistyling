import type { Metadata } from "next";
import { photos } from "@/data/photos";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <div className="wrap-s scontact">
      <div className="scontact-body">
        <p className="eyebrow">Contact</p>
        <h1 className="scontact-title">
          Let&rsquo;s make your
          <br />
          <em>product</em> shine.
        </h1>
        <p className="scontact-lede">For bookings, availability and estimates, please e-mail me. Thank you.</p>
        <a className="scontact-mail" href={`mailto:${site.email}`}>{site.email}</a>
      </div>
      <div className="scontact-img">
        <img src={photos[56].src} alt="" />
      </div>
    </div>
  );
}
