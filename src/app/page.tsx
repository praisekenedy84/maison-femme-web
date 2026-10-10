import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";
import Header from "@/components/Header";
import KangaBand from "@/components/KangaBand";
import {
  focusTopics,
  initiatives,
  processSteps,
  programmes,
  site,
  stats,
  vision,
} from "@/lib/site";

const css = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function HomePage() {
  const featured = programmes.slice(0, 3);
  const pinkLegacy = programmes[2];

  return (
    <>
      <Header variant="light" />
      <main id="main">
        {/* Hero — brand, headline, lead, CTAs, full-bleed image */}
        <section className="hero on-image" aria-labelledby="hero-title">
          <div className="hero__media">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2400&q=80"
              alt="Women gathered together, laughing, in warm evening light"
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="container hero__inner">
            <div>
              <p className="hero__brand rise" style={css(0)}>
                {site.name}
              </p>
              <h1 id="hero-title" className="hero__title rise" style={css(1)}>
                Where community becomes <em>change.</em>
              </h1>
              <p className="hero__lead rise" style={css(2)}>
                Join hands with Maison Femme to convene women, protect children&apos;s
                wellbeing, and turn CSR into work that can be named and measured.
              </p>
              <div className="hero__actions btn-row rise" style={css(3)}>
                <Link href="/partner" className="btn btn--light">
                  Get involved <Arrow />
                </Link>
                <Link href="/work" className="btn btn--outline-light">
                  See our programmes
                </Link>
              </div>
            </div>
            <div className="hero__meta rise" style={css(4)}>
              <span>Dar es Salaam · Tanzania</span>
              <span className="hero__scroll">
                Scroll <span className="hero__scroll-line" aria-hidden="true" />
              </span>
            </div>
          </div>
        </section>

        <KangaBand />

        {/* Guiding path — oversized mission + vision panel */}
        <section className="section mission" aria-labelledby="mission-title">
          <div className="container">
            <p className="eyebrow" data-reveal>
              Guiding our path
            </p>
            <div className="mission__grid">
              <div className="mission__copy" data-reveal>
                <h2 id="mission-title">
                  Convene women through gatherings that{" "}
                  <span className="mission__inline-media">
                    <Image
                      src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=600&q=85"
                      alt=""
                      width={160}
                      height={110}
                    />
                  </span>{" "}
                  hold, advocate where it matters, and
                </h2>
                <p className="mission__tail lead" data-reveal style={css(1)}>
                  partner with companies ready for CSR that serves people — not
                  just a logo on a banner.
                </p>
              </div>

              <aside className="mission__aside" data-reveal style={css(2)}>
                <div className="mission__stat">
                  <span className="mission__stat-label">A world rebuilt in belonging</span>
                  <p className="mission__stat-value">
                    Women&apos;s rooms that become lasting networks.
                  </p>
                </div>
                <div className="mission__vision">
                  <p className="eyebrow">{vision.eyebrow}</p>
                  <p>{vision.statement}</p>
                  <span className="mission__promise">{vision.promise}</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* About — topic ribbon + rooted copy + featured callout */}
        <section className="section--tight about-band" aria-labelledby="about-title">
          <div className="topic-ribbon" aria-hidden="true">
            <div className="topic-ribbon__track">
              {[0, 1].map((copy) => (
                <div className="topic-ribbon__list" key={copy}>
                  {focusTopics.map((topic) => (
                    <span className="topic-ribbon__item" key={`${copy}-${topic}`}>
                      {topic}
                      <span className="topic-ribbon__dot" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="container">
            <div className="about-band__grid">
              <div className="about-band__media" data-reveal>
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
                  alt="Portrait of a woman outdoors, calm and grounded"
                  fill
                  sizes="(max-width: 860px) 100vw, 48vw"
                />
              </div>
              <div className="about-band__copy" data-reveal style={css(1)}>
                <p className="eyebrow">About</p>
                <h2 id="about-title">
                  Rooted in <em>community.</em>
                </h2>
                <p className="lead">
                  As a women&apos;s community and advocacy initiative in Tanzania,
                  Maison Femme builds belonging, advances health and dignity, and
                  partners with companies who want their CSR to do real work.
                </p>
                <p>
                  Together with clinicians, volunteers and corporate partners, we
                  design the rooms where that change happens — from a coastal
                  retreat to a screening day in a city market.
                </p>
                <Link href="/about" className="text-link">
                  Our story <Arrow />
                </Link>
              </div>
            </div>

            <article className="spotlight" data-reveal>
              <div className="spotlight__media">
                <Image
                  src={pinkLegacy.image}
                  alt={pinkLegacy.alt}
                  fill
                  sizes="(max-width: 860px) 100vw, 36vw"
                />
              </div>
              <div className="spotlight__body">
                <p className="eyebrow">Advocacy</p>
                <h3>{pinkLegacy.title}</h3>
                <p>{pinkLegacy.summary}</p>
                <Link href="/pink-legacy" className="btn btn--primary">
                  Explore Pink Legacy <Arrow />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Initiatives — four image tiles */}
        <section className="section bg-bone" aria-labelledby="initiatives-title">
          <div className="container">
            <div className="section-head">
              <div data-reveal>
                <p className="eyebrow">Initiatives</p>
                <h2 id="initiatives-title">
                  Building women&apos;s <em>future.</em>
                </h2>
              </div>
              <div className="section-head__aside" data-reveal style={css(1)}>
                <p>
                  From gatherings to screening days, we act where women and
                  children need us most — with partners who stay for the
                  reporting, not just the ribbon-cutting.
                </p>
              </div>
            </div>

            <ul className="initiatives">
              {initiatives.map((item, i) => (
                <li
                  className="initiative"
                  key={item.title}
                  data-reveal
                  style={css(i)}
                >
                  <div className="initiative__media">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 860px) 100vw, 25vw"
                    />
                  </div>
                  <div className="initiative__body">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="initiatives__note" data-reveal>
              We work with communities across Dar es Salaam and beyond to protect
              dignity and create lasting impact.
            </p>
          </div>
        </section>

        {/* Impact stats */}
        <section className="section bg-ink" aria-labelledby="impact-title">
          <div className="container">
            <div className="section-head">
              <div data-reveal>
                <p className="eyebrow">Our impact</p>
                <h2 id="impact-title">
                  Measured, <em>not assumed.</em>
                </h2>
              </div>
              <div className="section-head__aside" data-reveal style={css(1)}>
                <p>
                  Every partnership is measured. Every gathering serves a purpose
                  beyond the room — and we report on both.
                </p>
              </div>
            </div>
            <div className="stats" data-reveal="fade">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <span
                    className={`stat__value${s.value === null ? " stat__value--pending" : ""}`}
                  >
                    {s.value === null
                      ? "—"
                      : `${s.value.toLocaleString()}${s.suffix ?? ""}`}
                  </span>
                  <span className="stat__label">{s.label}</span>
                </div>
              ))}
            </div>
            <p className="stats__note" data-reveal="fade">
              Figures publish once confirmed with our clinical and corporate
              partners.
            </p>
          </div>
        </section>

        {/* Featured programmes */}
        <section className="section" aria-labelledby="projects-title">
          <div className="container">
            <div className="section-head">
              <div data-reveal>
                <p className="eyebrow">Featured programmes</p>
                <h2 id="projects-title">
                  Highlighted community <em>programmes.</em>
                </h2>
              </div>
              <div className="section-head__aside" data-reveal style={css(1)}>
                <p>
                  Signature programmes with a clear audience and a clear role for
                  partners.
                </p>
                <Link href="/work" className="btn btn--ink">
                  Get involved <Arrow />
                </Link>
              </div>
            </div>

            <div className="projects projects--stack">
              {featured.map((p, i) => (
                <article
                  className="project project--stack"
                  key={p.slug}
                  style={css(i)}
                >
                  <Link
                    href={"href" in p ? p.href : "/work"}
                    className="project__media"
                    aria-label={`${p.title} — learn more`}
                  >
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 860px) 100vw, 42vw"
                    />
                    <span className="project__place">{p.place}</span>
                  </Link>
                  <div className="project__body">
                    <p className="eyebrow">{p.tag}</p>
                    <div className="project__head">
                      <h3>{p.title}</h3>
                      <Link
                        href={"href" in p ? p.href : "/work"}
                        className="text-link"
                      >
                        Read more <Arrow />
                      </Link>
                    </div>
                    <p>{p.summary}</p>
                    <dl className="project__meta">
                      <div>
                        <dt>Focus</dt>
                        <dd>{p.tag}</dd>
                      </div>
                      <div>
                        <dt>Place</dt>
                        <dd>{p.place}</dd>
                      </div>
                      <div>
                        <dt>Impact</dt>
                        <dd>{p.impact}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership process */}
        <section className="section bg-plum" aria-labelledby="process-title">
          <div className="container">
            <div className="section-head">
              <div data-reveal>
                <p className="eyebrow">Partnership</p>
                <h2 id="process-title">
                  Protecting community <em>together.</em>
                </h2>
              </div>
              <div className="section-head__aside" data-reveal style={css(1)}>
                <p>
                  Four steps, the same whether you sponsor a single gathering or
                  sign on for a season — and you do not manage the work.
                </p>
              </div>
            </div>
            <ol className="steps" data-reveal="fade">
              {processSteps.map((s, i) => (
                <li className="step" key={s.title} style={css(i)}>
                  <span className="step__num">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <CtaBand
          eyebrow="Get involved"
          title={
            <>
              Together, we can make a <em>difference.</em>
            </>
          }
          body="Your support helps us protect women's health, empower communities, and secure programmes that last beyond a single event."
          primary={{ href: "/contact", label: "Get involved" }}
          secondary={{ href: "/partner", label: "Partnership paths" }}
        />

        {/* FAQ */}
        <section className="section" aria-labelledby="faq-title">
          <div className="container faq-layout">
            <div className="faq-layout__intro" data-reveal>
              <p className="eyebrow">Frequently asked questions</p>
              <h2 id="faq-title">
                All you need to <em>know.</em>
              </h2>
              <p>
                Have more questions? We&apos;re here to help — reach out anytime.
              </p>
              <Link href="/contact" className="btn btn--ink">
                Reach out <Arrow />
              </Link>
            </div>
            <div data-reveal style={css(1)}>
              <FaqAccordion />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
