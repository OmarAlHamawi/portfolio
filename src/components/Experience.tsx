import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data';

const Experience = () => (
  <section className="py-16 md:py-24 bg-dark-900" id="experience">
    <div className="max-w-6xl mx-auto px-6">
      
      {/* Title slides in from the left */}
      <motion.h3 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white mb-16"
      >
        <span className="text-gold-500">02.</span> Experience
      </motion.h3>

      <div className="space-y-12">
        {EXPERIENCE.map((exp, idx) => (
          /* Each job slides up slightly after the previous one */
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative border-l border-white/10 pl-8 md:pl-12"
          >
            {/* The golden timeline dot */}
            <div className="absolute w-4 h-4 bg-gold-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                <p className="text-gold-500 text-lg font-medium">{exp.company}</p>
              </div>
              <span className="text-gray-500 text-sm mt-2 md:mt-0 font-mono">{exp.period}</span>
            </div>
            
            <p className="text-gray-300 mb-6 font-medium">{exp.description}</p>
            
            <ul className="space-y-3">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="text-gray-400 text-sm flex items-start gap-3 leading-relaxed">
                  <span className="text-gold-500 mt-1">▹</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;