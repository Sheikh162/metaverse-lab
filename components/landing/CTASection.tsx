"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, Gamepad2 } from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";
import LoginDialog from "./LoginDialog";

export default function CTASection() {
  const { user } = useAuth();
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);

  // Smart Handler: Checks auth before launching
  const handleLaunch = () => {
    if (user) {
      router.push("/lab");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <section className="py-24 px-4 text-center border-t border-border relative bg-card overflow-hidden">
      
      {/* 1. Retro Background Grid (Matches Lobby) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--muted)_1px,transparent_1px),linear-gradient(to_bottom,var(--muted)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none"></div>
      
      {/* 2. Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 shadow-[0_0_30px_rgba(var(--primary),0.2)]">
            <Gamepad2 className="w-8 h-8 text-primary" />
          </div>
        </motion.div>

        <motion.h2 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-4xl md:text-5xl font-bold mb-6 tracking-tight font-sans"
        >
          Ready to <span className="text-primary">Start Game?</span>
        </motion.h2>
        
        <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="text-muted-foreground mb-10 text-lg font-mono"
        >
          Join thousands of students building the future of education together.
          <br />
          <span className="text-xs text-primary/70 uppercase tracking-widest mt-2 block">
            [ No Downloads Required ]
          </span>
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
        >
          {/* Smart Button */}
          <Button 
            size="lg" 
            onClick={handleLaunch}
            className="h-14 px-10 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105 font-bold"
          >
            Launch NetVerse <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
      
      <footer className="mt-24 text-muted-foreground/40 text-xs font-mono border-t border-border/30 pt-8">
        <p>© 2026 NETVERSE INC. ALL SYSTEMS OPERATIONAL.</p>
      </footer>

      {/* Login Popup */}
      <LoginDialog isOpen={showLogin} onOpenChange={setShowLogin} />
    </section>
  );
}