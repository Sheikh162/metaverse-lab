"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  User, 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut,
  GoogleAuthProvider 
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

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
      // 1. CLASSROOM: Allows creating courses and assignments
      googleProvider.addScope('https://www.googleapis.com/auth/classroom.courses');
      googleProvider.addScope('https://www.googleapis.com/auth/classroom.coursework.students');
      googleProvider.addScope('https://www.googleapis.com/auth/classroom.announcements');
      googleProvider.addScope('https://www.googleapis.com/auth/classroom.rosters');

      // 2. CALENDAR: Allows creating events (booking lab sessions)
      googleProvider.addScope('https://www.googleapis.com/auth/calendar.events');

      // 3. SHEETS: Allows creating/editing spreadsheets
      googleProvider.addScope('https://www.googleapis.com/auth/spreadsheets');

      // 4. Drive: Allows saving in drive
      googleProvider.addScope('https://www.googleapis.com/auth/drive.file');

      const result = await signInWithPopup(auth, googleProvider);
      
      // 3. Capture Token
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      
      if (token) {
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
      
      // Persist token across refresh
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