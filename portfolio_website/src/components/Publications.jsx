import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar, FileText } from 'lucide-react';

export default function Publications({ publications }) {
  return (
    <section id="publications" className="py-12 border-b border-slate-800/60">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
          <BookOpen className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Publications & Academic Research</h2>
          <p className="text-sm text-slate-400">Peer-reviewed papers, policy bulletins, and conference proceedings</p>
        </div>
      </div>

      <div className="space-y-4">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.12 }}
            whileHover={{ y: -3, x: 2 }}
            className="bg-slate-800/40 hover:bg-slate-800/80 p-6 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
          >
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  {pub.title}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                <span className="font-medium text-slate-300">{pub.publisher}</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-indigo-400" />
                  {pub.year}
                </span>
              </div>
            </div>

            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-indigo-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all shrink-0 self-start md:self-auto"
              >
                <span>View Publication</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
