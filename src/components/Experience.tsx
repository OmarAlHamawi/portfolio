import { EXPERIENCE } from '../data';

const Experience = () => (
  <section className="py-24" id="experience">
    <div className="max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-white mb-16"><span className="text-gold-500">02.</span> Experience</h3>
      <div className="space-y-12 border-l-2 border-white/10 ml-3 md:ml-0">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12">
            <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gold-500 shadow-[0_0_10px_#D4AF37]"></span>
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
              <h4 className="text-xl font-bold text-white">{exp.role} <span className="text-gold-500">@ {exp.company}</span></h4>
              <span className="text-sm font-mono text-gray-500">{exp.period}</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-2xl">{exp.description}</p>
            <ul className="space-y-2">
              {exp.highlights.map((point, i) => (
                <li key={i} className="text-gray-500 text-sm flex items-start gap-2">
                  <span className="text-gold-500 mt-1">▹</span> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;