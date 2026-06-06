"use client";
import FadeIn from "./FadeIn";

type Lang = "en" | "fr" | "de";

const projects = [
  {
    title: "Impftermin-Buchungssystem",
    desc: {
      en: "Full-stack appointment booking system for vaccination centers. Features connection pooling with HikariCP, Redis caching for session management, and containerized deployment with Docker.",
      fr: "Système complet de réservation pour centres de vaccination. Connection pooling HikariCP, cache Redis pour les sessions, déploiement Docker.",
      de: "Vollständiges Buchungssystem für Impfzentren. Mit HikariCP-Connection-Pooling, Redis-Caching für Sessions und Docker-Containerisierung.",
    },
    lang: "Java",
    langColor: "#b07219",
    link: "https://github.com/Emeric99/Impftermin-Buchungssystem",
  },
  {
    title: "Wetterdienst",
    desc: {
      en: "RESTful weather service built with Java Servlets, deployed on Tomcat. Integrates an AI-powered chatbot for natural language weather queries via external APIs.",
      fr: "Service météo RESTful avec Java Servlets, déployé sur Tomcat. Chatbot IA pour requêtes météo en langage naturel.",
      de: "RESTful-Wetterdienst mit Java Servlets, deployed auf Tomcat. KI-Chatbot für natürlichsprachliche Wetteranfragen.",
    },
    lang: "Java",
    langColor: "#b07219",
    link: "https://github.com/Emeric99/wetterdienst",
  },
  {
    title: "Afroshop",
    desc: {
      en: "E-commerce frontend for an Asian & African products shop. Includes a product catalog, shopping cart, order history, user auth, and an interactive map via Leaflet.js. Connects to a Bash CGI backend.",
      fr: "Frontend e-commerce pour une boutique de produits asiatiques et africains. Catalogue produits, panier, historique de commandes, authentification et carte interactive Leaflet.js.",
      de: "E-Commerce-Frontend für einen Asia- & Afrika-Shop. Produktkatalog, Warenkorb, Bestellhistorie, Nutzer-Auth und interaktive Karte mit Leaflet.js.",
    },
    lang: "JavaScript",
    langColor: "#f1e05a",
    link: "https://github.com/Emeric99/Afroshop",
  },
  {
    title: "AVR Morse System",
    desc: {
      en: "Bidirectional Morse code encoder/decoder for AVR microcontrollers. Receives text via UART, outputs Morse signals on a digital pin, and decodes incoming Morse back to ASCII. Built with avr-gcc and simavr.",
      fr: "Encodeur/décodeur Morse bidirectionnel pour microcontrôleurs AVR. Réception de texte via UART, sortie Morse sur pin numérique et décodage en ASCII. Développé avec avr-gcc et simavr.",
      de: "Bidirektionales Morse-Encoder/Decoder-System für AVR-Mikrocontroller. Textempfang via UART, Morse-Ausgabe auf digitalem Pin und Rückdecodierung zu ASCII. Gebaut mit avr-gcc und simavr.",
    },
    lang: "C",
    langColor: "#555555",
    link: "https://github.com/Emeric99/AVR-Morse-System",
  },
  {
    title: "Portfolio",
    desc: {
      en: "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features multilingual support (EN/FR/DE), dark/light mode, Framer Motion animations, and is deployed on Vercel.",
      fr: "Portfolio personnel développé avec Next.js, TypeScript et Tailwind CSS. Support multilingue (EN/FR/DE), mode sombre/clair, animations Framer Motion, déployé sur Vercel.",
      de: "Persönliches Portfolio mit Next.js, TypeScript und Tailwind CSS. Mehrsprachig (EN/FR/DE), Dark/Light Mode, Framer-Motion-Animationen, deployed auf Vercel.",
    },
    lang: "TypeScript",
    langColor: "#3178c6",
    link: "https://github.com/Emeric99/portfolio",
  },
];

const labels: Record<Lang, { section: string; title: string }> = {
  en: { section: "Work & Projects", title: "Projects" },
  fr: { section: "Travaux & Projets", title: "Projets" },
  de: { section: "Arbeit & Projekte", title: "Projekte" },
};

export default function Projects({ lang }: { lang: Lang }) {
  const t = labels[lang];
  return (
    <section id="projects" className="py-20 px-8 max-w-5xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-[#00d462] text-sm font-semibold uppercase tracking-[0.2em] mb-4">{t.section}</p>
          <h2 className="font-[family-name:var(--font-bangers)] text-6xl md:text-7xl text-white uppercase tracking-wide">
            {t.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#00b050] mx-auto mt-4" />
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.1}>
            <a
              href={p.link}
              target="_blank"
              className="block bg-[var(--bg-card)] border border-white/8 rounded-2xl shadow-lg shadow-black/30 p-6 hover:border-[#00b050]/30 transition-colors h-full"
            >
              <div className="flex items-start gap-3 mb-4">
                <svg className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <h3 className="text-white font-semibold">{p.title}</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{p.desc[lang]}</p>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: p.langColor }}
                />
                {p.lang}
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
