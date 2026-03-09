import { SKILLS } from '../data';

const Skills = () => (
  <section className="py-20 bg-dark-800" id="skills">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12">
        
        {/* Left Column: Skills Grid */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-8"><span className="text-gold-500">01.</span> Technical Arsenal</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="bg-dark-900 p-4 rounded border border-white/5 hover:border-gold-500/50 transition-colors text-center text-gray-300 text-sm flex items-center justify-center h-full">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Oracle Badge */}
        {/* ADDED: flex flex-col justify-center items-center to perfectly center the content */}
        <div className="bg-dark-900 p-8 rounded border border-gold-500/20 text-center relative overflow-hidden group flex flex-col justify-center items-center">
          <div className="absolute top-0 right-0 bg-gold-500 text-dark-900 text-xs font-bold px-3 py-1 z-10">VERIFIED</div>
          
          <img src="/oracle-badge.png" alt="Oracle Certified" className="w-32 h-32 mx-auto mb-6 drop-shadow-xl relative z-10" />
          <h4 className="text-white font-bold text-lg relative z-10">Oracle Certified Professional</h4>
          <p className="text-gold-500 text-sm mb-4 relative z-10">Java SE 17 Developer</p>
          <p className="text-gray-500 text-xs relative z-10">Issued Jan 2026 • Credential ID: 102855931OCPJSE17</p>
          
          {/* Optional: A subtle gold glow effect in the background of the card */}
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-50"></div>
        </div>
        
      </div>
    </div>
  </section>
);

export default Skills;