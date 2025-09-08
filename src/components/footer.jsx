import {
  Facebook,
  Github,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  GitBranch,
  BookOpen,
  Briefcase,
  Lightbulb,
  Rocket,
  Code2,
  Shield,
  Clock,
  Send,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center group">
                <MapPin className="text-blue-500 mr-2 h-5 w-5 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <p>Eldoret, Kenya</p>
              </div>
              <div className="flex items-center group">
                <Phone className="text-blue-500 mr-2 h-5 w-5 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-blue-400 transition-colors text-sm"
                >
                  +254 745 733 370/+254 795 198 141
                </a>
              </div>
              <div className="flex items-center group">
                <Mail className="text-blue-500 mr-2 h-5 w-5 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <a
                  href="mailto:colman@company.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  colman@company.com
                </a>
              </div>
              <div>
                <a
                  href="/contact"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block mt-3 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* colman */}
          <div>
            <div className="flex items-end space-x-2 text-lg font-bold mb-4 uppercase border-b border-gray-700 bg-gray-200">
              <img src="/new_logo2.png" alt="logo" className="h-8" />
            </div>
            <ul className="space-y-2">
              <li className="flex items-center group">
                <GitBranch className="text-blue-500 mr-2 h-4 w-4 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <a
                  href="/opensource"
                  className="hover:text-blue-400 transition-colors group-hover:translate-x-1 inline-block duration-200"
                >
                  Open Source Contributions
                </a>
              </li>
              <li className="flex items-center group">
                <BookOpen className="text-blue-500 mr-2 h-4 w-4 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <a
                  href="/docs"
                  className="hover:text-blue-400 transition-colors group-hover:translate-x-1 inline-block duration-200"
                >
                  API Documentation
                </a>
              </li>
              <li className="flex items-center group">
                <Lightbulb className="text-blue-500 mr-2 h-4 w-4 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <a
                  href="/blog"
                  className="hover:text-blue-400 transition-colors group-hover:translate-x-1 inline-block duration-200"
                >
                  Tech Blog
                </a>
              </li>
              <li className="flex items-center group">
                <Briefcase className="text-blue-500 mr-2 h-4 w-4 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <a
                  href="/careers"
                  className="hover:text-blue-400 transition-colors group-hover:translate-x-1 inline-block duration-200"
                >
                  Join Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup - New Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase border-b border-gray-700 pb-2">
              Why choose us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Rocket className="text-blue-500 mr-2 h-4 w-4 flex-shrink-0" />
                <span>Cutting-Edge Solutions</span>
              </li>
              <li className="flex items-center">
                <Code2 className="text-blue-500 mr-2 h-4 w-4 flex-shrink-0" />
                <span>Experienced Development Team</span>
              </li>
              <li className="flex items-center">
                <Shield className="text-blue-500 mr-2 h-4 w-4 flex-shrink-0" />
                <span>Secure & Scalable Tech Stacks</span>
              </li>
              <li className="flex items-center">
                <Clock className="text-blue-500 mr-2 h-4 w-4 flex-shrink-0" />
                <span>24/7 Support & Maintenance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:opacity-80 transition-opacity transform hover:scale-110 duration-200"
            >
              <Facebook className="h-6 w-6 text-blue-500" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:opacity-80 transition-opacity transform hover:scale-110 duration-200"
            >
              <Instagram className="h-6 w-6 text-pink-500" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:opacity-80 transition-opacity transform hover:scale-110 duration-200"
            >
              <Twitter className="h-6 w-6 text-blue-400" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:opacity-80 transition-opacity transform hover:scale-110 duration-200"
            >
              <Youtube className="h-6 w-6 text-red-600" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="hover:opacity-80 transition-opacity transform hover:scale-110 duration-200"
            >
              <Github className="h-6 w-6 text-gray-400" />
            </a>
          </div>
          <div className="text-center pb-4">
            <p className="text-sm">
              © {currentYear} by Colman. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
