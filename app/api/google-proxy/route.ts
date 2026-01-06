import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    if (!rawBody) return NextResponse.json({ error: "No body provided" }, { status: 400 });

    const { endpoint, token, method, body, baseUrl } = JSON.parse(rawBody);
    
    // Default to GET if missing, normalize to uppercase
    const safeMethod = method ? method.toUpperCase() : "GET";
    const targetDomain = baseUrl || "https://www.googleapis.com";
    const url = `${targetDomain}${endpoint}`;

    console.log(`Proxy Request: ${safeMethod} -> ${url}`);

    // 1. Prepare Base Options
    const headers: Record<string, string> = {
      Authorization: `Bearer ${token}`,
    };

    const fetchOptions: RequestInit = {
      method: safeMethod,
      headers: headers,
      cache: "no-store",
    };

    // 2. Add Body ONLY if strictly required (POST/PUT/PATCH)
    // This prevents sending Content-Type on GET requests, which crashes Google APIs
    if (safeMethod !== "GET" && safeMethod !== "HEAD") {
      headers["Content-Type"] = "application/json";
      fetchOptions.body = body ? JSON.stringify(body) : JSON.stringify({});
    }

    // 3. Execute Fetch
    const googleRes = await fetch(url, fetchOptions);
    const responseText = await googleRes.text();

    if (!googleRes.ok) {
      // Detailed Error Logging for Server Terminal
      console.error(`Google API Error (${googleRes.status}):`);
      console.error(`   URL: ${url}`);
      console.error(`   Headers Sent:`, JSON.stringify(headers));
      console.error(`   Response:`, responseText.substring(0, 500));
      
      return NextResponse.json(
        { error: "Google API Error", details: responseText }, 
        { status: googleRes.status }
      );
    }

    // 4. Return Success
    try {
      // Handle empty responses (like 204 No Content)
      if (!responseText) return NextResponse.json({ success: true });
      
      const data = JSON.parse(responseText);
      return NextResponse.json(data);
    } catch (parseError) {
      console.error("Error parsing Google response JSON", parseError);
      // Return success but indicate parsing failed (likely just an empty success body)
      return NextResponse.json({ success: true, warning: "Non-JSON response received" });
    }

  } catch (error: any) {
    console.error("Proxy Internal Failure:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}