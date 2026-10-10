"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { navLinks, site } from "@/lib/site";
import Arrow from "./Arrow";
import Wordmark from "./Wordmark";

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

type HeaderProps = {
  /** `light` renders pale text for use over the home hero. */
  variant?: "light" | "dark";
};

export default function Header({ variant = "dark" }: HeaderProps) {
  const pathname = usePathname();
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 24,
    () => false,
  );
  const [openState, setOpenState] = useState<{ open: boolean; path: string }>({
    open: false,
    path: pathname,
  });

  // Menu is only considered open on the route where it was opened,
  // so navigating closes it without a setState-in-effect.
  const open = openState.open && openState.path === pathname;
  const setOpen = (next: boolean | ((prev: boolean) => boolean)) =>
    setOpenState((prev) => ({
      open: typeof next === "function" ? next(prev.open && prev.path === pathname) : next,
      path: pathname,
    }));

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenState({ open: false, path: pathname });
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open, pathname]);

  const classes = [
    "header",
    variant === "light" && "header--light",
    scrolled && "header--scrolled",
    open && "header--open",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={classes}>
        <div className="container header__inner">
          <Wordmark onClick={() => setOpen(false)} />

          <nav className="nav" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav__link"
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/partner" className="btn btn--ink header__cta">
            Partner with us <Arrow />
          </Link>

          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span className="menu-btn__icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " mobile-menu--open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            {[{ href: "/", label: "Home" }, ...navLinks].map((link, i) => (
              <li key={link.href} style={{ "--i": i } as React.CSSProperties}>
                <Link href={link.href} tabIndex={open ? 0 : -1}>
                  {link.label}
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__foot">
          <a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1}>
            {site.email}
          </a>
          <span>{site.location}</span>
        </div>
      </div>
    </>
  );
}
