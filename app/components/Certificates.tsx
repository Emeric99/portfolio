"use client";
import FadeIn from "./FadeIn";

type Lang = "en" | "fr" | "de";

const certs = [
  { title: "GitHub Foundations", issuer: "GitHub", date: "2024", category: "Git & GitHub", file: "/certificate_GitHub Foundations.pdf" },
  { title: "Introduction to Git", issuer: "GitHub", date: "2024", category: "Git & GitHub", file: "/certificate_introduction_to_Git.pdf" },
  { title: "Introduction to GitHub Concepts", issuer: "GitHub", date: "2024", category: "Git & GitHub", file: "/certificate_introduction_to_GitHub_Concepts.pdf" },
  { title: "Intermediate Git", issuer: "GitHub", date: "2024", category: "Git & GitHub", file: "/certificate_intermediate_Git.pdf" },
  { title: "Intermediate GitHub Concepts", issuer: "GitHub", date: "2024", category: "Git & GitHub", file: "/certificate_Intermediate GitHub_Concepts.pdf" },
];

const labels: Record<Lang, { section: string; title: string }> = {
  en: { section: "Achievements", title: "Certificates" },
  fr: { section: "Réalisations", title: "Certificats" },
  de: { section: "Errungenschaften", title: "Zertifikate" },
};

export default function Certificates({ lang }: { lang: Lang }) {
  const t = labels[lang];
  return (
    <section id="certificates" className="py-24 px-8 max-w-5xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-[#00b050] text-sm font-semibold uppercase tracking-[0.2em] mb-4">{t.section}</p>
          <h2 className="font-[family-name:var(--font-bangers)] text-6xl md:text-7xl text-white uppercase tracking-wide">
            {t.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#00b050] mx-auto mt-4" />
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-4">
        {certs.map((cert, i) => (
          <FadeIn key={cert.title} delay={i * 0.08}>
            <a href={cert.file} target="_blank" className="block bg-[#161b27] border border-white/8 rounded-2xl p-5 flex items-start gap-4 hover:border-[#00b050]/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#00b050]/15 border border-[#00b050]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-[#00b050] text-sm font-bold">✦</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-snug mb-1">{cert.title}</p>
                <p className="text-zinc-500 text-xs">{cert.issuer} · {cert.date}</p>
                <span className="mt-2 inline-block text-xs text-[#00d462] border border-[#00b050]/30 px-2 py-0.5 rounded-full">
                  {cert.category}
                </span>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
