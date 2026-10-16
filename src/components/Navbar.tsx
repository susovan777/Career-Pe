import Image from "next/image";
import { Btn } from "./ui";
const links = ["Colleges", "Employers", "Jobs", "Blogs"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-extrabold text-brand">
          {/* CampusPe */}
          <Image
            src="/logo.png"
            width={150}
            height={100}
            alt="Logo of the website"
          />
        </a>
        <ul className="hidden gap-10 text-sm font-medium md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-brand">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 text-sm font-medium">
          <a href="#">Sign In</a>
          <Btn className="py-2!">Sign Up</Btn>
        </div>
      </nav>
    </header>
  );
}
