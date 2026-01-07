// lib/game-events.ts
import { proxyFetch } from "@/lib/google-services"; // Ensure this is exported from google-services.ts

// 🔴 PASTE YOUR SHEET ID HERE
const GLOBAL_SHEET_ID = "1IgAUKFotHXzffeyR1V9dtcwdsxlcRIefkzb5TWEEfV8";

export interface GameEvent {
  timestamp: string;
  type: "CLASSROOM" | "CALENDAR" | "SYSTEM";
  message: string;
  creator: string;
  link?: string;
}

// 1. TEACHER WRITES TO SHEET
export const broadcastEvent = async (token: string, type: string, message: string, creator: string, link = "#") => {
  try {
    const values = [
      [new Date().toISOString(), type, message, creator, link]
    ];

    await proxyFetch(
      token,
      `/v4/spreadsheets/${GLOBAL_SHEET_ID}/values/A1:append?valueInputOption=RAW`,
      "https://sheets.googleapis.com",
      "POST",
      { values }
    );
    return true;
  } catch (err) {
    console.error("Broadcast failed:", err);
    return false;
  }
};

// 2. STUDENT READS FROM SHEET
export const fetchGameEvents = async (token: string): Promise<GameEvent[]> => {
  try {
    const data = await proxyFetch(
      token,
      `/v4/spreadsheets/${GLOBAL_SHEET_ID}/values/A:E`, // Reads columns A to E
      "https://sheets.googleapis.com",
      "GET"
    );

    const rows = data.values || [];
    
    // Convert rows array to Objects and Reverse (Newest First)
    return rows.map((row: string[]) => ({
      timestamp: row[0],
      type: row[1] as any,
      message: row[2],
      creator: row[3],
      link: row[4]
    })).reverse(); 

  } catch (err) {
    console.error("Fetch events failed:", err);
    return [];
  }
};