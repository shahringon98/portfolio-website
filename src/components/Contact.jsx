import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${data.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  const socialLinks = [
    { icon: Linkedin, url: data.linkedin, label: 'LinkedIn' },
    { icon: Github, url: data.github, label: 'GitHub' },
    { icon: Twitter, url: data.twitter, label: 'Twitter' },
  ];

  return (
    <section id="contact" ref={ref} className="relative min-h-screen flex items-center py-20 z-10 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-accent-cyan" size={24} />
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <a href={`mailto:${data.email}`} className="text-white font-semibold hover:text-accent-cyan transition">
                    {data.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-accent-cyan" size={24} />
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <p className="text-white font-semibold">{data.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-accent-cyan" size={24} />
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-white font-semibold">{data.location}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-slate-700">
                <p className="text-slate-400 text-sm mb-4">Follow Me</p>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-800 hover:bg-accent-cyan hover:text-navy-900 text-accent-cyan rounded-lg transition"
                        title={link.label}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-accent-cyan focus:outline-none transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-accent-cyan focus:outline-none transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-2">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-accent-cyan focus:outline-none transition h-32 resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent-cyan text-navy-900 font-bold rounded-lg hover:bg-accent-cyan/90 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;