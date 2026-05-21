"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AIStatusBadge } from "@/components/ui/AIStatusBadge";

const history = [
  { id: "1", title: "Library directions", time: "2 min ago" },
  { id: "2", title: "Admission query", time: "1 hr ago" },
  { id: "3", title: "CSE department info", time: "Yesterday" },
];

export function ChatSidebar() {
  return (
    <aside className="glass-navy hidden w-[280px] shrink-0 flex-col border-r border-white/10 p-4 lg:flex">
      <div className="mb-6">
        <h2 className="font-space-grotesk text-xl font-bold text-gold-400">GAT AI</h2>
        <AIStatusBadge className="mt-2" />
      </div>
      <Button className="mb-6 w-full bg-gold-gradient text-navy-950 hover:opacity-90">
        <Plus className="mr-2 h-4 w-4" /> New Chat
      </Button>
      <div className="flex-1 space-y-2 overflow-y-auto scrollbar-thin">
        {history.map((chat) => (
          <button
            key={chat.id}
            className="w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-white/5"
          >
            <p className="truncate text-white">{chat.title}</p>
            <p className="text-xs text-[#8899bb]">{chat.time}</p>
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {["RAG", "Multi-Agent", "Voice"].map((tag) => (
          <span key={tag} className="rounded-full border border-gold-400/30 px-2 py-0.5 text-xs text-gold-400">
            {tag}
          </span>
        ))}
      </div>
    </aside>
  );
}
