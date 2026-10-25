import { ArrowUpRight, Phone, Mail } from "lucide-react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Btn, Section } from "./ui";

export function Support() {
  return (
    <Section>
      <div className="rounded-3xl bg-linear-to-b from-sky-200/70 to-white px-6 py-16 text-center">
        <h2 className="text-4xl font-bold">Still have questions?</h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-slate-600">
          Our support team is here to help you succeed. Get in touch anytime.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Btn>
            Contact Support
            <ArrowUpRight size={16} />
          </Btn>
          <Btn outline>
            Schedule a Call
            <Phone size={16} />
          </Btn>
        </div>
      </div>
    </Section>
  );
}
export function ReadyCta() {
  return (
    <Section className="py-8!">
      <div className="flex flex-col justify-between gap-6 rounded-3xl border bg-white p-8 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-3xl font-bold">Ready for what's next?</h2>
          <p className="mt-2 max-w-md text-slate-600">
            Discover colleges, find opportunities, list your institution, or
            start hiring with CampusPe.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Btn>Explore Colleges →</Btn>
          <Btn>Find Opportunities →</Btn>
          <Btn outline className="border-slate-300! text-ink!">
            List Your College →
          </Btn>
          <Btn outline className="border-slate-300! text-ink!">
            Post a Job →
          </Btn>
        </div>
      </div>
    </Section>
  );
}

const cols: Record<string, string[]> = {
  "For Students": [
    "Explore Colleges",
    "Find Opportunities",
    "Internships",
    "Full-time Jobs",
    "Part-time & Gig",
    "Application Tracker",
  ],
  "For Colleges": [
    "List Your College",
    "Admissions",
    "Fee Collection",
    "Placements",
  ],
  "For Employers": ["Post a Job", "Find Talent", "Campus Hiring"],
  Company: ["About Us", "Contact Us", "Blogs", "Careers"],
  "Legal & Policies": [
    "Privacy Policy",
    "Terms & Conditions",
    "Refund & Cancellation Policy",
    "Cookie Policy",
    "Grievance Redressal",
    "Job & Internship Disclaimer",
  ],
};
const socials = [
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
];
export function Footer() {
  return (
    <footer className="bg-linear-to-b from-transparent to-sky-100/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
        <div>
          <p className="text-3xl font-extrabold text-brand">CampusPe</p>
          <p className="mt-4 text-xl text-slate-700">
            From choosing a college to finding your next opportunity.
          </p>
          <p className="mt-4 text-slate-600">
            CampusPe connects students, colleges and employers in one place.
          </p>
        </div>
        {Object.entries(cols).map(([h, ls]) => (
          <div key={h}>
            <h3 className="text-lg font-bold">{h}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {ls.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-brand">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            {h === "Legal & Policies" && (
              <a href="#" className="mt-3 block text-sm text-brand">
                View all policies →
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 border-t px-6 py-5 text-sm md:flex-row">
        <a
          href="mailto:contactus@campuspe.com"
          className="flex items-center gap-2"
        >
          <Mail size={16} className="text-brand" />
          contactus@campuspe.com
        </a>
        <a href="tel:+916362606464" className="flex items-center gap-2">
          <Phone size={16} className="text-brand" />
          +91 6362606464
        </a>
        <span className="text-slate-600">Students · Colleges · Employers</span>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t px-6 py-6 md:flex-row md:items-center">
        <p className="text-lg text-slate-700">
          © 2026 CampusPe Technologies Pvt. Ltd. Privacy Terms Grievance
        </p>
        <div className="flex gap-4 text-brand">
          {socials.map((S, i) => (
            <a key={i} href="#" aria-label="social">
              <S size={22} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
