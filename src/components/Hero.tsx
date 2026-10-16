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

const cards = [
  {
    icon: Landmark,
    title: "College",
    tag: "Coming Soon",
    live: false,
    desc: "Explore colleges, courses, fees, placements & more",
    pts: [
      "Search by course, location, fees",
      "Connect directly with colleges",
      "Improve student placements",
    ],
    cta: "Join Waitlist",
    CtaIcon: Bell,
  },
  {
    icon: GraduationCap,
    title: "I'm Looking for a Job",
    tag: "Available Now",
    live: true,
    desc: "Upload your resume. We'll find jobs that fit you.",
    pts: [
      "Jobs from 1000+ sources",
      "AI powered matching",
      "WhatsApp & email alerts",
    ],
    cta: "Explore Jobs",
    CtaIcon: ArrowRight,
  },
  {
    icon: Briefcase,
    title: "I'm Hiring",
    tag: "Coming Soon",
    live: false,
    desc: "Connect with colleges and find candidates — from students to graduates.",
    pts: [
      "Connect directly with colleges",
      "Find the right candidates",
      "Simplify your hiring",
    ],
    cta: "Join Waitlist",
    CtaIcon: Bell,
  },
];
const stats = [
  { I: Users, v: "800+", l: "Students" },
  { I: Building2, v: "130+", l: "colleges" },
  { I: Briefcase, v: "100+", l: "jobs & internships" },
  { I: ShieldCheck, v: "100%", l: "Safe & Trusted" },
];

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-10 text-center">
      <div className="pointer-events-none absolute left-6 top-6 hidden w-56 rounded-2xl border border-brand/40 bg-white p-4 text-left text-xs shadow-sm xl:block">
        <p className="flex items-center gap-2 font-medium text-orange-500">
          <FaWhatsapp className="text-green-500" />
          WhatsApp Alert
        </p>
        <p className="mt-1 font-semibold">Get notified on whatsapp</p>
        <p className="text-slate-500">
          You'll get all important updates on your whatsapp
        </p>
      </div>
      <div className="pointer-events-none absolute right-6 top-0 hidden w-64 rounded-2xl border border-violet-300 bg-white p-4 text-left text-xs shadow-sm xl:block">
        <p className="flex items-center gap-2 font-semibold text-violet-600">
          <Zap size={14} />
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
      <p className="mt-6 flex items-center justify-center gap-4 text-2xl font-semibold text-brand">
        <Sparkles size={18} />
        What are you looking for?
        <Sparkles size={18} />
      </p>

      <div className="mt-10 grid gap-6 text-left md:grid-cols-3">
        {cards.map(({ icon: I, title, tag, live, desc, pts, cta, CtaIcon }) => (
          <article
            key={title}
            className="flex flex-col rounded-3xl border border-sky-200 bg-white p-6 shadow-[0_8px_30px_rgba(10,132,255,.08)]"
          >
            <div className="flex items-start justify-between">
              <span className="grid size-12 place-items-center rounded-full bg-sky-50 text-brand">
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
          </article>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map(({ I, v, l }) => (
          <div key={l} className="flex items-center justify-center gap-4">
            <span className="grid size-14 place-items-center rounded-full bg-sky-50 text-brand">
              <I size={22} />
            </span>
            <div className="text-left">
              <p className=" font-heading text-3xl font-bold">{v}</p>
              <p className="text-sm">{l}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
