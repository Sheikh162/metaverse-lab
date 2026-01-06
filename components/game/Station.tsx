"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { GameStation } from "@/lib/game-config";

interface StationProps {
  station: GameStation;
  isActive: boolean;
}

export default function Station({ station, isActive }: StationProps) {
  
  // Dynamic color mapping based on station type for the icon box
  // Using theme variables via inline styles or tailwind classes
  const colorClass = station.color.includes('red') ? 'bg-destructive border-destructive-foreground' :
                     station.color.includes('blue') ? 'bg-primary border-primary-foreground' :
                     'bg-secondary border-secondary-foreground'; // Greenish

  return (
    <div
      className="absolute flex flex-col items-center justify-center transition-all duration-200"
      style={{
        left: station.x - 40, // Centering offset
        top: station.y - 40,
        zIndex: station.y 
      }}
    >
      {/* Interaction Prompt (Bouncing Badge) */}
      <div className={`
          absolute -top-14 z-50 transition-all duration-300
          ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}>
        <Badge className="bg-primary text-primary-foreground font-bold font-mono border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] animate-bounce text-xs px-3 py-1">
          PRESS ENTER
        </Badge>
      </div>

      {/* The Visual Object */}
      <div className={`
        w-20 h-20 rounded-lg shadow-xl border-2 flex items-center justify-center transition-all duration-300
        ${colorClass}
        ${isActive ? 'scale-110 ring-4 ring-primary/50 brightness-110 shadow-2xl' : 'opacity-90 shadow-md'}
      `}>
        <station.icon className="text-white w-8 h-8 drop-shadow-md" />
      </div>

      {/* Label */}
      <Badge variant="outline" className="mt-2 text-[10px] font-bold text-foreground bg-background/80 backdrop-blur-sm border-border">
        {station.label}
      </Badge>
    </div>
  );
}