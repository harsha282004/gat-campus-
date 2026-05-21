"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { ContactForm } from "@/components/contact/ContactForm";
import { CampusMap } from "@/components/contact/CampusMap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
const info = [
  { icon: Phone, label: "Phone", value: CONTACT.phone },
  { icon: Mail, label: "Email", value: CONTACT.email },
  { icon: MapPin, label: "Address", value: CONTACT.address },
  { icon: Clock, label: "Hours", value: CONTACT.hours },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <SectionHeading badge="Contact" title="Get in Touch" subtitle="We're here to help with any questions" />
      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {info.map(({ icon: Icon, label, value }) => (
          <GlassCard key={label} className="text-center">
            <Icon className="mx-auto mb-3 h-8 w-8 text-gold-400" />
            <p className="text-sm text-[#8899bb]">{label}</p>
            <p className="mt-1 text-sm font-medium text-white">{value}</p>
          </GlassCard>
        ))}
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <CampusMap />
      </div>
      <Link
        href="/ai-assistant"
        className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-3 font-semibold text-navy-950 shadow-glow"
        aria-label="AI Support"
      >
        <MessageCircle className="h-5 w-5" />
        AI Support
      </Link>
    </div>
  );
}
