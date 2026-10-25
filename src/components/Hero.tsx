import {
  Landmark,
  GraduationCap,
  Briefcase,
  Bell,
  ArrowRight,
  Check,
  Users,
  Building2,
  ShieldCheck,
  Bot,
  Sparkles,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Btn, Pill } from "./ui";
import { TbBriefcase2Filled } from "react-icons/tb";
import { HiAcademicCap } from "react-icons/hi2";
import { IoLogoWhatsapp, IoSchool, IoSparklesSharp } from "react-icons/io5";
import { RiFlashlightFill, RiSchoolFill, RiWhatsappFill } from "react-icons/ri";
import { IoMdFlash } from "react-icons/io";
import { GiCheckedShield } from "react-icons/gi";
import { LuSchool } from "react-icons/lu";

/* ---------- Card illustrations (inline SVG; swap with <Image> exports if you have them) ---------- */
const CollegeArt = () => (
  <svg
    viewBox="0 0 220 130"
    aria-hidden
    className="pointer-events-none absolute -bottom-3 -right-5 w-[70%] fill-orange-100"
  >
    <path d="M110 4 L10 48 H210 Z" />
    <rect x="16" y="52" width="188" height="8" />
    {[34, 68, 102, 136, 170].map((x) => (
      <rect key={x} x={x} y="64" width="16" height="52" />
    ))}
    <rect x="6" y="118" width="208" height="12" />
  </svg>
);

const ResumeArt = () => (
  <svg
    viewBox="0 0 90 110"
    aria-hidden
    className="pointer-events-none absolute right-2 top-[45%] hidden w-28 lg:block"
  >
    <rect
      x="2"
      y="2"
      width="72"
      height="92"
      rx="8"
      fill="#faf5ff"
      stroke="#c4b5fd"
      strokeWidth="2"
    />
    <rect x="12" y="14" width="26" height="4" rx="2" fill="#fdba74" />
    <rect x="12" y="26" width="50" height="4" rx="2" fill="#86efac" />
    <rect x="12" y="36" width="42" height="4" rx="2" fill="#bbf7d0" />
    <rect x="12" y="46" width="50" height="4" rx="2" fill="#86efac" />
    <rect x="12" y="58" width="34" height="4" rx="2" fill="#c4b5fd" />
    <circle
      cx="62"
      cy="74"
      r="17"
      fill="#fff"
      stroke="#fdba74"
      strokeWidth="3"
    />
    <circle
      cx="61"
      cy="73"
      r="7"
      fill="none"
      stroke="#86efac"
      strokeWidth="2.5"
    />
    <path
      d="M66 78 L72 84"
      stroke="#86efac"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const HiringArt = () => (
  <svg
    viewBox="0 0 130 160"
    aria-hidden
    className="pointer-events-none absolute bottom-0 right-0 hidden w-[42%] lg:block"
  >
    <rect x="40" y="0" width="90" height="160" fill="#dbeafe" opacity=".85" />
    {[24, 48, 72, 96, 120].map((y) => (
      <line
        key={y}
        x1="40"
        x2="130"
        y1={y}
        y2={y}
        stroke="#fff"
        strokeOpacity=".7"
      />
    ))}
    <rect x="0" y="62" width="52" height="98" fill="#bfdbfe" opacity=".75" />
    <rect
      x="20"
      y="70"
      width="74"
      height="42"
      rx="8"
      fill="#fff"
      opacity=".95"
    />
    <text
      x="57"
      y="98"
      textAnchor="middle"
      fontSize="20"
      fontWeight="700"
      fill="#fdba74"
    >
      {"</>"}
    </text>
  </svg>
);

const cards = [
  {
    icon: RiSchoolFill,
    title: "College",
    tag: "Coming Soon",
    desc: "Explore colleges, courses, fees, placements & more",
    pts: [
      "Search by course, location, fees",
      "Connect directly with colleges",
      "Improve student placements",
    ],
    cta: "Join Waitlist",
    CtaIcon: Bell,
    Art: CollegeArt,
  },
  {
    icon: IoSchool,
    title: "I'm Looking for a Job",
    tag: "Available Now",
    desc: "Upload your resume. We'll find jobs that fit you.",
    pts: [
      "Jobs from 1000+ sources",
      "AI powered matching",
      "WhatsApp & email alerts",
    ],
    cta: "Explore Jobs",
    CtaIcon: ArrowRight,
    Art: ResumeArt,
  },
  {
    icon: TbBriefcase2Filled,
    title: "I'm Hiring",
    tag: "Coming Soon",
    desc: "Connect with colleges and find candidates — from students to graduates.",
    pts: [
      "Connect directly with colleges",
      "Find the right candidates",
      "Simplify your hiring",
    ],
    cta: "Join Waitlist",
    CtaIcon: Bell,
    Art: HiringArt,
  },
];

const stats = [
  { I: Users, v: "800+", l: "Students", tone: "bg-violet-100 text-violet-500" },
  { I: LuSchool, v: "130+", l: "colleges", tone: "bg-sky-100 text-sky-500" },
  {
    I: Briefcase,
    v: "100+",
    l: "jobs & internships",
    tone: "bg-green-100 text-green-500",
  },
  {
    I: GiCheckedShield,
    v: "100%",
    l: "Safe & Trusted",
    tone: "bg-orange-100 text-orange-500",
  },
];

/* Glow colours (estimated from the screenshot) – tweak the three rgba values if needed */
const glow = [
  "radial-gradient(38% 50% at 10% 52%, rgba(125,211,252,.32), transparent 70%)", // left: sky
  "radial-gradient(38% 50% at 92% 40%, rgba(196,181,253,.38), transparent 70%)", // right: lavender
  "radial-gradient(34% 36% at 84% 96%, rgba(251,207,232,.40), transparent 70%)", // bottom-right: pink
].join(",");

const chip =
  "absolute hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-2.5 text-left shadow-[0_6px_24px_rgba(15,23,42,.08)] xl:flex";

export default function Hero() {
  return (
    <section className="relative isolate mx-auto max-w-7xl px-6 pt-10 text-center">
      {/* background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-40 -z-10 h-170 w-[140%] -translate-x-1/2"
        style={{ background: glow }}
      />

      <div className="pointer-events-none absolute left-6 top-6 hidden w-56 rounded-2xl border border-brand/40 bg-white p-4 text-left text-xs shadow-sm xl:block">
        <p className="flex items-center gap-2 font-medium text-orange-500">
          <RiWhatsappFill size={18} className="text-green-500" />
          WhatsApp Alert
        </p>
        <p className="mt-1 font-semibold">Get notified on whatsapp</p>
        <p className="text-slate-500">
          You'll get all important updates on your whatsapp
        </p>
      </div>
      <div className="pointer-events-none absolute right-6 top-0 hidden w-64 rounded-2xl border border-violet-300 bg-white p-4 text-left text-xs shadow-sm xl:block">
        <p className="flex items-center gap-2 font-semibold text-violet-600">
          <RiFlashlightFill size={18} />
          Resume Builder
        </p>
        <p className="mt-1 font-semibold">Build Your Resume</p>
        <p className="text-slate-500">
          Our resume builder gives you dynamic options to build better & faster
          resume that got you hired
        </p>
      </div>
      <Pill className="inline-flex items-center gap-2 border-transparent bg-sky-50 text-brand">
        <Bot size={14} />
        AI-Powered Campus Assistant
      </Pill>
      <h1 className="mt-4 text-5xl font-bold md:text-6xl">
        Connect{" "}
        <span className="bg-linear-to-r from-brand to-teal-500 bg-clip-text text-transparent">
          10X Faster.
        </span>
      </h1>
      <p className="mt-3 text-lg text-slate-600 md:text-xl">
        One platform connecting students, colleges & employers — faster.
      </p>

      {/* "What are you looking for?" row with the two live chips */}
      <div className="relative mt-6">
        <div className={`${chip} left-4 top-2.5`}>
          <span className="flex">
            {[
              ["AK", "bg-blue-500"],
              ["PR", "bg-violet-600"],
              ["SN", "bg-teal-500"],
            ].map(([n, c]) => (
              <span
                key={n}
                className={`-ml-2 grid size-7 place-items-center rounded-full border-2 border-white text-[9px] font-bold text-white first:ml-0 ${c}`}
              >
                {n}
              </span>
            ))}
          </span>
          <div>
            <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
              <i className="size-1.5 rounded-full bg-green-500" />
              🔥 142 students matched today
            </p>
            <p className="text-[10px] text-slate-400">
              Just now • IIT, BITS, VIT
            </p>
          </div>
        </div>

        <p className="flex items-center justify-center gap-4 text-2xl font-semibold text-brand">
          <IoSparklesSharp size={18} />
          What are you looking for?
          <IoSparklesSharp size={18} />
        </p>

        <div className={`${chip} right-4 top-2.5`}>
          <span className="grid size-8 place-items-center rounded-lg bg-slate-100 text-amber-800">
            <Briefcase size={14} />
          </span>
          <div>
            <p className="text-xs text-slate-800">
              <b className="font-semibold text-brand">Radiant Info</b>{" "}
              shortlisted 8 interns
            </p>
            <p className="flex items-center gap-1.5 text-[10px] font-medium text-green-600">
              <i className="size-1.5 rounded-full bg-green-500" />
              Verified recruiter • 2 days ago
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 text-left md:grid-cols-3">
        {cards.map(({ icon: I, title, tag, desc, pts, cta, CtaIcon, Art }) => (
          <article
            key={title}
            className="relative flex flex-col overflow-hidden rounded-3xl border border-sky-200 bg-white p-6 shadow-[0_8px_30px_rgba(10,132,255,.08)]"
          >
            <Art />
            <div className="relative z-10 flex flex-1 flex-col">
              <div className="flex items-start justify-between">
                <span className="grid border border-blue-100 size-12 place-items-center rounded-full bg-sky-50 text-brand">
                  <I size={20} />
                </span>
                <Pill className="border-brand text-brand">{tag}</Pill>
              </div>
              <h3 className="mt-6 text-2xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <ul className="mt-5 flex-1 space-y-3 text-sm">
                {pts.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <Check
                      size={14}
                      className="rounded-full bg-slate-100 p-0.5 text-slate-500"
                    />
                    {p}
                  </li>
                ))}
              </ul>
              <Btn className="mt-6 w-full rounded-lg!">
                {cta}
                <CtaIcon size={16} />
              </Btn>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0">
        {stats.map(({ I, v, l, tone }, i) => (
          <div
            key={l}
            className="relative flex items-center justify-center gap-4"
          >
            {i > 0 && (
              <span className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-slate-300 md:block" />
            )}
            <span
              className={`grid size-14 place-items-center rounded-full ${tone}`}
            >
              <I size={22} />
            </span>
            <div className="text-left">
              <p className="font-heading text-3xl font-bold">{v}</p>
              <p className="text-sm">{l}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
