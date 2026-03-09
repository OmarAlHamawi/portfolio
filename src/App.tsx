import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications'; 
//import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen">
      <NavBar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      {/* <Contact /> */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>Built with React, TypeScript & Tailwind</p>
        <p>© 2026 Omar Al-Hamawi</p>
      </footer>
    </div>
  );
}

export default App;