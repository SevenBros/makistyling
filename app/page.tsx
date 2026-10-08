import Gallery from "@/components/Gallery";
import { photos } from "@/data/photos";

export default function Home() {
  const feature = photos[4];
  return (
    <>
      <section className="shero">
        <p className="shero-kicker">Maki Hayashi</p>
        <h1 className="shero-title">Product Styling</h1>
        <p className="shero-lede">Cosmetics, fragrance, skincare and lifestyle.</p>
        <div className="shero-cta">
          <a href="#work" className="btn-line">View work</a>
        </div>
      </section>

      <div className="feature">
        <img src={feature.src} alt="" />
      </div>

      <section className="wrap-s" id="work">
        <div className="sec-head">
          <h2>Selected Work</h2>
        </div>
        <Gallery items={photos} label="Product Styling" uniform />
      </section>
    </>
  );
}
