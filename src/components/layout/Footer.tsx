import Link from "next/link";
import { Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import { CONTACT, DEPARTMENTS, NAV_LINKS, SITE } from "@/lib/constants";
import { AIStatusBadge } from "@/components/ui/AIStatusBadge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900/50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-gradient font-bold text-navy-950">GAT</span>
              <span className="font-space-grotesk font-semibold text-white">Campus Compass AI</span>
            </div>
            <p className="mb-4 text-sm text-[#8899bb]">{SITE.description}</p>
            <AIStatusBadge />
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#8899bb] hover:text-gold-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Academics</h3>
            <ul className="space-y-2">
              {DEPARTMENTS.slice(0, 5).map((dept) => (
                <li key={dept.code}>
                  <Link href="/academics" className="text-sm text-[#8899bb] hover:text-gold-400">
                    {dept.code}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-[#8899bb]">
              <li>{CONTACT.address}</li>
              <li>{CONTACT.phone}</li>
              <li>{CONTACT.email}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              {[Linkedin, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="rounded-lg p-2 text-[#8899bb] transition-colors hover:bg-white/10 hover:text-gold-400" aria-label="Social link">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-sm text-[#8899bb]">© 2025 GAT Campus Compass AI. All rights reserved.</p>
            <span className="rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-xs text-gold-400">Built with AI</span>
          </div>
          <div className="flex gap-2">
            <Input placeholder="Subscribe to newsletter" className="glass max-w-xs border-white/10 bg-transparent" />
            <Button className="bg-gold-gradient text-navy-950 hover:opacity-90">Subscribe</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
