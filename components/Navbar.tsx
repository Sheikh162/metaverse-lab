"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Gamepad2, LogIn } from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";
import { UserNav } from "@/components/UserNav"; 
import LoginDialog from "@/components/landing/LoginDialog"; 

export function Navbar() {
  const { user } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
              <Gamepad2 className="h-5 w-5" />
            </div>
            <span className="font-mono text-lg font-bold tracking-tight text-foreground">
              NetVerse
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {user ? (
              <UserNav />
            ) : (
              <Button 
                onClick={() => setShowLogin(true)} 
                variant="default" 
                size="sm" 
                className="font-mono shadow-md"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            )}
          </div>
        </div>
      </header>

      <LoginDialog isOpen={showLogin} onOpenChange={setShowLogin} />
    </>
  );
}