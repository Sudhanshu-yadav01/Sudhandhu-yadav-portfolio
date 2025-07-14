import React from "react";
import CurvedLoop from "../Reactbits/CurvedLoop/CurvedLoop";
import RotatingText from "../Reactbits/RotatingText/RotatingText";

const skills = [
  {
    title: "Languages",
    items: ["C++", "Java", "Python"],
  },
  {
    title: "Frontend",
    items: ["React.js", "GSAP", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "REST API"],
  },
  {
    title: "Tools",
    items: ["Postman", "Git", "VS Code"],
  },
];

const Skills = () => {
  return (
    
    <div id="skills" className="py-16 mb-28 mt-28 px-4">
      {/* Curved Text */}
      <CurvedLoop
        marqueeText="Be ✦ Creative ✦ With ✦ React ✦ And ✦ Me ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style"
      />

      {/* Rotating Title */}
      <div className="mt-32 lg:mt-72 flex justify-center">
        <RotatingText
          texts={["Technology", "Skills", "Frameworks", "Languages", "Tools"]}
          mainClassName="px-6 bg-black text-gray-400 overflow-hidden py-2 justify-center rounded-full border border-gray-600"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>

      {/* Main Morph Grid Box */}
      <div className="max-w-6xl mt-10 mx-auto  px-4">
        <div className="rounded-[40px] bg-[#fdf9f5] shadow-xl p-8 sm:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {skills.map((skill, index) => (
              <div key={index} className="">
                <div className="inline-block px-4 py-1 mb-3 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                  {skill.title}
                </div>
                <ul className="text-gray-700 space-y-1 text-base">
                  {skill.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
