import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaMicrosoft } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-cyan-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-6">Feel free to reach out through the platforms below:</p>
        <div className="flex justify-center space-x-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fayez-khan-24faz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Fayez-2403"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <FaGithub />
          </a>

          {/* Email (Gmail/Outlook, etc.) */}
          <a
            href="mailto:fayez@thirdeyedata.ai"
            className="text-2xl hover:text-red-400"
          >
            <FaEnvelope />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/techno_aid.plus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-pink-400"
          >
            <FaInstagram />
          </a>

          {/* Twitter (formerly X) */}
          <a
            href="https://x.com/FayezKh70409159"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400"
          >
            <FaTwitter />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@fayezkhan9394"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-red-600"
          >
            <FaYoutube />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6386313416" // Replace with your WhatsApp phone number
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-green-400"
          >
            <FaWhatsapp />
          </a>

          {/* Outlook (same as email for now, can use FaMicrosoft for the Outlook logo) */}
          <a
            href="mailto:fayez@thirdeyedata.ai" // Use the same email or an Outlook-specific link if needed
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500"
          >
            <FaMicrosoft />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
