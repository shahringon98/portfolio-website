import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import resumeData from './data/resumeData.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import SoftwareSkills from './components/SoftwareSkills.jsx';
import Publications from './components/Publications.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const { personalInfo, education, experience, skills, softwareSkills, publications } = resumeData;

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col">
      {/* Navigation Header */}
      <Navbar personalInfo={personalInfo} />

      {/* Main Content Area with Framer Motion Page Transition */}
      <AnimatePresence mode="wait">
        <motion.main
          key="main-content"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
        >
          {/* Hero Section */}
          <Hero personalInfo={personalInfo} />

          {/* Experience Section */}
          <Experience experience={experience} />

          {/* Education Section */}
          <Education education={education} />

          {/* Domain Skills Section */}
          <Skills skills={skills} />

          {/* Software & Technical Skills Section */}
          <SoftwareSkills softwareSkills={softwareSkills} />

          {/* Publications Section */}
          <Publications publications={publications} />

          {/* Contact Section */}
          <Contact personalInfo={personalInfo} />
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/60 py-8 px-4 sm:px-6 text-center text-xs sm:text-sm text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            &copy; {new Date().getFullYear()} <span className="font-semibold text-slate-300">{personalInfo.name}</span>. All rights reserved.
          </div>
          <div className="flex gap-4 text-xs text-slate-400">
            <span>Ministry of Finance Policy Advisor</span>
            <span>•</span>
            <span>Ph.D. Economics</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
