import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiTailwindcss,
  SiGit,
} from 'react-icons/si';

const techStack = [
  { icon: SiReact, label: 'React', color: 'text-cyan-400' },
  { icon: SiNodedotjs, label: 'Node.js', color: 'text-green-400' },
  { icon: SiPython, label: 'Python', color: 'text-yellow-400' },
  { icon: SiTypescript, label: 'TypeScript', color: 'text-blue-400' },
  { icon: SiTailwindcss, label: 'Tailwind', color: 'text-teal-400' },
  { icon: SiGit, label: 'Git', color: 'text-orange-400' },
];

const certificates = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Coursera — Meta',
    year: '2024',
    size: 'lg:col-span-2',
    gradient: 'from-cyan-500/15 to-blue-600/10',
  },
  {
    title: 'React Advanced Patterns',
    issuer: 'Frontend Masters',
    year: '2024',
    size: '',
    gradient: 'from-purple-500/15 to-pink-500/10',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2023',
    size: '',
    gradient: 'from-orange-500/15 to-yellow-500/10',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM — edX',
    year: '2023',
    size: 'lg:col-span-2',
    gradient: 'from-emerald-500/15 to-teal-500/10',
  },
];

/**
 * Certificates section — tech stack row + bento-grid certificate cards.
 */
export default function Certificates() {
  return (
    <section id="certificados" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Habilidades &amp; Logros
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Certificados</h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Tech stack row */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {techStack.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-800/80 border border-white/8 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 transition-all duration-200">
                <Icon className={`w-7 h-7 ${color}`} />
              </div>
              <span className="text-xs text-slate-400 font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Bento grid certificates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className={[
                'group rounded-2xl border border-white/8 bg-gradient-to-br p-6 bg-slate-900/60 backdrop-blur-sm',
                'hover:scale-[1.04] hover:shadow-2xl hover:shadow-purple-500/10',
                'transition-all duration-300 cursor-default',
                cert.gradient,
                cert.size,
              ].join(' ')}
            >
              {/* Decorative icon */}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-purple-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.798 49.798 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white mb-1">{cert.title}</h3>
              <p className="text-slate-400 text-sm">{cert.issuer}</p>
              <span className="mt-3 inline-block text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-medium">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
