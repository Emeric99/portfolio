"use client";
import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Academic from "./components/Academic";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function Home() {
  const [lang, setLang] = useState<"en" | "fr" | "de">("de");

  return (
    <main className="min-h-screen bg-[#0d1117] text-white font-sans">
      <Nav lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Academic lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Certificates lang={lang} />
      <Contact lang={lang} />
      <footer className="border-t border-white/5 text-center py-8 text-xs text-zinc-600">
        <p className="text-zinc-700">
          {{ en: "Thank you for visiting", fr: "Merci de votre visite", de: "Danke für Ihren Besuch" }[lang]}
        </p>
      </footer>
    </main>
  );
}
