"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`hdr${scrolled ? " is-scrolled" : ""}${onHome ? " is-home" : ""}${open ? " is-open" : ""}`}>
      <Link href="/" className="hdr-mark" aria-label={`${site.name} — home`}>
        <span className="hdr-name">{site.name}</span>
        <span className="hdr-role">{site.role}</span>
      </Link>
      <nav className="hdr-nav" aria-label="Main">
        {nav.map((n) => (
          <Link key={n.href} href={n.href} className={pathname === n.href ? "is-active" : ""}>
            {n.label}
          </Link>
        ))}
      </nav>
      <button className="hdr-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <span />
        <span />
      </button>
    </header>
  );
}
