import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>  
      <div className="bg-dark-900 min-h-screen">
        <NavBar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
      </div>
    </LanguageProvider> 
  );
}

export default App;