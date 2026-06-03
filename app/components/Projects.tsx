const content = {
  en: {
    label: "What I built",
    title: "Projects",
    desc: "Personal projects built from scratch to solve real problems.",
    projects: [
      {
        title: "Vaccination Appointment System",
        desc: "Full-stack appointment booking system for vaccination centers. Features connection pooling with HikariCP for optimized DB performance, Redis caching for session management, and containerized deployment with Docker.",
        tags: ["Java", "Jakarta EE", "MariaDB", "HikariCP", "Redis", "Docker"],
        link: "https://github.com/Emeric99",
      },
      {
        title: "Weather Service with AI Chatbot",
        desc: "RESTful weather service built with Java Servlets and deployed on Tomcat. Integrates an AI-powered chatbot for natural language weather queries, consuming external weather APIs.",
        tags: ["Java", "Servlets", "REST API", "AI Chatbot", "Tomcat"],
        link: "https://github.com/Emeric99",
      },
    ],
  },
  de: {
    label: "Was ich gebaut habe",
    title: "Projekte",
    desc: "Eigene Projekte, von Grund auf entwickelt, um reale Probleme zu lösen.",
    projects: [
      {
        title: "Impftermin-Buchungssystem",
        desc: "Vollständiges Buchungssystem für Impfzentren. Mit HikariCP-Connection-Pooling für optimierte DB-Performance, Redis-Caching für Session-Management und Docker-Containerisierung.",
        tags: ["Java", "Jakarta EE", "MariaDB", "HikariCP", "Redis", "Docker"],
        link: "https://github.com/Emeric99",
      },
      {
        title: "Wetterdienst mit KI-Chatbot",
        desc: "RESTful-Wetterdienst mit Java Servlets, deployed auf Tomcat. Integriert einen KI-Chatbot für natürlichsprachliche Wetteranfragen über externe APIs.",
        tags: ["Java", "Servlets", "REST API", "KI-Chatbot", "Tomcat"],
        link: "https://github.com/Emeric99",
      },
    ],
  },
};

export default function Projects({ lang }: { lang: "en" | "de" }) {
  const t = content[lang];
  return (
    <section id="projects" className="py-20 px-8 max-w-3xl mx-auto">
      <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">{t.label}</p>
      <h2 className="text-3xl font-bold tracking-tight mb-2">{t.title}</h2>
      <p className="text-zinc-400 mb-8">{t.desc}</p>
      <div className="flex flex-col gap-4">
        {t.projects.map((project) => (
          <div
            key={project.title}
            className="bg-zinc-900 border border-white/[0.07] hover:border-indigo-500/40 rounded-xl p-6 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-base font-semibold">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-zinc-500 hover:text-indigo-400 border border-white/[0.07] hover:border-indigo-500/40 px-3 py-1 rounded-md transition-colors"
              >
                GitHub ↗
              </a>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-indigo-500/10 text-indigo-400 text-xs font-medium px-2.5 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}