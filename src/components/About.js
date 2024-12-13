import React from 'react';
import logo from "../assets/logo.JPG"; // Ensure this path is correct

const About = () => {
  return (
    <section
      id="about"
      className="bg-blue-300 py-20" // Solid blue background
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-4xl font-extrabold mb-6 text-black font-playfair"
        >
          ABOUT ME
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center bg-opacity-40 bg-blue-950 p-6 md:p-10 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          {/* Profile Picture */}
          <div className="logo-container mb-4 md:mb-0 md:mr-8">
            <img
              src={logo}
              alt="Mohammad Fayez Khan"
              className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-md hover:scale-105 transition-transform duration-300"
              onError={(e) => (e.target.src = "https://via.placeholder.com/150")} // Fallback image
            />
          </div>

          {/* About Text */}
          <div className="text-left text-gray-800 hover:text-blue-100 font-bold">
            <p className="text-lg leading-relaxed">
              Hello! I’m Mohammad Fayez Khan, a software developer specializing in building
              intuitive and scalable web applications. Currently pursuing a Bachelor’s in
              Electronics and Communication Engineering at Jaypee Institute of Information Technology.
            </p>
            <p className="text-lg mt-4">
              With expertise in React.js, Node.js, and modern tools like Tailwind CSS, I strive to
              create impactful solutions that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

