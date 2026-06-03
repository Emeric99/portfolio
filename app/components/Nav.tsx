"use client";

type Lang = "en" | "fr" | "de";

const links: { label: Record<Lang, string>; href: string }[] = [
  { label: { en: "About", fr: "À propos", de: "Über mich" }, href: "#about" },
  { label: { en: "Academic", fr: "Académique", de: "Ausbildung" }, href: "#academic" },
  { label: { en: "Projects", fr: "Projets", de: "Projekte" }, href: "#projects" },
  { label: { en: "Skills", fr: "Compétences", de: "Kenntnisse" }, href: "#skills" },
  { label: { en: "Certificates", fr: "Certificats", de: "Zertifikate" }, href: "#certificates" },
  { label: { en: "Contact", fr: "Contact", de: "Kontakt" }, href: "#contact" },
];

export default function Nav({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 px-8 flex items-center justify-between bg-[#0d1117]/90 backdrop-blur-md border-b border-white/5">
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
      <div className="flex items-center gap-4">
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
      </div>
    </nav>
  );
}
