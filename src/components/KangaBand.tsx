import { proverbs } from "@/lib/site";

type KangaBandProps = {
  tone?: "ink" | "rose" | "bone";
};

/**
 * Signature element: a kanga-style border band carrying Swahili sayings,
 * the way a kanga carries its "jina" along the hem.
 */
export default function KangaBand({ tone = "ink" }: KangaBandProps) {
  const list = (
    <div className="kanga__list" aria-hidden="true">
      {proverbs.map((p) => (
        <div className="kanga__item" key={p.sw}>
          <span className="kanga__sw">{p.sw}</span>
          <span className="kanga__en">{p.en}</span>
          <span className="kanga__dot" />
        </div>
      ))}
    </div>
  );

  return (
    <div className={`kanga kanga--${tone}`} role="presentation">
      <div className="kanga__border" />
      <div className="kanga__track">
        {list}
        {list}
      </div>
      <div className="kanga__border" />
      <p className="visually-hidden">
        {proverbs.map((p) => `${p.sw} — ${p.en}`).join(". ")}
      </p>
    </div>
  );
}
