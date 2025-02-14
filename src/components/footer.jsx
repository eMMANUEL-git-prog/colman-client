import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCodeBranch,
  FaBook,
  FaBriefcase,
  FaLightbulb,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white overflow-hidden">
      <div className="container p-4 sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
        {/* Contact Info */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-4 uppercase">Contact Us</h3>
          <div className="mb-3 flex items-center">
            <FaMapMarkerAlt className="text-blue-500 mr-2" />
            <p>Eldoret, Kenya</p>
          </div>
          <div className="mb-3 flex items-center">
            <FaPhone className="text-blue-500 mr-2" />
            <a href="tel:+1234567890" className="hover:text-blue-400">
              +1 (234) 567-890
            </a>
          </div>
          <div className="mb-3 flex items-center">
            <FaEnvelope className="text-blue-500 mr-2" />
            <a href="mailto:colman@company.com" className="hover:text-blue-400">
              colman@company.com
            </a>
          </div>
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block mt-3"
          >
            Get in Touch
          </a>
        </div>

        {/* Quick Links */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-4 uppercase">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-blue-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Tech Solutions */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-4 uppercase">Tech Solutions</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaCodeBranch className="text-blue-500 mr-2" />
              <a href="/opensource" className="hover:text-blue-400">
                Open Source Contributions
              </a>
            </li>
            <li className="flex items-center">
              <FaBook className="text-blue-500 mr-2" />
              <a href="/docs" className="hover:text-blue-400">
                API Documentation
              </a>
            </li>
            <li className="flex items-center">
              <FaLightbulb className="text-blue-500 mr-2" />
              <a href="/blog" className="hover:text-blue-400">
                Tech Blog
              </a>
            </li>
            <li className="flex items-center">
              <FaBriefcase className="text-blue-500 mr-2" />
              <a href="/careers" className="hover:text-blue-400">
                Join Our Team
              </a>
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-4 uppercase">Why Choose Us?</h3>
          <ul className="space-y-2">
            <li>🚀 Cutting-Edge Solutions</li>
            <li>👨‍💻 Experienced Development Team</li>
            <li>🔒 Secure & Scalable Tech Stacks</li>
            <li>⏳ 24/7 Support & Maintenance</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="flex justify-center space-x-4 pt-6">
            <FaFacebook className="text-3xl text-blue-700 hover:scale-90 cursor-pointer" />
            <FaInstagram className="text-3xl text-red-500 hover:scale-90 cursor-pointer" />
            <FaTwitter className="text-3xl text-blue-400 hover:scale-90 cursor-pointer" />
            <FaYoutube className="text-3xl text-red-600 hover:scale-90 cursor-pointer" />
            <FaGithub className="text-3xl text-gray-600 hover:scale-90 cursor-pointer" />
          </div>
          <div className="text-center py-6">
            <p className="text-sm font-bold">
              © 2025 by Colman. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
