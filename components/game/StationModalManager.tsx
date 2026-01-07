"use client";

import React from "react";
import CodeEditorWindow from "@/components/modals/CodeEditorWindow";
import TerminalWindow from "@/components/modals/TerminalWindow";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Coffee, Construction, Mic, Video } from "lucide-react";
import { GameStation } from "@/lib/game-config";

// ✅ 1. IMPORT JITSI & AUTH
import { JitsiMeeting } from "@jitsi/react-sdk";
import { useAuth } from "@/components/providers/AuthProvider";

interface ModalManagerProps {
  activeStation: GameStation | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function StationModalManager({ activeStation, isOpen, onClose }: ModalManagerProps) {
  // ✅ 2. GET USER DATA FOR THE MEETING
  const { user } = useAuth();

  if (!activeStation || !isOpen) return null;

  // --- 1. EXAM / DEV -> Code Editor ---
  if (activeStation.type === "exam" || activeStation.type === "dev") {
    return <CodeEditorWindow isOpen={isOpen} onClose={onClose} station={activeStation} />;
  }

  // --- 2. SERVER -> Terminal ---
  if (activeStation.type === "server") {
    return (
      <TerminalWindow 
        isOpen={isOpen} 
        onClose={onClose} 
        stationName={activeStation.label} 
        stationId={activeStation.id} 
      />
    );
  }

  // --- 3. COMMON AREA (CAFETERIA) -> VOICE LOUNGE INTEGRATED ---
  if (activeStation.type === "common") {
    return (
      <Dialog open={isOpen} onOpenChange={(val) => !val && onClose()}>
        {/* Made the modal wider (!max-w-[1000px]) and taller (!h-[80vh]) to fit video */}
        <DialogContent className="!max-w-[1000px] !h-[80vh] bg-zinc-950 border-zinc-800 text-foreground p-0 gap-0 flex flex-col overflow-hidden">
          
          {/* Custom Header */}
          <div className="h-14 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-4 shrink-0">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/10 rounded-md">
                   <Coffee className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <DialogTitle className="font-mono text-sm font-bold text-orange-100">
                    {activeStation.label}
                  </DialogTitle>
                  <DialogDescription className="text-[10px] text-zinc-400 font-mono">
                     Global Voice Channel • Public
                  </DialogDescription>
                </div>
             </div>
             
             <Button onClick={onClose} variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-white/5 font-mono text-xs">
                LEAVE AREA
             </Button>
          </div>
          
          {/* Jitsi Meeting Area */}
          <div className="flex-1 bg-black relative">
            <JitsiMeeting
              roomName="NetVerse_Cafeteria_Common_Area_V1" // Fixed Room Name for Cafeteria
              configOverwrite={{
                startWithAudioMuted: true,
                startWithVideoMuted: true,
                prejoinPageEnabled: false, // Skip the "Join" screen
                theme: 'dark'
              }}
              interfaceConfigOverwrite={{
                TOOLBAR_BUTTONS: [
                  'microphone', 'camera', 'chat', 'raisehand',
                  'tileview', 'fullscreen', 'participants-pane'
                ],
                SHOW_JITSI_WATERMARK: false,
              }}
              userInfo={{
                displayName: user?.displayName || "Student",
                email: user?.email || ""
              }}
              getIFrameRef={(iframeRef) => {
                iframeRef.style.height = '100%';
                iframeRef.style.width = '100%';
                iframeRef.style.background = '#000';
              }}
            />
            
            {/* Overlay if needed (optional) */}
            <div className="absolute top-4 left-4 pointer-events-none opacity-50">
               <span className="bg-black/50 text-white text-[10px] font-mono px-2 py-1 rounded border border-white/10">
                 NETVERSE LIVE FEED
               </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // --- 4. SAFETY FALLBACK ---
  return (
    <Dialog open={isOpen} onOpenChange={(val) => !val && onClose()}>
      <DialogContent className="bg-destructive/10 border-destructive text-foreground">
        <DialogHeader>
           <DialogTitle className="flex gap-2 items-center text-destructive font-mono">
             <Construction className="w-5 h-5"/> SYSTEM ERROR
           </DialogTitle>
           <DialogDescription className="text-destructive-foreground font-mono">
             Station Type <strong>"{activeStation.type}"</strong> is unknown.
           </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onClose} variant="destructive">Force Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}