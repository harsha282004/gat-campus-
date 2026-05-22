"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "border-b border-gray-200 bg-white/90 shadow-md backdrop-blur-xl" : "bg-white"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6" aria-label="Main navigation">
       <Link href="/" className="flex items-center gap-3">
  <Image
    src="/images/gat-logo.jpg"
    alt="GAT Logo"
    width={45}
    height={45}
    className="rounded-lg"
  />
          <span className="hidden font-space-grotesk text-sm font-semibold text-[#13295b] sm:block">
            Campus Tour <span className="text-gold-400">AI</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
  "relative px-3 py-2 text-sm font-medium text-[#13295b] transition-colors hover:text-[#0f1f47]",
  pathname === link.href && "text-gold-400"
)}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-400" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          
        
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
