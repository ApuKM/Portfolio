import React from "react";
import ProjectsClient from "@/components/ProjectsClient";
import { getAllProjects } from "@/lib/project-data";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <ProjectsClient initialProjects={projects} />
    </main>
  );
}
