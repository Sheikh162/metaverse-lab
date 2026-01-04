import { LucideIcon, Monitor, Coffee, GraduationCap } from "lucide-react";

export const GAME_CONFIG = {
  mapWidth: 2400,
  mapHeight: 1600,
  viewportWidth: 900,
  viewportHeight: 600,
  playerSize: 40,
  playerSpeed: 12,
};

export type StationType = "exam" | "server" | "common" | "security" | "dev" | "npc-teacher" | "code-editor";

export interface GameStation {
  id: string;
  label: string;
  type: StationType;
  x: number;
  y: number;
  color?: string;
  icon: LucideIcon;
  description?: string;
  interactionRadius?: number;
  status?: "online" | "available" | "offline";
}

export const STATIONS: GameStation[] = [
  {
    id: "exam-desk-01",
    label: "Exam Station 1",
    type: "exam",
    x: 1850,
    y: 550,
    color: "bg-blue-500",
    icon: Monitor
  },
  {
    id: "cafeteria-table",
    label: "Chill Zone",
    type: "common",
    x: 550,
    y: 535,
    color: "bg-green-500",
    icon: Coffee
  },
  {
    id: "npc-professor",
    label: "Prof. Byte",
    type: "npc-teacher",
    x: 2100, 
    y: 1350, 
    color: "bg-yellow-500",
    icon: GraduationCap,
    description: "Ask for guidance.",
    status: "available" 
  }
];

export const WALLS = [];

// ✅ TEACHER RBAC CONFIG
export const TEACHER_IDS = [
  "bristolrabbit720@gmail.com",
];

export const isTeacher = (email?: string | null) => {
  if (!email) return false;
  return TEACHER_IDS.includes(email);
};