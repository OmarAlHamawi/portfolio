import { Suspense, lazy } from 'react';
import { ArrowUp } from 'lucide-react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Analytics } from '@vercel/analytics/react';

// Below-the-fold sections are code-split so the initial bundle
// stays limited to NavBar + Hero (first paint).
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));

function SectionFallback() {
  return (
    <div className="py-16 flex justify-center" aria-hidden="true">
      <div className="h-8 w-8 rounded-full border-2 border-gold-500/30 border-t-gold-500 animate-spin" />
    </div>
  );
}

function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {year} Omar Al-Hamawi.{' '}
          {lang === 'EN' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}
        </p>
        <button
          type="button"
          onClick={scrollToTop}
          aria-label={lang === 'EN' ? 'Back to top' : 'العودة إلى الأعلى'}
          className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gold-500 transition-colors"
        >
          {lang === 'EN' ? 'Back to top' : 'العودة إلى الأعلى'}
          <span className="p-2 rounded-full border border-white/10 hover:border-gold-500/50">
            <ArrowUp size={16} />
          </span>
        </button>
      </div>
    </footer>
  );
}

function App() {
  return (
    <LanguageProvider>
      <div className="bg-dark-900 min-h-screen">
        <NavBar />
        <main>
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Certifications />
          </Suspense>
        </main>
        <Footer />
        <Analytics />
      </div>
    </LanguageProvider>
  );
}

export default App;
