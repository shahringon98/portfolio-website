import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Code2, Database } from 'lucide-react';

export default function SoftwareSkills({ softwareSkills }) {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Statistical':
      case 'Econometrics':
        return <Terminal className="w-4 h-4 text-indigo-400" />;
      case 'Data Science':
      case 'Visualization':
        return <Code2 className="w-4 h-4 text-blue-400" />;
      case 'Database':
      case 'Tools':
      case 'Documentation':
      default:
        return <Database className="w-4 h-4 text-emerald-400" />;
    }
  };

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30';
      case 'Advanced':
        return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
      case 'Intermediate':
      default:
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
    }
  };

  return (
    <section className="py-12 border-b border-slate-800/60">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
          <Cpu className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Software & Technical Tools</h2>
          <p className="text-sm text-slate-400">Statistical software, econometric modeling tools, and programming languages</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {softwareSkills.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -4, borderColor: 'rgba(99, 102, 241, 0.4)' }}
            className="bg-slate-800/40 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="p-2 rounded-lg bg-slate-800 border border-slate-700/60">
                {getCategoryIcon(tool.category)}
              </span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${getLevelBadgeClass(tool.level)}`}>
                {tool.level}
              </span>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-100">{tool.name}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{tool.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
