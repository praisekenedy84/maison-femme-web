"use client";

import { useId, useState } from "react";
import { faqs } from "@/lib/site";

export default function FaqAccordion() {
  const baseId = useId();
  const [open, setOpen] = useState(0);

  return (
    <div className="faq">
      {faqs.map((item, i) => {
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        const isOpen = open === i;

        return (
          <div className={`faq__item${isOpen ? " is-open" : ""}`} key={item.q}>
            <h3>
              <button
                type="button"
                id={buttonId}
                className="faq__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="faq__panel"
              inert={!isOpen ? true : undefined}
            >
              <div className="faq__panel-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
