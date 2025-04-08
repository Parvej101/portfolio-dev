"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
} from "react-icons/si";
import CurrentlyLearning from "./CurrentlyLearning";

export default function SkillsCard() {
  return (
    <motion.div
      id="skills"
      className="w-full bg-gray-800 text-white py-10"
      initial={{ opacity: 0, y: 50 }} // Start hidden
      animate={{ opacity: 1, y: 0 }} // Animate to visible
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
    >
      <div className="max-w-7xl mx-auto px-6 lg:py-10 md:px-16">
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row mb-10 gap-5">
          <motion.div
            className="text-left flex-1 border-2 p-5 rounded-lg"
            initial={{ opacity: 0, x: -50 }} // Slide-in from left
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-xl md:text-3xl font-extrabold mb-4">
              Technology Arsenal
            </h2>
            <p className="lg:text-lg text-md text-gray-300 max-w-3xl mx-auto">
              I leverage these cutting-edge technologies to build efficient and
              high-performing applications. My journey is fueled by continuous
              learning and adaptation to emerging trends, ensuring I craft
              scalable, robust, and user-centric solutions.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 text-left border-2 p-5 rounded-lg"
            initial={{ opacity: 0, x: 50 }} // Slide-in from right
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <CurrentlyLearning />
          </motion.div>
        </div>

        {/* Skills Cards with Marquee Effect */}
        <div className="flex overflow-hidden text-black">
          <motion.div
            className="flex space-x-8"
            initial={{ x: "30%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          >
            {/* Skills List */}
            {[ // Skills array to map through
              { Icon: FaHtml5, name: "HTML5" },
              { Icon: FaCss3Alt, name: "CSS3" },
              { Icon: SiTailwindcss, name: "Tailwind CSS" },
              { Icon: FaJs, name: "JavaScript" },
              { Icon: FaReact, name: "React" },
              { Icon: SiMongodb, name: "MongoDB" },
              { Icon: FaNodeJs, name: "Node.js" },
              { Icon: SiFirebase, name: "Firebase" },
              { Icon: SiExpress, name: "Express" },
              { Icon: FaGithub, name: "GitHub" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-xl w-40 flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1, // Stagger effect
                }}
                whileHover={{ scale: 1.1 }}
              >
                <skill.Icon size={40} />
                <p className="mt-2 text-lg">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
