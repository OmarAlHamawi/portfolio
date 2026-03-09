import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLanguage(); 
  
  const navItems = [
    { id: 'about', en: 'About', ar: 'نبذة' },
    { id: 'skills', en: 'Skills', ar: 'المهارات' },
    { id: 'experience', en: 'Experience', ar: 'الخبرات' },
    { id: 'projects', en: 'Projects', ar: 'المشاريع' },
    { id: 'certifications', en: 'Certifications', ar: 'الشهادات' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-dark-900/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative z-50">
        <span className="text-xl font-bold text-white">OmarAlHamawi<span className="text-gold-500">.dev</span></span>
        
        {/* CHANGED: Replaced space-x with gap-8 for flawless RTL spacing */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            {navItems.map((item) => (
              <Link 
                key={item.id} 
                to={item.id} 
                smooth={true} 
                offset={-80} 
                className="hover:text-gold-500 cursor-pointer transition-colors"
              >
                {lang === 'EN' ? item.en : item.ar}
              </Link>
            ))}
          </div>
          
          <div className="w-px h-4 bg-white/20"></div>
          
          <button onClick={toggleLang} className="flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors font-medium text-sm">
            <Globe size={18} />
            {lang === 'EN' ? 'العربية' : 'EN'}
          </button>
        </div>

        {/* CHANGED: Replaced space-x with gap-5 */}
        <div className="md:hidden flex items-center gap-5">
          <button onClick={toggleLang} className="flex items-center gap-1 text-gray-400 hover:text-gold-500 transition-colors font-medium text-sm">
            <Globe size={16} />
            {/* CHANGED: Now says العربية instead of AR on mobile */}
            {lang === 'EN' ? 'العربية' : 'EN'}
          </button>
          <button className="text-gray-400 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="fixed left-0 top-16 w-full h-[100vh] bg-black/60 backdrop-blur-sm md:hidden z-40 cursor-pointer" onClick={() => setIsOpen(false)}></div>
          <div className="md:hidden bg-dark-800 border-b border-white/10 shadow-2xl absolute w-full z-50">
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.id} 
                  to={item.id} 
                  smooth={true} 
                  offset={-80}
                  onClick={() => setIsOpen(false)} 
                  className="text-gray-400 hover:text-gold-500 cursor-pointer transition-colors text-lg font-medium"
                >
                  {lang === 'EN' ? item.en : item.ar}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;