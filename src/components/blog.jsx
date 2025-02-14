import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import web from "../assets/image0.jpg";
import app from "../assets/app.jpg";
import uiux from "../assets/uxui.jpg";
import cloud from "../assets/host.jpg";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build dynamic, scalable, and user-friendly websites using cutting-edge technologies. From e-commerce platforms to custom web applications, we create solutions that drive growth and efficiency.",
    details:
      "Our development process includes strategic planning, responsive design, optimized performance, and security enhancements. Whether you need a startup website or a complex enterprise application, we've got you covered.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    icon: web,
  },
  {
    id: 2,
    title: "Web Design",
    description:
      "Our design philosophy focuses on user experience and aesthetics. We craft visually stunning, intuitive, and high-converting designs that bring your brand to life.",
    details:
      "We emphasize seamless navigation, engaging visuals, and a mobile-first approach. Every design is optimized for performance and accessibility, ensuring an outstanding user experience.",
    technologies: ["Figma", "Adobe XD", "Sketch", "Tailwind CSS"],
    icon: uiux,
  },
  {
    id: 3,
    title: "App Development",
    description:
      "We develop high-quality mobile applications that deliver seamless experiences across iOS and Android devices. Our expertise ensures smooth performance and intuitive interfaces.",
    details:
      "From concept to deployment, we handle UI/UX design, backend development, API integration, and performance optimization to create apps that users love.",
    technologies: ["React Native", "Flutter", "Firebase", "Node.js"],
    icon: app,
  },
  {
    id: 4,
    title: "Cloud Hosting",
    description:
      "Our cloud hosting solutions ensure high availability, security, and scalability. We optimize cloud environments for maximum performance and cost efficiency.",
    details:
      "We deploy cloud architectures with best practices, including auto-scaling, load balancing, and containerized environments, ensuring seamless performance even under high traffic.",
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
    icon: cloud,
  },
];

const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="tech-stack" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-center mb-12 tracking-wide text-blue-600 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our Technology Stack
        </motion.h2>

        {/* Services List */}
        <div className="grid gap-16 w-[90%] mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image with Animation */}
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? 150 : -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                className="w-full md:w-1/2 space-y-4"
                initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-3xl font-semibold text-blue-500">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-gray-700">{service.details}</p>

                {/* Technologies List */}
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-blue-600">
                    Technologies We Use
                  </h4>
                  <ul className="flex flex-wrap gap-3 mt-2">
                    {service.technologies.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition duration-200 hover:bg-gray-200"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
