import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { contactRoutes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us why you're reaching out — community, advocacy, partnerships or press — and we'll route you to the right person.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Contact"
          title={
            <>
              Tell us why you&apos;re <em>reaching out.</em>
            </>
          }
          lead="We'll route you to the right person — community, advocacy, partnerships or press. Most messages get a reply within two working days."
          meta={[site.email, site.location]}
        />

        <section className="section" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div data-reveal>
              <p className="eyebrow">Who you&apos;ll reach</p>
              <h2 id="contact-title" style={{ marginTop: 20, marginBottom: 36 }}>
                Four doors, <em>one</em> house.
              </h2>
              <div className="routes">
                {contactRoutes.map((r) => (
                  <div className="route" key={r.title}>
                    <h3>{r.title}</h3>
                    <p>{r.body}</p>
                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent(r.subject)}`}
                      aria-label={`Email us about ${r.title.toLowerCase()}`}
                    >
                      Email
                    </a>
                  </div>
                ))}
              </div>
              <p className="mono muted" style={{ marginTop: 28 }}>
                {site.location}
              </p>
            </div>

            <div data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
