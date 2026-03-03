import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const socials = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    hoverColor: 'hover:text-blue-400',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://instagram.com',
    hoverColor: 'hover:text-pink-400',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com',
    hoverColor: 'hover:text-white',
  },
];

/**
 * Contact / Footer section with social links and copyright.
 */
export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contacto"
      className="relative z-10 py-20 px-6 border-t border-white/8"
    >
      <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Heading */}
        <div>
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">
            ¿Hablamos?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacto</h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Estoy abierto a nuevas oportunidades y colaboraciones. ¡No dudes en escribirme!
          </p>
        </div>

        {/* Email CTA */}
        <a
          href="mailto:tuemail@ejemplo.com"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200"
        >
          tuemail@ejemplo.com
        </a>

        {/* Social icons */}
        <div className="flex gap-7">
          {socials.map(({ icon: Icon, label, href, hoverColor }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={[
                'text-slate-500 transition-all duration-200 hover:scale-125',
                hoverColor,
              ].join(' ')}
            >
              <Icon className="w-7 h-7" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-slate-600 text-xs mt-4">
          © {year} Tu Nombre. Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
}
