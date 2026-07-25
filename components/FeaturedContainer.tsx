"use client";

import { Project } from "@/lib/types/project";
import { motion, Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";




interface FeaturedProjectsContainerProps {
  projects: Project[];
}

export default function FeaturedProjectsContainer({ projects }: FeaturedProjectsContainerProps) {
  
  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card popping up
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="projects" className="w-full bg-background py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 "
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-foreground">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-foreground-muted mb-4 max-w-2xl ">
            A selection of some recent work and real-world applications I have built.
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-primary rounded-full "
          />
        </motion.div>

        {/* 
          Grid Container: 
          1 column on mobile, 2 on tablets, 3 on large screens 
        */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div key={String(project._id)} variants={cardVariants} className="h-auto">
              {/* 
                Render your pre-existing ProjectCard here.
                We wrap it in a motion.div so the entire card animates into view smoothly.
              */}
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: 'View All' Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-end"
        >
          <Link 
            href="/projects" 
            className=" hover:text-primary hover:underline font-bold transition-colors duration-300"
          >
            View All Projects
          </Link>
        </motion.div>

      </div>
    </section>
  );
}