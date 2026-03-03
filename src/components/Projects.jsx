import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Plataforma de comercio electrónico completa con carrito de compras, pagos en línea y panel de administración.',
    techs: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    demo: '#',
    accent: 'from-cyan-500/20 to-blue-500/10',
    badge: 'bg-cyan-500/20 text-cyan-300',
  },
  {
    title: 'Dashboard Analytics',
    description:
      'Panel de analíticas en tiempo real con visualizaciones interactivas y reportes exportables en PDF.',
    techs: ['TypeScript', 'React', 'D3.js', 'PostgreSQL'],
    github: 'https://github.com',
    demo: '#',
    accent: 'from-purple-500/20 to-pink-500/10',
    badge: 'bg-purple-500/20 text-purple-300',
  },
  {
    title: 'API REST Microservices',
    description:
      'Arquitectura de microservicios escalable con autenticación JWT, rate limiting y documentación Swagger.',
    techs: ['Python', 'FastAPI', 'Docker', 'Redis'],
    github: 'https://github.com',
    demo: '#',
    accent: 'from-emerald-500/20 to-teal-500/10',
    badge: 'bg-emerald-500/20 text-emerald-300',
  },
];

/**
 * Projects section — responsive 3-column grid with hover cards.
 */
export default function Projects() {
  return (
    <section id="proyectos" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Mi trabajo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Proyectos Destacados</h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={[
                'group relative rounded-2xl border border-white/8 bg-gradient-to-br p-6',
                'bg-slate-900/60 backdrop-blur-sm',
                'hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/10',
                'transition-all duration-300 cursor-default',
                project.accent,
              ].join(' ')}
            >
              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${project.badge}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver en GitHub"
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <FiGithub className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  aria-label="Ver demo"
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <FiExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
