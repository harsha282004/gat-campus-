"use client";

import { useState } from "react";
import { ArrowUp, Mic, Paperclip, Trash2 } from "lucide-react";
import { useChat } from "@/hooks/useChat";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
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
    <div className="flex min-h-[calc(100vh-5rem)] bg-[#f8fafc]">
      
      {/* Sidebar */}
      <ChatSidebar />

      {/* Main Chat Area */}
      <div className="flex flex-1 flex-col bg-white">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#dbe7ff] bg-white px-6 py-4 shadow-sm">
          <div>
            <h1 className="text-xl font-bold text-[#13295b]">
              GAT Campus Assistant
            </h1>

            <p className="mt-1 text-sm text-[#8899bb]">
              AI-powered campus support system
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={clearMessages}
            aria-label="Clear chat"
            className="text-[#13295b] hover:bg-[#eef2ff]"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>

        {/* Chat Body */}
        <ScrollArea className="flex-1 bg-white p-6">

          {messages.length === 0 ? (
            <div className="mx-auto max-w-3xl py-16">

              <h2 className="mb-3 text-center text-4xl font-bold text-[#13295b]">
                How can I help you today?
              </h2>

              <p className="mb-10 text-center text-[#8899bb]">
                Ask anything about admissions, academics, navigation,
                placements, or campus facilities.
              </p>

              <SuggestedPrompts onSelect={sendMessage} />
            </div>
          ) : (
            <div className="mx-auto max-w-3xl space-y-5">
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}

              {isTyping && <TypingIndicator />}
            </div>
          )}

        </ScrollArea>

        {/* Input Section */}
        <div className="border-t border-[#dbe7ff] bg-white p-4">

          <div className="mx-auto flex max-w-3xl items-end gap-3">

            {/* Upload Button */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Upload file"
              className="text-[#13295b] hover:bg-[#eef2ff]"
            >
              <Paperclip className="h-5 w-5" />
            </Button>

            {/* Input Box */}
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                !e.shiftKey &&
                (e.preventDefault(), handleSend())
              }
              placeholder="Ask anything about campus..."
              rows={1}
              className="
                min-h-[48px]
                max-h-32
                resize-none
                rounded-2xl
                border
                border-[#c8d7f0]
                bg-white
                text-[#13295b]
                placeholder:text-[#8899bb]
                shadow-sm
                focus:border-[#f5c842]
                focus:ring-2
                focus:ring-[#f5c842]/30
              "
            />

            {/* Voice Button */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Voice input"
              className="text-[#f5c842] hover:bg-[#fff7df]"
            >
              <Mic className="h-5 w-5" />
            </Button>

            {/* Send Button */}
            <Button
              onClick={handleSend}
              size="icon"
              aria-label="Send message"
              className="
                bg-gradient-to-r
                from-[#f5c842]
                to-[#ff9f1c]
                text-[#13295b]
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
              "
            >
              <ArrowUp className="h-5 w-5" />
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}