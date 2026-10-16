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
import { AudienceItem, TagItem } from "./data";

type Props = {
  id: string;
  eyebrow: string;
  a: string;
  b: string;
  desc: string;
  cta: string;
  items: AudienceItem[];
  flip?: boolean;
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
      className="grid gap-12 lg:grid-cols-[1fr_1.4fr] items-start"
    >
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-700">
          {a} <span className="text-brand">{b}</span>
        </h2>
        <p className="mt-6 text-lg text-slate-500">{desc}</p>
        <Btn className="mt-8">
          {cta}
          <ArrowRight size={16} />
        </Btn>
      </div>

      <div className="space-y-4">
        {items.map((i) => (
          <div
            key={i.n}
            className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 sm:flex-row sm:items-center sm:justify-between shadow-xs hover:border-slate-200 transition-colors"
          >
            {/* Left Column: Number, Title, Description */}
            <div className="flex gap-4">
              <span className="grid size-8 shrink-0 place-items-center rounded-md bg-indigo-50 text-xs font-semibold text-indigo-600">
                {i.n}
              </span>
              <div>
                {i.k && (
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    {i.k}
                  </p>
                )}
                <p className="text-xl font-bold text-slate-800">
                  {i.t}{" "}
                  {i.badge && (
                    <Pill className="ml-2 border-transparent bg-indigo-50 text-[10px] uppercase font-semibold text-indigo-600">
                      {i.badge}
                    </Pill>
                  )}
                </p>
                <p className="mt-2 max-w-md text-sm text-slate-500 leading-relaxed">
                  {i.d}
                </p>
              </div>
            </div>

            {/* Right Column: Tags & Badges */}
            <div className="flex flex-wrap items-start gap-2 sm:max-w-56 sm:flex-col sm:items-end sm:justify-center shrink-0">
              {i.tags.map((tag) => (
                <div key={tag.label} className="flex flex-col items-end">
                  <Pill
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs ${tag.className}`}
                  >
                    {renderTagIcon(tag.icon)}
                    <span>{tag.label}</span>
                  </Pill>
                  {tag.subtext && (
                    <span className="mt-1 text-[11px] text-slate-400">
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
