import { motion } from 'framer-motion';
// Icon sizes are slightly adjusted to match standard corner icon sizing
import { GraduationCap, Download } from 'lucide-react'; 
import { EDUCATION, EDUCATION_AR } from '../data';
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
  const { lang } = useLanguage();
  const educationData = lang === 'EN' ? EDUCATION : EDUCATION_AR;

  return (
    <section className="py-16 md:py-24 bg-dark-800" id="education">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.h3 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-16"
        >
          <span className="text-gold-500">03. </span> {lang === 'EN' ? "Education" : "التعليم"}
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ y: -5 }}
              key={idx} 
              className="bg-dark-900 p-8 rounded-lg border border-white/5 hover:border-gold-500/30 transition-all flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-gold-500/10 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-4 bg-gold-500/10 rounded-lg">
                  <GraduationCap className="text-gold-500" size={28} />
                </div>
                
                {/* UPDATED: The download link is now just a subtle icon button 
                  similar to the certifications and projects sections.
                  Text, background, and borders are removed.
                */}
                {edu.file && (
                  <a 
                    href={edu.file} 
                    download 
                    // Standardized styling for minimalist top-corner icons on this site
                    className="text-gray-400 hover:text-gold-500 transition-colors"
                    // Adding title for accessibility since visible text is removed
                    title={lang === 'EN' ? "Download Certificate" : "تحميل الشهادة"} 
                  >
                    <Download size={20} /> {/* Adjusted icon size */}
                  </a>
                )}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2 relative z-10" dir={lang === 'AR' ? 'rtl' : 'ltr'}>{edu.degree}</h4>
              <p className="text-gold-500 font-medium mb-4 relative z-10" dir="ltr">{edu.institution}</p>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed relative z-10" dir={lang === 'AR' ? 'rtl' : 'ltr'}>{edu.description}</p>
              
              <div className="mt-auto pt-4 border-t border-white/5 relative z-10 text-xs text-gray-500 font-mono" dir="ltr">
                {edu.period}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;