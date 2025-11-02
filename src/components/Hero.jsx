import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-widest backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Award-Winning Studio
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Elevated Interiors for Modern, Luxurious Living
          </h1>
          <p className="mt-4 text-base/relaxed text-white/80 md:text-lg">
            We craft refined, timeless spaces for discerning homeowners and visionary brands. From concept to completion, every detail is curated to feel effortless.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#portfolio" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow hover:bg-gray-100">
              Explore Our Work
            </a>
            <a href="#contact" className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white hover:border-white">
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
