import React, { Suspense } from 'react';
import resumeData from './data/resumeData';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load non-critical sections for performance
const About = React.lazy(() => import('./components/About'));
const Experience = React.lazy(() => import('./components/Experience'));
const Education = React.lazy(() => import('./components/Education'));
const Skills = React.lazy(() => import('./components/Skills'));
const Publications = React.lazy(() => import('./components/Publications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  const Loader = () => (
    <div className="flex justify-center items-center h-32">
      <div className="w-8 h-8 border-4 border-accent-cyan border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="min-h-screen selection:bg-accent-cyan/30 selection:text-accent-cyan">
      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero data={resumeData.personalInfo} />
        
        <Suspense fallback={<Loader />}>
          <About data={{ ...resumeData.personalInfo, experience: resumeData.experience }} />
          <Experience data={{ experience: resumeData.experience }} />
          <Education data={{ education: resumeData.education }} />
          <Skills data={{ skills: resumeData.skills, softwareSkills: resumeData.softwareSkills }} />
          <Publications data={{ publications: resumeData.publications }} />
          <Contact data={resumeData.personalInfo} />
        </Suspense>
      </main>
      
      <Footer data={resumeData.personalInfo} />
    </div>
  );
}

export default App;
