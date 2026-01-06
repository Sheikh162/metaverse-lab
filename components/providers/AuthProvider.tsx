"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  User, 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut,
  GoogleAuthProvider 
} from "firebase/auth";
import { auth } from "@/lib/firebase"; // Removed googleProvider import to use a fresh instance

type AuthContextType = {
  user: User | null;
  loading: boolean;
  accessToken: string | null;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  accessToken: null,
  signInWithGoogle: async () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = async () => {
    try {
      // 🟢 1. Create a FRESH provider instance (Like your old code)
      // This ensures we don't have stale scopes from a previous session
      const provider = new GoogleAuthProvider();

      // 🟢 2. Add ALL Required Scopes
      // CLASSROOM
      provider.addScope('https://www.googleapis.com/auth/classroom.courses');
      provider.addScope('https://www.googleapis.com/auth/classroom.coursework.students');
      provider.addScope('https://www.googleapis.com/auth/classroom.announcements');
      provider.addScope('https://www.googleapis.com/auth/classroom.rosters');

      // CALENDAR
      provider.addScope('https://www.googleapis.com/auth/calendar.events');

      // SHEETS
      provider.addScope('https://www.googleapis.com/auth/spreadsheets');

      // DRIVE (Critical for your file uploads)
      provider.addScope('https://www.googleapis.com/auth/drive.file');

      // 🟢 3. FORCE the Consent Screen (CRITICAL FIX)
      // This forces Google to show the "Allow NetVerse to access..." screen again.
      // Without this, you get an old token that lacks the new permissions.
      provider.setCustomParameters({
        prompt: 'consent',
      });

      console.log("🔵 Starting Login with Enhanced Scopes...");
      const result = await signInWithPopup(auth, provider);
      
      // 4. Capture Token
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      
      if (token) {
        console.log("✅ Token received with new permissions");
        setAccessToken(token);
        sessionStorage.setItem("google_access_token", token);
      }
      
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setAccessToken(null);
      sessionStorage.removeItem("google_access_token");
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
      // Check for token in session storage on load
      const cachedToken = sessionStorage.getItem("google_access_token");
      if (cachedToken) setAccessToken(cachedToken);
      
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, accessToken, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}