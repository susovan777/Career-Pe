import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Partners, Discovery, ResumeUpload } from "@/components/Sections";
import Audience from "@/components/Audience";
import { Showcase, Download } from "@/components/App";
import { Support, ReadyCta, Footer } from "@/components/Footer";
import { colleges, employers } from "@/lib/data";
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Discovery />
        <ResumeUpload />
        <Audience {...colleges} />
        <Audience {...employers} />
        <Showcase />
        <Download />
        <Support />
        <ReadyCta />
      </main>
      <Footer />
    </>
  );
}
