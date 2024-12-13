import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogs = [
    {
      id: "react-introduction",
      title: "Introduction to React.js",
      description: "Learn the basics of React.js and how to get started with this popular library.",
    },
    {
      id: "node-introduction",
      title: "Understanding Node.js",
      description: "Dive deep into Node.js and build scalable backend applications.",
    },
    {
      id: "tailwind-getting-started",
      title: "Getting Started with Tailwind CSS",
      description: "Learn how to style your web projects efficiently using Tailwind CSS.",
    },
    {
      id: "git-github-exploration",
      title: "Exploring Git and GitHub",
      description: "Master version control and collaboration with Git and GitHub.",
    },
    {
      id: "blockchain-introduction",
      title: "Introduction to Blockchain",
      description: "An overview of blockchain technology and its potential applications.",
    },
  ];

  return (
    <section id="blogs" className="bg-blue-300 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">MY BLOGS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="text-blue-500 font-semibold underline hover:text-blue-700 transition"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

