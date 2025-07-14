import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="text-black min-h-screen flex flex-col justify-center items-center px-4"
    >
      <div className="bg-[#f5f5f5] rounded-3xl w-full max-w-5xl py-20 px-6 text-center shadow-xl">
        {/* Status badge */}
        <div className="inline-flex items-center bg-[#a7eeb4] text-sm px-4 py-1 rounded-full mb-6">
          <span className="h-2 w-2 bg-green-500 rounded-full mr-2" />
          Available for work
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
          Let&apos;s create your <br className="hidden sm:block" />
          next big idea.
        </h1>

        {/* Contact Button */}
        <motion.a
          href="mailto:iamsdyadav@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            backgroundColor: "#34d399", // Tailwind's emerald-400
            color: "#ffffff",
            scale: 1.05,
            borderColor: "#34d399",
            transition: { duration: 0.3 },
          }}
          className="inline-block px-6 py-3 border border-black rounded-full text-lg font-medium transition-all duration-300"
        >
          Contact Me
        </motion.a>
      </div>

      {/* Footer */}
      <div className="w-full mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 px-4">
        <p className="mb-4 md:mb-0">
          © 2025 Sudhanshu Yadav. All rights reserved.
        </p>
        <div className="flex space-x-6 text-xl text-gray-700">
          <a
            href="https://www.linkedin.com/in/sudhanshu-yadav-015167290/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sudhanshu-yadav01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/sudhanshu_yadav0104/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="mailto:iamsdyadav@gmail.com">
            <HiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
