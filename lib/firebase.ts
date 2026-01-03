import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Added GoogleAuthProvider import
import { getDatabase } from "firebase/database";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  databaseURL:process.env.NEXT_PUBLIC_DATABASE_URL
};

// Initialize Firebase (Singleton pattern)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Services
const auth = getAuth(app);
const db = getDatabase(app);
const googleProvider = new GoogleAuthProvider(); 

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
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Export everything, including googleProvider
export { app, auth, db, googleProvider, analytics };