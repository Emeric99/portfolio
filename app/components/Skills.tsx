"use client";
import FadeIn from "./FadeIn";

const content = {
  en: {
    label: "Technical stack",
    title: "Skills",
    desc: "Technologies I work with on real projects.",
    groups: [
      { title: "Backend", tags: ["Java", "Jakarta EE", "Servlets", "REST API", "HikariCP"] },
      { title: "Databases", tags: ["MariaDB", "Redis", "SQL"] },
      { title: "DevOps & Tools", tags: ["Docker", "Tomcat", "Bash", "Git", "GitHub"] },
      { title: "Frontend & Other", tags: ["HTML/CSS/JS", "Python", "AI Integration"] },
    ],
  },
  de: {
    label: "Technischer Stack",
    title: "Kenntnisse",
    desc: "Technologien, die ich in echten Projekten einsetze.",
    groups: [
      { title: "Backend", tags: ["Java", "Jakarta EE", "Servlets", "REST API", "HikariCP"] },
      { title: "Datenbanken", tags: ["MariaDB", "Redis", "SQL"] },
      { title: "DevOps & Tools", tags: ["Docker", "Tomcat", "Bash", "Git", "GitHub"] },
      { title: "Frontend & Sonstiges", tags: ["HTML/CSS/JS", "Python", "KI-Integration"] },
    ],
  },
};

export default function Skills({ lang }: { lang: "en" | "de" }) {
  const t = content[lang];
  return (
    <section id="skills" className="py-20 px-8 max-w-3xl mx-auto">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">{t.label}</p>
        <h2 className="text-3xl font-bold tracking-tight mb-2">{t.title}</h2>
        <p className="text-zinc-400 mb-8">{t.desc}</p>
      </FadeIn>
      <div className="grid grid-cols-2 gap-4">
        {t.groups.map((group, i) => (
          <FadeIn key={group.title} delay={i * 0.1}>
            <div className="bg-zinc-900 border border-white/[0.07] rounded-xl p-5 h-full">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">{group.title}</p>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span key={tag} className="bg-zinc-800 border border-white/[0.07] text-zinc-300 text-xs px-3 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}