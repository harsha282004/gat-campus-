"use client";

import { SUGGESTED_PROMPTS } from "@/lib/constants";

interface SuggestedPromptsProps {
  onSelect: (prompt: string) => void;
}

export function SuggestedPrompts({ onSelect }: SuggestedPromptsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {SUGGESTED_PROMPTS.map((prompt) => (
        <button
          key={prompt}
          onClick={() => onSelect(prompt)}
          className="glass rounded-xl border border-white/10 px-4 py-3 text-left text-sm text-[#8899bb] transition-all hover:border-gold-400/30 hover:text-white"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}
