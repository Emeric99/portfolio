"use client";
import FadeIn from "./FadeIn";

const content = {
  en: {
    label: "Who I am",
    title: "About Me",
    desc: "6th semester student building real-world Java systems with Docker, databases, and REST APIs.",
    cards: [
      { icon: "🎓", title: "Education", text: "B.Sc. Informatik · Hochschule Bremerhaven · 6th semester" },
      { icon: "💻", title: "Specialization", text: "Software Development & Artificial Intelligence" },
      { icon: "🌍", title: "Languages", text: "French (fluent) · German (fluent) · English (basic)" },
      { icon: "🎯", title: "Goal", text: "Werkstudent or Pflichtpraktikum in software development" },
    ],
  },
  de: {
    label: "Wer ich bin",
    title: "Über mich",
    desc: "Student im 6. Semester, der praxisnahe Java-Systeme mit Docker, Datenbanken und REST APIs entwickelt.",
    cards: [
      { icon: "🎓", title: "Studium", text: "B.Sc. Informatik · Hochschule Bremerhaven · 6. Semester" },
      { icon: "💻", title: "Schwerpunkt", text: "Softwareentwicklung & Künstliche Intelligenz" },
      { icon: "🌍", title: "Sprachen", text: "Französisch (verhandlungssicher) · Deutsch (verhandlungssicher) · Englisch (Grundkenntnisse)" },
      { icon: "🎯", title: "Ziel", text: "Werkstudent oder Pflichtpraktikum in der Softwareentwicklung" },
    ],
  },
};

export default function About({ lang }: { lang: "en" | "de" }) {
  const t = content[lang];
  return (
    <section id="about" className="py-20 px-8 max-w-3xl mx-auto">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">{t.label}</p>
        <h2 className="text-3xl font-bold tracking-tight mb-2">{t.title}</h2>
        <p className="text-zinc-400 mb-8">{t.desc}</p>
      </FadeIn>
      <div className="grid grid-cols-2 gap-4">
        {t.cards.map((card, i) => (
          <FadeIn key={card.title} delay={i * 0.1}>
            <div className="bg-zinc-900 border border-white/[0.07] rounded-xl p-5 h-full">
              <div className="text-2xl mb-2">{card.icon}</div>
              <h3 className="text-sm font-semibold mb-1">{card.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{card.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}