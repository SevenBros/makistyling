import Gallery from "@/components/Gallery";
import HeroSlides from "@/components/HeroSlides";
import { photos } from "@/data/photos";

// Slideshow order & framing (object-position = which part stays in frame)
const slides = [
  { n: 38, pos: "50% 50%" }, // Body oil
  { n: 78, pos: "50% 42%" }, // Jelly Job + cherry
  { n: 67, pos: "50% 50%" }, // Buttermelt blush
  { n: 37, pos: "50% 50%" }, // Jelly Job lips
  { n: 5, pos: "22% 50%" }, // Chanel Gabrielle
].map(({ n, pos }) => ({ src: photos[n - 1].src, pos }));

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
