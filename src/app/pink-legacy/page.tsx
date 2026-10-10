import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import CtaBand from "@/components/CtaBand";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { programmes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pink Legacy Initiative",
  description:
    "Early detection saves lives. The Pink Legacy Initiative takes free breast examination to women who would otherwise never be screened, in partnership with the Tanzania Oncology Association.",
  alternates: { canonical: "/pink-legacy" },
};

const css = (i: number) => ({ "--i": i }) as React.CSSProperties;

const approach = [
  {
    title: "Screen",
    body: "Free clinical breast examinations in markets, workplaces and neighbourhoods — where women already are, on days they can attend.",
  },
  {
    title: "Refer",
    body: "Women with a concerning result are referred for further assessment, with the first diagnostic step supported rather than left to chance.",
  },
  {
    title: "Support",
    body: "Awareness sessions in Kiswahili, and a pathway forward for women navigating a diagnosis — so no one leaves a screening day alone.",
  },
];

const outcomes = [
  { title: "Screenings", body: "Examinations delivered and documented, by day and location." },
  { title: "Referrals", body: "Women referred for further assessment and followed up." },
  { title: "Communities", body: "Neighbourhoods and workplaces reached through screening and awareness." },
  { title: "Attribution", body: "Outcomes attributable to your block, written for your reporting." },
];

export default function PinkLegacyPage() {
  const programme = programmes[2];

  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          tone="rose"
          eyebrow="Pink Legacy Initiative"
          title={
            <>
              Early detection <em>saves lives.</em>
            </>
          }
          lead="Pink Legacy takes free breast examination to women who would otherwise never be screened — delivered with qualified clinicians, in the language women actually speak."
          meta={["Clinical partner: Tanzania Oncology Association", "Dar es Salaam"]}
        >
          <div className="btn-row">
            <Link href="/contact" className="btn btn--primary">
              Fund a screening block <Arrow />
            </Link>
          </div>
        </PageHero>

        {/* Feature */}
        <section className="section--tight" aria-labelledby="pl-feature">
          <div className="container">
            <div className="feature" data-reveal="fade">
              <div className="feature__media">
                <Image src={programme.image} alt={programme.alt} fill sizes="(max-width: 860px) 100vw, 55vw" />
              </div>
              <div className="feature__panel">
                <p className="eyebrow">Why it exists</p>
                <h2 id="pl-feature">
                  Screening is only the <em>beginning.</em>
                </h2>
                <p>
                  Most women we meet on a screening day have never been
                  examined. Many have never had the conversation at all. Pink
                  Legacy exists to make both ordinary — and to make sure a
                  concerning result leads somewhere.
                </p>
                <dl className="facts">
                  {programme.details.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Approach — a real sequence */}
        <section className="section" aria-labelledby="approach-title">
          <div className="container">
            <div className="section-head">
              <div data-reveal>
                <p className="eyebrow">Our approach</p>
                <h2 id="approach-title">
                  Screen. Refer. <em>Support.</em>
                </h2>
              </div>
              <div className="section-head__aside" data-reveal style={css(1)}>
                <p>
                  Every screening day is staffed by qualified clinicians. Every
                  session is conducted in Kiswahili. Every result has a next step.
                </p>
              </div>
            </div>
            <ol className="steps steps--light" data-reveal="fade" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {approach.map((s, i) => (
                <li className="step" key={s.title} style={css(i)}>
                  <span className="step__num">Step {String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* For partners */}
        <section className="section bg-bone" aria-labelledby="outcomes-title">
          <div className="container">
            <div className="section-head">
              <div data-reveal>
                <p className="eyebrow">For partners</p>
                <h2 id="outcomes-title">
                  Clean, <em>reportable</em> outcomes.
                </h2>
              </div>
              <div className="section-head__aside" data-reveal style={css(1)}>
                <p>
                  Pink Legacy is built to sit inside a CSR budget. You fund a
                  screening block; we return the numbers your board will ask for.
                </p>
                <Link href="/partner" className="text-link">
                  Advocacy partnership <Arrow />
                </Link>
              </div>
            </div>
            <ul className="pillars">
              {outcomes.map((o, i) => (
                <li className="pillar" key={o.title} data-reveal style={css(i)}>
                  <span className="pillar__mark" aria-hidden="true" />
                  <div>
                    <h3>{o.title}</h3>
                    <p>{o.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaBand
          eyebrow="Fund a screening block"
          title={
            <>
              Put your CSR budget where it <em>saves lives.</em>
            </>
          }
          body="One screening block funds a full day of clinical examinations, awareness sessions and referrals — with your name on the outcomes."
          primary={{ href: "/contact", label: "Talk to us about Pink Legacy" }}
          secondary={{ href: "/work", label: "All programmes" }}
        />
      </main>
    </>
  );
}
