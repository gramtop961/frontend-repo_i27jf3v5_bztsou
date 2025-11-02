import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="text-lg font-semibold tracking-tight">
          Atelier Interior
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
          <a href="#portfolio" className="hover:text-white">Work</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="rounded-full border border-white/40 px-4 py-2 hover:border-white">Contact</a>
        </nav>
      </header>

      <main>
        <Hero />
        <section id="services">
          <Services />
        </section>
        <Portfolio />
        <Testimonials />
      </main>

      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} Atelier Interior. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#portfolio" className="hover:text-gray-900">Portfolio</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
