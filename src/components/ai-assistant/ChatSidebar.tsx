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
    <aside className="hidden w-[300px] shrink-0 flex-col border-r border-[#1e3a75] bg-gradient-to-b from-[#13295b] to-[#0f1f47] p-5 lg:flex">
      
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-wide text-[#f5c842]">
          GAT AI
        </h2>

        <AIStatusBadge className="mt-3 border border-white/10 bg-white/5 text-[#d6e2ff]" />
      </div>

      {/* New Chat Button */}
      <Button
        className="
          mb-8
          w-full
          bg-gradient-to-r
          from-[#f5c842]
          to-[#ff8c1a]
          text-[#13295b]
          font-semibold
          shadow-lg
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:shadow-xl
        "
      >
        <Plus className="mr-2 h-4 w-4" />
        New Chat
      </Button>

      {/* Chat History */}
      <div className="flex-1 space-y-3 overflow-y-auto scrollbar-thin">

        {history.map((chat) => (
          <button
            key={chat.id}
            className="
              w-full
              rounded-xl
              px-4
              py-3
              text-left
              transition-all
              duration-300
              hover:bg-white/10
            "
          >
            <p className="truncate font-medium text-white">
              {chat.title}
            </p>

            <p className="mt-1 text-xs text-[#9fb4de]">
              {chat.time}
            </p>
          </button>
        ))}
      </div>

      {/* Bottom Tags */}
      <div className="mt-6 flex flex-wrap gap-2">

        {["RAG", "Multi-Agent", "Voice"].map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              border
              border-[#f5c842]/40
              bg-[#ffffff08]
              px-3
              py-1
              text-xs
              font-medium
              text-[#f5c842]
              transition-all
              duration-300
              hover:bg-[#f5c842]/10
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </aside>
  );
}