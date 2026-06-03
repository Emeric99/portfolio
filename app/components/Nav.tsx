"use client";
import { useEffect, useState } from "react";

type Lang = "en" | "fr" | "de";

const links: { label: Record<Lang, string>; href: string }[] = [
  { label: { en: "About", fr: "À propos", de: "Über mich" }, href: "#about" },
  { label: { en: "Academic", fr: "Académique", de: "Ausbildung" }, href: "#academic" },
  { label: { en: "Projects", fr: "Projets", de: "Projekte" }, href: "#projects" },
  { label: { en: "Skills", fr: "Compétences", de: "Kenntnisse" }, href: "#skills" },
  { label: { en: "Certificates", fr: "Certificats", de: "Zertifikate" }, href: "#certificates" },
  { label: { en: "Contact", fr: "Contact", de: "Kontakt" }, href: "#contact" },
];

const darkVars = {
  "--bg-main": "#0d1117",
  "--bg-card": "#161b27",
  "--bg-elevated": "#1a1f2e",
  "--text-body": "#f1f5f9",
  "--text-muted": "#71717a",
  "--border-subtle": "rgba(255,255,255,0.08)",
};

const lightVars = {
  "--bg-main": "#f0f4f8",
  "--bg-card": "#ffffff",
  "--bg-elevated": "#e8edf3",
  "--text-body": "#0f172a",
  "--text-muted": "#64748b",
  "--border-subtle": "rgba(0,0,0,0.08)",
};

export default function Nav({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [dark, setDark] = useState(true);

  const applyTheme = (isDark: boolean) => {
    const vars = isDark ? darkVars : lightVars;
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, val]) => root.style.setProperty(key, val));
    // Force text color on body
    document.body.style.color = isDark ? "#f1f5f9" : "#0f172a";
    document.body.style.backgroundColor = isDark ? "#0d1117" : "#f0f4f8";
  };

  useEffect(() => {
    applyTheme(dark);
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 px-8 flex items-center justify-between bg-[var(--bg-main)]/90 backdrop-blur-md border-b border-white/5 transition-colors duration-300">
      <a href="#hero" className="font-[family-name:var(--font-bangers)] text-2xl text-[#00b050] tracking-wide italic">
        ET.
      </a>
      <ul className="hidden md:flex gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
              {l.label[lang]}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-5">
        {(["en", "fr", "de"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`text-sm font-semibold transition-colors ${
              lang === l
                ? "text-white underline underline-offset-4 decoration-[#00b050]"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}

        {/* Theme toggle — icône SVG transparente */}
        <button
          onClick={() => setDark(!dark)}
          className="text-zinc-400 hover:text-white transition-colors"
          title={dark ? "Light mode" : "Dark mode"}
        >
          {dark ? (
            // Soleil
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4" />
              <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            // Lune
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
