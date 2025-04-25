import React, { useState } from "react";
import cloudHosting from "../assets/cloud.jpg";
import blockchain from "../assets/blockchain.jpg";
import aiTech from "../assets/artificial.jpg";
import webDev from "../assets/webdev.jpg";
import uiux from "../assets/xuui.jpg";

const blogPosts = [
  {
    id: 4,
    title: "The Future of Web Development: Trends & Technologies in 2025",
    date: "January 20, 2025",
    author: "Collins Njogu",
    summary:
      "Web development is evolving rapidly with new frameworks, tools, and best practices. Learn what’s next for the industry.",
    content:
      "Web development is constantly shifting, with technologies like React, Next.js, and AI-driven development gaining traction. The rise of serverless architectures and JAMstack has changed how developers build scalable web applications. Progressive Web Apps (PWAs) are becoming a standard for providing app-like experiences on the web. Keeping up with the latest tools and methodologies is essential for developers to stay ahead in this fast-paced industry.",
    image: webDev,
  },
  {
    id: 5,
    title: "UI/UX Design: Creating Seamless User Experiences in 2025",
    date: "January 15, 2025",
    author: "Emmanuel Ambundo",
    summary:
      "Great UI/UX design is at the core of successful digital products. Explore the latest design trends shaping the future.",
    content:
      "User experience and interface design have taken center stage in digital product development. With the adoption of dark mode, neomorphic design, and AI-assisted UX research, designers are focusing on accessibility, inclusivity, and performance optimization. The use of motion UI and micro-interactions enhances user engagement, making applications feel more intuitive and interactive. In 2025, design thinking continues to play a vital role in shaping the way we interact with digital products.",
    image: uiux,
  },
  {
    id: 1,
    title:
      "The Rise of AI: How Artificial Intelligence is Transforming Industries",
    date: "February 9, 2025",
    author: "Collins Njogu",
    summary:
      "AI is shaping the present, from healthcare to finance. Discover how it’s revolutionizing industries and what the future holds.",
    content:
      "AI is now an essential part of various industries. In healthcare, AI assists in diagnosing diseases more accurately. In finance, predictive analytics enhance decision-making. Companies investing in AI research are seeing major breakthroughs in natural language processing and computer vision. The evolution of AI will continue, raising questions about ethics, automation, and job displacement.",
    image: aiTech,
  },
  {
    id: 2,
    title:
      "Web3 and Blockchain: The Future of Decentralization & Mobile Development",
    date: "February 5, 2025",
    author: "Emmanuel Ambundo",
    summary:
      "Web3 is redefining the internet, moving away from centralized control to blockchain-powered solutions. Mobile app developers are also leveraging blockchain.",
    content:
      "The transition from Web2 to Web3 is transforming industries. Blockchain technology ensures transparent transactions and secure data management. Decentralized finance (DeFi) and NFTs are emerging as significant components of the Web3 ecosystem, offering new financial models and digital ownership structures. Mobile developers are integrating blockchain into applications to enhance security and transparency, opening new possibilities for app security and monetization.",
    image: blockchain,
  },
  {
    id: 3,
    title: "Cybersecurity in 2025: New Threats, Cloud Hosting & Solutions",
    date: "January 29, 2025",
    author: "Emmanuel Ambundo",
    summary:
      "Cyber threats are evolving rapidly. Learn about the latest risks and why cloud hosting security is a priority in 2025.",
    content:
      "Cybersecurity remains a top concern as cybercriminals develop more sophisticated attack strategies. The rise of AI in hacking presents new challenges, requiring businesses to adopt zero-trust security models. Cloud security and endpoint protection are becoming crucial in an era where remote work is the norm. Cloud hosting is particularly vulnerable to data breaches and ransomware attacks. Companies must implement strong encryption, multi-factor authentication, and regular security audits to ensure their cloud environments remain safe.",
    image: cloudHosting,
  },
];

const TechBlog = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const toggleReadMore = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mt-20 mb-6">
          High Tech
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Stay updated with the latest trends, innovations, and discussions in
          the tech industry.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mb-3">
                  {post.date} • {post.author}
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {expandedPost === post.id ? post.content : post.summary}
                </p>
                <button
                  onClick={() => toggleReadMore(post.id)}
                  className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-semibold transition duration-200"
                >
                  {expandedPost === post.id ? "Show Less" : "Read More"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechBlog;
