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
// Import the Chat Modal we created earlier
import ChatModal from "./ChatModal"; 
import { RemotePlayer, useMultiplayer } from "@/hooks/useMultiplayer";
import { useAuth } from "../providers/AuthProvider";

export default function NetVerseEngine({ username }: { username: string }) {
  
  // Helper to create unique room IDs for private chats
  const getChatId = (uid1: string, uid2: string) => {
    return [uid1, uid2].sort().join("_"); 
  };

  const { user } = useAuth();
  
  // --- 1. STATE ---
const [pos, setPos] = useState({ 
  x: 1200,   // Middle of the map width
  y: 1500    // Bottom of the map (Spawn Circle)
});  const [facing, setFacing] = useState<'left' | 'right' | 'up' | 'down'>('down');
  const [isMoving, setIsMoving] = useState(false);
  
  // Interaction State
  const [activeStation, setActiveStation] = useState<GameStation | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Chat State
  const [closestPlayer, setClosestPlayer] = useState<RemotePlayer | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentChatId, setCurrentChatId] = useState<string>("");

  // Multiplayer Hook
  const { otherPlayers } = useMultiplayer(
    "campus-lobby", 
    pos,            
    facing,         
    isMoving        
  );

  // --- 2. GAME LOOP ---
  useEffect(() => {
    let animationFrameId: number;
    const keysPressed = new Set<string>();

    const handleKeyDown = (e: KeyboardEvent) => keysPressed.add(e.key);
    const handleKeyUp = (e: KeyboardEvent) => keysPressed.delete(e.key);
    
    // FIX 1: Stop moving if user switches tabs (The "Running Away" Fix)
    const handleBlur = () => {
      keysPressed.clear();
      setIsMoving(false);
    };

const gameLoop = () => {
      if (isDialogOpen) return; 

      const moving = keysPressed.size > 0;
      setIsMoving(moving);

      // (Movement Logic stays the same...)
      setPos((prev) => {
        let { x, y } = prev;
        const speed = GAME_CONFIG.playerSpeed;
        if (keysPressed.has("ArrowUp") || keysPressed.has("w")) { y -= speed; setFacing('up'); }
        if (keysPressed.has("ArrowDown") || keysPressed.has("s")) { y += speed; setFacing('down'); }
        if (keysPressed.has("ArrowLeft") || keysPressed.has("a")) { x -= speed; setFacing("left"); }
        if (keysPressed.has("ArrowRight") || keysPressed.has("d")) { x += speed; setFacing("right"); }
        return {
          x: Math.max(GAME_CONFIG.playerSize, Math.min(x, GAME_CONFIG.mapWidth - GAME_CONFIG.playerSize)),
          y: Math.max(GAME_CONFIG.playerSize, Math.min(y, GAME_CONFIG.mapHeight - GAME_CONFIG.playerSize)),
        };
      });

      // --- FIX STARTS HERE ---
      
      // 1. Explicitly type the variable
      let closest: RemotePlayer | null = null;
      let minDist = 100; // 100px Radius

      // 2. Use 'for...of' instead of '.forEach' so TypeScript understands it
      for (const p of otherPlayers) {
        const dist = Math.hypot(p.x - pos.x, p.y - pos.y);
        
        // Debug Log: Uncomment to see if distances are valid
        // console.log(p.username, Math.round(dist)); 

        if (dist < minDist) {
          minDist = dist;
          closest = p;
        }
      }
      
      setClosestPlayer(closest);

      // 3. Chat Trigger Check
      // Now TS knows 'closest' can be a RemotePlayer, so closest.id is valid
      if (keysPressed.has("e") && closest && !isChatOpen && user) {
        const chatId = getChatId(user.uid, closest.id); // <--- No more error
        setCurrentChatId(chatId);
        setIsChatOpen(true);
        keysPressed.delete("e"); 
      }
      // --- FIX ENDS HERE ---

      // (Station Logic stays the same...)
      const nearby = STATIONS.find((s) => {
        const dx = Math.abs(pos.x - s.x);
        const dy = Math.abs(pos.y - s.y);
        return dx < 80 && dy < 80; 
      });
      setActiveStation(nearby || null);

      if (keysPressed.has("Enter") && nearby) {
        setIsDialogOpen(true);
        keysPressed.delete("Enter");
      }

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur); // Add Blur Listener
    animationFrameId = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur); // Remove Blur Listener
      cancelAnimationFrame(animationFrameId);
    };
  }, [pos, isDialogOpen, isChatOpen, otherPlayers, user]); 

  return (
    <div className="flex items-center justify-center min-h-screen bg-black overflow-hidden relative">
      
      {/* HUD Layer */}
      <div className="absolute top-4 left-4 z-50">
        <h1 className="text-white font-bold text-xl tracking-widest">NETVERSE <span className="text-blue-500">LABS</span></h1>
        <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
          Logged in as {username} • {Math.round(pos.x)}, {Math.round(pos.y)}
        </div>
      </div>

      {/* FIX 3: HUD Message for "Press E" (This was missing!) */}
      {closestPlayer && !isChatOpen && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-black/80 text-white px-4 py-2 rounded-full border border-white/20 shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center gap-2">
            <span className="bg-white text-black w-5 h-5 flex items-center justify-center rounded text-xs font-bold">E</span>
            <span className="text-sm font-medium">Chat with {closestPlayer.username}</span>
          </div>
        </div>
      )}

      <MiniMap playerPos={pos} />

      {/* Camera Viewport */}
      <div 
        className="relative overflow-hidden bg-slate-900 border-4 border-slate-800 rounded-xl shadow-2xl"
        style={{ width: GAME_CONFIG.viewportWidth, height: GAME_CONFIG.viewportHeight }}
      >
        <motion.div
          className="absolute origin-top-left"
          animate={{
            x: -pos.x + GAME_CONFIG.viewportWidth / 2,
            y: -pos.y + GAME_CONFIG.viewportHeight / 2,
          }}
          transition={{ type: "tween", ease: "linear", duration: 0 }} 
          style={{ width: GAME_CONFIG.mapWidth, height: GAME_CONFIG.mapHeight }}
        >
          <WorldMap />

          {/* Render Other Players */}
          {otherPlayers.map((p) => (
            <Player 
              key={p.id}
              pos={{ x: p.x, y: p.y }}
              facing={p.facing}
              isMoving={p.isMoving}
              username={p.username}
            />
          ))}

          {/* Render Stations */}
          {STATIONS.map((station) => (
            <Station 
              key={station.id} 
              station={station} 
              isActive={activeStation?.id === station.id} 
            />
          ))}

          {/* Render My Player */}
          <Player pos={pos} facing={facing} username={username} isMoving={false} />

        </motion.div>
      </div>

      {/* Station Modal */}
      <StationModalManager 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        activeStation={activeStation}
      />

      {/* FIX 4: Render the Chat Modal (This was also missing!) */}
      {user && closestPlayer && (
        <ChatModal 
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          chatId={currentChatId}
          myUsername={username}
          partnerName={closestPlayer ? closestPlayer.username : "Student"}
        />
      )}

    </div>
  );
}