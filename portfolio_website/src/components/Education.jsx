import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education({ education }) {
  return (
    <section id="education" className="py-12 border-b border-slate-800/60">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Education & Qualifications</h2>
          <p className="text-sm text-slate-400">Academic background in economics and quantitative methods</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-slate-800/40 hover:bg-slate-800/80 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between shadow-lg group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-700/40 px-2.5 py-1 rounded-md">
                  <Calendar className="w-3 h-3 text-indigo-400" />
                  {edu.year}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                {edu.degree}
              </h3>

              <div className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{edu.institution}</span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {edu.details}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs text-indigo-400 font-semibold group-hover:translate-x-1 transition-transform">
              <span>Academic Detail</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
