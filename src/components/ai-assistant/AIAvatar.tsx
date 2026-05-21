"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export function AIAvatar() {
  return (
    <motion.div
      className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-gradient"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <Bot className="h-5 w-5 text-white" />
    </motion.div>
  );
}
