import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Building2,
  Scale,
  Sparkles,
  RotateCw,
} from "lucide-react";
import { Btn, Eyebrow, Pill, Section } from "./ui";
import { AudienceItem, TagItem } from "@/lib/data";

type Props = {
  id: string;
  eyebrow: string;
  a: string;
  b: string;
  desc: string;
  cta: string;
  items: AudienceItem[];
};

function renderTagIcon(icon?: TagItem["icon"]) {
  switch (icon) {
    case "check":
      return <CheckCircle2 size={13} className="shrink-0 text-emerald-600" />;
    case "chat":
      return <MessageSquare size={13} className="shrink-0 text-blue-600" />;
    case "whatsapp":
      return <span className="size-2 rounded-full bg-emerald-500 shrink-0" />;
    case "partners":
      return <Building2 size={13} className="shrink-0 text-purple-600" />;
    case "connect":
      return <Scale size={13} className="shrink-0 text-indigo-600" />;
    case "dot-red":
      return (
        <span className="size-2 rounded-full bg-red-500 shrink-0 animate-pulse" />
      );
    case "sparkle":
      return <Sparkles size={13} className="shrink-0 text-emerald-600" />;
    case "refresh":
      return <RotateCw size={13} className="shrink-0 text-purple-600" />;
    default:
      return null;
  }
}

export default function Audience({
  id,
  eyebrow,
  a,
  b,
  desc,
  cta,
  items,
}: Props) {
  return (
    <Section
      id={id}
      className="relative isolate grid gap-12 lg:grid-cols-[1fr_1.4fr] items-start"
    >
      {/* ── Soft Ambient Glow Background ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120%] w-screen -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(30% 50% at 8% 45%, rgba(186,230,253,0.50), transparent 75%), radial-gradient(30% 50% at 92% 45%, rgba(221,214,254,0.50), transparent 75%)",
        }}
      />

      {/* ── Left Column: Headline and Description ── */}
      <div>
        <Eyebrow className="inline-flex items-center gap-2">
          <span className="size-2 rounded-full bg-brand" />
          <span>{eyebrow}</span>
        </Eyebrow>

        <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-slate-800">
          {a} <span className="text-brand">{b}</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-500 max-w-lg">
          {desc}
        </p>

        <Btn className="mt-8 shadow-lg shadow-brand/20 transition-transform duration-200 hover:scale-102">
          {cta}
          <ArrowRight size={16} />
        </Btn>
      </div>

      {/* ── Right Column: Cards List ── */}
      <div className="space-y-4">
        {items.map((i) => (
          <div
            key={i.n}
            className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white/95 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] backdrop-blur-xs transition-all duration-300 hover:border-slate-200 hover:shadow-[0_12px_36px_rgba(15,23,42,0.07)] sm:flex-row sm:items-start sm:justify-between"
          >
            {/* Number, Category, Title, Description */}
            <div className="flex gap-4">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-indigo-100 bg-indigo-50/70 text-xs font-semibold text-indigo-600">
                {i.n}
              </span>

              <div>
                {i.k && (
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {i.k}
                  </p>
                )}

                <p className="text-lg font-bold text-slate-800">
                  {i.t}{" "}
                  {i.badge && (
                    <Pill className="ml-2 border-transparent bg-indigo-50 text-[10px] uppercase font-semibold text-indigo-600">
                      {i.badge}
                    </Pill>
                  )}
                </p>

                <p className="mt-1.5 max-w-md text-xs sm:text-sm leading-relaxed text-slate-500">
                  {i.d}
                </p>
              </div>
            </div>

            {/* Tags and Subtext */}
            <div className="flex flex-wrap items-start gap-2 shrink-0 sm:max-w-52 sm:flex-col sm:items-end">
              {i.tags.map((tag) => (
                <div
                  key={`${i.n}-${tag.label}`}
                  className="flex flex-col items-end"
                >
                  <Pill
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs transition-all ${tag.className}`}
                  >
                    {renderTagIcon(tag.icon)}
                    <span>{tag.label}</span>
                  </Pill>

                  {tag.subtext && (
                    <span className="mt-1 text-[10px] text-slate-400 font-medium">
                      {tag.subtext}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
