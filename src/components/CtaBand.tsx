import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Arrow from "./Arrow";

type CtaBandProps = {
  eyebrow?: string;
  title?: ReactNode;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export default function CtaBand({
  eyebrow = "Partner with us",
  title = (
    <>
      Your CSR budget deserves a partner who <em>delivers.</em>
    </>
  ),
  body = "Tell us your objective and reporting calendar. We'll tell you honestly whether we're the right partner — and what the programme would look like if we are.",
  primary = { href: "/contact", label: "Start a conversation" },
  secondary = { href: "/partner", label: "Partnership paths" },
}: CtaBandProps) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta__media">
        <Image
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          sizes="100vw"
        />
      </div>
      <div className="container cta__inner">
        <div data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="cta-title">{title}</h2>
          <p>{body}</p>
        </div>
        <div className="cta__actions" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
          <Link href={primary.href} className="btn btn--light">
            {primary.label} <Arrow />
          </Link>
          <Link href={secondary.href} className="btn btn--outline-light">
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
