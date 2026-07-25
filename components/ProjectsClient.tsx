"use client";

import React, { useState, useMemo } from "react";
import NextLink from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, Search, Layers } from "lucide-react";
import { Button, Chip, InputGroup } from "@heroui/react"; 
import { Project } from "@/lib/types/project";
import ProjectCard from "@/components/ProjectCard";

interface ProjectsClientProps {
  initialProjects: Project[];
}

export default function ProjectsClient({ initialProjects }: ProjectsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Extract all unique technologies across all projects for filter chips
  const allTechStack = useMemo(() => {
    const techs = new Set<string>();
    initialProjects.forEach((p) => p.techStack?.forEach((t) => techs.add(t)));
    return Array.from(techs);
  }, [initialProjects]);

  // Filter projects based on search query and selected tech tag
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTech = selectedTech
        ? project.techStack?.includes(selectedTech)
        : true;

      return matchesSearch && matchesTech;
    });
  }, [initialProjects, searchQuery, selectedTech]);

  // Framer Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      
      {/* Top Bar: Back Button */}
      <div className="mb-8">
        <NextLink href="/" className="inline-block">
          <Button
            variant="ghost"
            className="-ml-3 text-foreground-subtle hover:text-primary transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={18} /> Back to Home
          </Button>
        </NextLink>
      </div>

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
          All <span className="text-primary">Projects</span>
        </h1>
        <p className="text-lg text-foreground-muted max-w-2xl">
          An archive of web applications, AI integration projects, and software systems built with modern technologies.
        </p>
      </motion.div>

      {/* Search & Filter Section */}
      <div className="mb-12 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input using your InputGroup composition */}
          <div className="w-full md:w-auto">
            <InputGroup>
              <InputGroup.Prefix>
                <Search className="size-4 text-foreground-subtle" />
              </InputGroup.Prefix>
              <InputGroup.Input 
                className="w-full md:min-w-[300px]" 
                placeholder="Search projects..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </InputGroup>
          </div>

          {/* Result Count Indicator */}
          <div className="text-sm font-medium text-foreground-subtle self-end md:self-center">
            Showing <span className="text-primary font-bold">{filteredProjects.length}</span> of {initialProjects.length} projects
          </div>
        </div>

        {/* Tech Stack Filter Chips */}
        {allTechStack.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border/50">
            <span className="text-xs font-semibold text-foreground-subtle flex items-center gap-1">
              <Layers size={14} /> Filter by:
            </span>
            
            {/* Using your Chip syntax, toggling color="accent" for the active state */}
            <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedTech(null)}>
              {selectedTech === null ? <Chip color="accent">All</Chip> : <Chip>All</Chip>}
            </div>

            {allTechStack.map((tech) => (
              <div 
                key={tech} 
                className="cursor-pointer hover:opacity-80 transition-opacity" 
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
              >
                {selectedTech === tech ? (
                  <Chip color="accent">{tech}</Chip>
                ) : (
                  <Chip>{tech}</Chip>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div
          key={selectedTech || searchQuery} // Triggers re-animation on filter change
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div key={String(project._id)} variants={cardVariants} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-surface border border-border rounded-3xl">
          <p className="text-xl font-semibold text-foreground mb-2">No projects found</p>
          <p className="text-foreground-subtle mb-6">Try searching for something else or clear your filters.</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery("");
              setSelectedTech(null);
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

    </div>
  );
}