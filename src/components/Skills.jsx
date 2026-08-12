import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="relative min-h-screen flex items-center py-20 z-10 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Skills
        </motion.h2>

        {/* Professional Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Professional Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.skills?.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="text-slate-300 font-semibold">{skill.name}</p>
                  <span className="text-accent-cyan">{skill.level}%</span>
                </div>
                <div className="bg-slate-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                    className="h-full bg-gradient-to-r from-accent-cyan to-blue-400"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.softwareSkills?.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 text-center hover:border-accent-cyan/50 transition cursor-pointer"
              >
                <p className="text-slate-300 font-semibold">{typeof skill === 'string' ? skill : skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;