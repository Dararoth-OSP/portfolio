import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Number = ({ n }) => {
  const [count, setCount] = useState(false);

  useEffect(() => {
    const element = document.getElementById("about");
    if (element) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold as needed
      };

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setCount(true);
          observer.disconnect();
        }
      }, options);

      observer.observe(element);

      // Cleanup the observer when the component unmounts
      return () => observer.disconnect();
    }
  }, []);

  const { number } = useSpring({
    from: { number: 0 },
    number: count ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

const SkillBar = (props) => {
  const [count, setCount] = useState(false);

  useEffect(() => {
    const element = document.getElementById("about");
    if (element) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold as needed
      };

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setCount(true);
          observer.disconnect();
        }
      }, options);

      observer.observe(element);

      // Cleanup the observer when the component unmounts
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="w-full space-y-2">
      <span>{props.title}</span>
      <div
        className={`w-14 ${
          count && `w-[${props.percent}%]`
        } duration-[2000ms] h-7 bg-gradient-to-r from-red-900 to-red-700`}
      >
        <span className="float-right flex gap-1 mr-2 text-white font-semibold">
          <Number n={props.percent} />%
        </span>
      </div>
    </div>
  );
};

export default SkillBar;
