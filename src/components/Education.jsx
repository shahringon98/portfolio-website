import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useScrollReveal, staggerContainer, staggerItem } from '../hooks/useScrollReveal';

const Education = ({ data }) => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={staggerItem} className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 whitespace-nowrap">
              <span className="text-accent-cyan font-mono text-xl md:text-2xl mr-2">03.</span>
              Education
            </h2>
            <div className="h-px bg-slate-700 w-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.education.map((edu, idx) => (
              <motion.div 
                key={idx} 
                variants={staggerItem}
                className="relative group h-full"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-cyan rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                
                <div className="relative h-full glass-card p-8 flex flex-col bg-navy-800">
                  <div className="w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-100 mb-2">{edu.degree}</h3>
                  <div className="text-accent-indigo font-medium mb-1">{edu.institution}</div>
                  <div className="text-sm font-mono text-slate-400 mb-4">{edu.year}</div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
