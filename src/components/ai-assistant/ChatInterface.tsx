"use client";

import { useState } from "react";
import { ArrowUp, Mic, Paperclip, Trash2 } from "lucide-react";
import { useChat } from "@/hooks/useChat";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { ChatSidebar } from "./ChatSidebar";
import { MessageBubble } from "./MessageBubble";
import { SuggestedPrompts } from "./SuggestedPrompts";
import { TypingIndicator } from "./TypingIndicator";

export function ChatInterface() {
  const { messages, isTyping, sendMessage, clearMessages } = useChat();
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput("");
  };

  return (
    <div className="flex min-h-[calc(100vh-5rem)]">
      <ChatSidebar />
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div>
            <h1 className="font-semibold text-white">GAT Campus Assistant</h1>
            <Badge variant="outline" className="mt-1 border-blue-500/30 text-blue-400">
              GPT-4 Turbo / Gemini Pro
            </Badge>
          </div>
          <Button variant="ghost" size="icon" onClick={clearMessages} aria-label="Clear chat">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        <ScrollArea className="flex-1 p-4">
          {messages.length === 0 ? (
            <div className="mx-auto max-w-2xl py-12">
              <h2 className="mb-6 text-center text-xl font-semibold text-white">How can I help you today?</h2>
              <SuggestedPrompts onSelect={sendMessage} />
            </div>
          ) : (
            <div className="mx-auto max-w-3xl space-y-4">
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}
              {isTyping && <TypingIndicator />}
            </div>
          )}
        </ScrollArea>

        <div className="border-t border-white/10 p-4">
          <div className="mx-auto flex max-w-3xl items-end gap-2">
            <Button variant="ghost" size="icon" aria-label="Upload file">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
              placeholder="Ask anything about campus..."
              className="min-h-[44px] max-h-32 resize-none glass border-white/10"
              rows={1}
            />
            <Button variant="ghost" size="icon" className="animate-pulse text-gold-400" aria-label="Voice input">
              <Mic className="h-5 w-5" />
            </Button>
            <Button onClick={handleSend} className="bg-gold-gradient text-navy-950 hover:opacity-90" size="icon" aria-label="Send message">
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
