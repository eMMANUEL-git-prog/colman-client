import React, { useState } from "react";

const blogPost = {
  title: "The Ultimate Guide to API Documentation",
  date: "February 9, 2025",
  author: "Collins Njogu",
  summary:
    "API documentation is crucial for developers to understand how to use and integrate with an API. Learn best practices and key components.",
  content: `
  ## What is API Documentation?
  API documentation provides detailed information about how developers can interact with an API. It typically includes endpoints, request formats, authentication methods, and example responses.
  
  ## Why is API Documentation Important?
  - **Clarity & Ease of Use**: Helps developers integrate APIs without confusion.
  - **Reduces Support Requests**: A well-documented API means fewer questions and support tickets.
  - **Improves Adoption**: Developers prefer APIs with clear documentation over poorly documented ones.
  
  ## Key Components of API Documentation
  - **Authentication**: Explains how to authenticate API requests (e.g., API keys, OAuth tokens).
  - **Endpoints & Methods**: Lists available API routes and HTTP methods (GET, POST, PUT, DELETE).
  - **Request & Response Examples**: Provides sample requests and responses for better understanding.
  - **Error Handling**: Details error codes and their meanings.
  - **Rate Limits & Usage**: Defines request limits and best practices for API consumption.
  
  ## Best Practices for Writing API Documentation
  1. **Keep it Simple & Clear**: Use plain language and avoid unnecessary complexity.
  2. **Provide Code Examples**: Show real-world usage examples in multiple programming languages.
  3. **Keep it Up-to-Date**: Ensure documentation reflects the latest API changes.
  4. **Use Interactive Docs**: Tools like Swagger and Postman help users test API requests directly.
  `,
};

const apiDocBlog = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6 mt-12">
          {blogPost.title}
        </h1>
        <p className="text-gray-500 text-sm text-center mb-4">
          {blogPost.date} • {blogPost.author}
        </p>
        <p className="text-lg text-gray-700 text-center mb-6">
          {blogPost.summary}
        </p>
        <hr className="border-gray-300 mb-6" />
        <div className="text-gray-800 leading-relaxed">
          {expanded ? (
            blogPost.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph.startsWith("##") ? (
                  <span className="block text-2xl font-semibold text-blue-700 mt-6">
                    {paragraph.replace("##", "")}
                  </span>
                ) : (
                  paragraph
                )}
              </p>
            ))
          ) : (
            <p className="text-gray-700 mb-4">{blogPost.summary}</p>
          )}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-white bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-md text-sm font-semibold transition duration-200"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default apiDocBlog;
