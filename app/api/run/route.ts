import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { code, language } = await req.json();

    // 1. REAL IMPLEMENTATION: This would send code to a Google Cloud Run container.
    // 2. HACKATHON SHORTCUT: We use Piston (a public API) to simulate that environment instantly.
    
    const response = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: language || "javascript",
        version: "*",
        files: [{ content: code }],
      }),
    });

    const result = await response.json();

    if (result.run) {
      return NextResponse.json({
        output: result.run.stdout || result.run.stderr || "No output returned.",
        isError: !!result.run.stderr,
        executionTime: "120ms" // You can mock this or calculate real time
      });
    }

    return NextResponse.json({ output: "Execution failed to start." }, { status: 500 });

  } catch (error) {
    return NextResponse.json({ output: "Internal Server Error" }, { status: 500 });
  }
}