"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
export default function Banner() {
  return (
    <div className="px-4 bg-gray-800">
      <section className="flex flex-col md:flex-row items-center justify-around lg:py-24 py-10 text-white max-w-7xl mx-auto px-4 min-h-screen">
        {/* Left side - Text */}
        <div className="w-full md:w-1/2 lg:space-y-6 p-5">
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 ">
              Hi, I am MH Parvej
            </h1>
          </div>
          <div>
            <p className="text-base sm:text-lg md:text-xl mb-3">
              A passionate Frontend Developer who loves crafting interactive and
              responsive web applications.
            </p>
          </div>
          {/* Typing Effect */}
          <div>
            <TypeAnimation
              sequence={[
                "Let's Go!",
                2000, // Wait for 2 seconds
                "Let's Build Something Awesome!",
                2000, // Wait for 2 seconds
              ]}
              speed={50} // Typing speed (in ms)
              repeat={Infinity} // Continuously repeat the animation
              className="lg:text-xl text-md lg:font-extrabold font-semibold py-5 text-green-400"
            />
          </div>
          <div className="space-x-2 mt-3 lg:space-x-4 flex">
            <a
              href="/resume.pdf"
              className="btn bg-white text-black lg:px-6 px-3 py-2 rounded-md hover:bg-gray-200 transition"
              download
            >
              Download Resume
            </a>
            <a
              href="mailto:your-email@example.com"
              className="btn bg-transparent border-2 border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Right side - Image */}
        <motion.div
          className="w-full md:w-1/2 flex md:justify-end justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <Image
              src="/images/parvej-banner.jpg"
              alt="MH Parvej"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-lg"
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gray-200 opacity-20 rounded-full"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
