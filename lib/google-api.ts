// Helper function to handle fetch calls
const fetchGoogle = async (url: string, token: string, method = "GET", body: any = null) => {
  const headers: any = {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const options: RequestInit = { method, headers };
  if (body) options.body = JSON.stringify(body);

  const res = await fetch(url, options);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error?.message || "Google API Error");
  }
  return await res.json();
};

export const GoogleAPI = {
  // --- CLASSROOM ---
  getCourses: async (token: string) => {
    // Returns list of active courses
    const data = await fetchGoogle("https://classroom.googleapis.com/v1/courses?courseStates=ACTIVE", token);
    return data.courses || [];
  },

  // Get Students in a Course
  getStudents: async (token: string, courseId: string) => {
    const data = await fetchGoogle(`https://classroom.googleapis.com/v1/courses/${courseId}/students`, token);
    return data.students || [];
  },

  
  //Create a brand new Course
  createCourse: async (token: string, name: string, section: string) => {
    const body = {
      name,
      section,
      ownerId: "me", // "me" refers to the authenticated user
      courseState: "PROVISIONED", // Creates it in "Draft" mode first (safer) or "ACTIVE"
    };
    return await fetchGoogle("https://classroom.googleapis.com/v1/courses", token, "POST", body);
  },

  // Create Assignment
  createAssignment: async (token: string, courseId: string, title: string, description: string) => {
    const body = {
      title,
      description,
      workType: "ASSIGNMENT",
      state: "PUBLISHED", // Immediately visible to students
      maxPoints: 100,
    };
    return await fetchGoogle(`https://classroom.googleapis.com/v1/courses/${courseId}/courseWork`, token, "POST", body);
  },

  getCourseWork: async (token: string, courseId: string) => {
    const data = await fetchGoogle(`https://classroom.googleapis.com/v1/courses/${courseId}/courseWork`, token);
    return data.courseWork || [];
  },

  // --- CALENDAR ---
  getEvents: async (token: string) => {
    const now = new Date().toISOString();
    // Get primary calendar events from now onwards
    const data = await fetchGoogle(
      `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${now}&orderBy=startTime&singleEvents=true`, 
      token
    );
    return data.items || [];
  },

  addEvent: async (token: string, summary: string, description: string, startTime: string, endTime: string) => {
    const event = {
      summary,
      description,
      start: { dateTime: startTime },
      end: { dateTime: endTime },
    };
    return await fetchGoogle("https://www.googleapis.com/calendar/v3/calendars/primary/events", token, "POST", event);
  },

  // --- SHEETS ---
  createSheet: async (token: string, title: string) => {
    const body = { properties: { title } };
    return await fetchGoogle("https://sheets.googleapis.com/v4/spreadsheets", token, "POST", body);
  },

  appendData: async (token: string, spreadsheetId: string, range: string, values: string[][]) => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`;
    const body = { values };
    return await fetchGoogle(url, token, "POST", body);
  }
};