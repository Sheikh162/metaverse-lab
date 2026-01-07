"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GAME_CONFIG, STATIONS, GameStation, isTeacher } from "@/lib/game-config"; 

// --- COMPONENTS ---
import Player from "./Player";
import Station from "./Station";
import WorldMap from "./WorldMap";
import StationModalManager from "./StationModalManager";
import MiniMap from "@/components/hud/MiniMap";
import ChatModal from "./ChatModal"; 
import Teacher from "./Teacher"; // From Friend's Code
import DashboardOverlay from "@/components/hud/DashboardOverlay"; // From Friend's Code

// --- HOOKS ---
import { RemotePlayer, useMultiplayer } from "@/hooks/useMultiplayer";
import { useAuth } from "../providers/AuthProvider";

// --- SHADCN & UI IMPORTS ---
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Wifi, MapPin, LayoutDashboard, Loader2 } from "lucide-react";


export default function NetVerseEngine({ username }: { username: string }) {
  
  const getChatId = (uid1: string, uid2: string) => {
    return [uid1, uid2].sort().join("_"); 
  };

  // 1. Get Auth Data (User + Token from Friend's Logic)
  const { user, loading, accessToken } = useAuth(); 
  
  // RBAC Check
  const amITeacher = isTeacher(user?.email);

  // --- STATE ---
  const [pos, setPos] = useState({ x: 1200, y: 1500 });
  const [facing, setFacing] = useState<'left' | 'right' | 'up' | 'down'>('down');
  const [isMoving, setIsMoving] = useState(false);
  
  // Interaction State
  const [activeStation, setActiveStation] = useState<GameStation | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false); // Friend's Feature

  // Chat State
  const [closestPlayer, setClosestPlayer] = useState<RemotePlayer | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentChatId, setCurrentChatId] = useState<string>("");

  // Multiplayer Hook
  const { otherPlayers } = useMultiplayer("campus-lobby", pos, facing, isMoving);

  // --- TEACHER IDENTITY LOCK (Friend's Logic) ---
  // useEffect(() => {
  //   if (!loading && amITeacher && user) {
  //       // Force Position to Desk
  //       //setPos({ x: 2100, y: 1350 }); 
  //       //setFacing("down");

  //       // Broadcast Online Status
  //       const statusRef = ref(db, "game_state/professor_status");
  //       set(statusRef, "online");
  //       onDisconnect(statusRef).set("offline");
  //   }
  // }, [loading, amITeacher, user]);
  

  // --- GAME LOOP ---
  useEffect(() => {
    if (loading) return;

    let animationFrameId: number;
    const keysPressed = new Set<string>();

    const handleKeyDown = (e: KeyboardEvent) => keysPressed.add(e.key);
    const handleKeyUp = (e: KeyboardEvent) => keysPressed.delete(e.key);
    const handleBlur = () => { keysPressed.clear(); setIsMoving(false); };

    const gameLoop = () => {
      if (isDialogOpen || isChatOpen || isDashboardOpen) {
          setIsMoving(false); 
          animationFrameId = requestAnimationFrame(gameLoop);
          return;
      }

          const moving = keysPressed.size > 0;
          setIsMoving(moving);

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
      

      // Proximity Checks
      let closest: RemotePlayer | null = null;
      let minDist = 100; 
      for (const p of otherPlayers) {
        const dist = Math.hypot(p.x - pos.x, p.y - pos.y);
        if (dist < minDist) { minDist = dist; closest = p; }
      }
      setClosestPlayer(closest);

      if (keysPressed.has("e") && closest && !isChatOpen && user) {
        setCurrentChatId(getChatId(user.uid, closest.id));
        setIsChatOpen(true);
        keysPressed.delete("e"); 
      }

      const nearby = STATIONS.find((s) => {
        const dx = Math.abs(pos.x - s.x);
        const dy = Math.abs(pos.y - s.y);
        const radius = s.interactionRadius || 80;
        return dx < radius && dy < radius; 
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
    window.addEventListener("blur", handleBlur);
    animationFrameId = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pos, isDialogOpen, isChatOpen, isDashboardOpen, otherPlayers, user, amITeacher, loading]); 

  // --- LOADING SCREEN ---
  if (loading) {
    return (
      <div className="h-screen w-screen bg-background flex flex-col items-center justify-center text-foreground gap-4">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
        <p className="text-muted-foreground font-mono text-sm animate-pulse">Authenticating Identity...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background overflow-hidden relative font-sans selection:bg-primary/30">
      
      {/* 1. HUD Layer (Your Retro Style) */}
      <div className="absolute top-6 left-6 z-50 pointer-events-none">
        <Card className="bg-card/90 backdrop-blur-sm border-border shadow-lg">
          <CardContent className="p-4 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-md">
                <Gamepad2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-foreground font-bold font-mono tracking-tight leading-none">
                  NETVERSE <span className="text-primary">OS</span>
                </h1>
                <div className="flex items-center gap-2 mt-1">
                   <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                      Online • {username} {amITeacher && <span className="text-yellow-500 font-bold">(ADMIN)</span>}
                    </span>
                </div>
              </div>
            </div>
            
            <div className="h-px w-full bg-border" />
            
            <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
               <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> {Math.round(pos.x)}, {Math.round(pos.y)}</span>
               <span className="flex items-center gap-1"><Wifi className="w-3 h-3"/> 24ms</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 2. Dashboard Button (Friend's Feature, Your Style) */}
      <div className="absolute top-6 right-6 z-50">
        <Button 
          onClick={() => setIsDashboardOpen(true)}
          className="bg-card/90 border border-border hover:bg-primary hover:text-primary-foreground backdrop-blur-md shadow-lg gap-2 transition-all font-mono text-xs h-10"
        >
          <LayoutDashboard className="w-4 h-4" />
          <span className="hidden sm:inline">DASHBOARD</span>
        </Button>
      </div>

      {/* 3. Interaction Prompts */}
      {closestPlayer && !isChatOpen && !isDashboardOpen && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <Badge variant="secondary" className="px-4 py-2 border-primary/50 shadow-[0_0_15px_rgba(var(--primary),0.5)] flex items-center gap-3 text-sm bg-background/90 backdrop-blur-md">
            <span className="bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center rounded font-mono text-xs font-bold border border-white/20">E</span>
            <span className="font-mono text-foreground">Chat with {closestPlayer.username}</span>
          </Badge>
        </div>
      )}

      {activeStation && !isDialogOpen && !isDashboardOpen && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-50 animate-bounce">
           <Badge className="px-6 py-2 bg-foreground text-background font-bold border-2 border-primary shadow-[0_0_20px_rgba(var(--primary),0.6)] flex items-center gap-3 text-sm">
             <span className="bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center rounded font-mono text-xs font-bold">↵</span>
             <span className="font-mono">
               {activeStation.type === 'npc-teacher' ? "Talk to Professor" : `Access ${activeStation.label}`}
             </span>
           </Badge>
        </div>
      )}

      <MiniMap playerPos={pos} />

      {/* 4. Game Viewport */}
      <div 
        className="relative overflow-hidden bg-black border-4 border-border rounded-xl shadow-2xl ring-1 ring-white/10"
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

          {/* Other Players */}
          {otherPlayers.map((p) => (
            <Player 
              key={p.id}
              pos={{ x: p.x, y: p.y }}
              facing={p.facing}
              isMoving={p.isMoving}
              username={p.username}
            />
          ))}

          {/* Stations (Exclude NPC Teacher) */}
          {STATIONS.filter(s => s.type !== "npc-teacher").map((station) => (
            <Station key={station.id} station={station} isActive={activeStation?.id === station.id} />
          ))}

          {/* Friend's Logic: Render Teacher NPC only if I am not the teacher */}
          {!amITeacher && STATIONS.filter(s => s.type === "npc-teacher").map(npc => (
            <Teacher key={npc.id} x={npc.x} y={npc.y} label={npc.label} status="online" />
          ))}

          {/* My Player */}
          <Player pos={pos} facing={facing} username={username} isMoving={false} />

        </motion.div>
        
        {/* Your Retro Scanlines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]" style={{ backgroundSize: "100% 2px, 3px 100%" }} />
      </div>

      <StationModalManager 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        activeStation={activeStation}
      />

      {user && closestPlayer && (
        <ChatModal 
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          chatId={currentChatId}
          myUsername={username}
          partnerName={closestPlayer ? closestPlayer.username : "Student"}
        />
      )}

      {/* Friend's Logic: Full Dashboard */}
      <DashboardOverlay 
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
        token={accessToken}
        isTeacher={amITeacher}
        user={user}
      />

    </div>
  );
}