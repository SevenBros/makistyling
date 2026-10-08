export default function PageHead({ title, count, note }: { title: string; count?: number; note?: string }) {
  return (
    <div className="phead">
      <h1 className="phead-title">{title}</h1>
      <p className="phead-meta">
        {note}
        {count !== undefined && <span className="phead-count">{String(count).padStart(2, "0")} works</span>}
      </p>
    </div>
  );
}
