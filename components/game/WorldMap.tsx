"use client";

import React from "react";
import Image from "next/image"; 
import { GAME_CONFIG } from "@/lib/game-config";

export default function WorldMap() {
  return (
    <div 
      className="absolute inset-0 bg-background"
      style={{ width: GAME_CONFIG.mapWidth, height: GAME_CONFIG.mapHeight }}
    >
      {/* 1. THE PIXEL ART MAP */}
      <Image 
        src="/maps/lab-map-final2.jpeg" 
        alt="NetVerse Campus"
        fill
        className="object-cover pixelated" 
        priority
      />

      {/* 2. Optional Debug Overlay (Keep it hidden/commented if not needed) */}
      {/* <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[640px] left-[640px] w-20 h-20 border-4 border-primary" />
        <div className="absolute top-[480px] left-[2240px] w-20 h-20 border-4 border-destructive" />
        <div className="absolute top-[1280px] left-[1184px] w-20 h-20 border-4 border-chart-2" />
      </div> */}
    </div>
  );
}