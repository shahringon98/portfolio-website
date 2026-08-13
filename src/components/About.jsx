import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Award } from 'lucide-react';

const About = ({ data }) => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">01. about me</p>
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-1 bg-accent-cyan rounded mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-300 leading-relaxed mb-6">{data.bio}</p>
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={16} className="text-accent-cyan shrink-0" />
                <span className="text-sm">{data.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={16} className="text-accent-cyan shrink-0" />
                <span className="text-sm">{data.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={16} className="text-accent-cyan shrink-0" />
                <a href={`mailto:${data.email}`} className="text-sm hover:text-accent-cyan transition-colors">
                  {data.email}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
              <Award size={20} className="text-accent-cyan" />
              Highlights
            </h3>
            <div className="space-y-4">
              {[
                { label: 'PhD in Business Administration', sub: 'UiTM, 2024' },
                { label: '10+ Years Research Experience', sub: 'Economics & Data Science' },
                { label: 'Government Policy Advisor', sub: 'Ministry of Finance Malaysia' },
                { label: 'Published Researcher', sub: '4+ Academic Publications' },
              ].map((item) => (
                <div key={item.label} className="glass-card px-5 py-4">
                  <p className="text-slate-100 font-medium">{item.label}</p>
                  <p className="text-accent-cyan text-sm font-mono mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
