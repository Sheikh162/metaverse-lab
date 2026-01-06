"use client";

import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, BookOpen, Calendar, FileSpreadsheet, X, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import ClassroomPanel from "@/components/dashboard/ClassroomPanel";
import CalendarPanel from "@/components/dashboard/CalendarPanel";
import SheetsPanel from "@/components/dashboard/SheetsPanel";

interface DashboardOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  token: string | null;
  isTeacher: boolean;
  user: any;
}

export default function DashboardOverlay({ isOpen, onClose, token, isTeacher, user }: DashboardOverlayProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(val) => !val && onClose()}>
      {/* Container: Uses standard background and border vars */}
      <DialogContent className="!max-w-[95vw] !w-[95vw] h-[90vh] p-0 gap-0 flex flex-col overflow-hidden shadow-2xl backdrop-blur-xl animate-in zoom-in-95 bg-background border-border [&>button]:hidden">        
        {/* Retro Header: Uses muted background for contrast */}
        <div className="h-14 border-b border-border flex items-center justify-between px-6 bg-muted/40 select-none">
          <div className="flex items-center gap-3">
            <div className={`p-1.5 rounded-sm border ${isTeacher ? 'bg-yellow-500/10 border-yellow-500/50' : 'bg-primary/10 border-primary/50'}`}>
              <LayoutDashboard className={`w-4 h-4 ${isTeacher ? 'text-yellow-500' : 'text-primary'}`} />
            </div>
            <div className="flex flex-col">
              <DialogTitle className="text-foreground font-bold text-sm tracking-widest font-mono">NETVERSE_OS v2.4</DialogTitle>
              <DialogDescription className="hidden">Main Operating System Dashboard</DialogDescription>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"/> 
                {isTeacher ? "ROOT ACCESS GRANTED" : "STUDENT PERMISSIONS"}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="hidden sm:flex font-mono text-[10px] gap-1.5 h-6">
              <Wifi className="w-3 h-3"/> CONNECTED
            </Badge>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive transition-colors">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden flex bg-background/50 relative">
           {/* Scanline Effect Overlay */}
           <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] z-10"/>

          {!token ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground gap-4 font-mono z-20">
              <div className="w-16 h-16 border-2 border-dashed border-muted-foreground/30 flex items-center justify-center rounded-lg">
                <X className="w-8 h-8 opacity-50"/>
              </div>
              <p>ENCRYPTED SIGNAL LOST (No Google Token)</p>
            </div>
          ) : (
            <Tabs defaultValue="classroom" className="flex-1 flex flex-col sm:flex-row z-20">
              {/* Sidebar */}
              <div className="w-full sm:w-64 bg-card/50 border-b sm:border-b-0 sm:border-r border-border p-4">
                <TabsList className="flex flex-row sm:flex-col h-auto w-full gap-2 bg-transparent p-0">
                  <DashboardTab value="classroom" icon={BookOpen} label="Classroom" />
                  <DashboardTab value="calendar" icon={Calendar} label="Schedule" />
                  <DashboardTab value="sheets" icon={FileSpreadsheet} label={isTeacher ? "Gradebook" : "Performance"} />
                </TabsList>
              </div>

              {/* Main Panel */}
              <div className="flex-1 overflow-y-auto bg-background p-6">
                 <TabsContent value="classroom" className="mt-0 h-full animate-in fade-in slide-in-from-bottom-2 duration-300">
                   <ClassroomPanel token={token} isTeacher={isTeacher} />
                 </TabsContent>
                 <TabsContent value="calendar" className="mt-0 h-full animate-in fade-in slide-in-from-bottom-2 duration-300">
                   <CalendarPanel token={token} isTeacher={isTeacher} />
                 </TabsContent>
                 <TabsContent value="sheets" className="mt-0 h-full animate-in fade-in slide-in-from-bottom-2 duration-300">
                   <SheetsPanel token={token} isTeacher={isTeacher} user={user} />
                 </TabsContent>
              </div>
            </Tabs>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function DashboardTab({ value, icon: Icon, label }: { value: string, icon: any, label: string }) {
  return (
    <TabsTrigger 
      value={value} 
      className="w-full justify-start gap-3 px-3 py-2.5 font-mono text-xs data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-l-2 data-[state=active]:border-primary rounded-none transition-all hover:bg-muted/50"
    >
      <Icon className="w-4 h-4" />
      {label}
    </TabsTrigger>
  );
}