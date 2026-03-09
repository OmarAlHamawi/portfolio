import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText } from 'lucide-react';
import { PROJECTS } from '../data';

const Projects = () => (
  <section className="py-16 md:py-24 bg-dark-800" id="projects">
    <div className="max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-white mb-16"><span className="text-gold-500">03.</span> Featured Projects</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            whileHover={{ y: -5 }}
            key={idx} 
            // ADDED: flex flex-col h-full to make the card stretch properly
            className="bg-dark-900 p-8 rounded-lg border border-white/5 hover:border-gold-500/30 transition-all flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="folder-icon p-3 bg-gold-500/10 rounded-lg">
                <FileText className="text-gold-500" size={24} />
              </div>
              <div className="flex gap-4 text-gray-400">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-gold-500"><Github size={20} /></a>
                <a href={project.links.demo} className="hover:text-gold-500"><ExternalLink size={20} /></a>
              </div>
            </div>
            
            <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
            
            {/* REMOVED: h-20 class so the text can expand naturally on mobile */}
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
            
            {/* mt-auto pushes this block to the absolute bottom of the card */}
            <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/5">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-mono text-gold-500/80">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;