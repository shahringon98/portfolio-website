import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = ({ data }) => {
  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-10">
        
        {/* Text Content */}
        <div className="w-full md:w-3/5 text-left mb-12 md:mb-0">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-accent-cyan font-mono mb-4 text-lg"
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold text-slate-100 mb-4"
          >
            {data.name}.
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-slate-400 mb-6"
          >
            {data.title}.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-slate-400 max-w-xl text-lg mb-10 leading-relaxed"
          >
            {data.bio}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <a href="/resume.pdf" target="_blank" className="btn-primary">
              Download CV
            </a>
            <Link to="contact" smooth={true} duration={500} className="btn-outline cursor-pointer">
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Visual Element / Orbit */}
        <div className="w-full md:w-2/5 flex justify-center items-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
          >
            {/* Outer Orbit */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-accent-cyan/30"
            />
            {/* Inner Orbit */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-accent-indigo/40"
            />
            {/* Center Sphere */}
            <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-accent-indigo to-accent-cyan shadow-[0_0_50px_rgba(100,255,218,0.3)] flex items-center justify-center text-4xl font-bold text-white z-10">
              {data.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
            </div>
            
            {/* Floating Dots */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-4 h-4 rounded-full bg-accent-violet shadow-[0_0_10px_rgba(139,92,246,0.6)]"
            />
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-12 right-12 w-3 h-3 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(100,255,218,0.6)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
