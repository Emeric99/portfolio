"use client";
import Image from "next/image";
import FadeIn from "./FadeIn";

type Lang = "en" | "fr" | "de";

const content: Record<Lang, {
  label: string; title: string; desc: string;
  interests: string[];
}> = {
  en: {
    label: "Who I am",
    title: "About Me",
    desc: "6th semester Informatik student at Hochschule Bremerhaven, passionate about building robust Java backend systems, containerized infrastructure, and AI-integrated applications. I believe in writing clean, maintainable code that solves real problems.",
    interests: ["Java Backend", "Docker & DevOps", "REST APIs", "AI Integration", "Databases", "Open Source", "Comics", "Zeichnen", "Football"],
  },
  fr: {
    label: "Qui je suis",
    title: "À propos",
    desc: "Étudiant en 6e semestre d'Informatik à la Hochschule Bremerhaven, passionné par les systèmes backend Java robustes, l'infrastructure conteneurisée et les applications intégrant l'IA. Je crois en un code propre et maintenable qui résout de vrais problèmes.",
    interests: ["Backend Java", "Docker & DevOps", "APIs REST", "Intégration IA", "Bases de données", "Open Source", "Comics", "Dessin", "Football"],
  },
  de: {
    label: "Wer ich bin",
    title: "Über mich",
    desc: "Informatik-Student im 6. Semester an der Hochschule Bremerhaven mit Leidenschaft für robuste Java-Backend-Systeme, containerisierte Infrastruktur und KI-integrierte Anwendungen. Ich schreibe sauberen, wartbaren Code, der echte Probleme löst.",
    interests: ["Java Backend", "Docker & DevOps", "REST APIs", "KI-Integration", "Datenbanken", "Open Source", "Comics", "Zeichnen", "Fußball"],
  },
};

export default function About({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <section id="about" className="py-20 px-8 max-w-5xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-[#00d462] text-sm font-semibold uppercase tracking-[0.2em] mb-4">{t.label}</p>
          <h2 className="font-[family-name:var(--font-bangers)] text-6xl md:text-7xl text-white uppercase tracking-wide">
            {t.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#00b050] mx-auto mt-4" />
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <FadeIn delay={0.1}>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 rounded-2xl overflow-hidden border-2 border-[#00b050]/30">
                <Image
                  src="/photo.jpg"
                  alt="Emeric Tcholagheu"
                  width={224}
                  height={224}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-56 h-56 rounded-2xl border border-[#00b050]/20 -z-10" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-zinc-400 leading-relaxed mb-8">{t.desc}</p>
          <div className="flex flex-wrap gap-2">
            {t.interests.map((tag) => (
              <span
                key={tag}
                className="bg-[#00b050]/10 border border-[#00b050]/25 text-[#00d462] text-xs px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
