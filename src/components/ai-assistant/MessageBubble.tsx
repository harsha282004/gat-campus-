"use client";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { Message } from "@/lib/types";
import { AIAvatar } from "./AIAvatar";

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-gold-gradient px-4 py-3 text-navy-950">
          <p className="text-sm">{message.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <AIAvatar />
      <div className="glass-navy max-w-[80%] rounded-2xl rounded-bl-sm px-4 py-3">
        <p className="text-sm text-[#f0f4ff]">{message.content}</p>
        {message.confidence && (
          <div className="mt-3">
            <p className="mb-1 text-xs text-[#8899bb]">{message.confidence}% confident</p>
            <Progress value={message.confidence} className="h-1" />
          </div>
        )}
        {message.sources && (
          <div className="mt-2 flex flex-wrap gap-1">
            {message.sources.map((s) => (
              <Badge key={s} variant="outline" className="text-xs border-gold-400/30 text-gold-400">
                {s}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
