import React, { useEffect, useRef, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const ProjectCard = ({ project, duration }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);

      // Cleanup the observer when the component unmounts
      return () => observer.disconnect();
    }
  }, []);

  const cardStyle = {
    opacity: isVisible ? 1 : 0,
    transform: `translateX(${isVisible ? 0 : -100}px)`, // Negative value to move from the left
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
  };

  return (
    <div
      ref={cardRef}
      style={cardStyle}
      className="space-y-4 relative p-4 tracking-[-0.1em] duration-200  bg-zinc-800/50 hover:bg-zinc-700/40 border-t border-t-transparent hover:border-t-zinc-100/10 hover:shadow-xl"
    >
      <img src={project.image} alt={project.title} />
      <span className="text-red-700 text-xs flex items-center gap-2">
        {project.fromDate}
        <div className="w-20 border-t border-red-700" /> {project.toDate}
      </span>
      <h1 className="font-bold text-lg">{project.title}</h1>
      <p className="pb-24">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        className="bg-white text-sm sm:text-base absolute hover:bg-red-700 hover:text-white duration-200 bottom-4 right-4 flex border-r-4 justify-center border-r-red-700 text-black py-4 px-4 max-w-[250px] gap-3"
      >
        Discover more <BsArrowRightCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default ProjectCard;
