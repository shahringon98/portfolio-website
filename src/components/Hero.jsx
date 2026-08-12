import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = ({ data }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 z-10 px-4"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          {data.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-accent-cyan mb-8"
        >
          {data.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto"
        >
          {data.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href={`mailto:${data.email}`}
            className="px-8 py-3 bg-accent-cyan text-navy-900 font-bold rounded-lg hover:bg-accent-cyan/90 transition flex items-center gap-2"
          >
            Get in Touch <ArrowRight size={20} />
          </a>
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-accent-cyan text-accent-cyan font-bold rounded-lg hover:bg-accent-cyan/10 transition"
          >
            View GitHub
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-accent-cyan text-3xl">↓</div>
      </motion.div>
    </section>
  );
};

export default Hero;