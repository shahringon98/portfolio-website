import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal, staggerContainer, staggerItem } from '../hooks/useScrollReveal';

const Contact = ({ data }) => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={staggerItem}>
            <p className="text-accent-cyan font-mono mb-4">06. What's Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
          </motion.div>
          
          <motion.p variants={staggerItem} className="text-slate-400 text-lg mb-12 leading-relaxed">
            I'm currently open to new opportunities, policy advisory roles, and collaborative research projects. 
            Whether you have a question or just want to discuss macroeconomic trends, my inbox is always open.
          </motion.p>
          
          <motion.div variants={staggerItem}>
            <a href={`mailto:${data.email}`} className="btn-primary inline-block text-lg px-8 py-4">
              Say Hello
            </a>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
