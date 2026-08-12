import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useScrollReveal, staggerContainer, staggerItem } from '../hooks/useScrollReveal';

const Experience = ({ data }) => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={staggerItem} className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 whitespace-nowrap">
              <span className="text-accent-cyan font-mono text-xl md:text-2xl mr-2">02.</span>
              Where I've Worked
            </h2>
            <div className="h-px bg-slate-700 w-full" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-slate-700" />
            
            <div className="space-y-12">
              {data.experience.map((exp, idx) => (
                <motion.div 
                  key={idx} 
                  variants={staggerItem}
                  className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-8px] md:left-1/2 transform md:-translate-x-1/2 mt-6 w-4 h-4 rounded-full bg-accent-cyan ring-4 ring-navy-900 z-10" />
                  
                  {/* Content Box */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="glass-card p-8 group">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-accent-cyan transition-colors">{exp.role}</h3>
                        <span className="text-sm font-mono text-accent-indigo hidden md:block">{exp.period}</span>
                      </div>
                      
                      <div className="text-lg font-medium text-slate-300 mb-4">{exp.organization}</div>
                      <span className="text-sm font-mono text-accent-indigo mb-6 inline-block md:hidden">{exp.period}</span>
                      
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start text-slate-400 text-sm">
                            <span className="text-accent-cyan mr-2 mt-1">▹</span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
