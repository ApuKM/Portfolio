"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor's Degree (Honours)",
      institution: "Rajshahi University",
      location: "Rajshahi, Bangladesh",
      period: "Graduated", 
      description:
        "Built a strong foundation in analytical thinking, problem-solving, and core computing principles. Participated in various academic projects that sparked my passion for software engineering, ultimately guiding my transition into full-stack web development and AI workflows.",
    },
   
  ];

  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="education" className="w-full bg-background py-20 border-b border-border">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-foreground">
            Educational <span className="text-accent">Background</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-primary rounded-full mx-auto"
          />
        </motion.div>

        {/* Timeline Container */}
        <motion.div 
          className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:via-border before:to-transparent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {educationData.map((edu, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline Icon / Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                <GraduationCap size={20} />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-surface border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
                
                <div className="flex flex-col gap-1 mb-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <Award size={18} className="text-accent" />
                    {edu.institution}
                  </h4>
                </div>

                {/* Meta details (Date & Location) */}
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-foreground-subtle mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground-muted leading-relaxed">
                  {edu.description}
                </p>
                
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}