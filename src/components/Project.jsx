
"use client"; 


import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projectData";

export default function Project() {
  return (
    <section id="projects" className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center pb-4">
          Projects Arsenal
        </h2>

        <p className="text-center text-gray-300 max-w-2xl mx-auto text-base">
          Here are some of the projects I’ve built. Explore them to see my skills in action.
        </p>
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 grid-cols-1 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}