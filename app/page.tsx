import Gallery from "@/components/Gallery";
import { photos } from "@/data/photos";

const strip = [12, 0, 32, 47, 18].map((i) => photos[i]);

export default function Home() {
  return (
    <>
      <section className="shero">
        <h1 className="shero-title">
          Product
          <br />
          <em>Styling</em>
        </h1>
        <div className="shero-side">
          <p className="shero-by">by Maki Hayashi</p>
          <p className="shero-lede">
            Product styling for cosmetics, fragrance, skincare and lifestyle brands.
          </p>
          <p className="shero-meta">
            <span>{photos.length}</span> selected works
          </p>
        </div>
      </section>

      <div className="strip" aria-hidden="true">
        {strip.map((p) => (
          <span key={p.src} className="strip-cell">
            <img src={p.thumb} alt="" />
          </span>
        ))}
      </div>

      <section className="wrap-s" id="work">
        <div className="sec-head">
          <h2>Work</h2>
          <span>Cosmetics · Fragrance · Skincare · Lifestyle</span>
        </div>
        <Gallery items={photos} label="Product Styling" uniform />
      </section>
    </>
  );
}
