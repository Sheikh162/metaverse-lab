"use client";

import React from "react";
import { GAME_CONFIG, STATIONS } from "@/lib/game-config";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MiniMapProps {
  playerPos: { x: number; y: number };
}

export default function MiniMap({ playerPos }: MiniMapProps) {
  // 1. Calculate the Scale Factor
  const MINI_WIDTH = 240;
  const scale = MINI_WIDTH / GAME_CONFIG.mapWidth;
  const MINI_HEIGHT = GAME_CONFIG.mapHeight * scale;

  return (
    <Card 
      className="absolute bottom-6 right-6 z-50 overflow-hidden border-2 border-border bg-card/90 shadow-xl backdrop-blur-sm"
      style={{ width: MINI_WIDTH, height: MINI_HEIGHT }}
    >
      {/* MAP TITLE - Using a Badge for style */}
      <div className="absolute top-0 left-0 z-20">
         <Badge variant="secondary" className="rounded-none rounded-br text-[10px] font-mono border-l-0 border-t-0 bg-secondary/80 text-secondary-foreground">
            SECTOR MAP
         </Badge>
      </div>

      {/* 2. RENDER STATIC STATIONS (The dots) */}
      {STATIONS.map((station) => (
        <div
          key={station.id}
          // We map the station colors to theme variables for consistency
          className={`absolute w-1.5 h-1.5 rounded-full ring-1 ring-black/20`}
          style={{
            left: station.x * scale,
            top: station.y * scale,
            backgroundColor: station.color.includes('red') ? 'var(--destructive)' : 
                             station.color.includes('blue') ? 'var(--primary)' : 'var(--chart-2)' // Cyan/Teal for "Green" zones
          }}
        />
      ))}

      {/* 3. RENDER THE PLAYER (Blinking Dot) */}
      <div
        className="absolute w-2.5 h-2.5 bg-yellow-400 rounded-full border border-background shadow-[0_0_8px_rgba(250,204,21,0.8)] z-10 animate-pulse"
        style={{
          left: playerPos.x * scale - 1.25, // Centered
          top: playerPos.y * scale - 1.25,
        }}
      />

      {/* 4. RENDER THE CAMERA VIEWPORT (The Box showing what you see) */}
      <div 
        className="absolute border border-white/50 bg-white/5 pointer-events-none z-0"
        style={{
          width: GAME_CONFIG.viewportWidth * scale,
          height: GAME_CONFIG.viewportHeight * scale,
          left: (playerPos.x - GAME_CONFIG.viewportWidth / 2) * scale,
          top: (playerPos.y - GAME_CONFIG.viewportHeight / 2) * scale,
        }}
      />
      
      {/* Retro Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
    </Card>
  );
}