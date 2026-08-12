import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ data }) => {
  return (
    <footer className="py-8 text-center relative z-10">
      <div className="flex justify-center space-x-6 mb-6">
        <a href={data.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent-cyan transition-colors transform hover:-translate-y-1">
          <Github size={24} />
        </a>
        <a href={data.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent-cyan transition-colors transform hover:-translate-y-1">
          <Linkedin size={24} />
        </a>
        <a href={`mailto:${data.email}`} className="text-slate-400 hover:text-accent-cyan transition-colors transform hover:-translate-y-1">
          <Mail size={24} />
        </a>
      </div>
      <p className="text-slate-500 font-mono text-sm">
        Designed & Built by {data.name}
      </p>
      <p className="text-slate-600 font-mono text-xs mt-2">
        © {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
