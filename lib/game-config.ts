import { LucideIcon, Monitor, BookOpen, Coffee, Shield, Server, User } from "lucide-react";

export const GAME_CONFIG = {
  mapWidth: 2400,
  mapHeight: 1600,
  viewportWidth: 800,
  viewportHeight: 600,
  playerSize: 48,
  playerSpeed: 8,
};

export interface GameStation {
  id: string;
  x: number;
  y: number;
  label: string;
  icon: LucideIcon;
  type: 'exam' | 'common' | 'security' | 'server' | 'dev' | 'npc-teacher';
  color: string;
  description?: string;
  interactionRadius?: number; // Optional custom radius
}

export const STATIONS: GameStation[] = [
  // ... your existing stations ...
  { 
    id: "dev-station-1", 
    x: 400, y: 500, 
    label: "Dev Terminal A", 
    icon: Monitor, 
    type: "dev", 
    color: "bg-blue-600" 
  },
  { 
    id: "common-area", 
    x: 1200, y: 1200, 
    label: "Student Lounge", 
    icon: Coffee, 
    type: "common", 
    color: "bg-green-600" 
  },
  // ✅ NEW: The Professor NPC
  {
    id: "npc-professor",
    x: 2100,
    y: 1350,
    label: "Prof. Oak",
    icon: User,
    type: "npc-teacher",
    color: "bg-yellow-600",
    interactionRadius: 100
  }
];

// ✅ RBAC HELPER
// Replace with your actual admin email(s)
const ADMIN_EMAILS = ["bristolrabbit720@gmail.com"];

export const isTeacher = (email?: string | null) => {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email);
};