import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ data }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-accent-cyan font-mono mb-4 text-lg"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-slate-100 mb-4"
        >
          {data.name}.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-slate-400 mb-6"
        >
          {data.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl text-slate-400 text-lg leading-relaxed mb-10"
        >
          {data.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <button className="btn-primary">Get In Touch</button>
          </Link>
          <Link to="publications" smooth={true} duration={500} offset={-80}>
            <button className="px-6 py-3 bg-accent-cyan/10 text-accent-cyan font-mono rounded hover:bg-accent-cyan/20 transition-all duration-300 border border-accent-cyan/30">
              View Publications
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex gap-6"
        >
          <a href={data.github} target="_blank" rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent-cyan transition-colors">
            <Github size={22} />
          </a>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent-cyan transition-colors">
            <Linkedin size={22} />
          </a>
          <a href={`mailto:${data.email}`}
            className="text-slate-400 hover:text-accent-cyan transition-colors">
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth={true} duration={500}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-accent-cyan cursor-pointer"
          >
            <ArrowDown size={24} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
