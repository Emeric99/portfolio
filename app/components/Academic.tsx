"use client";
import FadeIn from "./FadeIn";

type Lang = "en" | "fr" | "de";

const content: Record<Lang, {
  label: string;
  items: { date: string; title: string; place: string; desc: string; active?: boolean }[];
}> = {
  en: {
    label: "Education & Research",
    items: [
      {
        date: "10/2023 – Present",
        title: "B.Sc. Informatik",
        place: "Hochschule Bremerhaven, Germany",
        desc: "Advanced study in software development, artificial intelligence, databases, algorithms, and distributed systems. Currently in 6th semester.",
        active: true,
      },
      {
        date: "2022",
        title: "German Language — C1",
        place: "Academy of Languages, Cameroon",
        desc: "Achieved C1 level in German to qualify for university studies in Germany.",
      },
      {
        date: "2021",
        title: "Baccalauréat C (Mathematics & Physics)",
        place: "Cameroon",
        desc: "Scientific baccalaureate with focus on mathematics and physics. Foundation for engineering studies.",
      },
    ],
  },
  fr: {
    label: "Formation & Recherche",
    items: [
      {
        date: "10/2023 – aujourd'hui",
        title: "B.Sc. Informatik",
        place: "Hochschule Bremerhaven, Allemagne",
        desc: "Étude approfondie en développement logiciel, intelligence artificielle, bases de données, algorithmes et systèmes distribués. 6e semestre en cours.",
        active: true,
      },
      {
        date: "2022",
        title: "Langue allemande — C1",
        place: "Academy of Languages, Cameroun",
        desc: "Niveau C1 en allemand obtenu pour accéder aux études universitaires en Allemagne.",
      },
      {
        date: "2021",
        title: "Baccalauréat C (Mathématiques & Physique)",
        place: "Cameroun",
        desc: "Baccalauréat scientifique axé sur les mathématiques et la physique. Base pour les études d'ingénierie.",
      },
    ],
  },
  de: {
    label: "Ausbildung & Forschung",
    items: [
      {
        date: "10/2023 – heute",
        title: "B.Sc. Informatik",
        place: "Hochschule Bremerhaven, Deutschland",
        desc: "Vertieftes Studium in Softwareentwicklung, Künstlicher Intelligenz, Datenbanken, Algorithmen und verteilten Systemen. Aktuell im 6. Semester.",
        active: true,
      },
      {
        date: "2022",
        title: "Deutsch — C1",
        place: "Academy of Languages, Kamerun",
        desc: "C1-Niveau in Deutsch erreicht, um das Studium in Deutschland zu beginnen.",
      },
      {
        date: "2021",
        title: "Baccalauréat C / Abitur (Mathematik & Physik)",
        place: "Kamerun",
        desc: "Wissenschaftliches Abitur mit Schwerpunkt Mathematik und Physik. Grundlage für das Ingenieurstudium.",
      },
    ],
  },
};

export default function Academic({ lang }: { lang: Lang }) {
  const t = content[lang];
  // lang already available from prop
  return (
    <section id="academic" className="py-20 px-8 max-w-4xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-[#00d462] text-sm font-semibold uppercase tracking-[0.2em] mb-4">{t.label}</p>
          <h2 className="font-[family-name:var(--font-bangers)] text-6xl md:text-7xl text-white uppercase tracking-wide">
            {lang === "fr" ? "Parcours Académique" : lang === "de" ? "Akademischer Weg" : "Academic Path"}
          </h2>
          <div className="w-16 h-0.5 bg-[#00b050] mx-auto mt-4" />
        </div>
      </FadeIn>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-[#00b050]/20" />

        <div className="flex flex-col gap-8">
          {t.items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.15}>
              <div className="flex gap-8">
                <div className="relative flex-shrink-0 w-12 flex justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#00b050] mt-5 z-10 ring-4 ring-[#00b050]/20" />
                </div>
                <div className="flex-1 bg-[var(--bg-card)] border border-white/8 rounded-2xl shadow-lg shadow-black/30 p-6 mb-2 hover:border-[#00b050]/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs text-[#00d462] border border-[#00b050]/40 px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                    {item.active && (
                      <span className="text-xs text-[#00d462] border border-[#00b050]/40 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                        Active
                      </span>
                    )}
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-[#00d462] text-sm flex items-center gap-1 mb-3">
                    <span>📍</span> {item.place}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
