"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface TeacherProps {
  x: number;
  y: number;
  label: string;
  status: "online" | "offline";
}

export default function Teacher({ x, y, label, status }: TeacherProps) {
  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center z-20"
      style={{ left: x - 32, top: y - 64 }}
    >
      <Badge 
        variant="outline" 
        className="mb-1 bg-yellow-950/80 border-yellow-600 text-yellow-500 text-[10px] font-mono px-2 py-0 h-5 backdrop-blur-sm"
      >
        {label}
      </Badge>

      <div className="relative group">
        <img 
          src="/characters/teacher.png" 
          alt="Professor" 
          className="w-16 h-16 object-contain pixelated drop-shadow-xl"
        />
        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-black ${status === 'online' ? 'bg-green-500 animate-pulse' : 'bg-zinc-500'}`} />
      </div>
    </motion.div>
  );
}