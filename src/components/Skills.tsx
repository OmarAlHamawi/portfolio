import { motion } from 'framer-motion';
import { SKILLS } from '../data';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 bg-dark-800" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              <span className="text-gold-500">01.</span> {lang === 'EN' ? "Technical Arsenal" : "الترسانة التقنية"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SKILLS.map((skill, idx) => (
                <div key={idx} className="bg-dark-900 p-4 rounded border border-white/5 hover:border-gold-500/50 transition-colors text-center text-gray-300 text-sm flex items-center justify-center h-full" dir="ltr">
                  {/* Keep skills in LTR so english text doesn't format weirdly */}
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-900 p-8 rounded border border-gold-500/20 text-center relative overflow-hidden group flex flex-col justify-center items-center"
          >
            <div className={`absolute top-0 ${lang === 'AR' ? 'left-0' : 'right-0'} bg-gold-500 text-dark-900 text-xs font-bold px-3 py-1 z-10`}>
              {lang === 'EN' ? "VERIFIED" : "موثق"}
            </div>
            
            <img src="/oracle-badge.png" alt="Oracle Certified" className="w-32 h-32 mx-auto mb-6 drop-shadow-xl relative z-10" />
            <h4 className="text-white font-bold text-lg relative z-10">{lang === 'EN' ? "Oracle Certified Professional" : "مطور أوراكل المعتمد"}</h4>
            <p className="text-gold-500 text-sm mb-4 relative z-10">{lang === 'EN' ? "Java SE 17 Developer" : "مطور جافا 17"}</p>
            <p className="text-gray-500 text-xs relative z-10">
              {lang === 'EN' ? "Issued Jan 2026 • Credential ID:" : "تاريخ الإصدار: يناير 2026 • رقم الاعتماد:"} 102855931OCPJSE17
            </p>
            
            <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-50"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;