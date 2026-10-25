"use client";
import { useState } from "react";
import Image from "next/image";
import { Section } from "./ui";

const PLAY_URL = "#"; // add the real store links
const STORE_URL = "#";

// Order matches the Figma carousel (centre = index 2)
const screens = [
  { src: "/screens/jobs.png", alt: "Job recommendations" },
  { src: "/screens/post-job.png", alt: "Post a job form" },
  { src: "/screens/discover.png", alt: "Discover courses and colleges" },
  { src: "/screens/applications.png", alt: "My applications" },
  { src: "/screens/college.png", alt: "College dashboard" },
];

// phone centre offset from the middle, phone width, and opacity — all by distance from the active phone
const OFFSET = [0, 22.8, 41.6, 58]; // % of row width
const WIDTH = [23.6, 18.75, 15.8, 14]; // % of row width
const FADE = [1, 0.85, 0.6, 0];

export function Showcase() {
  const [active, setActive] = useState(2);
  return (
    <Section className="text-center md:pb-0!">
      <h2 className="text-4xl font-bold leading-none text-brand md:-translate-x-12 md:text-[40px]">
        Checkout Our App Interface Look
      </h2>
      <p className="mx-auto mt-6 max-w-215 text-base leading-[1.3] text-slate-600">
        Experience the power of a unified campus ecosystem right in your pocket.{" "}
        <b className="text-ink">CampusPe</b> offers a tailored interface for
        every user: students can explore trending courses, colleges can showcase
        their campus life, and companies can post job vacancies directly to a
        pool of qualified candidates.
      </p>

      <div className="relative mt-10 aspect-1232/608 overflow-x-clip">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,132,255,.10),transparent_65%)]" />
        {screens.map((s, n) => {
          const off = n - active;
          const d = Math.min(Math.abs(off), 3);
          return (
            <button
              key={s.src}
              onClick={() => setActive(n)}
              aria-label={`Show ${s.alt}`}
              aria-current={off === 0}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
              style={{
                left: `${50 + Math.sign(off) * OFFSET[d]}%`,
                width: `${WIDTH[d]}%`,
                opacity: FADE[d],
                zIndex: 10 - d,
                pointerEvents: d === 3 ? "none" : "auto",
              }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={300}
                height={620}
                priority={off === 0}
                className={`h-auto w-full ${off === 0 ? "drop-shadow-2xl" : "drop-shadow-lg"}`}
              />
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-5.5">
        {screens.map((s, n) => (
          <button
            key={s.src}
            onClick={() => setActive(n)}
            aria-label={`Go to ${s.alt}`}
            className={`rounded-full bg-brand transition-all ${n === active ? "size-5.5" : "size-3.75"}`}
          />
        ))}
      </div>
    </Section>
  );
}

export function Download() {
  return (
    <Section className="grid items-center gap-10 md:grid-cols-2">
      <div className="md:pl-6">
        <h2 className="text-4xl font-bold text-brand md:text-5xl">
          Download App Now
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          Elevate your academic journey with Campuspe, the all-in-one digital
          ecosystem designed to bridge the gap between education and industry.
          Whether you're a student seeking your next big internship, a college
          looking to empower your cohort, or a company scouting for top-tier
          talent, Campuspe streamlines the connection. Your career doesn't start
          at graduation—it starts here.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={PLAY_URL} aria-label="Get it on Google Play">
            <Image
              src="/stores/google-play.png"
              alt="Get it on Google Play"
              width={170}
              height={50}
              className="h-12 w-auto"
            />
          </a>
          <a href={STORE_URL} aria-label="Download on the App Store">
            <Image
              src="/stores/app-store.png"
              alt="Download on the App Store"
              width={170}
              height={50}
              className="h-12 w-auto"
            />
          </a>
        </div>
      </div>
      <Image
        src="/screens/app-mockup.png"
        alt="CampusPe app on iPhone"
        width={800}
        height={600}
        className="h-auto w-full"
      />
    </Section>
  );
}
