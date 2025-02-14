import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCloud,
} from "react-icons/fa";

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-blue-600 mb-12 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Expertise
        </motion.h2>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* Service 1: Web Development */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center mb-6">
              <FaLaptopCode className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Web Development
            </h3>
            <p className="text-gray-600 mb-6">
              We build highly interactive, fast, and responsive websites
              tailored to meet your business needs.
            </p>
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-semibold underline"
            >
              Let's Build Together
            </a>
          </motion.div>

          {/* Service 2: Mobile App Development */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex justify-center items-center mb-6">
              <FaMobileAlt className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Mobile App Development
            </h3>
            <p className="text-gray-600 mb-6">
              We design user-friendly mobile apps for iOS and Android that cater
              to your customers' needs and enhance engagement.
            </p>
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-semibold underline"
            >
              Start Your App Journey
            </a>
          </motion.div>

          {/* Service 3: UI/UX Design */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex justify-center items-center mb-6">
              <FaPaintBrush className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              UI/UX Design
            </h3>
            <p className="text-gray-600 mb-6">
              We create intuitive and visually stunning designs that enhance
              user experience and streamline navigation.
            </p>
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-semibold underline"
            >
              Craft a Beautiful Experience
            </a>
          </motion.div>
          {/* Service 5 */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex flex-col justify-center items-center mb-6">
              <div className="text-blue-600 text-4xl mb-6">
                <FaCloud className="mr-2" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                Web Hosting
              </h4>
              <p className="text-gray-600">
                We provide secure and scalable cloud infrastructure solutions
                for your business.
              </p>
              <a
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-semibold underline mt-6"
              >
                Explore Cloud Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
