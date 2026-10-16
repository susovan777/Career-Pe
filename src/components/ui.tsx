import { ReactNode } from "react";
type P = { children: ReactNode; className?: string };
export const Btn = ({
  children,
  outline,
  href = "#",
  className = "",
}: P & { outline?: boolean; href?: string }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${outline ? "border border-brand text-brand hover:bg-sky-50" : "bg-brand text-white hover:bg-blue-600"} ${className}`}
  >
    {children}
  </a>
);
export const Pill = ({ children, className = "" }: P) => (
  <span
    className={`rounded-full border px-3 py-1 text-xs font-medium ${className}`}
  >
    {children}
  </span>
);
export const Eyebrow = ({ children }: P) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
    <i className="size-1.5 rounded-full bg-brand" />
    {children}
  </span>
);
export const Section = ({
  children,
  className = "",
  id,
}: P & { id?: string }) => (
  <section
    id={id}
    className={`mx-auto max-w-7xl px-6 py-16 md:py-20 ${className}`}
  >
    {children}
  </section>
);
export const H2 = ({ a, b }: { a: string; b: string }) => (
  <h2 className="text-4xl font-bold leading-tight md:text-5xl">
    <span className="text-slate-700">{a}</span>{" "}
    <span className="text-brand">{b}</span>
  </h2>
);
