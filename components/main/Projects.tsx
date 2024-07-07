import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="TypeMaster Showdown"
          description="Built with Next.js and Socket.io, it is a typing game where friends join a room and compete to type the most words in 1 minute."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Shopping Web-App"
          description="Built using React, Redux, MongoDB and Node.js, it a full-stack shopping web-app based on eBay and is hosted on GCP."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Built with Next.js and Tailwind CSS, a personal portfolio website showcasing skills, projects and experience."
        />
      </div>
    </div>
  );
};

export default Projects;