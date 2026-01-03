module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/firebase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analytics",
    ()=>analytics,
    "app",
    ()=>app,
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "googleProvider",
    ()=>googleProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/@firebase/app/dist/esm/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>"); // Added GoogleAuthProvider import
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$firebase$2f$database$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/firebase/database/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/@firebase/database/dist/node-esm/index.node.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$firebase$2f$analytics$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/firebase/analytics/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyA3pSNKp_gEHhW5af6wMYtAxWHIUBmVLuU"),
    authDomain: ("TURBOPACK compile-time value", "netverse-labs.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", '"netverse-labs",'),
    storageBucket: ("TURBOPACK compile-time value", "netverse-labs.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "392371121144"),
    appId: ("TURBOPACK compile-time value", "1:392371121144:web:a8668f3ebc00c4f442c40d"),
    measurementId: ("TURBOPACK compile-time value", "G-X2R5V68MPD"),
    databaseURL: ("TURBOPACK compile-time value", "https://netverse-labs-default-rtdb.firebaseio.com")
};
// Initialize Firebase (Singleton pattern)
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApp"])();
// Initialize Services
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDatabase"])(app);
const googleProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoogleAuthProvider"]();
// CONFIGURING THE PROVIDER WITH SCOPES
// 1. CLASSROOM PERMISSIONS
googleProvider.addScope('https://www.googleapis.com/auth/classroom.courses'); // Read/Write courses
googleProvider.addScope('https://www.googleapis.com/auth/classroom.coursework.students'); // Student work
googleProvider.addScope('https://www.googleapis.com/auth/classroom.rosters.readonly'); // View students
// 2. CALENDAR PERMISSIONS
googleProvider.addScope('https://www.googleapis.com/auth/calendar.events');
// 3. SHEETS/DRIVE PERMISSIONS
googleProvider.addScope('https://www.googleapis.com/auth/spreadsheets');
googleProvider.addScope('https://www.googleapis.com/auth/drive.file');
// 4. FORCE CONSENT PROMPT (Crucial for testing!)
// This forces Google to show the "Allow NetVerse to access..." screen again
googleProvider.setCustomParameters({
    prompt: 'select_account consent'
});
// Initialize Analytics (Client-side only)
let analytics;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
;
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/providers/AuthProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/firebase.ts [app-ssr] (ecmascript)");
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
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    user: null,
    loading: true,
    accessToken: null,
    signInWithGoogle: async ()=>{},
    logout: async ()=>{}
});
const useAuth = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [accessToken, setAccessToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // State for token
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const signInWithGoogle = async ()=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithPopup"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["googleProvider"]);
            // ✅ CAPTURE THE GOOGLE ACCESS TOKEN
            const credential = __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoogleAuthProvider"].credentialFromResult(result);
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
    const logout = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"]);
            setAccessToken(null);
            sessionStorage.removeItem("google_access_token");
        } catch (error) {
            console.error("Logout Failed:", error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], (currentUser)=>{
            setUser(currentUser);
            // Attempt to recover token from session if user is logged in
            const cachedToken = sessionStorage.getItem("google_access_token");
            if (cachedToken) setAccessToken(cachedToken);
            setLoading(false);
        });
        return ()=>unsubscribe();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            accessToken,
            signInWithGoogle,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/providers/AuthProvider.tsx",
        lineNumber: 256,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__737c2f94._.js.map