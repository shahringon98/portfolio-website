import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-navy-800/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">02. my journey</p>
          <h2 className="section-title">Professional Experience</h2>
          <div className="w-16 h-1 bg-accent-cyan rounded mb-12"></div>
        </motion.div>

        <div className="space-y-8">
          {data.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
                  <p className="text-accent-cyan text-lg">{job.organization}</p>
                </div>
                <div className="text-slate-400 font-mono mt-2 md:mt-0">
                  {job.period}
                </div>
              </div>
              
              <p className="text-slate-300 mb-4">{job.description}</p>
              
              <ul className="list-none space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-slate-400">
                    <span className="text-accent-cyan mr-2 mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
