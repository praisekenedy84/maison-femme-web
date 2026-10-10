import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import CtaBand from "@/components/CtaBand";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { programmes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Community gatherings, advocacy initiatives and corporate partnerships — designed to create meaningful experiences and measurable outcomes.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Our work"
          title={
            <>
              Programmes that bring people <em>together.</em>
            </>
          }
          lead="Community gatherings, advocacy initiatives and corporate partnerships — each designed with a clear audience, a clear purpose and a clear role for the partners who make it possible."
          meta={[`${programmes.length} programmes`, "Community · Advocacy · Partnership"]}
        />

        <section className="section--tight" aria-label="Programme list">
          <div className="container">
            {programmes.map((p, i) => (
              <article className="programme" key={p.slug} id={p.slug}>
                <div data-reveal>
                  <p className="programme__index">
                    {String(i + 1).padStart(2, "0")} / {String(programmes.length).padStart(2, "0")}
                  </p>
                  <p className="eyebrow">{p.tag}</p>
                  <h2>{p.title}</h2>
                  <p className="programme__summary">{p.summary}</p>
                  <p className="programme__body">{p.body}</p>
                  <dl className="facts">
                    {p.details.map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="programme__actions btn-row">
                    {"href" in p ? (
                      <Link href={p.href} className="btn btn--ink">
                        {p.cta} <Arrow />
                      </Link>
                    ) : (
                      <Link href="/contact" className="btn btn--ghost">
                        Ask about {p.title} <Arrow />
                      </Link>
                    )}
                  </div>
                </div>
                <div className="programme__media" data-reveal="fade">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 860px) 100vw, 50vw"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <CtaBand
          eyebrow="Bring a programme to life"
          title={
            <>
              Every programme has room for a <em>partner.</em>
            </>
          }
          body="Sponsor a gathering, fund a screening block, or build a season-long relationship. We'll shape the role around your objective."
        />
      </main>
    </>
  );
}
