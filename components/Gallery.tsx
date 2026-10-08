"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/data/photos";
import Reveal from "./Reveal";

export default function Gallery({ items, label, uniform = false }: { items: Photo[]; label: string; uniform?: boolean }) {
  const [idx, setIdx] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const n = items.length;

  const close = useCallback(() => setIdx(null), []);
  const step = useCallback((d: number) => setIdx((i) => (i === null ? i : (i + d + n) % n)), [n]);

  useEffect(() => {
    if (idx === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    // preload neighbours
    [1, -1].forEach((d) => {
      const im = new Image();
      im.src = items[(idx + d + n) % n].src;
    });
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [idx, close, step, items, n]);

  return (
    <>
      <Reveal />
      <div className={uniform ? "pgrid" : "masonry"}>
        {items.map((p, i) => (
          <button
            key={p.src}
            className="tile rv"
            style={uniform ? { transitionDelay: `${(i % 4) * 60}ms` } : { aspectRatio: `${p.w} / ${p.h}`, transitionDelay: `${(i % 3) * 70}ms` }}
            onClick={() => setIdx(i)}
            aria-label={`${label} ${i + 1} を拡大`}
          >
            <img src={p.thumb} alt={`${label} — ${i + 1}`} width={p.w} height={p.h} loading={i < 8 ? "eager" : "lazy"} decoding="async" />
          </button>
        ))}
      </div>

      {idx !== null && (
        <div
          className="lb"
          role="dialog"
          aria-modal="true"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <img key={items[idx].src} className="lb-img" src={items[idx].src} alt={`${label} — ${idx + 1}`} onClick={(e) => { e.stopPropagation(); step(1); }} />
          <button className="lb-btn lb-prev" aria-label="前へ" onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>
          <button className="lb-btn lb-next" aria-label="次へ" onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>
          <button className="lb-close" aria-label="閉じる" onClick={close}>Close</button>
          <span className="lb-count">{String(idx + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
        </div>
      )}
    </>
  );
}
