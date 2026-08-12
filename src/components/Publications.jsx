import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import { useScrollReveal, staggerContainer, staggerItem } from '../hooks/useScrollReveal';

const Publications = ({ data }) => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="publications" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={staggerItem} className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 whitespace-nowrap">
              <span className="text-accent-cyan font-mono text-xl md:text-2xl mr-2">05.</span>
              Selected Publications
            </h2>
            <div className="h-px bg-slate-700 w-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.publications.map((pub, idx) => (
              <motion.a 
                key={idx}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem}
                className="glass-card p-8 group block"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-accent-violet">
                    <BookOpen size={32} />
                  </div>
                  <div className="text-slate-400 group-hover:text-accent-cyan transition-colors">
                    <ExternalLink size={20} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-accent-cyan transition-colors leading-tight">
                  {pub.title}
                </h3>
                
                <div className="flex items-center justify-between mt-auto pt-6">
                  <span className="text-sm font-medium text-slate-400">{pub.publisher}</span>
                  <span className="text-xs font-mono text-accent-indigo px-3 py-1 bg-accent-indigo/10 rounded-full">
                    {pub.year}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
