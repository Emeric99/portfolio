const content = {
  en: {
    label: "Background",
    title: "Education & Certifications",
    items: [
      {
        title: "B.Sc. Informatik",
        place: "Hochschule Bremerhaven",
        date: "Oct 2023 – present",
        desc: "Specialization: Software Development & Artificial Intelligence · 6th semester",
      },
      {
        title: "DataCamp Certifications",
        place: "DataCamp",
        date: "2024",
        desc: "Multiple courses completed in data science and software engineering.",
      },
      {
        title: "LinkedIn Learning Certifications",
        place: "LinkedIn Learning",
        date: "2024",
        desc: "Software development and professional skills.",
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
        date: "Okt2023 – heute",
        desc: "Schwerpunkt: Softwareentwicklung & Künstliche Intelligenz · 6. Semester",
      },
      {
        title: "DataCamp-Zertifikate",
        place: "DataCamp",
        date: "2024",
        desc: "Mehrere abgeschlossene Kurse in Data Science und Software Engineering.",
      },
      {
        title: "LinkedIn Learning-Zertifikate",
        place: "LinkedIn Learning",
        date: "2024",
        desc: "Softwareentwicklung und professionelle Fähigkeiten.",
      },
    ],
  },
};

export default function Education({ lang }: { lang: "en" | "de" }) {
  const t = content[lang];
  return (
    <section id="education" className="py-20 px-8 max-w-3xl mx-auto">
      <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">{t.label}</p>
      <h2 className="text-3xl font-bold tracking-tight mb-8">{t.title}</h2>
      <div className="flex flex-col gap-4">
        {t.items.map((item) => (
          <div
            key={item.title}
            className="bg-zinc-900 border-l-2 border-l-indigo-500 border border-white/[0.07] rounded-r-xl p-5"
          >
            <div className="flex items-start justify-between mb-1">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <span className="text-xs text-zinc-500">{item.date}</span>
            </div>
            <p className="text-xs text-emerald-400 mb-1">{item.place}</p>
            <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}