// // "use client";

// // import React, { createContext, useContext, useEffect, useState } from "react";
// // import { 
// //   User, 
// //   onAuthStateChanged, 
// //   signInWithPopup, 
// //   signOut 
// // } from "firebase/auth";
// // import { auth, googleProvider } from "@/lib/firebase";

// // // 1. Define the Context Shape (Including the login functions!)
// // type AuthContextType = {
// //   user: User | null;
// //   loading: boolean;
// //   signInWithGoogle: () => Promise<void>;
// //   logout: () => Promise<void>;
// // };

// // // 2. Create Context with dummy defaults
// // const AuthContext = createContext<AuthContextType>({
// //   user: null,
// //   loading: true,
// //   signInWithGoogle: async () => {},
// //   logout: async () => {},
// // });

// // export const useAuth = () => useContext(AuthContext);

// // export default function AuthProvider({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   const [user, setUser] = useState<User | null>(null);
// //   const [loading, setLoading] = useState(true);

// //   // 3. Define the Actions
// //   const signInWithGoogle = async () => {
// //     try {
// //       await signInWithPopup(auth, googleProvider);
// //     } catch (error) {
// //       console.error("Login Failed:", error);
// //       alert("Login failed. Check console for details.");
// //     }
// //   };

// //   const logout = async () => {
// //     try {
// //       await signOut(auth);
// //     } catch (error) {
// //       console.error("Logout Failed:", error);
// //     }
// //   };

// //   // 4. Listen for Auth State Changes
// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //       setLoading(false);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   // 5. Expose everything
// //   return (
// //     <AuthContext.Provider value={{ user, loading, signInWithGoogle, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // }

// "use client";

// import React, { createContext, useContext, useEffect, useState } from "react";
// import { 
//   User, 
//   onAuthStateChanged, 
//   signInWithPopup, 
//   signOut,
//   GoogleAuthProvider 
// } from "firebase/auth";
// import { auth, googleProvider } from "@/lib/firebase";

// // 1. Define Context including the Google Access Token
// type AuthContextType = {
//   user: User | null;
//   googleToken: string | null;
//   loading: boolean;
//   signInWithGoogle: () => Promise<void>;
//   logout: () => Promise<void>;
// };

// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   googleToken: null,
//   loading: true,
//   signInWithGoogle: async () => {},
//   logout: async () => {},
// });

// export const useAuth = () => useContext(AuthContext);

// export default function AuthProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [googleToken, setGoogleToken] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   const signInWithGoogle = async () => {
//     try {
//       // 2. REQUEST SCOPES (MVP: Ask for everything needed)
//       // Classroom
//       googleProvider.addScope('https://www.googleapis.com/auth/classroom.courses.readonly');
//       googleProvider.addScope('https://www.googleapis.com/auth/classroom.coursework.me.readonly');
//       googleProvider.addScope('https://www.googleapis.com/auth/classroom.announcements'); // For Teachers
      
//       // Calendar
//       googleProvider.addScope('https://www.googleapis.com/auth/calendar.events.readonly');
      
//       // Sheets (Teacher Only - strictly managed by app logic, but scope needed)
//       googleProvider.addScope('https://www.googleapis.com/auth/spreadsheets');

//       const result = await signInWithPopup(auth, googleProvider);
      
//       // 3. CAPTURE ACCESS TOKEN
//       // This is the key to accessing Google APIs directly from the client
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       if (credential?.accessToken) {
//         setGoogleToken(credential.accessToken);
//         // MVP Persistence: Save to local storage so it survives refresh (Not for Prod)
//         localStorage.setItem("google_access_token", credential.accessToken);
//       }

//     } catch (error) {
//       console.error("Login Failed:", error);
//       alert("Login failed. Check console.");
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//       setGoogleToken(null);
//       localStorage.removeItem("google_access_token");
//     } catch (error) {
//       console.error("Logout Failed:", error);
//     }
//   };

//   useEffect(() => {
//     // Restore token from local storage if user is still logged in
//     const storedToken = localStorage.getItem("google_access_token");
//     if (storedToken) setGoogleToken(storedToken);

//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, googleToken, loading, signInWithGoogle, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  User, 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut,
  GoogleAuthProvider // Import this
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  accessToken: string | null; // Add this
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

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null); // State for token
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      
      // ✅ CAPTURE THE GOOGLE ACCESS TOKEN
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      
      if (token) {
        setAccessToken(token);
        // Store in session storage for persistence on refresh (secure enough for hackathons)
        sessionStorage.setItem("google_access_token", token);
      }
      
    } catch (error) {
      console.error("Login Failed:", error);
      alert("Login failed. Check console for details.");
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
      
      // Attempt to recover token from session if user is logged in
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