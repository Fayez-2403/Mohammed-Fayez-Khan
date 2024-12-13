import React from "react";

const experiences = [
  {
    role: "React Developer",
    company: "Thirdeye Data, Kolkata",
    duration: "September 2024 – Present",
    description: [
      "Contributed to 7+ projects, including a Microsoft PowerApps project.",
      "Developed using React.js, Redux, and Node.js.",
      "Integrated NLP with spaCy and TensorFlow for enhanced data handling.",
      "Optimized API integrations, backend performance, and frontend-backend communication.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Oasis Infobyte, Noida",
    duration: "June 2023 – July 2023",
    description: [
      "Built a Full Stack Pizza Delivery App with an intuitive Admin Dashboard using React.js.",
      "Integrated voice commands for an Expense Tracker app using Speechly.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-blue-300 py-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-black via-gray-800 to-white bg-clip-text text-transparent">
          EXPERIENCE
        </h2>

        {/* Transparent Card Container */}
        <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 bg-blue-950 bg-opacity-20 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-semibold text-blue-950">{exp.role}</h3>
                <p className="text-black font-semibold">{exp.company}</p>
                <p className="text-black font-semibold text-sm">{exp.duration}</p>
                <ul className="mt-4 list-disc font-semibold pl-5 text-black">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
