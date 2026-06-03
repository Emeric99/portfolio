"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

type Lang = "en" | "fr" | "de";

const content: Record<Lang, {
  tag: string; subtitle: string; scroll: string;
  github: string; linkedin: string; email: string;
}> = {
  en: {
    tag: "Java Developer · Backend · DevOps",
    subtitle: "From Informatik to Software Engineering, building reliable systems that scale.",
    scroll: "scroll",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
  fr: {
    tag: "Développeur Java · Backend · DevOps",
    subtitle: "De l'Informatik au Génie Logiciel, construire des systèmes fiables et évolutifs.",
    scroll: "défiler",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "E-mail",
  },
  de: {
    tag: "Java-Entwickler · Backend · DevOps",
    subtitle: "Von Informatik zur Softwareentwicklung, robuste Systeme bauen, die skalieren.",
    scroll: "scrollen",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "E-Mail",
  },
};

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const stars: { x: number; y: number; r: number; o: number }[] = [];
    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        o: Math.random() * 0.6 + 0.2,
      });
    }

    stars.forEach((s) => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 176, 80, ${s.o})`;
      ctx.fill();
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export default function Hero({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-14 overflow-hidden"
    >
      <StarField />

      {/* Anime character */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute right-0 bottom-0 h-[90%] w-auto pointer-events-none select-none"
      >
        <Image
          src="/deku.png"
          alt="decoration"
          width={500}
          height={700}
          className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
          priority
        />
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-4xl mx-auto">
        {/* Tag pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-[#00b050]/60 text-[#00d462] text-sm px-5 py-1.5 rounded-full mb-8 tracking-wide"
        >
          {t.tag}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-[family-name:var(--font-bangers)] text-[clamp(4rem,12vw,9rem)] leading-none tracking-wide uppercase mb-6"
        >
          <span className="text-white">EMERIC </span>
          <span className="text-[#00b050]">TCHOLAGHEU</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed mb-10"
        >
          {t.subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <a
            href="https://github.com/Emeric99"
            target="_blank"
            className="flex items-center gap-2 bg-[#1a1f2e] border border-white/10 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:border-[#00b050]/50 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            {t.github}
          </a>
          <a
            href="https://www.linkedin.com/in/emeric-tcholagheu-6bb73b313"
            target="_blank"
            className="flex items-center gap-2 bg-[#1a1f2e] border border-white/10 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:border-[#00b050]/50 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            {t.linkedin}
          </a>
          <a
            href="mailto:emerictcholagheu@gmail.com"
            className="flex items-center gap-2 bg-[#1a1f2e] border border-white/10 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:border-[#00b050]/50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.email}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-zinc-600 hover:text-[#00d462] transition-colors text-xs"
        >
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            |
          </motion.span>
          <span>{t.scroll}</span>
        </motion.a>
      </div>
    </section>
  );
}
