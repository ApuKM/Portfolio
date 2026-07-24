import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Lightbulb, Rocket } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/lib/types/project";


async function getProject(id: string): Promise<Project | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/projects/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  const data = await res.json();
  return data.project as Project;
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <div className="relative mb-8 h-72 w-full overflow-hidden rounded-2xl sm:h-96">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>

      <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        {project.title}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-6 text-slate-700 dark:text-slate-300">
        {project.fullDescription}
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          <ExternalLink className="h-4 w-4" />
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <FaGithub className="h-4 w-4" />
          Source Code
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            Challenges
          </h2>
          <ul className="list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {project.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
            <Rocket className="h-5 w-5 text-indigo-500" />
            Future Plans
          </h2>
          <ul className="list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {project.futurePlans.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}