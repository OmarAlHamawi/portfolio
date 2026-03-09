import { motion } from 'framer-motion';
import { EXPERIENCE, EXPERIENCE_AR } from '../data';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { lang } = useLanguage();
  const experienceData = lang === 'EN' ? EXPERIENCE : EXPERIENCE_AR;

  return (
    <section className="py-16 md:py-24 bg-dark-900" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.h3 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-16"
        >
          <span className="text-gold-500">02.</span> {lang === 'EN' ? "Experience" : "الخبرات"}
        </motion.h3>

        <div className="space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              // Note the rtl: classes here that flip the border and padding for the timeline!
              className="relative border-l rtl:border-l-0 rtl:border-r border-white/10 pl-8 rtl:pl-0 rtl:pr-8 md:pl-12 md:rtl:pl-0 md:rtl:pr-12"
            >
              {/* Golden dot flips to the right side in Arabic */}
              <div className="absolute w-4 h-4 bg-gold-500 rounded-full -left-[9px] rtl:-left-auto rtl:-right-[9px] top-1 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-gold-500 text-lg font-medium" dir="ltr">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-sm mt-2 md:mt-0 font-mono" dir={lang === 'AR' ? 'rtl' : 'ltr'}>{exp.period}</span>
              </div>
              
              <p className="text-gray-300 mb-6 font-medium">{exp.description}</p>
              
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start gap-3 leading-relaxed">
                    {/* The arrow points left in Arabic and right in English */}
                    <span className="text-gold-500 mt-1">{lang === 'EN' ? '▹' : '◃'}</span>
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
};

export default Experience;