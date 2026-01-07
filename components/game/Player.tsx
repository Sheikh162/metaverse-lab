import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface PlayerProps {
  pos: { x: number; y: number };
  facing: 'left' | 'right' | 'up' | 'down';
  isMoving: boolean;
  username: string;
}

export default function Player({ pos, facing, isMoving, username }: PlayerProps) {
  
  const spriteMap = {
    left: "/characters/student-left-removebg.png",
    right: "/characters/student-right-removebg.png",
    up: "/characters/student-up-removebg.png",     
    down: "/characters/student-down-removebg.png", 
  };

  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center z-20 w-32 h-32 -ml-4 -mt-8"
      animate={{ x: pos.x, y: pos.y }}
      transition={{ 
        type: "tween", 
        ease: "linear", 
        duration: isMoving ? 0.1 : 0 
      }}
      style={{ zIndex: 20 }}
    >
      {/* 2. The Character Sprite */}
      <img 
        src={spriteMap[facing]} 
        alt="Player"
        className="w-32 h-32 object-contain pixelated drop-shadow-lg" 
      />

      {/* 3. Username Label (Styled Badge) */}
      <div className="absolute -top-8">
        <Badge variant="secondary" className="px-2 py-0 text-[10px] h-5 font-mono bg-black/60 text-white backdrop-blur-sm border-white/10 shadow-sm pointer-events-none">
          {username}
        </Badge>
      </div>

    </motion.div>
  );
}