import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-900/50 border-t border-slate-800 z-10">
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 mb-2">
            © {currentYear} {data.name}. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Built with React, Vite, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;