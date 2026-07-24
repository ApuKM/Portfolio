import { NextResponse } from "next/server";
import clientPromise, { DB_NAME, PROJECTS_COLLECTION } from "@/lib/mongodb";
import { demoProjects } from "@/lib/demo-projects";
import { Project } from "@/lib/types/project";

// GET /api/projects — return all projects
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);

    const projects = await db
      .collection<Project>(PROJECTS_COLLECTION)
      .find({})
      .toArray();

    // If the collection exists but is empty, still fall back to demo data
    // so the portfolio never renders blank before it's been seeded.
    if (!projects || projects.length === 0) {
      return NextResponse.json(
        { source: "fallback", projects: demoProjects },
        { status: 200 }
      );
    }

    return NextResponse.json({ source: "database", projects }, { status: 200 });
  } catch (error) {
    console.error("[/api/projects] Falling back to demo data:", error);
    return NextResponse.json(
      { source: "fallback", projects: demoProjects },
      { status: 200 }
    );
  }
}