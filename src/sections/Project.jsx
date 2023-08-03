import React from "react";
import ProjectCard from "../components/ProjectCard";
import MyNote from "../assets/note-taking-project.png";
import OneTwoCook from "../assets/one-two-cook.png";
import PhumiCar from "../assets/phumiCar.png";

const Project = () => {
  const projects = [
    {
      id: "p001",
      title: "MyNote",
      image: MyNote,
      description:
        "Note Taking Project using React JS & Real-time database (Firebase)",
      fromDate: "June 01",
      toDate: "June 18",
      fadeDuaration: 900,
    },
    {
      id: "p002",
      title: "OneTwoCook",
      image: OneTwoCook,
      description:
        "Foods, drinks, and dessert recipe platform where people can serach for their favorite cursine.",
      fromDate: "July 18",
      toDate: "July 26",
      fadeDuaration: 700,
    },
    {
      id: "p003",
      title: "PhumiCar",
      image: PhumiCar,
      description:
        "This car buy&sell platform where people can serach for their dream car.",
      fromDate: "June 28",
      toDate: "July 01",
      fadeDuaration: 500,
    },
  ];

  return (
    <div id="project" className="relative py-16">
      <h1 className="text-center uppercase mb-12 px-6 text-3xl font-semibold">
        My Recent Work
      </h1>
      <div className="flex max-w-[1200px] px-6 mx-auto flex-col md:flex-row  gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            duration={project.fadeDuaration}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
