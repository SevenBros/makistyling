import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="ftr">
      <a href={`mailto:${site.email}`} className="ftr-mail">{site.email}</a>
      <span className="ftr-copy">© {new Date().getFullYear()} {site.name}</span>
    </footer>
  );
}
