"use client";

import NetVerseEngine from "@/components/game/NetVerseEngine";
import ProtectedRoute from "@/components/providers/ProtectedRoute"; 
import { useAuth } from "@/components/providers/AuthProvider";

export default function LabPage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
       {/* Pass the real display name from Google. 
          If it's loading (null), fallback to "Guest".
       */}
       <NetVerseEngine username={user?.displayName || "Guest"} />
    </ProtectedRoute>
  );
}