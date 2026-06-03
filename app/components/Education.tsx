"use client";
import FadeIn from "./FadeIn";

const content = {
  en: {
    label: "Background",
    title: "Education & Certifications",
    items: [
      {
        title: "B.Sc. Informatik",
        place: "Hochschule Bremerhaven",
        date: "2022 – present",
        desc: "Specialization: Software Development & Artificial Intelligence · 6th semester",
        active: true,
      },
      {
        title: "DataCamp Certifications",
        place: "DataCamp",
        date: "2024",
        desc: "Multiple courses completed in data science and software engineering.",
        active: false,
      },
      {
        title: "LinkedIn Learning Certifications",
        place: "LinkedIn Learning",
        date: "2024",
        desc: "Software development and professional skills.",
        active: false,
      },
    ],
  },
  de: {
    label: "Werdegang",
    title: "Ausbildung & Zertifikate",
    items: [
      {
        title: "B.Sc. Informatik",
        place: "Hochschule Bremerhaven",
        date: "2022 – heute",
        desc: "Schwerpunkt: Softwareentwicklung & Künstliche Intelligenz · 6. Semester",
        active: true,
      },
      {
        title: "DataCamp-Zertifikate",
        place: "DataCamp",
        date: "2024",
        desc: "Mehrere abgeschlossene Kurse in Data Science und Software Engineering.",
        active: false,
      },
      {
        title: "LinkedIn Learning-Zertifikate",
        place: "LinkedIn Learning",
        date: "2024",
        desc: "Softwareentwicklung und professionelle Fähigkeiten.",
        active: false,
      },
    ],
  },
};

export default function Education({ lang }: { lang: "en" | "de" }) {
  const t = content[lang];
  return (
    <section id="education" className="py-20 px-8 max-w-3xl mx-auto">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">{t.label}</p>
        <h2 className="text-3xl font-bold tracking-tight mb-8">{t.title}</h2>
      </FadeIn>
      <div className="flex flex-col gap-4">
        {t.items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.15}>
            <div className="bg-zinc-900/60 border-l-2 border-l-emerald-500 border border-white/[0.07] rounded-r-xl p-5">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <div className="flex items-center gap-2">
                  {item.active && (
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                      Active
                    </span>
                  )}
                  <span className="text-xs text-zinc-500">{item.date}</span>
                </div>
              </div>
              <p className="text-xs text-emerald-400 mb-1">{item.place}</p>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}