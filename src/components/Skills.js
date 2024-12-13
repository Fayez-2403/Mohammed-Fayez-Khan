import React from "react";

const Skills = () => {
  const skills = [
    { name: "C++ | JavaScript | HTML | CSS | TypeScript | C | Python | GoLang", percentage: 85 },
    { name: "Bootstrap | React.js | Node.js | Express | JQuery | Gofr | BERTopic", percentage: 75 },
    { name: "Git | GitHub | Jupyter | VS Code | Google Colab | Postman", percentage: 65 },
    { name: "AWS | MySQL | MongoDB | Firebase", percentage: 60 },
  ];

  return (
    <section id="skills" className="bg-blue-300 py-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-black via-gray-800 to-white bg-clip-text text-transparent">
          MY SKILLS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Paragraph Write-Up */}
          <div className="text-blue-900">
            <h3 className="text-2xl font-bold mb-4">My Creative Skills & Experiences</h3>
            <p className="text-lg font-bold leading-relaxed mb-6" >
              I am a passionate learner, constantly exploring new fields and gaining expertise in diverse technologies. My journey includes front-end development with HTML, CSS, and Bootstrap, as well as full-stack development using MERN. Currently, I am delving into Flutter and other advanced tools like Git and Linux.
            </p>
            <p className="text-lg font-bold leading-relaxed">
              I program in multiple languages, including C++, JavaScript, TypeScript, Python, and GoLang. Additionally, I have hands-on experience with modern databases like MySQL, MongoDB, and Firebase, along with cloud services like AWS.
            </p>
          </div>

          {/* Right Column - Skills Card */}
          <div className="bg-gray-800 bg-opacity-20 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-6 text-blue-900 text-center">
              Technical Proficiencies
            </h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-blue-900 font-bold">{skill.name}</span>
                  <span className="text-blue-900 font-bold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div
                    className="bg-blue-800 h-4 rounded-full transition-width duration-300"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
