import Image from "next/image";
import { ArrowUpRight, Mail, Phone, PhoneCall } from "lucide-react";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { Section } from "./ui";
import { IoLogoWhatsapp } from "react-icons/io";

const LOGO_SRC = "/logo.png"; // change if your logo file name/extension differs

/* Glow colours are estimated from the screenshot – tweak the rgba values if needed */
const supportGlow = [
  "radial-gradient(34% 60% at 10% 0%, rgba(125,185,255,.55), transparent 70%)",
  "radial-gradient(34% 60% at 92% 4%, rgba(125,185,255,.50), transparent 70%)",
  "linear-gradient(to bottom, rgba(186,219,255,.70), rgba(255,255,255,0) 75%)",
].join(",");

const footerGlow = [
  "radial-gradient(60% 14% at 50% 10%, rgba(254,226,200,.35), transparent 75%)",
  "radial-gradient(34% 32% at 3% 100%, rgba(96,165,250,.70), transparent 72%)",
  "radial-gradient(26% 24% at 22% 100%, rgba(147,197,253,.50), transparent 72%)",
  "radial-gradient(36% 30% at 98% 100%, rgba(129,140,248,.55), transparent 72%)",
  "radial-gradient(26% 26% at 74% 100%, rgba(147,197,253,.50), transparent 72%)",
].join(",");

/* ---------------- Support ---------------- */
export function Support() {
  return (
    <Section className="max-w-343.25! pb-24!">
      <div className="relative overflow-hidden rounded-4xl bg-white px-6 pb-22 pt-16 text-center shadow-[0_24px_60px_rgba(129,140,248,.22)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: supportGlow }}
        />
        <div className="relative">
          <h2 className="text-[32px] font-bold leading-10 text-slate-900">
            Still have questions?
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-xl leading-[30px] text-slate-600">
            Our support team is here to help you succeed. Get in touch anytime.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-5">
            <a
              href="#"
              className="flex h-[52px] items-center gap-3 rounded-full bg-brand pl-7 pr-1 text-base font-semibold text-white transition hover:bg-blue-600"
            >
              Contact Support
              <span className="grid size-11 place-items-center rounded-full bg-white text-brand">
                <ArrowUpRight size={20} />
              </span>
            </a>
            <a
              href="#"
              className="flex h-[52px] items-center gap-3 rounded-full border border-brand bg-white pl-7 pr-1 text-base font-semibold text-brand transition hover:bg-sky-50"
            >
              Schedule a Call
              <span className="grid size-11 place-items-center rounded-full bg-brand text-white">
                <PhoneCall size={20} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Ready CTA (rendered inside <Footer />) ---------------- */
const solid = "bg-brand text-white font-semibold hover:bg-blue-600";
const ghost =
  "border border-slate-300 bg-white text-slate-800 font-medium hover:border-brand hover:text-brand";
const ctaButtons: [string, string][] = [
  ["Explore Colleges", solid],
  ["Find Opportunities", solid],
  ["List Your College", ghost],
  ["Post a Job", ghost],
];

function ReadyCta() {
  return (
    <div className="mx-auto max-w-[1373px] px-6 pt-10">
      <div className="flex flex-col justify-between gap-6 rounded-4xl border border-slate-300 bg-white px-8 py-11 lg:flex-row lg:items-center lg:px-13">
        <div>
          <h2 className="text-3xl font-bold leading-9 text-slate-900">
            Ready for what’s next?
          </h2>
          <p className="mt-2 max-w-[400px] text-base leading-6 text-slate-600">
            Discover colleges, find opportunities, list your institution, or
            start hiring with CampusPe.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {ctaButtons.map(([t, c]) => (
            <a
              key={t}
              href="#"
              className={`flex h-11 items-center rounded-[10px] px-5 text-[15px] transition ${c}`}
            >
              {t} →
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Footer ---------------- */
const cols = [
  {
    h: "For Students",
    loose: true,
    links: [
      "Explore Colleges",
      "Find Opportunities",
      "Internships",
      "Full-time Jobs",
      "Part-time & Gig",
      "Application Tracker",
    ],
  },
  {
    h: "For Colleges",
    links: ["List Your College", "Admissions", "Fee Collection", "Placements"],
  },
  { h: "For Employers", links: ["Post a Job", "Find Talent", "Campus Hiring"] },
  { h: "Company", links: ["About Us", "Contact Us", "Blogs", "Careers"] },
  {
    h: "Legal & Policies",
    legal: true,
    links: [
      "Privacy Policy",
      "Terms & Conditions",
      "Refund & Cancellation Policy",
      "Cookie Policy",
      "Grievance Redressal",
      "Job & Internship Disclaimer",
    ],
  },
];

const socials = [
  { l: "LinkedIn", i: <FaLinkedin size={22} /> },
  { l: "Instagram", i: <FaInstagramSquare size={22} /> },
  {
    l: "Twitter",
    i: (
      <span className="grid size-5.5 place-items-center rounded-full bg-blue-900 text-white">
        <FaTwitter size={12} />
      </span>
    ),
  },
  { l: "Facebook", i: <FaFacebook size={22} /> },
  { l: "WhatsApp", i: <IoLogoWhatsapp size={25} /> },
  { l: "YouTube", i: <FaYoutube size={26} /> },
];

const iconBox =
  "grid size-[26px] shrink-0 place-items-center rounded-md border border-brand bg-white text-brand";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#fbfbfd]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: footerGlow }}
      />

      <ReadyCta />

      <div className="mx-auto max-w-[1373px] px-6">
        <div className="grid gap-10 pt-11 md:grid-cols-3 lg:grid-cols-[247fr_112fr_106fr_118fr_117fr_137fr] lg:gap-0">
          <div className="md:col-span-3 lg:col-span-1">
            <Image
              src={LOGO_SRC}
              alt="CampusPe"
              width={198}
              height={48}
              className="h-12 w-auto"
            />
            <p className="mt-[34px] max-w-[360px] text-xl leading-[30px] text-slate-800">
              From choosing a college to finding your next opportunity.
            </p>
            <p className="mt-[22px] max-w-[360px] text-xl leading-[30px] text-slate-600">
              CampusPe connects students, colleges and employers in one place.
            </p>
          </div>

          {cols.map(({ h, links, loose, legal }) => (
            <div key={h}>
              <h3 className="text-xl font-semibold leading-7 text-slate-900">
                {h}
              </h3>
              <ul
                className={`flex flex-col text-sm leading-5 text-slate-600 ${
                  loose ? "mt-4 gap-[17px]" : "mt-3 gap-3"
                }`}
              >
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-brand">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
              {legal && (
                <>
                  <a
                    href="#"
                    className="mt-[15px] block text-sm leading-5 text-brand"
                  >
                    View all policies →
                  </a>
                  <p className="mt-8 rounded-xl border border-sky-200 bg-sky-50/60 p-4 text-base leading-6 text-slate-800 lg:-ml-3 lg:w-[228px]">
                    Separate user, institution and employer terms can live
                    inside the full Policies page.
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-7 border-t border-slate-500" />
        <div className="flex flex-wrap items-center justify-between gap-4 pb-14 pt-7">
          <div className="flex flex-wrap items-center gap-7 text-[15px] text-slate-700">
            <a
              href="mailto:contactus@campuspe.com"
              className="flex items-center gap-2.5"
            >
              <span className={iconBox}>
                <Mail size={14} />
              </span>
              contactus@campuspe.com
            </a>
            <a href="tel:+916362606464" className="flex items-center gap-2.5">
              <span className={iconBox}>
                <Phone size={14} />
              </span>
              +91 6362606464
            </a>
          </div>
          <span className="flex items-center gap-2 text-sm text-slate-700">
            <i className="size-2 rounded-full bg-emerald-500" />
            Students · Colleges · Employers
          </span>
        </div>

        <div className="border-t border-slate-500" />
        <div className="flex flex-wrap items-center justify-between gap-4 pb-9 pt-7">
          <p className="text-[22px] leading-7.5 text-blue-950">
            2026 CampusPe Technologies Pvt. Ltd. Privacy Terms Grievance
          </p>
          <div className="flex items-center gap-[22px] text-blue-900">
            {socials.map(({ l, i }) => (
              <a key={l} href="#" aria-label={l}>
                {i}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
