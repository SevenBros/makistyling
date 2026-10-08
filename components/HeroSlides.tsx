"use client";

import { useEffect, useState } from "react";

export type Slide = { src: string; pos?: string };

export default function HeroSlides({ images, interval = 4800 }: { images: Slide[]; interval?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images.length, interval]);
  return (
    <div className="hero-slides" aria-hidden="true">
      {images.map((s, k) => (
        <img
          key={s.src}
          src={s.src}
          alt=""
          className={k === i ? "on" : ""}
          style={{ objectPosition: s.pos ?? "50% 50%" }}
          loading={k === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}
