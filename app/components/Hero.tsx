"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const content = {
  en: {
    tag: "Open to Werkstudent & Pflichtpraktikum",
    subtitle: "Informatik student at Hochschule Bremerhaven, specializing in Software Development & Artificial Intelligence. Passionate about Java backend development and building reliable systems.",
    github: "GitHub",
    linkedin: "LinkedIn",
    scroll: "scroll",
  },
  de: {
    tag: "Offen fuer Werkstudent & Pflichtpraktikum",
    subtitle: "Informatik-Student an der Hochschule Bremerhaven mit Schwerpunkt Softwareentwicklung & Kuenstliche Intelligenz. Leidenschaft fuer Java-Backend-Entwicklung und zuverlaessige Systeme.",
    github: "GitHub",
    linkedin: "LinkedIn",
    scroll: "scrollen",
  },
};

export default function Hero({ lang }: { lang: "en" | "de" }) {
  const t = content[lang];
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-8 max-w-3xl mx-auto pt-20 relative">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
        className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4">
        Java Developer · Backend · DevOps
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
        <Image
          src="/photo.jpg"
          alt="Emeric Tcholagheu"
          width={80}
          height={80}
          className="rounded-full mb-6 border-2 border-emerald-500/30 ring-4 ring-emerald-500/10"
        />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs px-3 py-1 rounded-full w-fit mb-6">
        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
        {t.tag}
      </motion.div>

      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
        className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-4">
        Emeric<br />Tcholagheu
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
        className="text-zinc-400 text-base max-w-lg leading-relaxed mb-8">
        {t.subtitle}
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
        className="flex gap-3 mb-16">
        <a href="https://github.com/Emeric99" target="_blank"
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
          {t.github}
        </a>
        <a href="https://www.linkedin.com/in/emeric-tcholagheu-6bb73b313" target="_blank"
          className="bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
          {t.linkedin}
        </a>
      </motion.div>

      <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-emerald-400 transition-colors text-xs">
        <span>{t.scroll}</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>↓</motion.span>
      </motion.a>
    </section>
  );
}