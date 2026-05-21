"use client";

import { useCallback, useState } from "react";
import { AI_RESPONSES } from "@/lib/constants";
import type { Message } from "@/lib/types";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback((content: string) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    const responseKey = Object.keys(AI_RESPONSES).find(
      (key) =>
        content.toLowerCase().includes(key.toLowerCase().slice(0, 15)) ||
        key.toLowerCase() === content.toLowerCase()
    );

    const responseContent =
      AI_RESPONSES[content] ||
      (responseKey ? AI_RESPONSES[responseKey] : null) ||
      `Thank you for your question about "${content}". I'm GAT Campus Compass AI — I can help with navigation, admissions, academics, events, and facilities. Try one of the suggested prompts for detailed answers!`;

    setTimeout(() => {
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: responseContent,
        timestamp: new Date(),
        confidence: 85 + Math.floor(Math.random() * 14),
        sources: ["Campus Knowledge Base", "GAT Official Records"],
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return { messages, isTyping, sendMessage, clearMessages };
}
