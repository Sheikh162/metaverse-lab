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
import { Coffee, Construction } from "lucide-react";
import { GameStation } from "@/lib/game-config";

interface ModalManagerProps {
  activeStation: GameStation | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function StationModalManager({ activeStation, isOpen, onClose }: ModalManagerProps) {
  if (!activeStation || !isOpen) return null;

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
        <DialogContent className="sm:max-w-md bg-card border-border text-card-foreground">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl font-bold font-mono">
              <div className="p-2 bg-chart-4/20 rounded-md">
                 <Coffee className="w-5 h-5 text-chart-4" />
              </div>
              {activeStation.label}
            </DialogTitle>
            <DialogDescription className="font-mono text-muted-foreground">
              {activeStation.description || "A place to relax and chat with peers."}
            </DialogDescription>
          </DialogHeader>
          
          <div className="p-6 bg-muted/30 rounded-lg border border-border text-sm text-center text-muted-foreground font-mono italic">
             -- Voice Chat Module: [OFFLINE] --
             <br/>
             Coming in Patch v2.1
          </div>

          <DialogFooter>
            <Button onClick={onClose} variant="secondary" className="font-mono">
              Disconnect
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  // 5. SAFETY FALLBACK (Prevents Freezing for unknown types)
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