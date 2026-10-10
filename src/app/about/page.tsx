import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { audiences } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Maison Femme exists because Tanzanian women needed a place that was theirs — and because companies who wanted to support women and children needed a partner who could actually reach them.",
  alternates: { canonical: "/about" },
};

const css = (i: number) => ({ "--i": i }) as React.CSSProperties;

const differentiators = [
  {
    title: "Reach that's real",
    body: "Our community isn't a mailing list. It's women who show up, bring a friend, and come back the next time.",
  },
  {
    title: "Delivery, not just design",
    body: "We run CSR programmes from concept to closeout. You attend the day; you don't project-manage it.",
  },
  {
    title: "A clear mandate",
    body: "Our advocacy names specific issues: women's health, early detection, child safety and dignity.",
  },
  {
    title: "A seat at both tables",
    body: "We speak the language of the community and of the boardrooms we partner with — and translate between them.",
  },
];

const mandate = ["Women's health", "Early detection", "Child wellbeing", "Safety", "Dignity"];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="About Maison Femme"
          title={
            <>
              Community first. <em>Purpose</em> always.
            </>
          }
          lead="Maison Femme exists because Tanzanian women needed a place that was theirs — and because the companies who wanted to support women and children needed a partner who could actually reach them."
          meta={["Dar es Salaam", "Women · Children · CSR"]}
        />

        {/* Story */}
        <section className="section" aria-labelledby="story-title">
          <div className="container editorial">
            <div className="editorial__sticky" data-reveal>
              <p className="eyebrow">Our story</p>
              <h2 id="story-title">
                We started as <em>gatherings.</em>
              </h2>
            </div>
            <div className="editorial__copy stack">
              <p className="lead" data-reveal>
                We have grown into an advocacy organization with a track
                record: screening days delivered with medical partners,
                corporate CSR programmes executed end to end, and a community
                that shows up because they trust what we build.
              </p>
              <p data-reveal>
                The name is deliberate. A <em>maison</em> is a house — somewhere
                you are expected, somewhere with a door that opens. We wanted a
                house for Tanzanian women that was not a clinic, a conference or
                a campaign, but could host all three when needed.
              </p>
              <p data-reveal>
                We work at three levels at once, and we are honest about which
                hat we are wearing in any given room.
              </p>
              <dl className="facts" data-reveal>
                {audiences.map((a) => (
                  <div key={a.label}>
                    <dt>{a.label}</dt>
                    <dd>{a.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Image strip */}
        <section className="section--tight" aria-label="Maison Femme community">
          <div className="container">
            <div
              className="programme__media"
              style={{ aspectRatio: "21 / 9" }}
              data-reveal="fade"
            >
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2000&q=80"
                alt="Women in conversation at a Maison Femme gathering"
                fill
                sizes="100vw"
              />
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="section bg-bone" aria-labelledby="diff-title">
          <div className="container">
            <div className="section-head">
              <div data-reveal>
                <p className="eyebrow">What sets us apart</p>
                <h2 id="diff-title">
                  Reach. Delivery. <em>Real</em> partnership.
                </h2>
              </div>
              <div className="section-head__aside" data-reveal style={css(1)}>
                <p>
                  Plenty of organizations can host an event. Fewer can hand a
                  partner a documented outcome afterwards.
                </p>
              </div>
            </div>
            <ul className="pillars">
              {differentiators.map((d, i) => (
                <li className="pillar" key={d.title} data-reveal style={css(i)}>
                  <span className="pillar__mark" aria-hidden="true" />
                  <div>
                    <h3>{d.title}</h3>
                    <p>{d.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Mandate */}
        <section className="section bg-plum" aria-labelledby="mandate-title">
          <div className="container editorial">
            <div data-reveal>
              <p className="eyebrow">Our mandate</p>
              <h2 id="mandate-title">
                We name the <em>issues.</em>
              </h2>
            </div>
            <div className="editorial__copy">
              <p className="lead" data-reveal style={{ color: "rgba(251,249,245,.85)" }}>
                Vague advocacy is easy to applaud and impossible to measure. Ours
                is specific, so our partners can be too.
              </p>
              <dl className="facts" data-reveal>
                {mandate.map((m, i) => (
                  <div key={m}>
                    <dt>{String(i + 1).padStart(2, "0")}</dt>
                    <dd>{m}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <CtaBand
          eyebrow="Work with us"
          title={
            <>
              Join the house, or <em>build</em> with it.
            </>
          }
          body="Whether you're a woman looking for your community or a company looking for a partner, the door is open."
          primary={{ href: "/contact", label: "Get in touch" }}
          secondary={{ href: "/work", label: "Our programmes" }}
        />
      </main>
    </>
  );
}
