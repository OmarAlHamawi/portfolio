import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, Phone, X } from 'lucide-react';
// 1. Import both English and Arabic data
import { PERSONAL_INFO, PERSONAL_INFO_AR } from '../data';
// 2. Import the language hook we just created
import { useLanguage } from '../context/LanguageContext';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Hero = () => {
  const [isContactOpen, setContactOpen] = useState(false);
  
  // 3. Get the current language from our global context
  const { lang } = useLanguage();
  
  // 4. Automatically switch the data source based on language!
  const info = lang === 'EN' ? PERSONAL_INFO : PERSONAL_INFO_AR;

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 md:pt-16 relative" id="about">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT SECTION */}
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="text-center md:text-start order-last md:order-first"
        >
          {/* Translate static text using ternary operators */}
          <motion.p variants={fadeInUp} className="text-gold-500 font-medium mb-4">
            {lang === 'EN' ? "Hello, I'm" : "مرحباً، أنا"}
          </motion.p>
          
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 whitespace-nowrap tracking-tight">
            {info.name} {/* This automatically uses info! */}
          </motion.h1>
          
          <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 mb-6">
            {info.title}
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 text-sm md:text-base">
            {info.tagline}
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => setContactOpen(true)}
              className="px-8 py-3 bg-gold-500 text-dark-900 font-bold rounded hover:bg-gold-400 transition-colors w-full sm:w-auto"
            >
              {lang === 'EN' ? "Contact Me" : "تواصل معي"}
            </button>

            <a 
              href="/cv.pdf" 
              download="Omar_Al-Hamawi_CV.pdf"
              className="px-8 py-3 border border-gold-500 text-gold-500 font-medium rounded hover:bg-gold-500/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Download size={18} /> {lang === 'EN' ? "Resume" : "السيرة الذاتية"}
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 md:mt-12 flex gap-6 justify-center md:justify-start text-gray-400">
            {info.social.map((social, idx) => (
              <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <social.icon size={24} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="relative order-first md:order-last mt-8 md:mt-0"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-gold-500 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4"></div>
            <div className="absolute inset-0 rounded-full overflow-hidden bg-dark-800 border-4 border-dark-900">
              <img src="/profile.jpg" alt={info.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* CONTACT MODAL */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setContactOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-dark-800 border border-gold-500/30 p-6 md:p-8 rounded-xl w-full max-w-md relative z-10 shadow-2xl max-h-[90vh] overflow-y-auto"
              dir={lang === 'AR' ? 'rtl' : 'ltr'} // Ensure the modal respects text direction
            >
              <button onClick={() => setContactOpen(false)} className={`absolute top-4 ${lang === 'AR' ? 'left-4' : 'right-4'} text-gray-500 hover:text-white`}>
                <X size={24} />
              </button>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                {lang === 'EN' ? "Get in Touch" : "تواصل معي"}
              </h3>
              
              <div className="space-y-4">
                <a href="tel:+962799875468" className="flex items-center gap-4 p-4 bg-dark-900 rounded-lg hover:bg-dark-700 transition-colors group">
                  <div className="p-3 bg-gold-500/10 rounded-full text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-900 transition-colors"><Phone size={24} /></div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">{lang === 'EN' ? "Call Me" : "اتصل بي"}</p>
                    <p className="text-sm md:text-base text-white font-medium" dir="ltr">+962 79 987 5468</p>
                  </div>
                </a>
                <a href="https://wa.me/962799875468" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-dark-900 rounded-lg hover:bg-dark-700 transition-colors group">
                  <div className="p-3 bg-green-500/10 rounded-full text-green-500 group-hover:bg-green-500 group-hover:text-dark-900 transition-colors"><WhatsAppIcon /></div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">{lang === 'EN' ? "WhatsApp" : "واتساب"}</p>
                    <p className="text-sm md:text-base text-white font-medium">{lang === 'EN' ? "Chat on WhatsApp" : "تحدث معي عبر واتساب"}</p>
                  </div>
                </a>
                <a href={`mailto:${info.email}`} className="flex items-center gap-4 p-4 bg-dark-900 rounded-lg hover:bg-dark-700 transition-colors group">
                  <div className="p-3 bg-blue-500/10 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-dark-900 transition-colors"><Mail size={24} /></div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">{lang === 'EN' ? "Email Me" : "راسلني"}</p>
                    <p className="text-sm md:text-base text-white font-medium break-all">{info.email}</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;