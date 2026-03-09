import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText } from 'lucide-react';
import { PROJECTS } from '../data';

const Projects = () => (
  <section className="py-16 md:py-24 bg-dark-800" id="projects">
    <div className="max-w-6xl mx-auto px-6">
      
      {/* Title slides in from left */}
      <motion.h3 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white mb-16"
      >
        <span className="text-gold-500">03.</span> Featured Projects
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          /* Cards slide up with a staggered delay */
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ y: -5 }}
            key={idx} 
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
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
            
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