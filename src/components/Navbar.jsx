import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Certificados', href: '#certificados' },
  { label: 'Contacto', href: '#contacto' },
];

/**
 * Sticky glassmorphism navbar with scroll spy via IntersectionObserver.
 */
export default function Navbar() {
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.35 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="glass fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-center gap-6 sm:gap-10">
        {navLinks.map(({ label, href }) => {
          const id = href.replace('#', '');
          const isActive = active === id;
          return (
            <a
              key={id}
              href={href}
              className={[
                'text-sm font-medium tracking-wide transition-colors duration-200',
                isActive
                  ? 'text-cyan-400 border-b-2 border-cyan-400 pb-0.5'
                  : 'text-slate-400 hover:text-cyan-300',
              ].join(' ')}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
