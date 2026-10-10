import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1e1a24",
          color: "#fbf9f5",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 16,
              height: 16,
              background: "#c9647a",
              transform: "rotate(45deg)",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 600 }}>Maison Femme</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 108,
              lineHeight: 0.95,
              letterSpacing: -2,
            }}
          >
            <span>Where community becomes&nbsp;</span>
            <span style={{ color: "#c9647a", fontStyle: "italic" }}>change.</span>
          </div>
          <div
            style={{
              fontSize: 22,
              fontFamily: "monospace",
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#d9c9b4",
            }}
          >
            Dar es Salaam · Community · Advocacy · CSR partnership
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: 18,
            borderTop: "1px solid rgba(201,100,122,.5)",
            borderBottom: "1px solid rgba(201,100,122,.5)",
            background:
              "repeating-linear-gradient(90deg, transparent 0 7px, #c9647a 7px 9px, transparent 9px 18px)",
          }}
        />
      </div>
    ),
    size,
  );
}
