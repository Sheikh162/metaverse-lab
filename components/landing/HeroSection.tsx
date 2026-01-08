"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import router for manual navigation
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Gamepad2 } from "lucide-react";
import { motion } from "motion/react";
import { useAuth } from "@/components/providers/AuthProvider"; // Import Auth Hook
import LoginDialog from "./LoginDialog"; // Import the new Modal
import Link from "next/link";

export default function HeroSection() {
  const { user } = useAuth();
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);

  // The Smart Handler
  const handleEnterCampus = () => {
    if (user) {
      // If already logged in, go straight to the game
      router.push("/lab");
    } else {
      // If not, open the login popup
      setShowLogin(true);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-background">
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/maps/lab-map-final2.png" 
          alt="Virtual Campus Map"
          fill
          className="object-cover opacity-60 dark:opacity-40 pixelated"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_100%)]" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full max-w-4xl px-4 text-center mt-16">
        
        {/* Retro Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-mono border-primary/50 bg-background/50 backdrop-blur-sm gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            SYSTEM ONLINE: v2.0
          </Badge>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-sans text-foreground drop-shadow-md"
        >
          Your University, <br />
          <span className="text-primary drop-shadow-[0_2px_10px_rgba(var(--primary),0.5)]">
            Reimagined.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-mono"
        >
          Stop switching tabs. Attend classes and run code in a persistent, gamified world.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* MODIFIED: Removed <Link> wrapper, added onClick handler */}
          <Button 
            size="lg" 
            onClick={handleEnterCampus}
            className="h-12 px-8 text-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
          >
            <Gamepad2 className="mr-2 w-5 h-5" />
            ENTER WORLD
          </Button>
          
          <Button size="lg" variant="outline" className="h-12 px-8 bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground border-input">
            <Sparkles className="mr-2 w-4 h-4" />
            <Link href="https://drive.google.com/file/d/1V8XlpWuUzcwC_AsdyKU3pUI88b1gJRWs/view">
              Watch Demo
            </Link>
          </Button>
        </motion.div>

      </div>

      {/* LOGIN POPUP (Controlled by state) */}
      <LoginDialog isOpen={showLogin} onOpenChange={setShowLogin} />

    </section>
  );
}