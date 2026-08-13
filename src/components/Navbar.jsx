import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Education', to: 'education' },
  { name: 'Skills', to: 'skills' },
  { name: 'Publications', to: 'publications' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          to="home" 
          smooth={true} 
          duration={500}
          className="text-2xl font-bold text-gradient cursor-pointer z-50"
        >
          SB.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="text-accent-cyan font-medium"
              className="text-slate-300 hover:text-accent-cyan cursor-pointer transition-colors duration-300 text-sm tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="btn-outline px-4 py-2 text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-accent-cyan focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 h-screen w-screen glass flex flex-col items-center justify-center space-y-8 z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium text-slate-300 hover:text-accent-cyan cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="btn-outline px-8 py-3 mt-4 text-lg"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
