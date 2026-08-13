import React, { Suspense } from 'react';
import resumeData from './data/resumeData';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const About = React.lazy(() => import('./components/About'));
const Experience = React.lazy(() => import('./components/Experience'));
const Education = React.lazy(() => import('./components/Education'));
const Skills = React.lazy(() => import('./components/Skills'));
const Publications = React.lazy(() => import('./components/Publications'));
const Contact = React.lazy(() => import('./components/Contact'));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-accent-cyan border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen bg-navy-900">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero data={resumeData.personalInfo} />
        <Suspense fallback={<SectionLoader />}>
          <About data={resumeData.personalInfo} />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Experience data={resumeData.experience} />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Education
            education={resumeData.education}
            certifications={resumeData.certifications}
          />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills
            skills={resumeData.skills}
            softwareSkills={resumeData.softwareSkills}
          />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Publications
            publications={resumeData.publications}
            conferences={resumeData.conferencesAndPublications}
          />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact data={resumeData.personalInfo} />
        </Suspense>
      </main>
      <Footer data={resumeData.personalInfo} />
    </div>
  );
}

export default App;
