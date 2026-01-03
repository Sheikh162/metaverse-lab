// lib/google-services.ts

/**
 * Helper to check RBAC before making sensitive calls
 */
import { isTeacher } from "@/lib/game-config";

const BASE_URL = "https://www.googleapis.com";

// --- CLASSROOM ---

export async function fetchCourses(token: string) {
  const res = await fetch(`${BASE_URL}/classroom/v1/courses?courseState=ACTIVE`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  return data.courses || [];
}

export async function fetchAssignments(token: string, courseId: string) {
  const res = await fetch(`${BASE_URL}/classroom/v1/courses/${courseId}/courseWork?orderBy=dueDate desc`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  return data.courseWork || [];
}

// Teacher Only
export async function postAnnouncement(token: string, courseId: string, text: string) {
  const res = await fetch(`${BASE_URL}/classroom/v1/courses/${courseId}/announcements`, {
    method: "POST",
    headers: { 
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });
  return await res.json();
}

// --- CALENDAR ---

export async function fetchUpcomingEvents(token: string) {
  const now = new Date().toISOString();
  // Get next 5 events
  const res = await fetch(
    `${BASE_URL}/calendar/v3/calendars/primary/events?timeMin=${now}&maxResults=5&orderBy=startTime&singleEvents=true`, 
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const data = await res.json();
  return data.items || [];
}

// --- SHEETS (TEACHER ONLY) ---

export async function createAttendanceSheet(token: string, className: string, students: any[]) {
  // 1. Create a new Sheet
  const createRes = await fetch(`${BASE_URL}/sheets/v4/spreadsheets`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      properties: { title: `Attendance - ${className} - ${new Date().toLocaleDateString()}` }
    })
  });
  const sheetData = await createRes.json();
  const spreadsheetId = sheetData.spreadsheetId;

  // 2. Prepare Data (Header + Rows)
  const values = [
    ["Timestamp", "Student Name", "Status", "Metaverse ID"], // Header
    ...students.map(s => [new Date().toISOString(), s.username, "Present", s.id])
  ];

  // 3. Write Data
  await fetch(`${BASE_URL}/sheets/v4/spreadsheets/${spreadsheetId}/values/A1:append?valueInputOption=RAW`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({ values })
  });

  return sheetData.spreadsheetUrl;
}