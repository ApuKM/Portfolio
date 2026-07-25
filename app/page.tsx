import About from "@/components/About";
import Contact from "@/components/Contacts";
import Education from "@/components/Education";
import FeaturedProjectsContainer from "@/components/FeaturedContainer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import React from "react";

const getFeaturedProjects = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/projects/featured`, {
    cache: "no-store", // Use 'force-cache' if the data rarely changes
  });
  const data = await res.json();
  return data?.projects;
};

const Home = async () => {
  const featuredProjects = await getFeaturedProjects();
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      <FeaturedProjectsContainer projects={featuredProjects} />
      <Contact />
    </div>
  );
};

export default Home;
