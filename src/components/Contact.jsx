import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono text-sm mb-4">06. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            I am currently open to new opportunities that can utilize my expertise in data analysis, 
            economic modelling, and policy advisory. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          
          <a href={`mailto:${data.email}`}>
            <button className="px-8 py-4 border border-accent-cyan text-accent-cyan font-mono rounded-md hover:bg-accent-cyan/10 transition-all duration-300 shadow-[0_0_15px_rgba(100,255,218,0.1)] hover:shadow-[0_0_20px_rgba(100,255,218,0.2)] text-lg">
              Say Hello
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
