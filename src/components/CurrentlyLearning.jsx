"use client";
import { motion } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";


export default function CurrentlyLearning() {
  return (
    <div>
      <h2 className="text-xl md:text-3xl font-extrabold mb-6"> Exploring New Skills</h2>
      <motion.div
      className="relative flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-6 rounded-lg shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.2)]"
      whileHover={{ scale: 1.05 }}
    >
      {/* Glowing Shadow Effect */}
      <motion.div
        className="absolute inset-0 bg-gray-100 opacity-10 rounded-lg blur-lg"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      {/* Next.js Icon */}
      <SiNextdotjs className="text-5xl mb-2" />

      {/* Text Below Icon */}
      <span className="text-xl font-semibold">NEXT JS</span>
    </motion.div>
    </div>
  );
}
