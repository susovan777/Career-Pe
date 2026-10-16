import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUp,
  Check,
  CheckCircle2,
  Lock,
  Upload,
  Zap,
} from "lucide-react";
import { Btn, Eyebrow, H2, Pill, Section } from "./ui";

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
  },
  {
    n: "02",
    t: "Discover relevant opportunities",
    d: "Explore colleges and career opportunities matched to your profile, interests and goals.",
    tag: "AI Ranked",
    tagClass: "bg-slate-100 text-slate-600",
  },
  {
    n: "03",
    t: "Get notified when something fits",
    d: "Get notified when a relevant college or new opportunity is found, so you can act early.",
    tag: "Instant Alerts",
    tagClass: "bg-emerald-50 text-emerald-700",
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
    <Section className="grid items-center gap-12 lg:grid-cols-2">
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
              className="flex gap-4 rounded-xl border border-slate-300 bg-white p-4"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-md border text-xs font-semibold text-indigo-600">
                {s.n}
              </span>
              <div className="flex-1">
                <p className="font-semibold">{s.t}</p>
                <p className="text-sm text-slate-500">{s.d}</p>
              </div>
              <Pill className={`h-fit border-transparent ${s.tagClass}`}>
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

      <div className="rounded-3xl bg-white p-6 shadow-xl">
        <div className="flex items-center gap-3 border-b pb-4">
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
      </div>
    </Section>
  );
}

const checks = [
  {
    t: "Resume analyzed",
    s: "Ready in 4s",
    dot: true,
    text: "text-green-600",
    box: "border-green-200 bg-green-50 text-green-600",
  },
  {
    t: "Skills matched",
    s: "Deep taxonomy",
    text: "text-indigo-600",
    box: "border-indigo-200 bg-indigo-50 text-indigo-600",
  },
  {
    t: "Experience matched",
    s: "Contextual seniority",
    text: "text-violet-600",
    box: "border-violet-200 bg-violet-50 text-violet-600",
  },
  {
    t: "1,000+ sources searched",
    s: "Real-time aggregators",
    text: "text-brand",
    box: "border-sky-200 bg-sky-50 text-brand",
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
    className={`absolute hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 z-5 text-left shadow-[0_10px_30px_rgba(15,23,42,.1)] md:flex ${className}`}
  >
    <span className={`grid size-10 place-items-center rounded-xl ${tone}`}>
      {icon}
    </span>
    <div>
      <p className="text-sm font-bold">{title}</p>
      <p className="text-xs text-slate-500">{sub}</p>
    </div>
  </div>
);

const corners = [
  "top-3 left-3 border-t-2 border-l-2",
  "top-3 right-3 border-t-2 border-r-2",
  "bottom-3 left-3 border-b-2 border-l-2",
  "bottom-3 right-3 border-b-2 border-r-2",
];

export function ResumeUpload() {
  return (
    <Section className="text-center">
      <span className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm">
        <i className="size-2.5 rounded-full bg-indigo-500 ring-4 ring-indigo-100" />
        <b className="font-semibold uppercase text-brand">Try it live</b>
        <span className="h-4 w-px bg-slate-300" />
        <span className="text-slate-500">v2.4 AI Engine</span>
      </span>

      <h2 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
        Upload your resume.
        <br />
        <span className="text-brand">Find jobs that fit.</span>
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500 md:text-xl">
        Upload once. CampusPe reads your skills, experience, and preferences —
        <br className="hidden md:block" /> then finds relevant jobs across
        1,000+ sources.
      </p>

      <div className="relative mx-auto mt-14 max-w-3xl">
        <Chip
          className="-left-10 top-10"
          tone="bg-lime-100 text-lime-600"
          icon={<Zap size={16} />}
          title="98% Match Rate"
          sub="AI semantic rank"
        />
        <Chip
          className="-right-12 bottom-14"
          tone="bg-orange-100 text-orange-500"
          icon={<Lock size={14} />}
          title="ATS Compliant"
          sub="Standardized parser"
        />

        <label className="block cursor-pointer rounded-4xl bg-white/90 p-8 shadow-[0_20px_60px_rgba(99,102,241,.12)]">
          <div className="relative rounded-2xl border-2 border-dashed border-indigo-200 px-6 py-12">
            {corners.map((c) => (
              <i key={c} className={`absolute size-3 border-indigo-300 ${c}`} />
            ))}
            <p className="text-4xl font-bold">Upload your resume</p>
            <p className="mx-auto mt-3 max-w-md text-slate-500">
              PDF, DOC, or DOCX · Up to 10MB · We'll use it to understand your
              skills and experience.
            </p>
            <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-9 py-4 font-semibold text-white shadow-lg shadow-brand/30">
              Upload resume <ArrowUp size={16} />
            </span>
            <input type="file" accept=".pdf,.doc,.docx" className="sr-only" />
            <p className="mt-5 text-sm text-slate-500">
              or drag and drop your file here
            </p>
            <div className="mt-3 flex justify-center gap-2">
              {["PDF", "DOC", "DOCX"].map((f) => (
                <span
                  key={f}
                  className="rounded-md border border-brand/50 px-3 py-1 text-xs font-medium text-brand"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </label>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0">
        {checks.map((c, i) => (
          <Fragment key={c.t}>
            {i > 0 && (
              <span className="hidden h-px w-6 shrink-0 self-center bg-slate-200 lg:block" />
            )}
            <div className="flex flex-1 items-center gap-4 rounded-2xl border border-slate-100 bg-white p-3 text-left shadow-sm">
              <span
                className={`grid size-11 shrink-0 place-items-center rounded-xl border ${c.box}`}
              >
                <Check size={18} />
              </span>
              <div>
                <p className="font-semibold leading-snug">{c.t}</p>
                <p
                  className={`flex items-center gap-1.5 text-xs font-medium ${c.text}`}
                >
                  {c.dot && (
                    <i className="size-1.5 rounded-full bg-green-500" />
                  )}
                  {c.s}
                </p>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </Section>
  );
}
