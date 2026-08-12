import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CountUp } from 'react-countup';

const About = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { label: 'Years Experience', value: 12 },
    { label: 'Research Papers', value: 25 },
    { label: 'Students Mentored', value: 45 },
    { label: 'Grants Secured', value: 1200 },
  ];

  return (
    <section id="about" ref={ref} className="relative min-h-screen flex items-center py-20 z-10 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About Me</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            {data.bio || 'Passionate researcher and educator with a focus on innovation and excellence.'}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold text-accent-cyan mb-2">
                {inView && <CountUp end={stat.value} duration={2} />}
              </div>
              <p className="text-slate-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;