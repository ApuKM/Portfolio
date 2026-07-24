import {  Mail } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/lib/types/project";
import { FaGithub, FaLinkedin } from "react-icons/fa";


async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/projects`, {
    cache: "no-store",
  });

  if (!res.ok) return [];
  const data = await res.json();
  return data.projects as Project[];
}

export default async function Home() {
  const projects = await getProjects();
  // console.log("projects", projects)
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Hi, I&apos;m Jordan — Full-Stack Developer
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          I build fast, accessible web applications with Next.js, TypeScript,
          and MongoDB. Here&apos;s a selection of things I&apos;ve shipped.
        </p>

        <div className="mt-6 flex justify-center gap-5">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="mailto:you@example.com" className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}


