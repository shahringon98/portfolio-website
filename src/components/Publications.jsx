import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Presentation } from 'lucide-react';

const Publications = ({ publications, conferences }) => {
  return (
    <section id="publications" className="py-24 relative z-10 bg-navy-800/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">05. research</p>
          <h2 className="section-title">Publications & Conferences</h2>
          <div className="w-16 h-1 bg-accent-cyan rounded mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
              <BookOpen className="text-accent-cyan" size={24} />
              Selected Publications
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="glass-card p-6 hover:border-accent-cyan/50 transition-colors">
                  <h4 className="text-lg font-bold text-slate-200 mb-2 leading-tight">
                    {pub.title}
                  </h4>
                  <p className="text-slate-400 text-sm mb-3">{pub.authors}</p>
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="text-accent-cyan text-sm">{pub.journal}</span>
                    <span className="bg-navy-900 text-slate-300 text-xs px-2 py-1 rounded font-mono">
                      {pub.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Conferences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
              <Presentation className="text-accent-cyan" size={24} />
              Conference Presentations
            </h3>
            <div className="space-y-6">
              {conferences.map((conf, index) => (
                <div key={index} className="glass-card p-6">
                  <h4 className="text-lg font-bold text-slate-200 mb-2">
                    {conf.title}
                  </h4>
                  <p className="text-accent-cyan mb-2">{conf.event}</p>
                  <p className="text-slate-400 text-sm mb-4">{conf.details}</p>
                  <div className="flex justify-between items-center">
                    {conf.date && (
                      <span className="text-slate-500 text-sm">{conf.date}</span>
                    )}
                    <span className="bg-navy-900 text-slate-300 text-xs px-2 py-1 rounded font-mono ml-auto">
                      {conf.year}
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

export default Publications;
