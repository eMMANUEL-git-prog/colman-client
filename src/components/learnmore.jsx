import { motion } from "framer-motion";
import { FaCloud, FaCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const Learn = () => {
  return (
    <motion.div
      className="container mx-auto px-6 py-16 min-h-screen flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 my-10">
        Digital Solutions for Your Business
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
        Colman specializes in cutting-edge web and mobile solutions, UI/UX
        design, and cloud hosting to help your business thrive.
      </p>

      {/* Service Sections */}
      <div className="grid md:grid-cols-2 gap-8 mt-12 w-full max-w-4xl">
        {/* Web Development */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaCode className="text-blue-500 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Web Development
          </h2>
          <p className="text-gray-600 mt-2">
            We build scalable, high-performance websites using React, Next.js,
            and modern frameworks.
          </p>
        </motion.div>

        {/* Mobile App Development */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaMobileAlt className="text-green-500 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Mobile App Development
          </h2>
          <p className="text-gray-600 mt-2">
            We develop native & cross-platform mobile apps using React Native
            and Flutter.
          </p>
        </motion.div>

        {/* UI/UX Design */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaPaintBrush className="text-yellow-500 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">UI/UX Design</h2>
          <p className="text-gray-600 mt-2">
            Crafting user-centric, visually stunning designs that enhance
            digital experiences.
          </p>
        </motion.div>

        {/* Cloud Hosting & DevOps */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaCloud className="text-red-500 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Cloud Hosting & DevOps
          </h2>
          <p className="text-gray-600 mt-2">
            Secure, scalable cloud solutions and DevOps automation for seamless
            deployments.
          </p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.a
        href="/contact"
        className="mt-10 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
      >
        Partner with Us
      </motion.a>
    </motion.div>
  );
};

export default Learn;
