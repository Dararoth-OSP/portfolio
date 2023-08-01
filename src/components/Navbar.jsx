import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

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
    <div className="fixed hidden text-white/30 h-screen w-10 text-sm lg:text-base z-50 2xl:flex flex-col justify-center bg-[#1e1e1e]">
      <a
        onClick={() => handlerSectionClick("home")}
        className={`${
          activeSection === "home" ? "font-bold scale-105 text-white" : ""
        } duration-100 cursor-pointer -rotate-90 hover:text-white hover:scale-105 hover:font-bold mb-16`}
      >
        Home
      </a>
      <a
        onClick={() => handlerSectionClick("about")}
        className={`${
          activeSection === "about" ? "font-bold scale-105 text-white" : ""
        } duration-100 cursor-pointer -rotate-90 hover:text-white hover:scale-105 hover:font-bold mb-24`}
      >
        About
      </a>
      <a
        onClick={() => handlerSectionClick("project")}
        className={`${
          activeSection === "project" ? "font-bold scale-105 text-white" : ""
        } duration-100 cursor-pointer -rotate-90 hover:text-white hover:scale-105 hover:font-bold mb-24`}
      >
        Projects
      </a>
      <a
        onClick={() => handlerSectionClick("contact")}
        className={`${
          activeSection === "contact" ? "font-bold scale-105 text-white" : ""
        } duration-100 cursor-pointer -rotate-90 hover:text-white hover:scale-105 hover:font-bold my-0`}
      >
        Contact
      </a>
      <div
        className={`${activeSection === "home" && "-translate-y-[10.95rem]"} ${
          activeSection === "about" && "-translate-y-[5.5rem]"
        } ${activeSection === "project" && "translate-y-4"} ${
          activeSection === "contact" && "translate-y-[8.7rem]"
        } duration-300 absolute border-r-2 right-0 border-red-700 w-1 h-14`}
      ></div>
    </div>
  );
};

export default Navbar;
