import {
  Award,
  BookOpen,
  Brain,
  Clock,
  Database,
  Map,
  MessageCircle,
  Mic,
  Navigation,
  Sparkles,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Brain,
  Navigation,
  Clock,
  Map,
  Database,
  MessageCircle,
  Mic,
  Sparkles,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Brain;
}
