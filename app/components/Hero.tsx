"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const content = {
  en: {
    tag: "Open to Werkstudent & Pflichtpraktikum",
    subtitle: "Informatik student at Hochschule Bremerhaven, specializing in Software Development & Artificial Intelligence. Passionate about Java backend development and building reliable systems.",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  de: {
    tag: "Offen fuer Werkstudent & Pflichtpraktikum",
    subtitle: "Informatik-Student an der Hochschule Bremerhaven mit Schwerpunkt Softwareentwicklung & Kuenstliche Intelligenz. Leidenschaft fuer Java-Backend-Entwicklung und zuverlaessige Systeme.",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
};

export default function Hero({ lang }: { lang: "en" | "de" }) {
  const t = content[lang];
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 max-w-3xl mx-auto pt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Image
          src="/photo.jpg"
          alt="Emeric Tcholagheu"
          width={80}
          height={80}
          className="rounded-full mb-6 border-2 border-white/10"
        />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs px-3 py-1 rounded-full w-fit mb-6">
        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
        {t.tag}
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-4">
        Emeric<br />Tcholagheu
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
        className="text-zinc-400 text-base max-w-lg leading-relaxed mb-8">
        {t.subtitle}
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-3">
        <a href="https://github.com/Emeric99" target="_blank"
          className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
          {t.github}
        </a>
        <a href="https://www.linkedin.com/in/emeric-tcholagheu-6bb73b313" target="_blank"
          className="bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
          {t.linkedin}
        </a>
      </motion.div>
    </section>
  );
}