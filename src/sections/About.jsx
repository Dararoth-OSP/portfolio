import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { TfiDownload } from "react-icons/tfi";
import { Section } from "../components/Section";
import SkillBar from "../components/SkillBar";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="about"
      className="relative max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-14 pt-24 pb-10 bg-z text-white"
    >
      {/* <SectionOrder number={1} title={'About Me'}/> */}

      <div className="basis-2/5 space-y-7" data-aos="fade-right">
        <h1 className="text-3xl xs:text-4xl font-semibold">
          OUK SORPHOAN DARAROTH
        </h1>
        <div className="flex flex-col gap-4 pb-5 border-b-[1px] border-b-zinc-700">
          <div>
            <h6>30 APRIL 2000</h6>
            <span className="text-zinc-500">BORN</span>
          </div>
          <div>
            <h6>Phnom Penh, Cambodia</h6>
            <span className="text-zinc-500">HOMETOWN</span>
          </div>
        </div>
        <p className="text-[#969696] tracking-[-0.1em]">
          As a senior BIS student at Pannasastra University in Cambodia, my
          passion lies in leveraging business acumen and IT expertise to drive
          innovation and achieve organizational goals.
        </p>
        <p className="text-[#969696] tracking-[-0.1em]">
          My main focus these days is building products and leading projects
          that enable businesses to reach their objectives.
        </p>

        <button className="flex items-center gap-x-2 px-4 py-2 border hover:bg-white/5 active:bg-white/10">
          MY RESUME <TfiDownload />
        </button>
      </div>

      <div className=" lg:basis-3/5 space-y-4 ">
        <h1 className="font-bold text-xl text-white mb-5">MY SKILLS</h1>
        <SkillBar title="HTML" percent={90} />
        <SkillBar title="CSS" percent={70} />
        <SkillBar title="Javascript" percent={50} />
        <SkillBar title="React JS" percent={70} />
        <SkillBar title="SQL" percent={60} />
        <SkillBar title="C# (.NET)" percent={40} />
        <SkillBar title="Python" percent={50} />
      </div>
    </div>
  );
};

export default About;
