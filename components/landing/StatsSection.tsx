"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Active Nodes", value: "12+" }, // Changed "Campuses" to "Nodes" for retro vibe
  { label: "Code Executed", value: "85k+" },
  { label: "Players Online", value: "1,240" },
  { label: "Sys Uptime", value: "99.9%" },
];

export default function StatsSection() {
  return (
    <section id="stats" className="relative z-20 -mt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-card/50 backdrop-blur-md border-border shadow-xl">
            <CardContent className="p-8 flex flex-wrap justify-between items-center gap-8 md:gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center md:items-start min-w-[140px]">
                  <div className="text-4xl font-bold text-foreground font-mono mb-1 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold font-mono text-primary/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}