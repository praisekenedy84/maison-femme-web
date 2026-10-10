import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import Wordmark from "./Wordmark";

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Wordmark />
            <p>
              A community and advocacy organization for women and children in
              Tanzania, and the partner that makes corporate CSR deliver.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <div className="footer__links">
              {navLinks.slice(0, 3).map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4>Work with us</h4>
            <div className="footer__links">
              {navLinks.slice(3).map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4>Contact</h4>
            <div className="footer__links">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span style={{ color: "rgba(251,249,245,.6)", fontSize: 15 }}>
                {site.location}
              </span>
            </div>
          </div>
        </div>

        <div className="footer__big" aria-hidden="true">
          Maison Femme
        </div>

        <div className="footer__bottom">
          <span>© {year} Maison Femme. All rights reserved.</span>
          <span>Umoja ni nguvu · Unity is strength</span>
        </div>
      </div>
    </footer>
  );
}
