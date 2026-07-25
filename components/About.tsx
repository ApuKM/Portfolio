"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Heart, User } from "lucide-react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

export default function About() {
  const socialLinks = [
    { name: "GitHub", icon: BsGithub, url: "https://github.com/ApuKM" },
    {
      name: "LinkedIn",
      icon: BsLinkedin,
      url: "https://www.linkedin.com/in/apu-kumar",
    },
    {
      name: "Facebook",
      icon: BsFacebook,
      url: "https://www.facebook.com/Apukm180",
    },
  ];

  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each child animation by 0.2s
      },
    },
  };

  const itemLeftVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="w-full bg-background py-20 border-b border-border text-foreground overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            About <span className="text-accent">Me</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-primary rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: The Narrative (Spans 2 columns) */}
          <motion.div
            className="lg:col-span-2 space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Programming Journey */}
            <motion.div variants={itemLeftVariants}>
              <div className="flex items-center gap-2 mb-3">
                <User className="text-primary" size={24} />
                <h3 className="text-2xl font-bold text-foreground">
                  My Journey
                </h3>
              </div>
              <p className="text-foreground-muted leading-relaxed">
                My journey into software engineering started out of pure
                curiosity. I was always fascinated by how the digital world
                operates under the hood, which drove me to write my first lines
                of code. What began as a hobby quickly turned into a passion for
                building systems that solve real-world problems. Over the years,
                I have honed my skills across the stack to bridge the gap
                between complex logic and seamless user experiences.
              </p>
            </motion.div>

            {/* Work I Enjoy */}
            <motion.div variants={itemLeftVariants}>
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="text-primary" size={24} />
                <h3 className="text-2xl font-bold text-foreground">
                  What I Do
                </h3>
              </div>
              <p className="text-foreground-muted  leading-relaxed">
                As a Full Stack Developer, I thrive on the challenge of building
                scalable, high-performance web applications. I absolutely love
                working with modern technologies like React, Next.js, and
                Node.js. Whether it's architecting a robust database schema or
                crafting pixel-perfect, responsive UI, I am driven by writing
                clean, maintainable code. Recently, I've also been embracing
                Agentic AI workflows to build faster and smarter.
              </p>
            </motion.div>

            {/* Hobbies & Personality */}
            <motion.div variants={itemLeftVariants}>
              <div className="flex items-center gap-2 mb-3">
                <Heart className="text-primary" size={24} />
                <h3 className="text-2xl font-bold text-foreground">
                  Beyond the Code
                </h3>
              </div>
              <p className="text-foreground-muted  leading-relaxed">
                I believe that a well-rounded developer needs time away from the
                screen. When I am not debugging or pushing commits, you will
                usually find me out on the field playing cricket—a sport that
                has taught me a lot about teamwork and strategy. I am also an
                avid reader, constantly exploring books that broaden my
                perspective on both technology and life.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Card & Social Links */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="bg-surface border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Connect With Me
              </h3>

              <p className="text-foreground-subtle mb-8">
                I'm always open to discussing web development, new project
                opportunities, or just having a chat about tech and cricket!
              </p>

              {/* Social Buttons Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      variants={itemUpVariants}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.95 }}
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center justify-center gap-3 bg-surface-secondary border border-border hover:border-primary p-4 rounded-xl transition-colors duration-300"
                    >
                      <div className="text-foreground-subtle group-hover:text-primary transition-colors duration-300">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-medium text-foreground-muted group-hover:text-foreground">
                        {social.name}
                      </span>
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Quick Contact Action */}
              <motion.div
                className="mt-8 pt-6 border-t border-border text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-sm text-foreground-subtle mb-3">
                  Prefer email?
                </p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=apukumar180@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-2.5 rounded-lg transition-colors"
                >
                  Say Hello
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
