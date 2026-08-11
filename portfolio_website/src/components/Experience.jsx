import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="py-12 border-b border-slate-800/60">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
          <Briefcase className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Professional Experience</h2>
          <p className="text-sm text-slate-400">Key policy advisory, empirical research, and leadership roles</p>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-10">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Scroll-Triggered Timeline Node */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
              className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900 shadow-md shadow-indigo-500/50 group-hover:scale-125 transition-transform"
            />

            {/* Experience Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-800/40 hover:bg-slate-800/70 p-6 rounded-2xl border border-slate-800 hover:border-slate-700/80 shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-indigo-400 font-medium text-sm mt-1">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.organization}</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-700/50 border border-slate-700 text-slate-300 text-xs font-mono self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {exp.period}
                </div>
              </div>

              {/* Responsibilities List */}
              <ul className="space-y-2 mt-4 text-slate-300 text-sm leading-relaxed">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
