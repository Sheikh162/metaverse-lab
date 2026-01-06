// "use client";

// import { useEffect } from "react";
// import { useAuth } from "@/components/providers/AuthProvider";
// import { useRouter } from "next/navigation";
// import { Loader2, ShieldAlert } from "lucide-react";

// export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
//   const { user, loading } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     // If auth has finished loading and there is NO user...
//     if (!loading && !user) {
//       // Kick them back to the Lobby
//       router.push("/");
//     }
//   }, [user, loading, router]);

//   // 1. SHOW LOADING SCREEN (While Firebase checks if you exist)
//   if (loading) {
//     return (
//       <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white">
//         <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
//         <h2 className="font-mono text-xl tracking-widest animate-pulse">AUTHENTICATING...</h2>
//       </div>
//     );
//   }

//   // 2. IF NO USER (Redirecting...)
//   // Render nothing or a "Forbidden" message while the router.push happens
//   if (!user) {
//     return null; 
//   }

//   // 3. SUCCESS - Render the protected page
//   return <>{children}</>;
// }


"use client";

import { useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/"); // Kick to Lobby
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-primary">
        <Loader2 className="h-10 w-10 animate-spin mb-4" />
        <p className="font-mono text-sm animate-pulse">AUTHENTICATING...</p>
      </div>
    );
  }

  return user ? <>{children}</> : null;
}