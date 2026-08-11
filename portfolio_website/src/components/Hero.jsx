import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, MapPin, Award, BookOpen, ChevronRight } from 'lucide-react';

export default function Hero({ personalInfo }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-12 md:py-20 flex flex-col justify-center border-b border-slate-800/60 relative overflow-hidden"
    >
      {/* Background Decorative Blur Element */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="space-y-6 max-w-4xl">
        {/* Title Tag */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
            <Award className="w-3.5 h-3.5" />
            {personalInfo.title}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            {personalInfo.location}
          </span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Bio Summary */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-normal"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-600/25 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </motion.a>
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-semibold text-sm rounded-xl transition-colors"
          >
            <Briefcase className="w-4 h-4 text-indigo-400" />
            View Experience
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </motion.a>
        </motion.div>

        {/* Highlights Banner Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-200">Ministry of Finance</div>
              <div className="text-xs text-slate-400">Principal Assistant Director</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-200">Doctor of Philosophy</div>
              <div className="text-xs text-slate-400">Ph.D. Economics (UM)</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-200">10+ Years Policy</div>
              <div className="text-xs text-slate-400">Macroeconomic Analysis</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
