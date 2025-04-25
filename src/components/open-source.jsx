import React from "react";

const OpenSourceBlog = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 md:px-12 lg:px-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-extrabold text-blue-900 mt-20 mb-6">
          Getting Started with Open Source Contributions 🚀
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Open-source is the backbone of modern tech, driving innovation and
          collaboration worldwide. Whether you're a beginner or an experienced
          developer, contributing to open-source is a great way to learn,
          network, and make an impact.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-900">
              Why Contribute? 💡
            </h2>
            <ul className="list-disc list-inside text-gray-700 mt-3 text-left">
              <li>Enhance Your Skills & Learn Best Practices</li>
              <li>Build an Impressive Developer Portfolio</li>
              <li>Collaborate & Network with Industry Experts</li>
              <li>Improve Software & Make a Global Impact</li>
              <li>Gain Recognition & Career Growth Opportunities</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-900">
              Where to Start? 🏁
            </h2>
            <p className="text-gray-700 mt-3">
              Explore beginner-friendly projects on:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <a
                  href="https://github.com/explore"
                  className="text-blue-600 hover:underline"
                >
                  GitHub Explore
                </a>
              </li>
              <li>
                <a
                  href="https://firstcontributions.github.io/"
                  className="text-blue-600 hover:underline"
                >
                  First Contributions
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MunGell/awesome-for-beginners"
                  className="text-blue-600 hover:underline"
                >
                  Awesome for Beginners
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 mt-8 text-left">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-900">
            How to Contribute? 🛠️
          </h2>
          <ol className="list-decimal list-inside text-gray-700 mt-3">
            <li>Find an open-source project that interests you.</li>
            <li>Fork the repository.</li>
            <li>
              Clone your fork:{" "}
              <code className="bg-gray-200 p-1 rounded">
                git clone https://github.com/YOUR_USERNAME/PROJECT_NAME.git
              </code>
            </li>
            <li>
              Create a new branch:{" "}
              <code className="bg-gray-200 p-1 rounded">
                git checkout -b my-new-feature
              </code>
            </li>
            <li>Make your changes (bug fixes, documentation, features).</li>
            <li>Commit and push your changes.</li>
            <li>Open a Pull Request on GitHub and get feedback!</li>
          </ol>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 mt-8 text-left">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-900">
            Top Open-Source Projects for Beginners 🌟
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <a
                href="https://github.com/facebook/react"
                className="text-blue-600 hover:underline"
              >
                React
              </a>{" "}
              - A JavaScript library for building UIs
            </li>
            <li>
              <a
                href="https://github.com/nodejs/node"
                className="text-blue-600 hover:underline"
              >
                Node.js
              </a>{" "}
              - JavaScript runtime for server-side apps
            </li>
            <li>
              <a
                href="https://github.com/tailwindlabs/tailwindcss"
                className="text-blue-600 hover:underline"
              >
                Tailwind CSS
              </a>{" "}
              - Utility-first CSS framework
            </li>
            <li>
              <a
                href="https://github.com/postgres/postgres"
                className="text-blue-600 hover:underline"
              >
                PostgreSQL
              </a>{" "}
              - Open-source relational database
            </li>
          </ul>
        </div>

        <div className="text-center mt-6">
          <p className="text-base sm:text-lg text-gray-700 font-semibold">
            Start today, learn along the way, and enjoy the journey. Happy
            coding! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceBlog;
