import React from "react";

const HireMe = () => {
  const documents = [
    {
      title: "My Resume",
      description: "View and download my professional resume.",
      link: "/assets/resume.pdf",
    },
    {
      title: "My Certificates",
      description: "Academic certifications from BTech, Intermediate, and High School.",
      files: [
        { name: "BTech Certificate", link: "/assets/btech_certificate.pdf" },
        { name: "Intermediate Certificate", link: "/assets/intermediate_certificate.pdf" },
        { name: "High School Certificate", link: "/assets/highschool_certificate.pdf" },
      ],
    },
    {
      title: "My Documents",
      description: "Personal documents for verification.",
      files: [
        { name: "Aadhar Card", link: "/assets/aadhar.pdf" },
        { name: "PAN Card", link: "/assets/PAN.pdf" },
        { name: "Bank Details", link: "/assets/FAYEZ_KHAN_CANCELLED_CHEQUE.pdf" },
      ],
    },
  ];

  return (
    <section id="hire-me" className="bg-blue-300 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-black">Hire Me</h2>
        <p className="text-center font-bold text-xl text-blue-950 mb-12">
          Frontend Developer | Full Stack Developer | Open to Opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-gray-400 bg-opacity-20 rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-950 mb-4">{doc.title}</h3>
              <p className="text-violet-950 mb-6">{doc.description}</p>

              {doc.files ? (
                <ul className="space-y-2">
                  {doc.files.map((file, idx) => (
                    <li key={idx}>
                      <a
                        href={file.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-green-950 underline"
                      >
                        {file.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-green-950 underline"
                >
                  View Document
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireMe;
