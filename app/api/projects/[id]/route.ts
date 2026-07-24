import { NextRequest, NextResponse } from "next/server";
import clientPromise, { DB_NAME, PROJECTS_COLLECTION } from "@/lib/mongodb";
import { demoProjects } from "@/lib/demo-projects";
import { Project } from "@/lib/types/project";


interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/projects/[id] — return a single project by its `id` field
// Note: `id` is a plain string field on the document (see schema), NOT the
// MongoDB-generated `_id` ObjectId, so no ObjectId casting is needed.
export async function GET(_req: NextRequest, { params }: RouteParams) {
  const { id } = await params;

  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);

    const project = await db
      .collection<Project>(PROJECTS_COLLECTION)
      .findOne({ _id: id });

    if (project) {
      return NextResponse.json(
        { source: "database", project },
        { status: 200 }
      );
    }

    // Not found in the database — check fallback data before returning 404,
    // so the demo experience still works end-to-end without a DB.
    const fallbackProject = demoProjects.find((p) => p._id === id);
    if (fallbackProject) {
      return NextResponse.json(
        { source: "fallback", project: fallbackProject },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: `Project with id "${id}" not found` },
      { status: 404 }
    );
  } catch (error) {
    console.error(`[/api/projects/${id}] Falling back to demo data:`, error);

    const fallbackProject = demoProjects.find((p) => p._id === id);
    if (fallbackProject) {
      return NextResponse.json(
        { source: "fallback", project: fallbackProject },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: `Project with id "${id}" not found` },
      { status: 404 }
    );
  }
}