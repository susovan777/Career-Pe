export interface TagItem {
  label: string;
  className: string;
  icon?:
    | "check"
    | "chat"
    | "whatsapp"
    | "partners"
    | "connect"
    | "dot-red"
    | "sparkle"
    | "refresh";
  subtext?: string;
}

export interface AudienceItem {
  n: string;
  k?: string;
  t: string;
  d: string;
  badge?: string;
  tags: TagItem[];
}

export interface AudienceSectionData {
  id: string;
  eyebrow: string;
  a: string;
  b: string;
  desc: string;
  cta: string;
  flip?: boolean;
  items: AudienceItem[];
}

export const colleges: AudienceSectionData = {
  id: "colleges",
  eyebrow: "02 • For Colleges",
  a: "Get Discovered by",
  b: "Students and Recruiters.",
  desc: "Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.",
  cta: "List Your College",
  items: [
    {
      n: "01",
      k: "Verified profile",
      t: "Build your college profile",
      d: "Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.",
      tags: [
        {
          label: "NAAC A++ Ready",
          className:
            "border-emerald-500 text-emerald-700 bg-emerald-50/50 font-medium",
          icon: "check",
        },
        {
          label: "98% Match",
          className: "border-sky-400 text-sky-600 bg-sky-50/50 font-medium",
        },
      ],
    },
    {
      n: "02",
      k: "Direct enroll",
      t: "Students discover and connect",
      d: "Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.",
      tags: [
        {
          label: "Direct Enquiries",
          className: "bg-sky-50 text-blue-600 border-transparent font-medium",
          icon: "chat",
        },
        {
          label: "WHATSAPP / CHAT",
          className:
            "bg-slate-50 text-slate-700 border-slate-200 font-semibold tracking-wider text-[10px]",
          icon: "whatsapp",
          subtext: "Avg. response: <15 min",
        },
      ],
    },
    {
      n: "03",
      k: "Campus recruiting",
      t: "Recruiters discover your College",
      d: "Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.",
      tags: [
        {
          label: "500+ Hiring Partners",
          className:
            "bg-purple-50 text-purple-700 border-transparent font-medium",
          icon: "partners",
        },
        {
          label: "Connect Directly",
          className:
            "border-indigo-200 bg-indigo-50/50 text-indigo-700 font-medium",
          icon: "connect",
        },
      ],
    },
    {
      n: "04",
      k: "Live hud",
      t: "Track placements in real time",
      d: "Track students, interviews, offers and placements from one centralized dashboard.",
      tags: [
        {
          label: "LIVE PLACEMENTS",
          className:
            "bg-red-50 text-red-600 border-transparent font-semibold tracking-wider text-[10px]",
          icon: "dot-red",
        },
        {
          label: "Students · Interviews · Offers",
          className:
            "bg-[#0080FF] text-white border-transparent font-medium shadow-sm",
        },
      ],
    },
  ],
};

export const employers: AudienceSectionData = {
  id: "employers",
  eyebrow: "03 • For Employers",
  a: "Stop running campus drives.",
  b: "Start hiring the right people.",
  desc: "Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.",
  cta: "Post a Job",
  flip: true,
  items: [
    {
      n: "01",
      t: "Post a role in minutes",
      d: "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.",
      badge: "Instant setup",
      tags: [
        {
          label: "5 Min Deployment",
          className:
            "bg-emerald-50 text-emerald-700 border-transparent font-medium",
          icon: "sparkle",
        },
        {
          label: "500+ Campus Network",
          className: "border-slate-200 text-slate-600 bg-white",
        },
      ],
    },
    {
      n: "02",
      t: "Receive a matched shortlist",
      d: "Get candidates matched to your role by skills, experience, location and hiring requirements.",
      badge: "Instant setup",
      tags: [
        {
          label: "Zero CV Clutter",
          className:
            "bg-purple-50 text-purple-700 border-transparent font-medium",
          icon: "refresh",
        },
        {
          label: "Tier 1–Tier 3 Parity",
          className: "border-slate-200 text-slate-600 bg-white",
        },
      ],
    },
    {
      n: "03",
      t: "Connect with candidates directly",
      d: "Message, schedule interviews, and move candidates through your pipeline — all in one place.",
      badge: "Instant setup",
      tags: [
        {
          label: "In-App Scheduling",
          className: "bg-sky-50 text-blue-600 border-transparent font-medium",
          icon: "chat",
        },
        {
          label: "1-Click Video / Chat",
          className: "border-slate-200 text-slate-600 bg-white",
        },
      ],
    },
    {
      n: "04",
      t: "Reduce your time-to-hire",
      d: "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.",
      badge: "Instant setup",
      tags: [
        {
          label: "<2 DAYS",
          className:
            "bg-[#0080FF] text-white border-transparent font-bold tracking-wider text-[11px]",
        },
        {
          label: "57% Faster Hiring",
          className:
            "bg-emerald-50 text-emerald-700 border-transparent font-medium",
        },
      ],
    },
  ],
};
