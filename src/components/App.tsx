"use client";
import { useState } from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { Section } from "./ui";

const screens = [
  "Home",
  "Post a Job",
  "Discover",
  "My Applications",
  "College Dashboard",
];
export function Showcase() {
  const [i, setI] = useState(2);
  return (
    <Section className="text-center">
      <h2 className="text-4xl font-bold text-brand">
        Checkout Our App Interface Look
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-slate-600">
        Experience the power of a unified campus ecosystem right in your pocket.{" "}
        <b className="text-ink">CampusPe</b> offers a tailored interface for
        every user: students can explore trending courses, colleges can showcase
        their campus life, and companies can post job vacancies directly to a
        pool of qualified candidates.
      </p>
      <div className="mt-12 flex items-end justify-center gap-4 overflow-hidden">
        {screens.map((s, n) => (
          <button
            key={s}
            onClick={() => setI(n)}
            aria-label={s}
            className={`grid shrink-0 place-items-center rounded-4xl border-4 border-orange-300 bg-linear-to-b from-sky-100 to-white font-semibold text-slate-500 transition-all ${n === i ? "h-120 w-60" : "hidden h-100 w-48 opacity-70 md:grid"}`}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-4">
        {screens.map((s, n) => (
          <button
            key={s}
            aria-label={s}
            onClick={() => setI(n)}
            className={`rounded-full bg-brand transition-all ${n === i ? "size-5" : "size-3"}`}
          />
        ))}
      </div>
    </Section>
  );
}

export function Download() {
  return (
    <Section className="grid items-center gap-10 md:grid-cols-2">
      <div>
        <h2 className="text-4xl font-bold text-brand">Download App Now</h2>
        <p className="mt-5 max-w-xl text-slate-600">
          Elevate your academic journey with Campuspe, the all-in-one digital
          ecosystem designed to bridge the gap between education and industry.
          Whether you're a student seeking your next big internship, a college
          looking to empower your cohort, or a company scouting for top-tier
          talent, Campuspe streamlines the connection. Your career doesn't start
          at graduation—it starts here.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg bg-black px-4 py-2 text-white"
          >
            <FaGooglePlay size={22} />
            <span className="text-left text-[10px] leading-tight">
              GET IT ON
              <br />
              <b className="text-lg font-medium">Google Play</b>
            </span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg bg-black px-4 py-2 text-white"
          >
            <FaApple size={26} />
            <span className="text-left text-[10px] leading-tight">
              Download on the
              <br />
              <b className="text-lg font-medium">App Store</b>
            </span>
          </a>
        </div>
      </div>
      <div className="grid h-72 place-items-center rounded-3xl bg-linear-to-br from-sky-100 to-indigo-50 text-slate-400">
        App mockup image
      </div>
    </Section>
  );
}
