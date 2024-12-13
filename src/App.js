import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Education from "./components/Education";
import BlogPage from "./components/BlogPage";
import HireMe from "./components/HireMe"; // Component for Hire Me section
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <main className="min-h-screen overflow-y-auto">
          <Routes>
            {/* Main Sections */}
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Education />
                  <Skills />
                  <Experience />
                  <Projects />
                  <HireMe />
                  <Blogs />
                  <Contact />
                </>
              }
            />

            {/* Blog Routes */}
            <Route path="/blog/:id" element={<BlogPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
