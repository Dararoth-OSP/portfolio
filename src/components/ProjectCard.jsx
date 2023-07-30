import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const ProjectCard = ({ project }) => {
  return (
    <div className="space-y-4 relative p-4 tracking-[-0.1em] duration-200  bg-zinc-800/50 hover:bg-zinc-800/80 border-t border-t-transparent hover:border-t-zinc-100/10 hover:shadow-xl">
      <img src={project.image} />
      <span className="text-red-700 text-xs flex items-center gap-2">
        {project.fromDate}
        <div className="w-20 border-t border-red-700" /> {project.toDate}
      </span>
      <h1 className="font-bold text-lg">{project.title}</h1>
      <p className="pb-24">{project.description}</p>
      <button className="bg-white text-sm sm:text-base absolute hover:bg-red-700 hover:text-white duration-200 bottom-4 right-4 flex border-r-4 justify-center border-r-red-700 text-black py-4 px-4 max-w-[250px] gap-3">
        Discover more <BsArrowRightCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ProjectCard;
