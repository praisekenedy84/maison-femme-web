import Link from "next/link";

export default function Wordmark({
  onClick,
  as = "link",
}: {
  onClick?: () => void;
  as?: "link" | "span";
}) {
  const inner = (
    <>
      <span className="wordmark__mark" aria-hidden="true" />
      Maison Femme
    </>
  );

  if (as === "span") {
    return <span className="wordmark">{inner}</span>;
  }

  return (
    <Link href="/" className="wordmark" onClick={onClick} aria-label="Maison Femme — home">
      {inner}
    </Link>
  );
}
