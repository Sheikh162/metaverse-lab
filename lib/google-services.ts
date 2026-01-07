// lib/google-services.ts

/**
 * Helper function to route requests through our server-side proxy.
 * This bypasses CORS issues and handles token authentication.
 */
const ROSTER_SHEET_ID = "1IgAUKFotHXzffeyR1V9dtcwdsxlcRIefkzb5TWEEfV8";


export async function proxyFetch(token: string, endpoint: string, baseUrl?: string, method = "GET", body?: any) {
  try {
    const res = await fetch("/api/google-proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, endpoint, baseUrl, method, body }),
    });

    if (!res.ok) {
      throw new Error(`Proxy request failed with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    throw error; // Re-throw to be caught by specific service functions
  }
}

// --- CLASSROOM ---

export async function fetchCourses(token: string) {
  try {
    // Uses plural 'courseStates' to avoid 400 Bad Request error
    const data = await proxyFetch(
      token, 
      "/v1/courses?courseStates=ACTIVE", 
      "https://classroom.googleapis.com"
    );
    return data.courses || [];
  } catch (error) {
    console.error("Error fetching courses:", error);
    return []; // Return empty array to prevent UI crash
  }
}

export async function fetchAssignments(token: string, courseId: string) {
  try {
    // Properly encode URL parameters
    const data = await proxyFetch(
      token, 
      `/v1/courses/${courseId}/courseWork?orderBy=dueDate%20desc`,
      "https://classroom.googleapis.com"
    );
    return data.courseWork || [];
  } catch (error) {
    console.error("Error fetching assignments:", error);
    return [];
  }
}

// export async function createCourse(token: string, name: string, section: string) {
//   try {
//     const data = await proxyFetch(
//       token,
//       "/v1/courses",
//       "https://classroom.googleapis.com",
//       "POST",
//       {
//         name,
//         section,
//         ownerId: "me",
//         courseState: "PROVISIONED"
//       }
//     );
//     return data;
//   } catch (error) {
//     console.error("Error creating course:", error);
//     throw error;
//   }
// }

// Teacher Only: Post an announcement to the stream
export async function postAnnouncement(token: string, courseId: string, text: string) {
  try {
    const data = await proxyFetch(
      token,
      `/v1/courses/${courseId}/announcements`,
      "https://classroom.googleapis.com",
      "POST",
      { text }
    );
    return data;
  } catch (error) {
    console.error("Error posting announcement:", error);
    throw error; // Throw so UI can show a toast error
  }
}

// --- CALENDAR ---

export async function fetchUpcomingEvents(token: string) {
  try {
    const now = new Date().toISOString();
    const data = await proxyFetch(
      token, 
      `/calendar/v3/calendars/primary/events?timeMin=${now}&maxResults=5&orderBy=startTime&singleEvents=true`,
      "https://www.googleapis.com" // Calendar uses the main domain
    );
    return data.items || [];
  } catch (error) {
    console.error("Error fetching calendar:", error);
    return [];
  }
}

// export async function createCalendarEvent(token: string, title: string, startDateTime: string) {
//   try {
//     // Default to 1 hour duration
//     const start = new Date(startDateTime);
//     const end = new Date(start.getTime() + 60 * 60 * 1000); 

//     const data = await proxyFetch(
//       token,
//       "/calendar/v3/calendars/primary/events",
//       "https://www.googleapis.com",
//       "POST",
//       {
//         summary: title,
//         description: "Metaverse Lab Session created via NetVerse OS",
//         start: { dateTime: start.toISOString() },
//         end: { dateTime: end.toISOString() }
//       }
//     );
//     return data;
//   } catch (error) {
//     console.error("Error creating event:", error);
//     throw error;
//   }
// }

// --- SHEETS (TEACHER ONLY) ---

export async function createAttendanceSheet(token: string, className: string, students: any[]) {
  try {
    // 1. Create a new Sheet
    const sheetData = await proxyFetch(
      token, 
      "/v4/spreadsheets", 
      "https://sheets.googleapis.com", 
      "POST", 
      { properties: { title: `Attendance - ${className} - ${new Date().toLocaleDateString()}` } }
    );
    
    if (!sheetData.spreadsheetId) throw new Error("Failed to create spreadsheet");
    const spreadsheetId = sheetData.spreadsheetId;

    // 2. Prepare Data (Header + Rows)
    const values = [
      ["Timestamp", "Student Name", "Status", "Metaverse ID"], 
      ...students.map(s => [new Date().toISOString(), s.username, "Present", s.id])
    ];

    // 3. Write Data
    await proxyFetch(
      token, 
      `/v4/spreadsheets/${spreadsheetId}/values/A1:append?valueInputOption=RAW`, 
      "https://sheets.googleapis.com", 
      "POST", 
      { values }
    );

    return sheetData.spreadsheetUrl;
  } catch (error) {
    console.error("Error creating attendance sheet:", error);
    throw error;
  }
}


// --- HELPER: GET EMAILS ---
async function getStudentEmails(token: string) {
  try {
    const data = await proxyFetch(
      token,
      `/v4/spreadsheets/${ROSTER_SHEET_ID}/values/A:A`, // Read Column A
      "https://sheets.googleapis.com",
      "GET"
    );
    // Flatten array: [["email1"], ["email2"]] -> ["email1", "email2"]
    return (data.values || []).flat().filter((e: string) => e.includes("@"));
  } catch (error) {
    console.error("Failed to fetch roster:", error);
    return [];
  }
}

// --- CLASSROOM ---

export async function createCourse(token: string, name: string, section: string) {
  try {
    // 1. Create the Course
    const course = await proxyFetch(
      token,
      "/v1/courses",
      "https://classroom.googleapis.com",
      "POST",
      { name, section, ownerId: "me", courseState: "PROVISIONED" }
    );

    // 2. Fetch Students & Send Invites (Async - don't wait for it)
    getStudentEmails(token).then(async (emails) => {
      console.log(`inviting ${emails.length} students...`);
      for (const email of emails) {
        await proxyFetch(
          token,
          "/v1/invitations",
          "https://classroom.googleapis.com",
          "POST",
          {
            userId: email,
            courseId: course.id,
            role: "STUDENT"
          }
        );
      }
    });

    return course;
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
}

// --- CALENDAR ---

export async function createCalendarEvent(token: string, title: string, startDateTime: string) {
  try {
    // 1. Fetch Students FIRST
    const emails = await getStudentEmails(token);
    
    // Convert to Calendar API format: [{email: 'a@b.com'}, {email: 'c@d.com'}]
    const attendees = emails.map((email: any) => ({ email }));

    const start = new Date(startDateTime);
    const end = new Date(start.getTime() + 60 * 60 * 1000); 

    // 2. Create Event WITH Attendees
    const data = await proxyFetch(
      token,
      "/calendar/v3/calendars/primary/events?sendUpdates=all", // sendUpdates=all sends the email!
      "https://www.googleapis.com",
      "POST",
      {
        summary: title,
        description: "Metaverse Lab Session",
        start: { dateTime: start.toISOString() },
        end: { dateTime: end.toISOString() },
        attendees: attendees // <--- This sends the invites
      }
    );
    return data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
}

// lib/google-services.ts

