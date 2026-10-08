import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap notfound">
      <h1 className="phead-title">Not found</h1>
      <Link href="/" className="link-arrow">Back to home</Link>
    </div>
  );
}
