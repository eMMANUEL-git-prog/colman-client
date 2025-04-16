"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  Smartphone,
  Paintbrush,
  Cloud,
  ArrowRight,
} from "lucide-react";
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
    lucideIcon: <Laptop className="w-10 h-10 text-blue-500" />,
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
    lucideIcon: <Paintbrush className="w-10 h-10 text-blue-500" />,
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
    lucideIcon: <Smartphone className="w-10 h-10 text-blue-500" />,
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
    lucideIcon: <Cloud className="w-10 h-10 text-blue-500" />,
  },
];

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="tech-stack"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            TECHNOLOGIES
          </motion.span>
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Technology Stack
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We leverage cutting-edge technologies to build robust, scalable, and
            high-performing digital solutions.
          </motion.p>
        </div>

        {/* Services List */}
        <motion.div
          className="space-y-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative"
              variants={itemVariants}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-16 items-center`}
              >
                {/* Service Icon - Small Screens */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 lg:hidden">
                  <div className="bg-white p-4 rounded-full shadow-lg">
                    {service.lucideIcon}
                  </div>
                </div>

                {/* Image with Animation */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="overflow-hidden rounded-xl shadow-xl">
                    <img
                      src={service.icon || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-[300px] md:h-[400px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Service Icon - Large Screens */}
                  <div className="hidden lg:block absolute -top-6 -left-6 bg-white p-5 rounded-full shadow-xl">
                    {service.lucideIcon}
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {service.details}
                  </p>

                  {/* Technologies List */}
                  <div className="pt-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      Technologies We Use
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {service.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-100 hover:shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    className="pt-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a
                      href={`/services#${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    >
                      Learn more about our {service.title.toLowerCase()}{" "}
                      services
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
