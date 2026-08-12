import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, ExternalLink } from 'lucide-react';

const Publications = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="publications" ref={ref} className="relative min-h-screen flex items-center py-20 z-10 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Publications
        </motion.h2>

        <div className="space-y-6">
          {data.publications?.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-accent-cyan/50 transition group"
            >
              <div className="flex items-start gap-4">
                <BookOpen className="text-accent-cyan flex-shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-cyan transition">
                    {pub.title}
                  </h3>
                  <div className="space-y-1 mb-3">
                    <p className="text-accent-cyan text-sm font-semibold">{pub.journal}</p>
                    <p className="text-slate-400 text-sm">Authors: {pub.authors}</p>
                    <p className="text-slate-400 text-sm">Year: {pub.year}</p>
                    <p className="text-slate-400 text-sm font-mono">DOI: {pub.doi}</p>
                  </div>
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-cyan/80 transition"
                  >
                    Read Paper <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;