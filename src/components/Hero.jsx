/**
 * Hero section — profile photo placeholder + professional description.
 */
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Profile photo with animated gradient border */}
        <div className="flex-shrink-0 gradient-border">
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden bg-slate-800 flex items-center justify-center relative z-10">
            {/* Placeholder avatar */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-28 h-28 md:w-36 md:h-36 text-slate-600"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-5 text-center md:text-left">
          <div>
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">
              Bienvenido a mi portafolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Tu Nombre
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-purple-400 mt-2">
              Desarrollador Full Stack
            </h2>
          </div>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
            Transformando ideas en experiencias digitales de alto rendimiento.
            Especialista en <span className="text-cyan-400 font-semibold">Desarrollo Full Stack</span> con
            enfoque en escalabilidad y diseño centrado en el usuario.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">
            <a
              href="#proyectos"
              className="px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-all duration-200 hover:scale-105"
            >
              Ver Proyectos
            </a>
            <a
              href="#contacto"
              className="px-6 py-2.5 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold text-sm transition-all duration-200 hover:scale-105"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
