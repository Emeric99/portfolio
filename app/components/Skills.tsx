"use client";
import FadeIn from "./FadeIn";

type Lang = "en" | "fr" | "de";

const content: Record<Lang, { label: string; groups: { title: string; tags: string[] }[] }> = {
  en: {
    label: "Technical Stack",
    groups: [
      { title: "Backend", tags: ["Java", "Jakarta EE", "Servlets", "REST API", "HikariCP"] },
      { title: "Databases", tags: ["MariaDB", "Redis", "SQL"] },
      { title: "DevOps & Tools", tags: ["Docker", "Tomcat", "Bash", "Git", "GitHub", "Linux"] },
      { title: "Frontend & Other", tags: ["HTML/CSS/JS", "Python", "AI Integration"] },
    ],
  },
  fr: {
    label: "Stack Technique",
    groups: [
      { title: "Backend", tags: ["Java", "Jakarta EE", "Servlets", "REST API", "HikariCP"] },
      { title: "Bases de données", tags: ["MariaDB", "Redis", "SQL"] },
      { title: "DevOps & Outils", tags: ["Docker", "Tomcat", "Bash", "Git", "GitHub", "Linux"] },
      { title: "Frontend & Autre", tags: ["HTML/CSS/JS", "Python", "Intégration IA"] },
    ],
  },
  de: {
    label: "Technischer Stack",
    groups: [
      { title: "Backend", tags: ["Java", "Jakarta EE", "Servlets", "REST API", "HikariCP"] },
      { title: "Datenbanken", tags: ["MariaDB", "Redis", "SQL"] },
      { title: "DevOps & Tools", tags: ["Docker", "Tomcat", "Bash", "Git", "GitHub", "Linux"] },
      { title: "Frontend & Sonstiges", tags: ["HTML/CSS/JS", "Python", "KI-Integration"] },
    ],
  },
};

export default function Skills({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <section id="skills" className="py-20 px-8 max-w-5xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-[#00d462] text-sm font-semibold uppercase tracking-[0.2em] mb-4">{t.label}</p>
          <h2 className="font-[family-name:var(--font-bangers)] text-6xl md:text-7xl text-white uppercase tracking-wide">
            Skills
          </h2>
          <div className="w-16 h-0.5 bg-[#00b050] mx-auto mt-4" />
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-5">
        {t.groups.map((group, i) => (
          <FadeIn key={group.title} delay={i * 0.1}>
            <div className="bg-[var(--bg-card)] border border-white/8 rounded-2xl shadow-lg shadow-black/30 p-6 hover:border-[#00b050]/30 transition-colors">
              <p className="text-[#00b050] text-xs font-semibold uppercase tracking-[0.15em] mb-4">{group.title}</p>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[var(--bg-main)] border border-white/10 text-zinc-300 text-xs px-3 py-1.5 rounded-lg font-mono"
                  >
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
