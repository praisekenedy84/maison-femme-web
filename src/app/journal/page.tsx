import type { Metadata } from "next";
import Image from "next/image";
import Arrow from "@/components/Arrow";
import CtaBand from "@/components/CtaBand";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { site, stories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Impact recaps, partner stories and community voices from the work we build together.",
  alternates: { canonical: "/journal" },
};

const css = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function JournalPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Journal"
          title={
            <>
              The story behind the <em>numbers.</em>
            </>
          }
          lead="Impact recaps, partner stories and community voices from the work we build together — written so you can see what a Maison Femme programme actually looks like from the inside."
          meta={["Impact recaps", "Partner stories", "Community voices"]}
        />

        <section className="section" aria-label="Stories">
          <div className="container">
            <div className="cards">
              {stories.map((s, i) => (
                <article className="card" key={s.title} data-reveal style={css(i)}>
                  <div className="card__media">
                    <Image src={s.image} alt={s.alt} fill sizes="(max-width: 860px) 100vw, 33vw" />
                    <span className="card__tag">{s.category}</span>
                  </div>
                  <div className="card__body">
                    <h3>{s.title}</h3>
                    <p>{s.excerpt}</p>
                    <span className="mono muted card__link">Publishing soon</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="journal-note" data-reveal="fade">
              <p>
                New stories are published as programmes close out. Want to be
                told when they do?
              </p>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Journal updates")}`}
                className="text-link"
              >
                Ask for updates <Arrow />
              </a>
            </div>
          </div>
        </section>

        <CtaBand
          eyebrow="Be part of the next story"
          title={
            <>
              The best recaps start with a <em>partner.</em>
            </>
          }
          body="Every impact recap in this journal began as a brief. Yours could be next."
        />
      </main>
    </>
  );
}