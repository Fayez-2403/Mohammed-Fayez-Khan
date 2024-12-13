import React from 'react';

const projects = [
  {
    name: "Genius AI App",
    technologies: "Next.js 13, React, Prisma, Stripe",
    description: "Developed an AI-powered app with features like chatbot, image generation, and payments.",
    link: "https://genius-ai-app.vercel.app/",
  },
  {
    name: "Voice-Powered Expense Tracker",
    technologies: "React.js, Speechly, Context API",
    description: "A voice-controlled app for tracking expenses with a user-friendly interface.",
    link: "https://speechlyy-expense-tracker-react.netlify.app/",
  },
  {
    name: "Career’s Way Right",
    technologies: "MERN, TensorFlow, NLP",
    description: "A learning platform offering AI-driven course recommendations and collaborative features.",
    link: "https://github.com/Fayez-2403/Career-s-Way-Right/tree/main",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-blue-300 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 text-sm">{project.technologies}</p>
              <p className="text-gray-700 mt-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-500 hover:text-blue-700"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
