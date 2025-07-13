import React from "react";
import CurvedLoop from "../Reactbits/CurvedLoop/CurvedLoop";
import RotatingText from "../Reactbits/RotatingText/RotatingText";
import SpotlightCard from "../Reactbits/SpotlightCard/SpotlightCard";
const Skills = () => {
  return (
    <div>
      <CurvedLoop
        marqueeText="Be ✦ Creative ✦ With ✦ React ✦ And ✦ Me ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style"
      />

      <div className=" ml-1 mt-[20%] lg:mt-[14%]  flex justify-center ">
        <RotatingText
          texts={["Technology", "Skills", "Frameworks", "Languages", "Tools"]}
          mainClassName="px-2  sm:px-2 md:px-3 bg-violet-300 text-violet-900 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-full border-1 border-violet-900"
          staggerFrom={"last"}
          initial={{y: "100%"}}
          animate={{y: 0}}
          exit={{y: "-120%"}}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{type: "spring", damping: 30, stiffness: 400}}
          rotationInterval={2000}
        />
      </div>

      <div className="flex mt-4 justify-center ml-1 mr-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mb-2">
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className=" text-xl  text-white">
              <header className="pb-2 text-center text-2xl font-bold ">
                Language
              </header>
              <li>C++</li>
              <li>Java</li>
              <li>Python</li>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="text-xl  text-white">
              <header className="pb-2 text-center text-2xl font-bold ">
                Frontend
              </header>
              <li>React.js, </li>
              <li>GSAP</li>
              <li>Tailwind CSS</li>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="text-xl  text-white">
              <header className="pb-2 text-center text-2xl font-bold ">
                Backend
              </header>
              <li>Springboot </li>
              <li>Rest Api</li>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="text-xl text-white ">
              <header className="pb-2 text-center text-2xl font-bold ">
                Tools
              </header>
              <li>Postman </li>
              <li>Git</li>
              <li>Vs Code</li>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default Skills;
