import About from "@/components/About";
import Contact from "@/components/Contacts";
import Education from "@/components/Education";
import FeaturedProjectsContainer from "@/components/FeaturedContainer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { getFeaturedProjects } from "@/lib/project-data";

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
