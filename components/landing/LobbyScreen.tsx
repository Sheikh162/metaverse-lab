"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { User, Shield } from "lucide-react";


export default function LobbyScreen({ onJoin }: { onJoin: (name: string, role: string) => void }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState<"student" | "teacher">("student");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-black to-black" />
      
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 p-8 z-10 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tighter">
            NETVERSE <span className="text-blue-500">LABS</span>
          </h1>
          <p className="text-zinc-400">Enter the Digital Campus</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase">Identity</label>
            <Input 
              placeholder="Enter your name (e.g. John Doe)" 
              className="bg-black border-zinc-700 text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase">Access Level</label>
            <div className="grid grid-cols-2 gap-4">
              <div 
                onClick={() => setRole("student")}
                className={`cursor-pointer border rounded-lg p-4 flex flex-col items-center gap-2 transition-all ${role === "student" ? "bg-blue-600/20 border-blue-500 text-white" : "border-zinc-700 text-zinc-500 hover:bg-zinc-800"}`}
              >
                <User className="w-6 h-6" />
                <span className="text-sm font-bold">Student</span>
              </div>
              <div 
                onClick={() => setRole("teacher")}
                className={`cursor-pointer border rounded-lg p-4 flex flex-col items-center gap-2 transition-all ${role === "teacher" ? "bg-purple-600/20 border-purple-500 text-white" : "border-zinc-700 text-zinc-500 hover:bg-zinc-800"}`}
              >
                <Shield className="w-6 h-6" />
                <span className="text-sm font-bold">Proctor</span>
              </div>
            </div>
          </div>

          <Button 
            className="w-full bg-white text-black hover:bg-zinc-200 font-bold py-6"
            onClick={() => { if(name) onJoin(name, role) }}
          >
            ENTER SIMULATION
          </Button>
        </div>
      </Card>
    </div>
  );
}