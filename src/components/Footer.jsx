import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = ({ data }) => {
  return (
    <footer className="py-8 text-center relative z-10 border-t border-slate-700/50 bg-navy-900/50 backdrop-blur">
      <div className="flex justify-center space-x-6 mb-6">
        <a href={data.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent-cyan transition-colors transform hover:-translate-y-1">
          <Github size={22} />
        </a>
        <a href={data.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent-cyan transition-colors transform hover:-translate-y-1">
          <Linkedin size={22} />
        </a>
        <a href={`mailto:${data.email}`} className="text-slate-400 hover:text-accent-cyan transition-colors transform hover:-translate-y-1">
          <Mail size={22} />
        </a>
        {data.twitter && (
          <a href={data.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent-cyan transition-colors transform hover:-translate-y-1">
            <Twitter size={22} />
          </a>
        )}
      </div>
      <p className="text-slate-400 font-mono text-sm">
        Designed & Built by <span className="text-accent-cyan">{data.name}</span>
      </p>
      <p className="text-slate-500 font-mono text-xs mt-2">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
