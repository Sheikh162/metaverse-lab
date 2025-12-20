"use client";

import React from "react";
import CodeEditorWindow from "@/components/modals/CodeEditorWindow";
import ProctorDashboard from "@/components/modals/ProctorDashboard";
import TerminalWindow from "@/components/modals/TerminalWindow";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Coffee, Construction } from "lucide-react";
import { GameStation } from "@/lib/game-config";

interface ModalManagerProps {
  activeStation: GameStation | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function StationModalManager({ activeStation, isOpen, onClose }: ModalManagerProps) {
  if (!activeStation || !isOpen) return null;

  // 1. SECURITY -> Proctor Dashboard
  if (activeStation.type === "security") {
    return <ProctorDashboard isOpen={isOpen} onClose={onClose} />;
  }

  // 2. EXAM / DEV -> Code Editor
  if (activeStation.type === "exam" || activeStation.type === "dev") {
    return <CodeEditorWindow isOpen={isOpen} onClose={onClose} station={activeStation} />;
  }

  // 3. SERVER -> Terminal
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

  // 4. COMMON AREA (Cafeteria) - Simple Message Dialog
  if (activeStation.type === "common") {
    return (
      <Dialog open={isOpen} onOpenChange={(val) => !val && onClose()}>
        <DialogContent className="sm:max-w-md bg-zinc-900 border-zinc-800 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Coffee className="text-orange-400" />
              {activeStation.label}
            </DialogTitle>
            <DialogDescription className="text-zinc-400">
              {activeStation.description || "A place to relax and chat with peers."}
            </DialogDescription>
          </DialogHeader>
          
          <div className="p-4 bg-zinc-950/50 rounded-lg border border-zinc-800 text-sm text-center text-zinc-500">
             Voice Chat Feature Coming Soon...
          </div>

          <div className="flex justify-end">
            <Button onClick={onClose} variant="secondary">Back to Map</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // 5. SAFETY FALLBACK (Prevents Freezing for unknown types)
  return (
    <Dialog open={isOpen} onOpenChange={(val) => !val && onClose()}>
      <DialogContent className="bg-red-950 border-red-800 text-white">
        <DialogHeader>
           <DialogTitle className="flex gap-2"><Construction /> System Error</DialogTitle>
           <DialogDescription className="text-red-200">
             Station Type <strong>"{activeStation.type}"</strong> is not recognized by the Modal Manager.
           </DialogDescription>
        </DialogHeader>
        <Button onClick={onClose} variant="destructive">Force Close</Button>
      </DialogContent>
    </Dialog>
  );
}