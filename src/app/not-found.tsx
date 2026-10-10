import Link from "next/link";
import Arrow from "@/components/Arrow";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="not-found bg-bone">
        <div className="container">
          <p className="eyebrow rise">404</p>
          <h1 className="rise" style={{ "--i": 1 } as React.CSSProperties}>
            This door isn&apos;t <em>here.</em>
          </h1>
          <p className="lead rise" style={{ "--i": 2 } as React.CSSProperties}>
            The page you were looking for has moved or never existed.
          </p>
          <div className="btn-row rise" style={{ "--i": 3, justifyContent: "center", marginTop: 32 } as React.CSSProperties}>
            <Link href="/" className="btn btn--ink">
              Back to home <Arrow />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
