"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"; // Requires: npx shadcn@latest add separator
import { useAuth } from "../providers/AuthProvider";
import { Loader2, Gamepad2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function LobbyScreen({ onJoin }: { onJoin: (name: string, role: string) => void }) {
  const [name, setName] = useState("");
  const { user, signInWithGoogle } = useAuth();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (user) {
      setIsRedirecting(true);
      // Wait 1.5 seconds for the "Identity Verified" animation to play
      const timer = setTimeout(() => {
        onJoin(user.displayName || "Student", "student");
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [user, onJoin]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden selection:bg-primary/20">
      
      {/* 1. Retro Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--muted)_1px,transparent_1px),linear-gradient(to_bottom,var(--muted)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_80%)]"></div>
      
      {/* 2. Main Login Card */}
      <Card className="w-full max-w-md bg-card border-border shadow-2xl relative z-10 animate-in fade-in zoom-in-95 duration-500">
        
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

        <CardHeader className="text-center pb-2">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 border border-primary/20">
            <Gamepad2 className="w-7 h-7 text-primary" />
          </div>
          <CardTitle className="text-3xl font-black tracking-tight font-sans text-foreground">
            NETVERSE <span className="text-primary">LABS</span>
          </CardTitle>
          <CardDescription className="font-mono text-xs text-muted-foreground pt-2">
            SPATIAL OPERATING SYSTEM v2.0
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 pt-6">
          
          {/* STATE: AUTHENTICATING */}
          {isRedirecting ? (
            <div className="flex flex-col items-center justify-center py-8 space-y-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse"></div>
                <Loader2 className="w-10 h-10 text-primary animate-spin relative z-10" />
              </div>
              <div className="text-center space-y-1">
                <h3 className="text-lg font-bold font-mono text-foreground">IDENTITY VERIFIED</h3>
                <p className="text-xs text-muted-foreground font-mono">Initializing World Engine...</p>
              </div>
            </div>
          ) : (
            /* STATE: LOGIN FORM */
            <>
              {/* Google Login Button */}
              <Button 
                variant="outline"
                className="w-full h-12 font-mono text-sm relative group hover:border-primary/50 transition-all"
                onClick={signInWithGoogle}
              >
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                   <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
                <span>INITIALIZE WITH GOOGLE</span>
              </Button>

              <div className="relative flex items-center gap-4 py-2">
                <Separator className="flex-1 bg-border" />
                <span className="text-[10px] uppercase font-bold text-muted-foreground font-mono tracking-widest">
                  OR GUEST ACCESS
                </span>
                <Separator className="flex-1 bg-border" />
              </div>

              <div className="space-y-3">
                <Input 
                  placeholder="ENTER ALIAS..." 
                  className="bg-muted/30 border-input font-mono text-sm h-11 focus-visible:ring-primary"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Button 
                  className="w-full h-11 font-bold font-mono text-sm shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all"
                  onClick={() => onJoin(name || "Guest", "student")}
                >
                  JACK IN <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </>
          )}
        </CardContent>
        
        <CardFooter className="flex justify-center pb-6">
           <Badge variant="secondary" className="font-mono text-[10px] text-muted-foreground bg-secondary/50">
             SECURE CONNECTION :: ENCRYPTED
           </Badge>
        </CardFooter>
      </Card>
      
      {/* Bottom Footer */}
      <div className="absolute bottom-4 text-center">
        <p className="text-[10px] text-muted-foreground/60 font-mono">
          © 2026 NETVERSE INC. SYSTEM STATUS: <span className="text-green-500">NORMAL</span>
        </p>
      </div>
    </div>
  );
}