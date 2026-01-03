"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, BookOpen, Calendar, FileSpreadsheet, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Reuse the panels we designed previously
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
      {/* Full screen modal, slightly transparent background */}
      <DialogContent className="max-w-[90vw] h-[85vh] bg-black/95 border-zinc-800 p-0 gap-0 flex flex-col overflow-hidden backdrop-blur-xl">
        
        {/* Header Bar */}
        <div className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <DialogTitle className="text-white font-bold text-lg leading-none">NetVerse OS</DialogTitle>
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">
                {isTeacher ? "Administrator Mode" : "Student Access"}
              </span>
            </div>
          </div>
          
          <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-red-900/20 hover:text-red-400 rounded-full">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden p-6">
          {!token ? (
            <div className="h-full flex flex-col items-center justify-center text-zinc-500 gap-4">
              <p>Google Access Token Not Found.</p>
              <p className="text-sm">Please logout and sign in again.</p>
            </div>
          ) : (
            <Tabs defaultValue="classroom" className="h-full flex flex-col">
              <TabsList className="bg-zinc-900 border border-zinc-800 w-fit mb-6">
                <TabsTrigger value="classroom" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <BookOpen className="w-4 h-4 mr-2" /> Classroom
                </TabsTrigger>
                <TabsTrigger value="calendar" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <Calendar className="w-4 h-4 mr-2" /> Schedule
                </TabsTrigger>
                <TabsTrigger value="sheets" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <FileSpreadsheet className="w-4 h-4 mr-2" /> {isTeacher ? "Gradebook" : "Performance"}
                </TabsTrigger>
              </TabsList>

              <div className="flex-1 overflow-y-auto pr-2">
                <TabsContent value="classroom" className="mt-0 h-full">
                  <ClassroomPanel token={token} isTeacher={isTeacher} />
                </TabsContent>
                
                <TabsContent value="calendar" className="mt-0 h-full">
                  <CalendarPanel token={token} isTeacher={isTeacher} />
                </TabsContent>
                
                <TabsContent value="sheets" className="mt-0 h-full">
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