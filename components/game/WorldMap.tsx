"use client";

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
        src="/maps/lab-map-final2.png" 
        alt="NetVerse Campus"
        fill
        className="object-cover pixelated" 
        priority
        unoptimized
      />

    </div>
  );
}