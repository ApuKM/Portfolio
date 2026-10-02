import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/project-data";
import ProjectClient from "./ProjectClient";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    return notFound();
  }

  return <ProjectClient project={project} />;
}
