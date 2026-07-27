"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { LayoutTemplate, Server, Sparkles } from "lucide-react";

export default function Skills() {
  // Skill data with arbitrary proficiency percentages for the graphical bars
  const skillCategories = [
    {
      title: "Frontend",
      icon: LayoutTemplate,
      skills: [
        { name: "React.js & Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Zustand", level: 80 },
        { name: "HeroUI/ ShadcnUI", level: 80 },
      ],
    },
    {
      title: "Backend & Database",
      icon: Server,
      skills: [
        { name: "Node.js & Express", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Prisma ORM", level: 85 },
        { name: "Zod", level: 90 },
        { name: "Better Auth", level: 90 },
      ],
    },
    {
      title: "Tools & Workflows",
      icon: Sparkles,
      skills: [
        { name: "Agentic AI", level: 95 },
        { name: "Vibe Coding", level: 90 },
        { name: "Git & Version Control", level: 85 },
        { name: "Postman API", level: 80 },
      ],
    },
  ];

  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Staggers the appearance of each category card
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="w-full bg-surface py-20 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-foreground">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-primary rounded-full mx-auto md:mx-0"
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-background border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      {/* Skill Info */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-foreground-muted">
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-foreground-subtle">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Graphical Progress Bar Track */}
                      <div className="w-full h-2.5 bg-surface-secondary rounded-full overflow-hidden border border-border/50">
                        {/* Animated Fill with Gradient */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            ease: "easeOut",
                            delay: 0.3 + skillIdx * 0.1, // Staggers the bars loading inside the card
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
                        >
                          {/* Optional: Adds a subtle shine effect to the bar */}
                          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
