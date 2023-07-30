import React, { useState, useEffect } from "react";

const HorizontalNavBar = () => {
  const [activeSection, setActiveSection] = useState("");

  const handlerSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    scrollToSection(sectionName);
  };

  const scrollToSection = (sectionName) => {
    const section = document.getElementById(sectionName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Use useEffect to listen for scroll events and update the active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "project", "contact"];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed 2xl:hidden text-white/30 text-xs xs:text-sm h-10 w-screen sm:text-sm lg:text-base z-50 flex items-center gap-4 sm:gap-x-6 justify-center bg-[#1e1e1e]">
      <a
        onClick={() => handlerSectionClick("home")}
        className={`${
          activeSection === "home" ? "font-bold scale-105 text-white" : ""
        } duration-100 cursor-pointer hover:text-white `}
      >
        Home
      </a>
      <a
        onClick={() => handlerSectionClick("about")}
        className={`${
          activeSection === "about" ? "font-bold scale-105 text-white" : ""
        } duration-100 cursor-pointer hover:text-white `}
      >
        About
      </a>
      <a
        onClick={() => handlerSectionClick("project")}
        className={`${
          activeSection === "project" ? "font-bold scale-105 text-white" : ""
        } duration-100 cursor-pointer hover:text-white `}
      >
        Projects
      </a>
      <a
        onClick={() => handlerSectionClick("contact")}
        className={`${
          activeSection === "contact" ? "font-bold scale-105 text-white" : ""
        } duration-100 cursor-pointer hover:text-white `}
      >
        Contact
      </a>
      {/* <div
        className={`${activeSection === "home" && "-translate-y-[10.95rem]"} ${
          activeSection === "about" && "-translate-y-[5.5rem]"
        } ${activeSection === "project" && "translate-y-4"} ${
          activeSection === "contact" && "translate-y-[8.7rem]"
        } duration-300 absolute top-0 border-b-2 border-red-700 w-20 h-1`}
      ></div> */}
    </div>
  );
};

export default HorizontalNavBar;
