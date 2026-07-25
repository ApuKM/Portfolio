import React from "react";
import { Project } from "@/lib/types/project";
import ProjectsClient from "@/components/ProjectsClient";

async function getAllProjects(): Promise<Project[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/projects`, {
      cache: "no-store",
    });

    if (!res.ok) return [];
    const data = await res.json();
    return (data.projects || data) as Project[];
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <ProjectsClient initialProjects={projects} />
    </main>
  );
}
