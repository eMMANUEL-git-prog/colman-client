import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      title: "Project One",
      description:
        "A modern e-commerce website built with React and Tailwind CSS.",
      imageUrl: "https://via.placeholder.com/600",
      projectLink: "#",
    },
    {
      title: "Project Two",
      description: "A mobile app that helps users track their fitness goals.",
      imageUrl: "https://via.placeholder.com/600",
      projectLink: "#",
    },
    {
      title: "Project Three",
      description:
        "A custom-built blog platform with user authentication and dynamic content.",
      imageUrl: "https://via.placeholder.com/600",
      projectLink: "#",
    },
    {
      title: "Project Four",
      description: "A corporate website with a clean and professional UI.",
      imageUrl: "https://via.placeholder.com/600",
      projectLink: "#",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
    arrows: false,
  };

  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-blue-600 mb-12 tracking-wide text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Portfolio
        </motion.h2>

        {/* React Slick Slider */}
        <Slider {...settings} className="relative">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 * index }}
            >
              <div
                className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300 ease-in-out"
                role="button"
                tabIndex={0}
                onClick={() => openModal(project)}
                onKeyPress={(e) =>
                  e.key === "Enter" || e.key === " " ? openModal(project) : null
                }
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.projectLink}
                    className="text-white text-xl font-semibold py-2 px-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    aria-label={`View ${project.title}`}
                  >
                    View Project
                  </a>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Modal for Project Details */}
      {isModalOpen && currentProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg w-96 max-w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold mb-4">
              {currentProject.title}
            </h3>
            <img
              src={currentProject.imageUrl}
              alt={currentProject.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p>{currentProject.description}</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
