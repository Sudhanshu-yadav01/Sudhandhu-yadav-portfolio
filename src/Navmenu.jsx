import React from "react";
import { FaCircle, FaCircleNotch } from "react-icons/fa";

const Navmenu = () => {
  return (
    <div
      id="home"
      className="w-full max-w-screen-xl mx-auto flex flex-wrap justify-between items-center px-4 md:px-8 mt-4 py-3"
    >
      <div className="flex items-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <FaCircleNotch size={24} />
          <h3 className="text-base md:text-lg font-semibold">Yadav</h3>
        </div>

        {/* ✅ Styled Available Badge */}
        <div className="flex items-center gap-2 bg-green-400 border border-green-500 text-green-900 text-xs md:text-sm px-3 py-1 rounded-full">
          <FaCircle size={10} className="text-green-900" />
          <span className="font-medium">Available</span>
        </div>
      </div>

      {/* Resume Button */}
      <a
        href="/secure/resume.pdf"
        download
        className="relative justify-center group inline-block mt-2 md:mt-0"
      >
        <span className="relative z-10 ju inline-block px-6 py-2 text-white bg-black rounded-full transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:-translate-y-1">
          Resume
        </span>
        <span className="absolute inset-0 rounded-full bg-gray-800 transition-transform duration-300 ease-in-out transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></span>
      </a>
    </div>
  );
};

export default Navmenu;
