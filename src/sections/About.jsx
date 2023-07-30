import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSpring, animated } from "react-spring";
import { TfiDownload } from "react-icons/tfi";

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

const About = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, [count]);

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
        <div className="w-full space-y-2">
          <span>HTML</span>
          <div
            className={`w-14 ${
              count && "w-[90%]"
            } duration-[2000ms] h-7 bg-gradient-to-r from-red-900 to-red-700`}
          >
            <span className="float-right flex gap-1 mr-2 text-white font-semibold">
              <Number n={90} />%
            </span>
          </div>
        </div>
        <div className="w-full space-y-2">
          <span>CSS</span>
          <div
            className={`w-14 ${
              count && "w-[70%]"
            } duration-[2000ms] h-7 bg-gradient-to-r from-red-900 to-red-700`}
          >
            <span className="float-right mr-2 flex gap-1 text-white font-semibold">
              <Number n={70} />%
            </span>
          </div>
        </div>
        <div className="w-full space-y-2">
          <span>Javascript</span>
          <div
            className={`w-14 ${
              count && "w-[50%]"
            } duration-[2000ms] h-7 bg-gradient-to-r from-red-900 to-red-700`}
          >
            <span className="float-right mr-2 flex gap-1 text-white font-semibold">
              <Number n={50} />%
            </span>
          </div>
        </div>
        <div className="w-full space-y-2">
          <span>React JS</span>
          <div
            className={`w-14 ${
              count && "w-[70%]"
            } duration-[2000ms] h-7 bg-gradient-to-r from-red-900 to-red-700`}
          >
            <span className="float-right mr-2 flex gap-1 text-white font-semibold">
              <Number n={70} />%
            </span>
          </div>
        </div>
        <div className="w-full space-y-2">
          <span>SQL</span>
          <div
            className={`w-14 ${
              count && "w-[60%]"
            } duration-[2000ms] h-7 bg-gradient-to-r from-red-900 to-red-700`}
          >
            <span className="float-right mr-2 flex gap-1 text-white font-semibold">
              <Number n={60} />%
            </span>
          </div>
        </div>
        <div className="w-full space-y-2">
          <span>C# (.NET)</span>
          <div
            className={`w-14 ${
              count && "w-[40%]"
            } duration-[2000ms] h-7 bg-gradient-to-r from-red-900 to-red-700`}
          >
            <span className="float-right mr-2 flex gap-1 text-white font-semibold">
              <Number n={40} />%
            </span>
          </div>
        </div>
        <div className="w-full space-y-2">
          <span>Python</span>
          <div
            className={`w-14 ${
              count && "w-[50%]"
            } duration-[2000ms] h-7 bg-gradient-to-r from-red-900 to-red-700`}
          >
            <span className="float-right mr-2 flex gap-1 text-white font-semibold">
              <Number n={50} />%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
