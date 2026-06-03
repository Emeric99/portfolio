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
    <main className="min-h-screen bg-[#0d0d0d] text-white font-sans">
      <Nav lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <hr className="border-white/[0.07]" />
      <About lang={lang} />
      <hr className="border-white/[0.07]" />
      <Skills lang={lang} />
      <hr className="border-white/[0.07]" />
      <Projects lang={lang} />
      <hr className="border-white/[0.07]" />
      <Education lang={lang} />
      <hr className="border-white/[0.07]" />
      <Contact lang={lang} />
      <footer className="border-t border-white/[0.07] text-center py-6 text-xs text-zinc-600">
        © 2025 Emeric Tcholagheu · Built with Next.js & Vercel
      </footer>
    </main>
  );
}