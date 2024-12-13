import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header"; // Include the Header component

const blogContent = {
  "react-introduction": {
    title: "Introduction to React.js",
    content: `
React.js is a popular JavaScript library developed by Facebook for building user interfaces. Its primary focus is on creating efficient and flexible front-end components that developers can use to design interactive web applications. React follows a component-based architecture, allowing developers to build reusable and self-contained components. These components can manage their state and can be easily composed to form complex user interfaces.

One of React's standout features is its virtual DOM, which enhances application performance by updating only the necessary parts of the user interface. Instead of directly interacting with the browser's DOM, React creates a lightweight copy of the DOM, compares it to the previous version, and updates only the changed elements. This approach makes React applications fast and responsive.

Another advantage of React is its declarative nature. Developers can define what the user interface should look like for a given state, and React takes care of updating the UI when the state changes. This simplifies the process of building dynamic and interactive web applications.

React also supports unidirectional data flow, ensuring that data changes in a predictable manner. With its component lifecycle methods, hooks, and an extensive ecosystem of libraries, React has become a go-to choice for front-end development.
    `,
  },
  "node-introduction": {
    title: "Understanding Node.js",
    content: `
Node.js is a runtime environment that allows developers to execute JavaScript code outside the browser. Built on Google Chrome's V8 JavaScript engine, Node.js enables developers to build fast and scalable network applications.

At its core, Node.js uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient. This design is particularly suited for data-intensive real-time applications, such as chat servers and streaming platforms.

Node.js offers a rich ecosystem of libraries and tools through its package manager, npm. Developers can leverage these modules to build server-side applications, APIs, command-line tools, and more.

One of Node.js's key features is its single-threaded nature. While it uses a single thread for the main event loop, it can handle multiple I/O operations concurrently by delegating them to worker threads. This makes Node.js highly efficient for handling simultaneous requests.

Overall, Node.js has revolutionized back-end development by enabling JavaScript to be used as a full-stack language. Its versatility, performance, and active community make it a valuable tool for modern software development.
    `,
  },
  "tailwind-getting-started": {
    title: "Getting Started with Tailwind CSS",
    content: `
Tailwind CSS is a utility-first CSS framework designed to make web development faster and more efficient. Unlike traditional CSS frameworks that provide pre-designed components, Tailwind offers a comprehensive set of utility classes that developers can use to build custom designs directly in their HTML.

One of the biggest advantages of Tailwind is its flexibility. Instead of overriding predefined styles, developers can compose their own designs by combining utility classes. For example, applying classes like 'bg-blue-500', 'text-white', and 'rounded-lg' to an element can quickly create a styled button without writing custom CSS.

Tailwind is also highly customizable. Developers can configure the framework to include custom colors, spacing, fonts, and more. Its configuration file allows teams to maintain a consistent design system across projects.

Another noteworthy feature of Tailwind is its "purge" functionality. This removes unused CSS from the production build, resulting in smaller file sizes and faster load times.

With its simplicity, adaptability, and performance benefits, Tailwind CSS has become a favorite among developers looking for a modern approach to styling web applications.
    `,
  },
  "git-github-exploration": {
    title: "Exploring Git and GitHub",
    content: `
Git is a version control system that allows developers to track changes to their codebase, collaborate effectively, and manage project versions. GitHub is a platform built on Git that provides additional tools for collaboration, code hosting, and project management.

With Git, developers can create repositories to organize their code. They can commit changes to track progress, create branches to experiment with new features, and merge branches to integrate features into the main project. Git's distributed nature allows each developer to have a full copy of the repository, ensuring redundancy and flexibility.

GitHub enhances Git's capabilities by offering an online platform to host repositories. It provides features like pull requests, where team members can review and discuss changes before merging them. GitHub Actions allow developers to automate workflows, such as running tests or deploying applications.

Together, Git and GitHub have become essential tools for modern software development, fostering collaboration, transparency, and efficiency in projects of all sizes.
    `,
  },
  "blockchain-introduction": {
    title: "Introduction to Blockchain",
    content: `
Blockchain is a distributed ledger technology that allows data to be securely stored across a network of computers. Each block in the blockchain contains a list of transactions, and these blocks are linked together in chronological order.

One of blockchain's key features is its immutability. Once data is recorded in a block, it cannot be altered without changing all subsequent blocks. This ensures data integrity and security.

Blockchain technology has gained widespread recognition for its role in powering cryptocurrencies like Bitcoin and Ethereum. However, its applications extend beyond finance. Blockchain is used in supply chain management, healthcare, voting systems, and more.

Smart contracts, another feature of blockchain, enable self-executing agreements without the need for intermediaries. This has opened up new possibilities for decentralized applications (DApps).

Despite its benefits, blockchain faces challenges such as scalability, energy consumption, and regulatory concerns. Nevertheless, its potential to revolutionize industries continues to drive innovation and adoption.
    `,
  },
};

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogContent[id];

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-red-500">Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-8 text-center">
          {blog.title}
        </h1>
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <p className="text-gray-800 leading-relaxed whitespace-pre-line text-lg">
            {blog.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
