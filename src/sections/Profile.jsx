import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

const Profile = () => {
  return (
    <div className="h-96 relative flex bg-gradient-to-r from-[#181818] from-30% to-[#202020] ">
      <div className="absolute w-full md:w-auto bottom-0 px-6 pb-4 md:static md:pl-10 xl:pl-44 bg-gradient-to-t from-black to-transparent md:bg-gradient-to-r md:from-[#181818] uppercase flex flex-col md:gap-y-7 ">
        <span data-aos="fade-right" className="text-2xl md:text-3xl font-bold  md:mt-20">
          Looking forward  <br />
          to work with you
        </span>
        <a data-aos="fade-right" href="#" className="text-sm mt-3">
          DOWNLOAD MY RESUME{" "}
          <BsArrowRightCircle className="inline-block w-8 h-8 mx-2" />
        </a>
      </div>
      <div
        className="bg-cover w-96 h-96 mx-auto"
        style={{
          backgroundImage: `url(${''})`,
        }}
      ></div>
    </div>
  );
};

export default Profile;
