"use client";

import React from "react";
import { GAME_CONFIG } from "@/lib/game-config";

interface PlayerProps {
  pos: { x: number; y: number };
  facing: 'left' | 'right' | 'up' | 'down'; // Updated to match engine types
  isMoving?: boolean; // Optional prop so it doesn't break if passed
  username?: string;
}

export default function Player({ pos, facing, username = "Student" }: PlayerProps) {
  return (
    <div 
      className="absolute z-40 flex flex-col items-center transition-transform duration-75"
      style={{ 
         left: pos.x - GAME_CONFIG.playerSize / 2, 
         top: pos.y - GAME_CONFIG.playerSize / 2,
         width: GAME_CONFIG.playerSize,
         height: GAME_CONFIG.playerSize,
      }}
    >
      {/* Character CSS Sprite */}
      <div className={`
         w-full h-full bg-indigo-500 rounded-t-full rounded-b-xl border-2 border-black relative shadow-2xl
         transition-transform duration-100
         ${facing === 'left' ? 'scale-x-[-1]' : ''}
      `}>
         {/* Visor */}
         <div className="absolute top-2 right-0 w-8 h-5 bg-cyan-300 rounded-l-full border-2 border-black border-r-0" />
         {/* Backpack */}
         <div className="absolute top-4 left-[-4px] w-2 h-6 bg-indigo-700 rounded-l-md border-2 border-black -z-10" />
      </div>
      
      {/* Name Tag */}
      <div className="absolute -bottom-6 bg-black/50 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm whitespace-nowrap border border-white/20">
         {username}
      </div>
    </div>
  );
}