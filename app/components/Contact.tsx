"use client";
import FadeIn from "./FadeIn";

type Lang = "en" | "fr" | "de";

const content: Record<Lang, { label: string; title: string; desc: string }> = {
  en: {
    label: "Get in touch",
    title: "Let's Connect",
    desc: "Open to Werkstudent positions and Pflichtpraktikum in software development. Feel free to reach out!",
  },
  fr: {
    label: "Me contacter",
    title: "Restons en contact",
    desc: "Disponible pour un stage ou un poste Werkstudent en développement logiciel. N'hésitez pas à me contacter !",
  },
  de: {
    label: "Kontakt aufnehmen",
    title: "verneztzen wir uns",
    desc: "Offen für Werkstudent-Stellen und Pflichtpraktikum in der Softwareentwicklung. Schreib mir gerne!",
  },
};

const links = [
  {
    label: "GitHub",
    value: "@Emeric99",
    href: "https://github.com/Emeric99",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "emeric-tcholagheu",
    href: "https://www.linkedin.com/in/emeric-tcholagheu-6bb73b313",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "emerictcholagheu@gmail.com",
    href: "mailto:emerictcholagheu@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "CV",
    value: "Download CV",
    href: "/cv.pdf",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function Contact({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <section id="contact" className="py-20 px-8 max-w-4xl mx-auto">
      <FadeIn>
        <div className="text-center mb-12">
          <p className="text-[#00d462] text-sm font-semibold uppercase tracking-[0.2em] mb-4">{t.label}</p>
          <h2 className="font-[family-name:var(--font-bangers)] text-6xl md:text-7xl text-white uppercase tracking-wide">
            {t.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#00b050] mx-auto mt-4 mb-8" />
          <p className="text-zinc-400 max-w-md mx-auto">{t.desc}</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 gap-4">
        {links.map((link, i) => (
          <FadeIn key={link.label} delay={i * 0.1}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto") || link.href.startsWith("/") ? undefined : "_blank"}
              className="flex items-center gap-4 bg-[#161b27] border border-[#00b050]/25 rounded-2xl p-5 hover:border-[#00b050]/60 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#00b050]/15 border border-[#00b050]/30 flex items-center justify-center flex-shrink-0 text-[#00b050]">
                {link.icon}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{link.label}</p>
                <p className="text-zinc-500 text-xs mt-0.5 truncate max-w-[180px]">{link.value}</p>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
