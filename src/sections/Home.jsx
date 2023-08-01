import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import FollowMe from "../components/FollowMe";
import normalPic from "../assets/normal-bg.png";
import { Section } from "../components/Section";

const Home = () => {
  const scrollToSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="h-screen bg-gradient-to-tr from-[#181818] from-20% to-red-700 "
    >
      <div className="max-w-[1200px] h-full gap-x-20 px-4 flex items-center xs:justify-center 2xl:mx-auto text-white">
        <Section className="relative">
          <h1 className="text-4xl sm:text-5xl 2xl:text-6xl font-bold -ml-2">
            OUK
            <br className="sm:hidden" />
            <span className="font-normal whitespace-nowrap">SORPHAN</span>
            <br />
            <span className="font-normal text-white/40">DARARATH</span>
          </h1>
          <h3 className=" sm:text-xl lg:text-2xl xl:text-3xl my-10">
            WEB DEVELOPER
          </h3>
          <div className="flex ">
            <div className="text-red-600 space-y-3">
              <h1>Follow Me</h1>
              <FollowMe />
            </div>
          </div>
          <button
            onClick={scrollToSection}
            className="text-sm animate-bounce block mt-20 text-white/70"
          >
            SEE MORE{" "}
            <BsArrowRightCircle className="inline-block w-6 h-6 mx-2 rotate-90" />
          </button>
        </Section>
        <div className="relative">
          <Section>
            <div
              className="w-[400px] h-[400px] hidden bg-no-repeat lg:block relative z-20 bg-cover bg-center rounded-full shadow-2xl"
              style={{
                backgroundImage: `url(${normalPic})`,
                backgroundSize: 450,
              }}
            ></div>
            <div className="w-[400px] h-[400px] bg-[#181818]  shadow-2xl hidden lg:block absolute -bottom-0 z-10 -right-0 rounded-full drop-shadow-xl bg-cover "></div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Home;
