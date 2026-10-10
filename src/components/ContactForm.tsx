"use client";

import { useState, type FormEvent } from "react";
import { contactRoutes, site } from "@/lib/site";
import Arrow from "./Arrow";

/**
 * Composes a pre-filled email in the visitor's mail client.
 * Swap `handleSubmit` for a Server Action once an email provider is connected.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const org = String(data.get("organisation") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "General enquiry");
    const message = String(data.get("message") ?? "").trim();

    const body = [
      message,
      "",
      "—",
      name,
      org && `Organisation: ${org}`,
      `Reply to: ${email}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${topic} — ${name || "Website"}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate={false}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="organisation">Organisation (optional)</label>
          <input id="organisation" name="organisation" type="text" autoComplete="organization" />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="topic">I&apos;m writing about</label>
          <select id="topic" name="topic" defaultValue={contactRoutes[2].subject}>
            {contactRoutes.map((r) => (
              <option key={r.subject} value={r.subject}>
                {r.title}
              </option>
            ))}
            <option value="General enquiry">Something else</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us your objective, timing, and anything you'd like us to know."
        />
      </div>

      <div className="form__foot">
        <p className="form__hint" aria-live="polite">
          {sent
            ? "Your email app should now be open with the message ready to send."
            : "Opens your email app with the message pre-filled."}
        </p>
        <button type="submit" className="btn btn--primary">
          Send message <Arrow />
        </button>
      </div>
    </form>
  );
}
