import { motion } from 'framer-motion';
import { Award, ExternalLink, Download } from 'lucide-react'; // <-- Added Download here
import { CERTIFICATIONS } from '../data';

const Certifications = () => (
  <section className="py-16 md:py-24 bg-dark-900" id="certifications">
    <div className="max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-white mb-16">
        <span className="text-gold-500">04.</span> Certifications
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div 
            whileHover={{ y: -5 }}
            key={idx} 
            className="bg-dark-800 p-6 rounded-lg border border-white/5 hover:border-gold-500/30 transition-all flex flex-col h-full relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-gold-500/10 transition-colors"></div>
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="p-3 bg-gold-500/10 rounded-lg">
                <Award className="text-gold-500" size={24} />
              </div>
              
              {/* Added a flex container for the icons */}
              <div className="flex gap-3">
                {/* Check if there is a downloadable file */}
                {cert.file && (
                  <a href={cert.file} download className="text-gray-400 hover:text-gold-500 transition-colors" title="Download Certificate">
                    <Download size={20} />
                  </a>
                )}
                
                {/* Check if there is an external link */}
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors" title="View Certificate">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <h4 className="text-lg font-bold text-white mb-2 relative z-10 leading-snug">{cert.name}</h4>
            <p className="text-gold-500 text-sm mb-4 relative z-10">{cert.issuer}</p>
            
            <div className="mt-auto pt-4 border-t border-white/5 relative z-10 flex justify-between items-center text-xs text-gray-500">
              <span>{cert.date}</span>
              {cert.credentialId && <span className="font-mono bg-dark-900 px-2 py-1 rounded truncate max-w-[120px]" title={cert.credentialId}>ID: {cert.credentialId}</span>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;