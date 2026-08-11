import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Check } from 'lucide-react';

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-12 border-b border-slate-800/60">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
          <Brain className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Domain Expertise & Policy Skills</h2>
          <p className="text-sm text-slate-400">Core competencies in economic policy, research, and public administration</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -4 }}
            className="bg-slate-800/40 hover:bg-slate-800/70 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3 pb-2 border-b border-slate-800">
                {skillGroup.category}
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((item, iIdx) => (
                  <motion.span
                    key={iIdx}
                    whileHover={{ scale: 1.06, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-800 border border-slate-700/80 cursor-default transition-colors"
                  >
                    <Check className="w-3 h-3 text-indigo-400 shrink-0" />
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
