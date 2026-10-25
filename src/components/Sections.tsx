import { type ReactNode } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUp, Check, Lock, Zap } from "lucide-react";
import { Btn, Eyebrow, Pill, Section } from "./ui";

const partners = [
  { src: "/partners/radiant.png", alt: "Radiant Info" },
  { src: "/partners/dpiit.png", alt: "DPIIT Startup India" },
  { src: "/partners/ginserv.png", alt: "Ginserv" },
  { src: "/partners/startup-karnataka.png", alt: "Startup Karnataka" },
  { src: "/partners/talentspotify.png", alt: "TalentSpotify" },
  { src: "/partners/crest.png", alt: "Partner institution" },
];

export function Partners() {
  const list = [...partners, ...partners]; // duplicated for a seamless loop
  return (
    <Section className="text-center">
      <p className="text-xl text-slate-600">Trusted by partners across India</p>
      <div className="mt-10 overflow-hidden mask-[linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <ul className="flex w-max animate-marquee items-center hover:[animation-play-state:paused] motion-reduce:animate-none">
          {list.map((p, i) => (
            <li
              key={i}
              className="shrink-0 pr-16"
              aria-hidden={i >= partners.length}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={200}
                height={80}
                className="h-16 w-auto object-contain mix-blend-multiply"
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

const steps = [
  {
    n: "01",
    t: "Set your preferences",
    d: "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.",
    tag: "Smart Profile",
    tagClass: "bg-indigo-50 text-indigo-600",
    badgeClass: "bg-indigo-50 border-indigo-200 text-indigo-600",
    cardClass: "border-indigo-200/90 bg-white shadow-xs",
  },
  {
    n: "02",
    t: "Discover relevant opportunities",
    d: "Explore colleges and career opportunities matched to your profile, interests and goals.",
    tag: "AI Ranked",
    tagClass: "bg-slate-100 text-slate-500",
    badgeClass: "bg-slate-50 border-slate-200 text-slate-400",
    cardClass: "border-slate-100 bg-white/70",
  },
  {
    n: "03",
    t: "Get notified when something fits",
    d: "Get notified when a relevant college or new opportunity is found, so you can act early.",
    tag: "Instant Alerts",
    tagClass: "bg-emerald-50 text-emerald-600",
    badgeClass: "bg-slate-50 border-slate-200 text-slate-400",
    cardClass: "border-slate-100 bg-white/70",
  },
];

const feed = [
  {
    logo: "/companies/iim.png",
    t: "IIM Bangalore",
    tag: "Top College",
    meta: ["MBA", "Bengaluru", "₹3L+"],
    d: "India's premier management institute with global exposer...",
    cta: "View Details",
  },
  {
    logo: "/companies/intern.png",
    t: "Product Intern",
    tag: "Internship",
    meta: ["Bengaluru", "Hybrid", "₹35K/mo"],
    d: "Work on real products, learn from top engineers and build...",
    cta: "Apply Now",
  },
  {
    logo: "/companies/gig.png",
    t: "Marketing Gig",
    tag: "Freelance",
    meta: ["Remote", "Freelance", "₹10K - ₹25K"],
    d: "Create content and help with social media campaigns for...",
    cta: "View Details",
  },
];

export function Discovery() {
  return (
    <Section className="relative isolate grid items-center gap-12 lg:grid-cols-2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120%] w-screen -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(30% 50% at 8% 45%, rgba(186,230,253,0.50), transparent 75%), radial-gradient(30% 50% at 92% 45%, rgba(221,214,254,0.55), transparent 75%)",
        }}
      />
      <div>
        <Eyebrow>01 • Opportunity Discovery</Eyebrow>
        <h2 className="mt-6 text-5xl font-bold text-slate-700">
          Stop searching.
          <br />
          <span className="text-brand">Start getting matched.</span>
        </h2>

        <p className="mt-6 text-lg text-slate-500">
          Tell CampusPe your skills, preferences and goals. We continuously
          monitor company career pages and job sources, find opportunities that
          match you, and notify you when they appear.
        </p>

        <div className="mt-8 space-y-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className={`flex items-start gap-4 rounded-2xl border p-4 transition-all duration-200 ${s.cardClass}`}
            >
              <span
                className={`grid size-8 shrink-0 place-items-center rounded-lg border text-xs font-semibold ${s.badgeClass}`}
              >
                {s.n}
              </span>
              <div className="flex-1 pt-0.5">
                <p className="font-semibold text-slate-800">{s.t}</p>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                  {s.d}
                </p>
              </div>
              <Pill
                className={`h-fit shrink-0 border-transparent text-xs font-medium ${s.tagClass}`}
              >
                {s.tag}
              </Pill>
            </div>
          ))}
        </div>

        <Btn className="mt-8">
          Explore opportunities
          <ArrowRight size={16} />
        </Btn>
      </div>

      <div className="relative rounded-3xl bg-white p-6 shadow-xl">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <span className="grid size-11 place-items-center rounded-xl bg-brand text-white">
            <Zap size={20} />
          </span>
          <div className="flex-1">
            <p className="font-bold">CampusPe Opportunity Feed</p>
            <p className="text-sm text-slate-500">
              Colleges & opportunities matched to you
            </p>
          </div>
          <Pill className="hidden border-transparent bg-green-50 text-green-600 sm:block">
            12 new matches today
          </Pill>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {[
            "All",
            "Colleges",
            "Jobs",
            "Internships",
            "Freelance",
            "Part-time",
          ].map((t, i) => (
            <span
              key={t}
              className={`rounded-full px-4 py-1.5 ${i ? "bg-slate-100 text-slate-600" : "bg-brand text-white"}`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 space-y-3">
          {feed.map((f) => (
            <div key={f.t} className="rounded-xl border border-slate-100 p-4">
              <div className="flex items-start gap-3">
                <Image
                  src={f.logo}
                  alt={f.t}
                  width={44}
                  height={44}
                  className="size-11 shrink-0 rounded-lg border border-slate-300 bg-white object-contain p-1.5"
                />
                <div className="flex-1">
                  <p className="font-semibold">
                    {f.t}{" "}
                    <Pill className="ml-2 border-transparent bg-sky-50 text-brand">
                      {f.tag}
                    </Pill>
                  </p>
                  <p className="mt-1 flex flex-wrap gap-x-4 text-xs text-slate-500">
                    {f.meta.map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </p>
                </div>
                <a
                  className="rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-white"
                  href="#"
                >
                  {f.cta}
                </a>
              </div>
              <p className="mt-2 text-sm text-slate-500">{f.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-between text-sm">
          <a href="#" className="font-medium text-brand">
            View all matched opportunities →
          </a>
          <span className="text-slate-400">
            Curated for you • Updated daily
          </span>
        </div>

        <div className="absolute left-16 top-full mt-4 hidden items-start gap-3 md:flex">
          <svg
            width="38"
            height="28"
            viewBox="0 0 38 28"
            fill="none"
            aria-hidden
            className="mt-2 text-indigo-500"
          >
            <path
              d="M36 24 C24 24 10 20 5 6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M2 14 L5 5 L13 9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-hand text-2xl font-semibold leading-snug text-violet-800">
            A mix of colleges, jobs,
            <br />
            internships and gigs — all in one place.
          </p>
        </div>
      </div>
    </Section>
  );
}

const checks = [
  {
    t: "Resume analyzed",
    s: "Ready in 4s",
    dot: true,
    text: "text-emerald-600",
    iconBox: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    t: "Skills matched",
    s: "Deep taxonomy",
    text: "text-blue-600",
    iconBox: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    t: "Experience matched",
    s: "Contextual seniority",
    text: "text-purple-600",
    iconBox: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    t: "1,000+ sources searched",
    s: "Real-time aggregators",
    text: "text-sky-600",
    iconBox: "bg-sky-50 text-sky-600 border-sky-100",
  },
];

const Chip = ({
  icon,
  title,
  sub,
  tone,
  className,
}: {
  icon: ReactNode;
  title: string;
  sub: string;
  tone: string;
  className: string;
}) => (
  <div
    className={`absolute hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 z-10 text-left shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xs md:flex ${className}`}
  >
    <span
      className={`grid size-9 place-items-center rounded-xl border ${tone}`}
    >
      {icon}
    </span>
    <div>
      <p className="text-sm font-bold text-slate-800">{title}</p>
      <p className="text-xs text-slate-400">{sub}</p>
    </div>
  </div>
);

const corners = [
  "top-2.5 left-2.5 border-t-2 border-l-2",
  "top-2.5 right-2.5 border-t-2 border-r-2",
  "bottom-2.5 left-2.5 border-b-2 border-l-2",
  "bottom-2.5 right-2.5 border-b-2 border-r-2",
];

export function ResumeUpload() {
  return (
    <Section className="relative isolate text-center">
      {/* ── Background Glow Effect (Sky Blue Left, Lavender Purple Right) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[115%] w-screen -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(40% 45% at 15% 50%, rgba(186,230,253,0.40), transparent 70%), radial-gradient(42% 50% at 85% 55%, rgba(221,214,254,0.45), transparent 70%)",
        }}
      />

      {/* Pill Badge */}
      <span className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/90 px-4 py-1.5 text-xs font-medium shadow-xs">
        <i className="size-2 rounded-full bg-indigo-500 ring-4 ring-indigo-100" />
        <b className="font-semibold uppercase tracking-wider text-brand">
          Try it live
        </b>
        <span className="h-3.5 w-px bg-slate-200" />
        <span className="text-slate-500">v2.4 AI Engine</span>
      </span>

      {/* Heading */}
      <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-800 md:text-6xl">
        Upload your resume.
        <br />
        <span className="text-brand">Find jobs that fit.</span>
      </h2>

      {/* Subheading */}
      <p className="mx-auto mt-5 max-w-2xl text-base text-slate-500 md:text-lg">
        Upload once. CampusPe reads your skills, experience, and preferences —
        <br className="hidden sm:inline" /> then finds relevant jobs across
        1,000+ sources.
      </p>

      {/* Main Upload Box Area */}
      <div className="relative mx-auto mt-12 max-w-3xl">
        {/* Left Floating Chip */}
        <Chip
          className="-left-8 top-15"
          tone="bg-lime-50 text-lime-600 border-lime-100"
          icon={<Zap size={15} />}
          title="98% Match Rate"
          sub="AI semantic rank"
        />

        {/* Right Floating Chip */}
        <Chip
          className="-right-8 bottom-15"
          tone="bg-amber-50 text-amber-600 border-amber-100"
          icon={<Lock size={14} />}
          title="ATS Compliant"
          sub="Standardized parser"
        />

        {/* Main Upload Box */}
        <label className="block cursor-pointer rounded-4xl border border-slate-100 bg-white p-6 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.20),0_10px_25px_-5px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_25px_70px_-12px_rgba(99,102,241,0.28),0_12px_30px_-5px_rgba(15,23,42,0.12)] md:p-8">
          <div className="relative rounded-2xl border-2 border-dashed border-indigo-200/80 px-6 py-10 sm:py-12">
            {corners.map((c) => (
              <i
                key={c}
                className={`absolute size-3 border-indigo-300/80 ${c}`}
              />
            ))}

            <p className="text-3xl font-bold text-slate-800 sm:text-4xl">
              Upload your resume
            </p>
            <p className="mx-auto mt-2.5 max-w-md text-xs text-slate-500 sm:text-sm">
              PDF, DOC, or DOCX · Up to 10MB · We'll use it to understand your
              skills and experience.
            </p>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-transform hover:scale-102">
              Upload resume <ArrowUp size={15} />
            </span>

            <input type="file" accept=".pdf,.doc,.docx" className="sr-only" />

            <p className="mt-4 text-xs text-slate-400">
              or drag and drop your file here
            </p>

            <div className="mt-3 flex justify-center gap-2">
              {["PDF", "DOC", "DOCX"].map((f) => (
                <span
                  key={f}
                  className="rounded-md border border-brand/40 px-2.5 py-0.5 text-[11px] font-medium text-brand"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </label>
      </div>

      {/* ── 4 Feature Cards Across Bottom ── */}
      <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {checks.map((c) => (
          <div
            key={c.t}
            className="flex items-center gap-3.5 rounded-2xl border border-slate-100 bg-white p-4 text-left shadow-xs transition-shadow hover:shadow-sm"
          >
            <span
              className={`grid size-10 shrink-0 place-items-center rounded-xl border ${c.iconBox}`}
            >
              <Check size={17} strokeWidth={2.4} />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-800">{c.t}</p>
              <p
                className={`flex items-center gap-1.5 text-xs font-medium ${c.text}`}
              >
                {c.dot && (
                  <i className="size-1.5 rounded-full bg-emerald-500" />
                )}
                {c.s}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
