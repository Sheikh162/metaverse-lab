const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// --- 1. TOKEN FETCHER ---
const getOAuthToken = (): string | null => {
  // We retrieve the Google OAuth token we saved during login
  return localStorage.getItem("google_access_token");
};

// --- 2. HEADERS HELPER ---
const getHeaders = () => {
  const token = getOAuthToken();
  
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  
  if (token) {
    // Send the OAuth Access Token
    headers["x-google-drive-token"] = token; 
  }
  
  return headers;
};

// --- 3. API METHODS (Keep your existing methods, just ensure they use getHeaders) ---
export const CloudAPI = {
  execute: async (code: string, language: string) => {
    // ... same as before ...
    const res = await fetch(`${API_BASE_URL}/execute`, {
       method: "POST",
       headers: getHeaders(), // <--- This now injects the correct token
       body: JSON.stringify({ code, language }),
    });
    return await res.json();
  },

  saveFile: async (filename: string, code: string) => {
    // ... same as before ...
    const res = await fetch(`${API_BASE_URL}/save`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({ filename, code }),
    });
    return await res.json();
  },

  listFiles: async () => {
     // ... same as before ...
     const res = await fetch(`${API_BASE_URL}/files`, {
        method: "GET",
        headers: getHeaders(),
      });
      if (!res.ok) return { files: [] };
      return await res.json();
  },
  
  readFile: async (filename: string) => {
    const res = await fetch(
      `${API_BASE_URL}/read?filename=${encodeURIComponent(filename)}`,
      { 
        method: "GET", 
        headers: getHeaders()
      }
    );
    return await res.json();
  },

  deleteFile: async (filename: string) => {
    const res = await fetch(`${API_BASE_URL}/delete`, {
      method: "DELETE",
      headers: getHeaders(),
      body: JSON.stringify({ filename }),
    });
    return await res.json();
  }
};