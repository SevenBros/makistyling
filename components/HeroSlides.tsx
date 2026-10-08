"use client";

import { useEffect, useState } from "react";

export default function HeroSlides({ images }: { images: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % images.length), 4800);
    return () => clearInterval(t);
  }, [images.length]);
  return (
    <div className="hero-slides" aria-hidden="true">
      {images.map((src, k) => (
        <img key={src} src={src} alt="" className={k === i ? "on" : ""} loading={k === 0 ? "eager" : "lazy"} />
      ))}
    </div>
  );
}
