"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  Smartphone,
  Paintbrush,
  Cloud,
  ArrowRight,
  Code,
  Database,
  Globe,
  ShieldCheck,
} from "lucide-react";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const services = [
    {
      title: "Web Development",
      description:
        "We build highly interactive, fast, and responsive websites tailored to meet your business needs.",
      icon: <Laptop className="w-8 h-8" />,
      link: "/services#web-development",
      linkText: "Let's Build Together",
      features: [
        "Custom Web Apps",
        "E-commerce",
        "CMS Solutions",
        "API Integration",
      ],
    },
    {
      title: "Mobile App Development",
      description:
        "We design user-friendly mobile apps for iOS and Android that cater to your customers' needs and enhance engagement.",
      icon: <Smartphone className="w-8 h-8" />,
      link: "/services#mobile-development",
      linkText: "Start Your App Journey",
      features: [
        "iOS & Android",
        "Cross-platform",
        "UI/UX Design",
        "App Store Optimization",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "We create intuitive and visually stunning designs that enhance user experience and streamline navigation.",
      icon: <Paintbrush className="w-8 h-8" />,
      link: "/services#ui-ux-design",
      linkText: "Craft a Beautiful Experience",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
      ],
    },
    {
      title: "Cloud Hosting",
      description:
        "We provide secure and scalable cloud infrastructure solutions for your business.",
      icon: <Cloud className="w-8 h-8" />,
      link: "/services#cloud-hosting",
      linkText: "Explore Cloud Services",
      features: [
        "AWS/GCP/Azure",
        "Scalable Solutions",
        "24/7 Monitoring",
        "Cost Optimization",
      ],
    },
    {
      title: "Backend Development",
      description:
        "We build robust, scalable backend systems that power your applications with reliability and performance.",
      icon: <Database className="w-8 h-8" />,
      link: "/services#backend-development",
      linkText: "Power Your Applications",
      features: [
        "API Development",
        "Database Design",
        "Microservices",
        "Performance Optimization",
      ],
    },
    {
      title: "Web Security",
      description:
        "We implement comprehensive security measures to protect your digital assets and user data.",
      icon: <ShieldCheck className="w-8 h-8" />,
      link: "/services#web-security",
      linkText: "Secure Your Digital Assets",
      features: [
        "Vulnerability Assessment",
        "Security Audits",
        "Compliance",
        "Data Protection",
      ],
    },
    {
      title: "Custom Software",
      description:
        "We develop tailor-made software solutions designed specifically for your unique business challenges.",
      icon: <Code className="w-8 h-8" />,
      link: "/services#custom-software",
      linkText: "Discuss Your Requirements",
      features: [
        "Bespoke Solutions",
        "Enterprise Software",
        "Legacy Modernization",
        "Workflow Automation",
      ],
    },
    {
      title: "SEO & Analytics",
      description:
        "We optimize your digital presence to improve visibility, traffic, and conversion rates.",
      icon: <Globe className="w-8 h-8" />,
      link: "/services#seo-analytics",
      linkText: "Boost Your Online Presence",
      features: [
        "SEO Optimization",
        "Performance Tracking",
        "Conversion Analysis",
        "Growth Strategies",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-gray-900 to-blue-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            SERVICES
          </motion.span>
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive digital solutions to help your business thrive
          </motion.p>
        </div>

        {/* Service Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 p-3 bg-blue-500/20 rounded-lg w-fit">
                  <div className="text-blue-300 group-hover:text-blue-200 transition-colors">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-blue-100/80 mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-blue-200/70"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mt-auto"
                >
                  <a
                    href={service.link}
                    className="inline-flex items-center text-blue-300 hover:text-blue-200 font-medium transition-colors"
                  >
                    {service.linkText}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="/services"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/30 hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
