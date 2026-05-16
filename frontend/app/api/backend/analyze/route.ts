import { NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

export async function POST(request: Request) {
  try {
    const { text } = (await request.json()) as { text?: string };

    if (!text?.trim()) {
      return NextResponse.json({ error: "Text input is required" }, { status: 400 });
    }

    const response = await fetch(`${BACKEND_URL}/analyze/?text=${encodeURIComponent(text)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.error || "Backend error" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Backend API error:", error);
    return NextResponse.json(
      { error: `Failed to communicate with backend: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    );
  }
}
