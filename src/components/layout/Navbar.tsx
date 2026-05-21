"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LayoutDashboard, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { GradientButton } from "@/components/ui/GradientButton";
import { MobileMenu } from "./MobileMenu";

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
        scrolled ? "border-b border-white/10 bg-navy-950/80 shadow-lg backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-gradient font-bold text-navy-950">
            GAT
          </span>
          <span className="hidden font-space-grotesk text-sm font-semibold text-white sm:block">
            Campus Compass <span className="text-gold-400">AI</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-3 py-2 text-sm font-medium text-[#8899bb] transition-colors hover:text-white",
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
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden rounded-lg p-2 text-[#8899bb] transition-colors hover:bg-white/10 hover:text-white md:flex"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <GradientButton href="/dashboard" variant="outline" size="sm" icon={<LayoutDashboard className="h-4 w-4" />} className="hidden md:inline-flex">
            Dashboard
          </GradientButton>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
