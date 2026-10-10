import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import CtaBand from "@/components/CtaBand";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { partnershipPaths, processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partner with us",
  description:
    "We build CSR programmes around your objective, deliver them end to end, and report back with documented outcomes your leadership can use.",
  alternates: { canonical: "/partner" },
};

const css = (i: number) => ({ "--i": i }) as React.CSSProperties;

const deliverables = [
  ["Audience", "A community that is genuinely present — not a mailing list."],
  ["Outcomes", "Named, documented results tied to your objective."],
  ["Reporting", "A summary, photography and figures written for your leadership."],
  ["Visibility", "Co-branding across the programme, on terms agreed up front."],
  ["Honesty", "If we're not the right partner for your goal, we'll say so early."],
];

export default function PartnerPage() {
  return (
    <>
      <Header variant="light" />
      <main id="main">
        <PageHero
          tone="plum"
          eyebrow="Partner with us"
          title={
            <>
              Your CSR budget deserves a partner who <em>delivers.</em>
            </>
          }
          lead="We've run this work long enough to know what makes a CSR partnership actually land: a real audience, a documented outcome, and a partner who executes without needing to be managed."
          meta={["Event · Advocacy · Standing partnerships"]}
        >
          <div className="btn-row">
            <Link href="/contact" className="btn btn--light">
              Start a conversation <Arrow />
            </Link>
          </div>
        </PageHero>

        {/* Paths */}
        <section className="section bg-bone" aria-labelledby="paths-title">
          <div className="container">
            <div className="section-head">
              <div data-reveal>
                <p className="eyebrow">Partnership paths</p>
                <h2 id="paths-title">
                  Choose how you want to <em>engage.</em>
                </h2>
              </div>
              <div className="section-head__aside" data-reveal style={css(1)}>
                <p>
                  Whether your priority is community visibility, women&apos;s
                  health or child welfare, one of these is built for it.
                </p>
              </div>
            </div>
            <div className="paths">
              {partnershipPaths.map((p, i) => (
                <article className="path" key={p.title} data-reveal style={css(i)}>
                  <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <p className="path__fit">{p.fit}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section bg-plum" aria-labelledby="partner-process">
          <div className="container">
            <div className="section-head">
              <div data-reveal>
                <p className="eyebrow">How it works</p>
                <h2 id="partner-process">
                  Brief to report in <em>four</em> steps.
                </h2>
              </div>
              <div className="section-head__aside" data-reveal style={css(1)}>
                <p>
                  We build the programme around your objective, then report back
                  in numbers you can put in front of your own leadership.
                </p>
              </div>
            </div>
            <ol className="steps" data-reveal="fade">
              {processSteps.map((s, i) => (
                <li className="step" key={s.title} style={css(i)}>
                  <span className="step__num">Step {String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* What you receive */}
        <section className="section" aria-labelledby="receive-title">
          <div className="container editorial">
            <div className="editorial__sticky" data-reveal>
              <p className="eyebrow">What you receive</p>
              <h2 id="receive-title">
                More than a <em>logo</em> on a banner.
              </h2>
            </div>
            <div className="editorial__copy">
              <p className="lead" data-reveal>
                Every partnership, at every size, comes with the same five
                commitments.
              </p>
              <dl className="facts" data-reveal>
                {deliverables.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <CtaBand
          primary={{ href: "/contact", label: "Send us your brief" }}
          secondary={{ href: "/pink-legacy", label: "See Pink Legacy" }}
        />
      </main>
    </>
  );
}
