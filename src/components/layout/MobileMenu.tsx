"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AIStatusBadge } from "@/components/ui/AIStatusBadge";

export function MobileMenu() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden" aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="right" className="glass-navy border-l border-gold-400/20 w-[300px]">
        <SheetHeader>
          <SheetTitle className="text-left text-white">GAT Campus Compass</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          <AIStatusBadge />
        </div>
        <nav className="mt-8 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                pathname === link.href ? "bg-gold-400/20 text-gold-400" : "text-[#8899bb] hover:bg-white/5 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className="mt-4 rounded-lg bg-gold-gradient px-4 py-3 text-center text-sm font-semibold text-navy-950"
          >
            Dashboard
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
