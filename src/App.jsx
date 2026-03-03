import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

/**
 * Root application component.
 * Renders the animated background and all page sections.
 */
export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      {/* Animated background canvas (z-index 0) */}
      <BackgroundCanvas />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main content (z-index 10+) */}
      <main>
        <Hero />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}
