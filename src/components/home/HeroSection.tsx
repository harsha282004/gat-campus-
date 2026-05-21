"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { GradientButton } from "@/components/ui/GradientButton";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-animated noise-overlay">
      <ParticleBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-space-grotesk text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
            Welcome to{" "}
            <span className="gradient-text">GAT Campus</span> Compass AI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#8899bb] md:text-xl">
            Your AI-powered campus companion — Navigate. Explore. Discover.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GradientButton href="/virtual-tour" variant="gold" size="lg">
              Start Virtual Tour
            </GradientButton>
            <GradientButton href="/ai-assistant" variant="glass" size="lg" className="animate-pulse-glow">
              Ask AI Assistant
            </GradientButton>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-16"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
            <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(245,200,66,0.2)" strokeWidth="2" />
            <motion.circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="rgba(59,130,246,0.4)"
              strokeWidth="2"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "100px 100px" }}
            />
            <circle cx="100" cy="100" r="25" fill="url(#brainGrad)" className="animate-pulse-glow" />
            <defs>
              <radialGradient id="brainGrad">
                <stop offset="0%" stopColor="#f5c842" />
                <stop offset="100%" stopColor="#3b82f6" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>

        <Link href="#stats" className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-label="Scroll down">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="h-8 w-8 text-gold-400" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
