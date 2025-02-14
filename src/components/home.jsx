import { motion } from "framer-motion";
import backgroundImage from "../assets/image0.jpg";
import Portfolio from "./portfolio";
import Services from "./services";
import About from "./about";
import TechStack from "./blog";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white w-full"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(" +
            backgroundImage +
            ")",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800 opacity-80"></div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }} // ✅ Reduced duration for better effect
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            Empowering Your Digital Success with{" "}
            <span className="text-blue-400">Colman</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Colman creates high-performing websites and apps to help your
            business thrive in the digital world.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-lg transition hover:scale-105"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-6 left-6 hidden lg:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="bg-blue-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full blur-2xl opacity-40 animate-bounce"></div>
        </motion.div>
        <motion.div
          className="absolute bottom-6 right-6 hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="bg-purple-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full blur-2xl opacity-50 animate-pulse"></div>
        </motion.div>
      </section>
      <Services />
      <TechStack />
      <About />
      {/* <Portfolio /> */}
    </main>
  );
};

export default Home;
