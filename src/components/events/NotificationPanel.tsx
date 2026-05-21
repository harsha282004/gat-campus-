"use client";

import { useState } from "react";
import { X } from "lucide-react";

const announcements = [
  { id: "1", text: "TechFest 2025 registration opens March 1" },
  { id: "2", text: "Placement drive Feb 28 — Register by Feb 25" },
  { id: "3", text: "New Innovation Lab inaugurated — Visit today!" },
];

export function NotificationPanel() {
  const [items, setItems] = useState(announcements);

  if (items.length === 0) return null;

  return (
    <div className="mb-8 space-y-2">
      {items.map((item) => (
        <div key={item.id} className="glass-navy flex items-center justify-between rounded-lg px-4 py-3">
          <p className="text-sm text-[#f0f4ff]">{item.text}</p>
          <button onClick={() => setItems(items.filter((i) => i.id !== item.id))} aria-label="Dismiss">
            <X className="h-4 w-4 text-[#8899bb] hover:text-white" />
          </button>
        </div>
      ))}
    </div>
  );
}
