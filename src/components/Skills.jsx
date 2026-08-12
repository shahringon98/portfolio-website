import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal, staggerContainer, staggerItem } from '../hooks/useScrollReveal';

const Skills = ({ data }) => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="skills" className="py-24 relative">
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
              <span className="text-accent-cyan font-mono text-xl md:text-2xl mr-2">04.</span>
              Skills & Expertise
            </h2>
            <div className="h-px bg-slate-700 w-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Domain Skills */}
            <motion.div variants={staggerItem} className="space-y-10">
              <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center">
                <span className="text-accent-violet mr-3">✦</span> Domain Expertise
              </h3>
              
              {data.skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h4 className="text-lg font-medium text-slate-300 mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((item, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 rounded-full text-sm font-medium bg-navy-800 border border-slate-700 text-slate-300 hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Software Skills */}
            <motion.div variants={staggerItem}>
              <h3 className="text-2xl font-bold text-slate-200 mb-8 flex items-center">
                <span className="text-accent-cyan mr-3">✦</span> Software & Tools
              </h3>
              
              <div className="space-y-6">
                {data.softwareSkills.map((skill, idx) => {
                  const percentage = skill.level === 'Expert' ? 95 : skill.level === 'Advanced' ? 80 : 65;
                  
                  return (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-xs font-mono text-accent-indigo">{skill.level}</span>
                      </div>
                      <div className="h-2 w-full bg-navy-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-accent-indigo to-accent-cyan rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse-slow"></div>
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
