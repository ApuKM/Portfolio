"use client";

import React from "react";
import NextLink from "next/link";
import { ExternalLink, ArrowLeft, Target, Lightbulb, CheckCircle2 } from "lucide-react";
import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/lib/types/project";

export default function ProjectClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        {/* Back Button */}
        <div className="mb-10">
          <NextLink href="/projects">
            <Button 
              variant="ghost" 
              className="-ml-3 flex items-center gap-2 text-foreground-subtle hover:text-primary transition-colors"
            >
              <ArrowLeft size={18} /> Back to Projects
            </Button>
          </NextLink>
        </div>

        {/* Hero Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            {project.title}
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Image & Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Project Image */}
            <Card className="overflow-hidden border border-border shadow-sm bg-surface rounded-2xl">
              <Card.Content className="p-0">
                <div className="relative w-full aspect-video md:aspect-[16/9] bg-surface-secondary">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
                  />
                </div>
              </Card.Content>
            </Card>

            {/* Full Description */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">About the Project</h2>
              <p className="text-foreground-muted leading-relaxed text-lg whitespace-pre-line">
                {project.fullDescription}
              </p>
            </section>

            <Separator className="bg-border" />

            {/* Challenges Overcome */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-xl text-primary">
                  <Target size={24} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Challenges Overcome</h2>
              </div>
              <div className="space-y-4">
                {project?.challenges?.map((challenge, idx) => (
                  <div 
                    key={idx} 
                    className="flex gap-4 items-start bg-surface p-5 rounded-xl border border-border shadow-sm transition-shadow hover:shadow-md"
                  >
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={22} />
                    <p className="text-foreground-muted leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="bg-border" />

            {/* Future Plans */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-xl text-accent">
                  <Lightbulb size={24} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Future Plans</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project?.futurePlans?.map((plan, idx) => (
                  <Card key={idx} className="bg-surface-secondary border border-border shadow-none">
                    <Card.Content className="p-5 flex flex-row items-start gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <p className="text-foreground-muted font-medium leading-relaxed">{plan}</p>
                    </Card.Content>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Sidebar for Links & Tech Stack */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              
              {/* Actions Card */}
              <Card className="border border-border bg-surface shadow-sm rounded-2xl">
                <Card.Header className="pb-4 pt-6 px-6 border-b border-border/50">
                  <Card.Title className="text-lg font-bold text-foreground">Project Links</Card.Title>
                </Card.Header>
                <Card.Content className="flex flex-col gap-4 p-6">
                  <NextLink href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button 
                      className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground font-bold shadow-md shadow-primary/20 py-6 rounded-xl"
                    >
                      Visit Live Demo <ExternalLink size={18} />
                    </Button>
                  </NextLink>

                  <NextLink href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2 border border-border hover:border-foreground text-foreground-muted hover:text-foreground font-semibold py-6 rounded-xl transition-all"
                    >
                      View Source Code <FaGithub size={18} />
                    </Button>
                  </NextLink>
                </Card.Content>
              </Card>

              {/* Tech Stack Card */}
              <Card className="border border-border bg-surface shadow-sm rounded-2xl">
                <Card.Header className="pb-4 pt-6 px-6 border-b border-border/50">
                  <Card.Title className="text-lg font-bold text-foreground">Technologies Used</Card.Title>
                </Card.Header>
                <Card.Content className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {project?.techStack?.map((tech) => (
                      <Chip 
                        key={tech} 
                        className="bg-surface-secondary border border-border text-foreground-subtle hover:text-primary hover:border-primary/50 transition-colors cursor-default px-3 py-2"
                      >
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </Card.Content>
              </Card>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}