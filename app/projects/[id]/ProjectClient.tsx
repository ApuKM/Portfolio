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
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      
      {/* Back Button */}
      <div className="mb-8">
        <NextLink href="/#projects">
          <Button variant="ghost" className="-ml-3 flex items-center gap-2">
            <ArrowLeft size={18} /> Back to Portfolio
          </Button>
        </NextLink>
      </div>

      {/* Hero Header */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl">
          {project.shortDescription}
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Image & Details */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Project Image */}
          <Card className="overflow-hidden border-none shadow-xl">
            <Card.Content className="p-0">
              <Image
                src={project?.image}
                alt={project?.title}
                width={500}
                height={500}
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full object-cover max-h-150 rounded-lg"
              />
            </Card.Content>
          </Card>

          {/* Full Description */}
          <section>
            <h2 className="text-2xl font-bold mb-4">About the Project</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              {project.fullDescription}
            </p>
          </section>

          <Separator className="my-6" />

          {/* Challenges Overcome */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Target className="text-cyan-500" size={24} />
              <h2 className="text-2xl font-bold">Challenges Overcome</h2>
            </div>
            <div className="space-y-4">
              {project?.challenges?.map((challenge, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-zinc-400 leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator className="my-6" />

          {/* Future Plans */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="text-amber-500" size={24} />
              <h2 className="text-2xl font-bold">Future Plans</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project?.futurePlans?.map((plan, idx) => (
                <Card key={idx} className="bg-zinc-900/50 border-zinc-800">
                  <Card.Content className="p-4 flex flex-row items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <p className="text-zinc-400 text-sm">{plan}</p>
                  </Card.Content>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Sidebar for Links & Tech Stack */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            
            {/* Actions Card */}
            <Card>
              <Card.Header>
                <Card.Title>Project Links</Card.Title>
              </Card.Header>
              <Card.Content className="flex flex-col gap-4">
                <NextLink href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full flex items-center justify-center gap-2">
                    Visit Live Demo <ExternalLink size={18} />
                  </Button>
                </NextLink>

                <NextLink href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    View Source Code <FaGithub size={18} />
                  </Button>
                </NextLink>
              </Card.Content>
            </Card>

            {/* Tech Stack Card */}
            <Card>
              <Card.Header>
                <Card.Title>Technologies Used</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="flex flex-wrap gap-2">
                  {project?.techStack?.map((tech) => (
                    <Chip 
                      key={tech} 
                      color="accent"
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
  );
}