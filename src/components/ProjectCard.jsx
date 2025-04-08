"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <div className="">
      <motion.div
        className="bg-gray-800 text-white p-4 sm:p-5 rounded-lg shadow-lg "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Project Name */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
          {project.name}
        </h3>

        {/* Image Carousel */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-lg overflow-hidden"
        >
          {project.images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-48 sm:h-56 md:h-60">
                <Image
                  src={img.src}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base mt-3">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href={project.liveLink}
            target="_blank"
            className="btn bg-white text-black px-4 sm:px-6 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className="btn btn-ghost border-white text-white hover:bg-gray-500 px-4 py-2 rounded-md"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
}
