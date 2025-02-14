import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import colaman from "../assets/colman.jpg";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-blue-50 to-white"
      ref={ref} 
    >
      <div className="max-w-screen-xl mx-auto px-6 text-center">
      
        <motion.h2
          className="text-3xl lg:text-5xl font-extrabold text-blue-600 mb-12 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
          }}
          transition={{ duration: 1 }}
        >
          About Colman Technologies
        </motion.h2>

        
        <div className="lg:flex lg:justify-between items-center space-y-8 lg:space-y-0">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : -100,
            }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Colman Technologies, we specialize in creating innovative,
              cutting-edge digital solutions that propel businesses forward. We
              believe in empowering our clients through technology, delivering
              products that are not only functional but also beautifully
              designed and user-centric.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team consists of dedicated professionals with expertise in web
              development, mobile applications, and UI/UX design. We're
              committed to transforming your ideas into reality and driving
              success.
            </p>
          </motion.div>

        
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : 100,
            }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img
              src={colaman}
              alt="Team photo"
              className="rounded-lg shadow-xl transition-transform transform hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <motion.h3
            className="text-3xl font-semibold text-blue-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{
              opacity: inView ? 1 : 0,
            }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Our Core Values
          </motion.h3>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                Innovation
              </h4>
              <p className="text-gray-600">
                We foster a culture of creativity and forward-thinking,
                constantly evolving to meet the demands of the future.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                Collaboration
              </h4>
              <p className="text-gray-600">
                We believe in the power of teamwork and open communication to
                achieve the best results for our clients.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                Integrity
              </h4>
              <p className="text-gray-600">
                We value honesty, transparency, and delivering on our promises.
                Trust is the foundation of our client relationships.
              </p>
            </motion.div>
          </div>
        </div>

        
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{
            opacity: inView ? 1 : 0,
          }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <a
            href="/contact"
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-lg text-lg font-semibold shadow-lg transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
