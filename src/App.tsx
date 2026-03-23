import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import { LanguageProvider } from './context/LanguageContext';
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <LanguageProvider>  
      <div className="bg-dark-900 min-h-screen">
        <NavBar />
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Analytics />
      </div>
    </LanguageProvider> 
  );
}

export default App;