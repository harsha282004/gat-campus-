"use client";

import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "blue" | "glass" | "outline";
type Size = "sm" | "md" | "lg";

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  loading?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  gold: "bg-gold-gradient text-navy-950 shadow-glow hover:opacity-90",
  blue: "bg-blue-gradient text-white shadow-glow-blue hover:opacity-90",
  glass: "glass border border-white/20 text-white hover:bg-white/10",
  outline: "border border-gold-400/50 text-gold-400 hover:bg-gold-400/10",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function GradientButton({
  children,
  variant = "gold",
  size = "md",
  href,
  onClick,
  icon,
  loading,
  className,
  type = "button",
  disabled,
}: GradientButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300",
    variants[variant],
    sizes[size],
    (loading || disabled) && "pointer-events-none opacity-70",
    className
  );

  const content = (
    <>
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : icon}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled || loading}>
      {content}
    </button>
  );
}
