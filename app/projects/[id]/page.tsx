import { notFound } from "next/navigation";
import ProjectClient from "./ProjectClient";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  let project;
//   console.log("project from details", project);

  try {
    const res = await fetch(`${baseUrl}/api/projects/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return notFound();
    }

    const data = await res.json();
    project = data.project;
  } catch (error) {
    console.error("Error fetching project:", error);
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl text-danger">Failed to load project details.</p>
      </div>
    );
  }

  if (!project) {
    return notFound();
  }

  // 3. Return the main JSX OUTSIDE the try/catch
  return <ProjectClient project={project} />;
}
