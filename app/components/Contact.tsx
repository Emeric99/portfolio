"use client";
import FadeIn from "./FadeIn";

const content = {
  en: {
    label: "Get in touch",
    title: "Let's Connect",
    desc: "Open to Werkstudent positions and Pflichtpraktikum in software development. Feel free to reach out!",
    links: [
      { label: "GitHub", value: "github.com/Emeric99", href: "https://github.com/Emeric99" },
      { label: "LinkedIn", value: "emeric-tcholagheu", href: "https://www.linkedin.com/in/emeric-tcholagheu-6bb73b313" },
      { label: "Email", value: "emerictcholagheu@gmail.com", href: "mailto:emerictcholagheu@gmail.com" },
    ],
  },
  de: {
    label: "Kontakt aufnehmen",
    title: "Kontakt",
    desc: "Offen für Werkstudent-Stellen und Pflichtpraktikum in der Softwareentwicklung. Schreib mir gerne!",
    links: [
      { label: "GitHub", value: "github.com/Emeric99", href: "https://github.com/Emeric99" },
      { label: "LinkedIn", value: "emeric-tcholagheu", href: "https://www.linkedin.com/in/emeric-tcholagheu-6bb73b313" },
      { label: "E-Mail", value: "emerictcholagheu@gmail.com", href: "mailto:emerictcholagheu@gmail.com" },
    ],
  },
};

export default function Contact({ lang }: { lang: "en" | "de" }) {
  const t = content[lang];
  return (
    <section id="contact" className="py-20 px-8 max-w-3xl mx-auto">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">{t.label}</p>
        <h2 className="text-3xl font-bold tracking-tight mb-2">{t.title}</h2>
        <p className="text-zinc-400 mb-8 max-w-md">{t.desc}</p>
      </FadeIn>
      <div className="grid grid-cols-3 gap-4">
        {t.links.map((link, i) => (
          <FadeIn key={link.label} delay={i * 0.1}>
            <a href={link.href} target="_blank"
              className="bg-zinc-900/60 border border-white/[0.07] hover:border-emerald-500/30 rounded-xl p-5 flex flex-col items-center gap-2 transition-colors text-center">
              <span className="text-sm font-semibold text-emerald-400">{link.label}</span>
              <span className="text-xs text-zinc-500">{link.value}</span>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}