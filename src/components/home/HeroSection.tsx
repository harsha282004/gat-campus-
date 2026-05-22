"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { GradientButton } from "@/components/ui/GradientButton";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[140vh] items-center justify-center overflow-hidden">
<div className="absolute inset-0">
  <Image
    src="/images/background.jpeg"
    alt="GAT Campus"
    fill
    priority
    className="object-cover"
  />

 <div className="absolute inset-0 bg-[#13295b]/45" />
</div>
<ParticleBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         <h1 className="font-space-grotesk text-5xl font-extrabold leading-tight text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
            Welcome to{" "}
            <span className="gradient-text">GAT Virtual Campus Tour</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#e8eefc] md:text-xl">
            An AI Agent-Driven Smart Campus Assistant with RAG Answering and Navigation Support.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GradientButton href="/virtual-tour" variant="gold" size="lg">
              Start Virtual Tour
            </GradientButton>
            <GradientButton
  href="/ai-assistant"
  variant="outline"
  size="lg"
  className="border-[#f4c20d] bg-[#13295b] text-white hover:bg-[#1e3a8a]"
>
              Ask AI Assistant
            </GradientButton>
          </div>
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
