import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = ({ education, certifications }) => {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">03. learning</p>
          <h2 className="section-title">Education & Certifications</h2>
          <div className="w-16 h-1 bg-accent-cyan rounded mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
              <GraduationCap className="text-accent-cyan" size={28} />
              Academic Background
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l border-slate-700">
                  <div className="absolute w-4 h-4 bg-navy-900 border-2 border-accent-cyan rounded-full -left-[9px] top-1"></div>
                  <h4 className="text-lg font-bold text-slate-200">{edu.degree}</h4>
                  <p className="text-accent-cyan">{edu.institution}</p>
                  <p className="text-slate-400 font-mono text-sm my-2">{edu.year}</p>
                  <p className="text-slate-400">{edu.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
              <Award className="text-accent-cyan" size={28} />
              Professional Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-card p-6">
                  <h4 className="text-lg font-bold text-slate-200">{cert.name}</h4>
                  <p className="text-accent-cyan my-1">{cert.issuer}</p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-slate-400 text-sm">{cert.details}</p>
                    <span className="text-slate-400 font-mono text-sm bg-navy-900 px-3 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
