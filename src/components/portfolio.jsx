"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Laptop,
  Smartphone,
  Paintbrush,
  Code,
} from "lucide-react";

const PortfolioPage = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "design", label: "UI/UX Design" },
    { id: "custom", label: "Custom Software" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "/projects/bobby2.png?height=600&width=800",
      description:
        "A comprehensive e-commerce solution with advanced product filtering, payment integration, and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      icon: <Laptop className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "mobile",
      image: "/projects/fashion.png?height=600&width=800",
      description:
        "A patient-centered mobile application for appointment scheduling, medical records access, and telemedicine.",
      technologies: ["React Native", "Firebase", "Node.js"],
      link: "#",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "web",
      image: "/projects/car2.png?height=600&width=800",
      description:
        "An interactive financial dashboard with real-time data visualization, reporting, and analytics.",
      technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      link: "#",
      icon: <Laptop className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "Travel Companion App",
      category: "mobile",
      image: "/projects/grill.png?height=600&width=800",
      description:
        "A feature-rich travel app with itinerary planning, location-based recommendations, and offline maps.",
      technologies: ["Flutter", "Google Maps API", "Firebase"],
      link: "#",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      id: 5,
      title: "Corporate Website Redesign",
      category: "design",
      image: "/projects/health.png?height=600&width=800",
      description:
        "A complete redesign of a corporate website focusing on user experience, accessibility, and modern aesthetics.",
      technologies: ["Figma", "Adobe XD", "HTML/CSS", "JavaScript"],
      link: "#",
      icon: <Paintbrush className="w-5 h-5" />,
    },
    {
      id: 6,
      title: "Inventory Management System",
      category: "custom",
      image: "/placeholder.png?height=600&width=800",
      description:
        "A custom inventory management solution with barcode scanning, reporting, and supplier management.",
      technologies: [".NET", "SQL Server", "React", "Azure"],
      link: "#",
      icon: <Code className="w-5 h-5" />,
    },
    {
      id: 7,
      title: "Educational Platform",
      category: "web",
      image: "/placeholder.png?height=600&width=800",
      description:
        "An interactive learning platform with course management, video streaming, and progress tracking.",
      technologies: ["Next.js", "MongoDB", "AWS S3", "Tailwind CSS"],
      link: "#",
      icon: <Laptop className="w-5 h-5" />,
    },
    {
      id: 8,
      title: "Restaurant Ordering App",
      category: "mobile",
      image: "/projects/grill2.png?height=600&width=800",
      description:
        "A mobile app for restaurant ordering with real-time order tracking, menu customization, and payment processing.",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      id: 9,
      title: "Brand Identity Design",
      category: "design",
      image: "/placeholder.png?height=600&width=800",
      description:
        "A comprehensive brand identity design including logo, color palette, typography, and brand guidelines.",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
      link: "#",
      icon: <Paintbrush className="w-5 h-5" />,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block p-2 px-5 bg-blue-800/50 rounded-full text-blue-200 font-medium text-sm mb-5">
              Our Work
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Portfolio
            </h1>
            <div className="h-1 w-20 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 mb-8">
              Explore our latest projects and see how we've helped businesses
              achieve their digital goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                layout
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image || "/placeholder.png"}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="p-1.5 bg-blue-500 rounded-full text-white mr-2">
                          {project.icon}
                        </span>
                        <span className="text-white text-sm font-medium">
                          {
                            categories.find((c) => c.id === project.category)
                              ?.label
                          }
                        </span>
                      </div>
                      <h3 className="text-white text-xl font-bold">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deeper into our most impactful projects and learn how we
              solved complex challenges
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              {
                title: "E-Commerce Platform Transformation",
                client: "RetailCo Inc.",
                description:
                  "How we helped a traditional retailer increase online sales by 200% with a modern e-commerce platform.",
                image: "/placeholder.png?height=400&width=600",
                link: "/portfolio/case-studies/retailco",
              },
              {
                title: "Healthcare App User Experience Redesign",
                client: "MediCare Solutions",
                description:
                  "Redesigning a healthcare app to improve patient engagement and satisfaction scores by 45%.",
                image: "/placeholder.png?height=400&width=600",
                link: "/portfolio/case-studies/medicare",
              },
              {
                title: "Enterprise Software Modernization",
                client: "Global Logistics Corp",
                description:
                  "Modernizing legacy systems to improve operational efficiency and reduce costs by 30%.",
                image: "/placeholder.png?height=400&width=600",
                link: "/portfolio/case-studies/global-logistics",
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                className="mb-16 last:mb-0 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="lg:col-span-2">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={study.image || "/placeholder.png"}
                      alt={study.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {study.client}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <a
                    href={study.link}
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                  >
                    Read Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "Working with Colman Technologies transformed our business. Their expertise and dedication to our project exceeded our expectations.",
                author: "Benson Gitau",
                position: "CEO, RetailCo Inc.",
                image: "/user.jpg?height=100&width=100",
              },
              {
                quote:
                  "The team's technical knowledge and attention to detail resulted in a product that perfectly aligned with our vision and business goals.",
                author: "Joel Malema",
                position: "CTO, HealthTech Solutions",
                image: "/user.jpg?height=100&width=100",
              },
              {
                quote:
                  "From concept to completion, Colman Technologies delivered a solution that not only met but exceeded our requirements. Highly recommended!",
                author: "Jerop Sheilah",
                position: "Marketing Director, Global Brands",
                image: "/user.jpg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  {/* Quote SVG */}
                  <svg
                    className="w-10 h-10 text-blue-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.png"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's collaborate to bring your vision to life with innovative
              solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
