import React from "react";
import btechLogo from "../assets/jiitlogo.png"; // Replace with actual logo paths
import intermediateLogo from "../assets/highschool.jpeg";
import highschoolLogo from "../assets/highschool.jpeg";

const education = [
  {
    level: "Bachelor of Technology (B.Tech)",
    institution: "Jaypee Institute of Information Technology, Noida",
    duration: "September 2020 – July 2024",
    description:
      "Specialized in Electronics and Communication Engineering. Achieved hands-on project experience.",
    logo: btechLogo,
  },
  {
    level: "Intermediate (XII - CBSE)",
    institution: "Sunbeam English School, Varanasi",
    duration: "2017 – 2019",
    description:
      "Secured 80.4% in CBSE Board. Focused on core science subjects with practical exposure.",
    logo: intermediateLogo,
  },
  {
    level: "High School (X - CBSE)",
    institution: "Sunbeam English School, Varanasi",
    duration: "2015 – 2017",
    description:
      "Achieved 92.4% in CBSE Board. Built a strong foundation in mathematics and science.",
    logo: highschoolLogo,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-blue-300 py-20" // Solid blue background
    >
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-black via-gray-800 to-white bg-clip-text text-transparent font-playfair">
          EDUCATION
        </h2>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-center bg-opacity-40 bg-blue-950 p-8 md:p-12 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Institution Logo */}
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
                <img
                  src={edu.logo}
                  alt={`${edu.institution} Logo`}
                  className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-md hover:scale-110 transition-transform duration-300"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/150") // Fallback image
                  }
                />
              </div>

              {/* Education Details */}
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-white mb-3">{edu.level}</h3>
                <p className="text-lg text-gray-300 mb-1">{edu.institution}</p>
                <p className="text-sm text-gray-400 mb-4">{edu.duration}</p>
                <p className="text-gray-200 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
