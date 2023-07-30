import React, { useEffect } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  const projects = [
    {
      id: "p001",
      title: "MyNote",
      image: "src/assets/note-taking-project.png",
      description:
        "Note Taking Project using React JS & Real-time database (Firebase)",
      fromDate: "June 01",
      toDate: "June 18",
    },
    {
      id: "p002",
      title: "OneTwoCook",
      image: "src/assets/one-two-cook.png",
      description:
        "Foods, drinks, and dessert recipe platform where people can serach for their favorite cursine.",
      fromDate: "July 18",
      toDate: "July 26",
    },
    {
      id: "p003",
      title: "PhumiCar",
      image: "src/assets/phumiCar.png",
      description:
        "This car buy&sell platform where people can serach for their dream car.",
      fromDate: "June 28",
      toDate: "July 01",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="project" className="relative py-16">
      <h1 className="text-center uppercase mb-12 px-6 text-3xl font-semibold">
        My Recent Work
      </h1>

      <div
        className="flex max-w-[1200px] px-6 mx-auto flex-col md:flex-row  gap-10"
        data-aos="fade-up"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
