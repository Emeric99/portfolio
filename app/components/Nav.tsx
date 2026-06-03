"use client";
import { useState } from "react";

const links = [
  { label: { en: "About",     de: "Über mich" }, href: "#about" },
  { label: { en: "Skills",    de: "Kenntnisse" }, href: "#skills" },
  { label: { en: "Projects",  de: "Projekte" }, href: "#projects" },
  { label: { en: "Education", de: "Ausbildung" }, href: "#education" },
  { label: { en: "Contact",   de: "Kontakt" }, href: "#contact" },
];

export default function Nav({ lang, setLang }: { lang: "en" | "de"; setLang: (l: "en" | "de") => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 px-8 flex items-center justify-between border-b border-white/[0.07] bg-[#0d0d0d]/80 backdrop-blur-md">
      <span className="font-bold text-base tracking-tight">ET.</span>
      <ul className="flex gap-6">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-xs text-zinc-500 hover:text-white transition-colors">
              {l.label[lang]}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex bg-zinc-900 border border-white/[0.07] rounded-lg p-[3px] gap-1">
        {(["en", "de"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`text-xs px-3 py-1 rounded-md transition-all font-medium ${
              lang === l ? "bg-indigo-500 text-white" : "text-zinc-500 hover:text-white"
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  );
}