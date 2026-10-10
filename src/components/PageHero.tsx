import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  meta?: string[];
  tone?: "bone" | "rose" | "plum";
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  lead,
  meta,
  tone = "bone",
  children,
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="container page-hero__grid">
        <div>
          <p className="eyebrow rise" style={{ "--i": 0 } as React.CSSProperties}>
            {eyebrow}
          </p>
          <h1 className="rise" style={{ "--i": 1 } as React.CSSProperties}>
            {title}
          </h1>
        </div>
        <div className="page-hero__aside rise" style={{ "--i": 2 } as React.CSSProperties}>
          <p className="lead">{lead}</p>
          {meta && (
            <div className="page-hero__meta">
              {meta.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
