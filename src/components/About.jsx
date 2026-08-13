import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useScrollReveal, staggerContainer, staggerItem } from '../hooks/useScrollReveal';

const About = ({ data }) => {
  const { ref, controls, variants } = useScrollReveal();
  
  const stats = [
    { label: 'Years Experience', value: 13, suffix: '+' },
    { label: 'Publications', value: 4, suffix: '' },
    { label: 'Policy Frameworks', value: 10, suffix: '+' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={staggerItem} className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 whitespace-nowrap">
              <span className="text-accent-cyan font-mono text-xl md:text-2xl mr-2">01.</span>
              About Me
            </h2>
            <div className="h-px bg-slate-700 w-full" />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div variants={staggerItem} className="w-full md:w-3/5 text-slate-400 space-y-4 text-lg leading-relaxed">
              <p>
                As a {data.title} at the {data.experience[0].organization}, I specialize in macroeconomic policy, fiscal analysis, and empirical research.
              </p>
              <p>
                My journey began with a deep interest in understanding the complex dynamics of sovereign debt and fiscal multipliers, leading me to pursue a Ph.D. in Economics at the University of Malaya. Since then, I've had the privilege of formulating national fiscal strategies and advising senior policymakers on structural economic reforms.
              </p>
              <p>
                When I'm not running econometric models or writing policy briefs, you can find me exploring the intersection of data science and public policy.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="w-full md:w-2/5 grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className={`glass-card p-6 text-center ${idx === 2 ? 'col-span-2' : ''}`}>
                  <h3 className="text-4xl font-bold text-gradient mb-2">
                    <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                    {stat.suffix}
                  </h3>
                  <p className="text-sm text-slate-400 font-mono">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
