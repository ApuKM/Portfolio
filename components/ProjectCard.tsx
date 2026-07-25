import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Project } from "@/lib/types/project";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
      
      {/* Image Section - shrink-0 prevents it from resizing if content is long */}
      <div className="relative h-52 w-full shrink-0 overflow-hidden bg-surface-secondary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Section - flex-1 allows it to grow and fill available grid height */}
      <div className="flex flex-1 flex-col p-6">
        
        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-sm text-foreground-muted mb-6 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Tech Stack - mt-auto pushes this block and the footer to the bottom */}
        <div className="mt-auto flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-surface-secondary border border-border px-2.5 py-1 text-xs font-medium text-foreground-subtle"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer (Links) */}
        <div className="flex items-center justify-between pt-4 border-t border-border/60">
          <Link
            // Using a fallback to .id in case your API uses id instead of _id
            href={`/projects/${project._id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            Details
            {/* Added a subtle slide animation to the arrow on hover */}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-foreground-subtle hover:text-primary transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="text-foreground-subtle hover:text-accent transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}