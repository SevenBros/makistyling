import Gallery from "@/components/Gallery";
import HeroSlides from "@/components/HeroSlides";
import { photos } from "@/data/photos";

const slides = [4, 23, 12, 31, 8, 36].map((i) => photos[i].src);

export default function Home() {
  return (
    <>
      <section className="shero">
        <p className="shero-kicker">Maki Hayashi</p>
        <h1 className="shero-title">Product Styling</h1>
        <p className="shero-lede">Cosmetics, fragrance, skincare and lifestyle.</p>
      </section>

      <div className="feature">
        <HeroSlides images={slides} />
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
