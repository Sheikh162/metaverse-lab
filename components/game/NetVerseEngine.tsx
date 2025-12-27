"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GAME_CONFIG, STATIONS, GameStation } from "@/lib/game-config"; 

// --- COMPONENTS ---
import Player from "./Player";
import Station from "./Station";
import WorldMap from "./WorldMap";
import StationModalManager from "./StationModalManager";
import MiniMap from "@/components/hud/MiniMap";
import { RemotePlayer, useMultiplayer } from "@/hooks/useMultiplayer";
import { useAuth } from "../providers/AuthProvider";
// import TaskOverlay from "@/components/hud/TaskOverlay"; 

export default function NetVerseEngine({username}:{
  username: string;
}) {
  
  const getChatId = (uid1: string, uid2: string) => {
  return [uid1, uid2].sort().join("_"); 
};

const { user } = useAuth();
  // --- 1. STATE ---
  // Start player in the middle of the large map
  const [pos, setPos] = useState({ x: GAME_CONFIG.mapWidth / 2, y: GAME_CONFIG.mapHeight / 2 });
  const [facing, setFacing] = useState<'left' | 'right' | 'up' | 'down'>('down');
  const [isMoving, setIsMoving] = useState(false);
  // Interaction State
  const [activeStation, setActiveStation] = useState<GameStation | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

// --- NEW STATE FOR CHAT ---
  const [closestPlayer, setClosestPlayer] = useState<RemotePlayer | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentChatId, setCurrentChatId] = useState<string>("");

  const { otherPlayers } = useMultiplayer(
    "campus-lobby", // The Room ID (can be dynamic later)
    pos,            // My Current X/Y
    facing,         // My Current Direction
    isMoving        // Am I walking?
  );

  // --- 2. GAME LOOP ---
  useEffect(() => {
    let animationFrameId: number;
    const keysPressed = new Set<string>();

    const handleKeyDown = (e: KeyboardEvent) => keysPressed.add(e.key);
    const handleKeyUp = (e: KeyboardEvent) => keysPressed.delete(e.key);

    const gameLoop = () => {
      if (isDialogOpen) return; // Pause movement if modal is open

      const moving = keysPressed.size > 0;
      setIsMoving(moving);

      setPos((prev) => {
        let { x, y } = prev;
        const speed = GAME_CONFIG.playerSpeed;

        // Movement Logic
        if (keysPressed.has("ArrowUp") || keysPressed.has("w")) {
            y -= speed;
            setFacing('up');
        }
        if (keysPressed.has("ArrowDown") || keysPressed.has("s")) {
            y += speed;
            setFacing('down');
        }
        if (keysPressed.has("ArrowLeft") || keysPressed.has("a")) {
          x -= speed;
          setFacing("left");
        }
        if (keysPressed.has("ArrowRight") || keysPressed.has("d")) {
          x += speed;
          setFacing("right");
        }

        // Simple Boundary Checks (Keep inside map)
        return {
          x: Math.max(GAME_CONFIG.playerSize, Math.min(x, GAME_CONFIG.mapWidth - GAME_CONFIG.playerSize)),
          y: Math.max(GAME_CONFIG.playerSize, Math.min(y, GAME_CONFIG.mapHeight - GAME_CONFIG.playerSize)),
        };
      });

      // 1. FIND CLOSEST PLAYER (Add this block)
      //let closest: RemotePlayer | null  = null;
      let closest: any  = null;
      let minDist = 60; // Interaction radius

      otherPlayers.forEach((p) => {
        const dist = Math.hypot(p.x - pos.x, p.y - pos.y);
        console.log(`Distance to ${p.username}: ${Math.round(dist)}px`);
        if (dist < minDist) {
          minDist = dist;
          closest = p;
        }
      });
      setClosestPlayer(closest);

      // 2. HANDLE "E" KEY FOR CHAT
      // If we are close to someone AND chat isn't already open
      if (keysPressed.has("e") && closest && !isChatOpen && user) {
        const chatId = getChatId(user.uid, closest.id);
        setCurrentChatId(chatId);
        setIsChatOpen(true);
        keysPressed.delete("e"); // Prevent double trigger
      }

      // Check Station Proximity (Simple Distance Check)
      const nearby = STATIONS.find((s) => {
        const dx = Math.abs(pos.x - s.x);
        const dy = Math.abs(pos.y - s.y);
        return dx < 80 && dy < 80; // 80px interaction radius
      });
      setActiveStation(nearby || null);

      // Handle Enter Key
      if (keysPressed.has("Enter") && nearby) {
        setIsDialogOpen(true);
        keysPressed.delete("Enter");
      }

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    animationFrameId = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pos, isDialogOpen]); 



  return (
    <div className="flex items-center justify-center min-h-screen bg-black overflow-hidden relative">
      
      {/* HUD Layer */}
      <div className="absolute top-4 left-4 z-50">
        <h1 className="text-white font-bold text-xl tracking-widest">NETVERSE <span className="text-blue-500">LABS</span></h1>
        <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
Logged in as {username} • {Math.round(pos.x)}, {Math.round(pos.y)}        </div>
      </div>

      <MiniMap playerPos={pos} />

      {/* Camera Viewport */}
      <div 
        className="relative overflow-hidden bg-slate-900 border-4 border-slate-800 rounded-xl shadow-2xl"
        style={{ width: GAME_CONFIG.viewportWidth, height: GAME_CONFIG.viewportHeight }}
      >
        
        {/* Moving World Layer */}
        <motion.div
          className="absolute origin-top-left"
          animate={{
            // Centers player in viewport
            x: -pos.x + GAME_CONFIG.viewportWidth / 2,
            y: -pos.y + GAME_CONFIG.viewportHeight / 2,
          }}
          transition={{ type: "tween", ease: "linear", duration: 0 }} 
          style={{ width: GAME_CONFIG.mapWidth, height: GAME_CONFIG.mapHeight }}
        >
          
          {/* 1. Render Map (CSS Version) */}
          <WorldMap />

          {otherPlayers.map((p) => (
            <Player 
              key={p.id}
              pos={{ x: p.x, y: p.y }}
              facing={p.facing}
              isMoving={p.isMoving}
              username={p.username}
            />
          ))}

          {/* 2. Render Stations */}
          {STATIONS.map((station) => (
            <Station 
              key={station.id} 
              station={station} 
              isActive={activeStation?.id === station.id} 
            />
          ))}

          {/* 3. Render Player (CSS Version) */}
          <Player pos={pos} facing={facing} username={username} />

        </motion.div>
      </div>

      {/* Modal Manager */}
      <StationModalManager 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        activeStation={activeStation}
      />

    </div>
  );
}