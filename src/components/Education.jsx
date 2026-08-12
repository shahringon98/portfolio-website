import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

const Education = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="education" ref={ref} className="relative min-h-screen flex items-center py-20 z-10 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {data.education?.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-accent-cyan/50 transition"
            >
              <div className="flex items-start gap-4">
                <Award className="text-accent-cyan flex-shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-accent-cyan font-semibold">{edu.institution}</p>
                  <p className="text-slate-400 text-sm mb-2">{edu.year}</p>
                  <p className="text-slate-300">{edu.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;