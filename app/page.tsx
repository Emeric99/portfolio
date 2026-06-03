  "use client";
  import { useState } from "react";
  import Nav from "./components/Nav";
  import Hero from "./components/Hero";
  import About from "./components/About";
  import Skills from "./components/Skills";
  import Projects from "./components/Projects";
  import Education from "./components/Education";
  import Contact from "./components/Contact";

  export default function Home() {
    const [lang, setLang] = useState<"en" | "de">("en");

    return (
      <main className="min-h-screen bg-[#030a06] text-white font-sans">
        <Nav lang={lang} setLang={setLang} />
        <Hero lang={lang} />
        <hr className="border-white/[0.06]" />
        <About lang={lang} />
        <hr className="border-white/[0.06]" />
        <Skills lang={lang} />
        <hr className="border-white/[0.06]" />
        <Projects lang={lang} />
        <hr className="border-white/[0.06]" />
        <Education lang={lang} />
        <hr className="border-white/[0.06]" />
        <Contact lang={lang} />
        <footer className="border-t border-white/[0.06] text-center py-8 text-xs text-zinc-600">
          <p>© 2025 Emeric Tcholagheu · Built with Next.js & Vercel</p>
          <p className="mt-1 text-zinc-700">Merci de votre visite · Thank you for visiting</p>
        </footer>
      </main>
    );
  }