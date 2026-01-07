"use client";

import { Code2, Users, Map, Cpu, Zap, Globe, LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface BentoItemProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  className?: string;
  delay?: number;
}

function BentoItem({ icon: Icon, title, desc, className = "", delay = 0 }: BentoItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={className}
    >
      <Card className="h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 group overflow-hidden border-muted">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm font-mono leading-relaxed">
            {desc}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function FeatureSection() {
  return (
    <section id="features" className="py-24 px-6 relative z-10 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Loadout <span className="text-primary">Capabilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm md:text-base"
          >
            We replaced the Monotone Learning Management System (LMS) with an immersive metaverse.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {/* Main Feature - Wide */}
          <BentoItem 
            icon={Code2}
            title="Cloud IDE Terminal"
            desc="Write C++, Python, and JS directly in the browser. No setup required. Collaborative coding sessions with zero latency."
            className="md:col-span-2"
            delay={0.1}
          />
          {/* Feature 2 */}
          <BentoItem 
            icon={Users}
            title="Spatial Audio"
            desc="Proximity voice chat. Walk closer to hear, walk away to mute."
            delay={0.2}
          />
          {/* Feature 3 */}
          <BentoItem 
            icon={Map}
            title="Map Editor"
            desc="Design your own campus, labs, or breakout rooms using our Tiled editor integration."
            delay={0.3}
          />
          {/* Feature 4 */}
          <BentoItem 
            icon={Cpu}
            title="Low Latency Netcode"
            desc="Powered by WebSocket & WebRTC for real-time state synchronization."
            delay={0.4}
          />
          {/* Tall/Gamification Feature */}
          <BentoItem 
            icon={Zap}
            title="XP & Leveling"
            desc="Earn XP for assignments. Unlock skins and badges as you master algorithms."
            className="md:row-span-2"
            delay={0.5}
          />
           {/* Wide Feature */}
           <BentoItem 
            icon={Globe}
            title="Browser Native"
            desc="Runs on any laptop. No heavy downloads. Just share the URL."
            className="md:col-span-2"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}