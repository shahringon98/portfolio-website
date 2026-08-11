import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Send, MessageSquare } from 'lucide-react';

export default function Contact({ personalInfo }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
          <MessageSquare className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Get in Touch</h2>
          <p className="text-sm text-slate-400">Connect for policy advisory, economic research collaboration, or executive briefings</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Info Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-4"
        >
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-800 space-y-6">
            <h3 className="text-lg font-semibold text-white border-b border-slate-800 pb-3">
              Contact Details
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Email Address</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-slate-200">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <div className="text-xs font-medium text-slate-400 mb-3">Professional Profiles</div>
              <div className="flex gap-3">
                {personalInfo.linkedin && (
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="p-3 rounded-xl bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                )}
                {personalInfo.github && (
                  <motion.a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="p-3 rounded-xl bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Contact Form Container */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="bg-slate-800/40 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">Send a Message</h3>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-medium text-center"
              >
                Thank you for your message! Dr. Mohd Shahrin will respond shortly.
              </motion.div>
            ) : null}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-100 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-100 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Policy Consultation / Advisory Inquiry"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-100 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Message</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-100 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
