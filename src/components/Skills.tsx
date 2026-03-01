import { SKILLS } from '../data';

const Skills = () => (
  <section className="py-20 bg-dark-800">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-8"><span className="text-gold-500">01.</span> Technical Arsenal</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="bg-dark-900 p-4 rounded border border-white/5 hover:border-gold-500/50 transition-colors text-center text-gray-300 text-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-900 p-8 rounded border border-gold-500/20 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 bg-gold-500 text-dark-900 text-xs font-bold px-3 py-1">VERIFIED</div>
          <img src="/oracle-badge.png" alt="Oracle Certified" className="w-32 h-32 mx-auto mb-6 drop-shadow-xl" />
          <h4 className="text-white font-bold text-lg">Oracle Certified Professional</h4>
          <p className="text-gold-500 text-sm mb-4">Java SE 17 Developer</p>
          <p className="text-gray-500 text-xs">Issued Jan 2026 • Credential ID: 102855931OCPJSE17</p>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;