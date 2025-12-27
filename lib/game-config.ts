// import { LucideIcon, Monitor, Coffee, Server, ShieldAlert, Cpu } from "lucide-react";

// export const GAME_CONFIG = {
//   mapWidth: 2400,
//   mapHeight: 1600,
//   viewportWidth: 900,
//   viewportHeight: 600,
//   playerSize: 40,
//   playerSpeed: 12,
// };

// // --- STATIONS ---
// export interface GameStation {
//   id: string;
//   label: string;
//   type: "exam" | "server" | "common" | "security" | "dev";
//   x: number;
//   y: number;
//   color: string;
//   icon: LucideIcon;
//   description?: string;
// }

// export const STATIONS: GameStation[] = [
//   {
//     id: "exam-desk-01",
//     label: "Exam Desk A1",
//     type: "exam",
//     x: 600,
//     y: 550,
//     color: "bg-blue-500",
//     icon: Monitor
//   },
//   {
//     id: "mainframe-core",
//     label: "Mainframe",
//     type: "server",
//     x: 2050,
//     y: 400,
//     color: "bg-red-600",
//     icon: Server
//   },
//   {
//     id: "security-hub",
//     label: "Proctor Hub",
//     type: "security",
//     x: 200,
//     y: 200,
//     color: "bg-slate-700",
//     icon: ShieldAlert
//   },
//   {
//     id: "cafeteria-table",
//     label: "Cafeteria",
//     type: "common",
//     x: 1300,
//     y: 900,
//     color: "bg-green-500",
//     icon: Coffee
//   }
// ];

// export const WALLS = []; // Empty for CSS version usually

import { LucideIcon, Monitor, Coffee, Server, ShieldAlert } from "lucide-react";

export const GAME_CONFIG = {
  mapWidth: 2400,
  mapHeight: 1600,
  viewportWidth: 900,
  viewportHeight: 600,
  playerSize: 40,
  playerSpeed: 12,
};

// --- STATIONS ---
export interface GameStation {
  id: string;
  label: string;
  type: "exam" | "server" | "common" | "security" | "dev";
  x: number;
  y: number;
  color: string;
  icon: LucideIcon;
  description?: string;
}

export const STATIONS: GameStation[] = [
  {
    id: "exam-desk-01",
    label: "Exam Station 1",
    type: "exam",
    x: 640,  // X Coordinate for Exam Hall
    y: 640,  // Y Coordinate for Exam Hall
    color: "bg-blue-500",
    icon: Monitor
  },
  {
    id: "mainframe-core",
    label: "Server Farm",
    type: "server",
    x: 2240, // X Coordinate for Server Room
    y: 480,  // Y Coordinate for Server Room
    color: "bg-red-600",
    icon: Server
  },
  {
    id: "cafeteria-table",
    label: "Chill Zone",
    type: "common",
    x: 1184, // X Coordinate for Cafeteria
    y: 1280, // Y Coordinate for Cafeteria
    color: "bg-green-500",
    icon: Coffee
  }
];

export const WALLS = []; // Add collision coordinates here later if needed