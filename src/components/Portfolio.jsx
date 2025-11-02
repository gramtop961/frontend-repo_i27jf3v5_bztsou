export default function Portfolio() {
  const projects = [
    {
      title: 'Penthouse Serenity',
      tag: 'Residential',
      image: 'https://images.unsplash.com/photo-1681465637438-8854d230fcfb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQZW50aG91c2UlMjBTZXJlbml0eXxlbnwwfDB8fHwxNzYyMDgyNTAyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Gallery Loft',
      tag: 'Adaptive Reuse',
      image: 'https://images.unsplash.com/photo-1650137938625-11576502aecd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHYWxsZXJ5JTIwTG9mdHxlbnwwfDB8fHwxNzYyMDgyNTAyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Coastal Minimal',
      tag: 'Residential',
      image: 'https://images.unsplash.com/photo-1758486158570-e1ed701c1267?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb2FzdGFsJTIwTWluaW1hbHxlbnwwfDB8fHwxNzYyMDgyNTAzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Branded Lobby',
      tag: 'Commercial',
      image: 'https://images.unsplash.com/photo-1758714919704-7c36f40f1368?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmFuZGVkJTIwTG9iYnl8ZW58MHwwfHx8MTc2MjA4MjUwM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Warm Nordic',
      tag: 'Residential',
      image: 'https://images.unsplash.com/photo-1652598888378-1fef7852bbb7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXYXJtJTIwTm9yZGljfGVufDB8MHx8fDE3NjIwODI1MDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Boutique Office',
      tag: 'Workspace',
      image: 'https://images.unsplash.com/photo-1636386274609-1e2580578e2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb3V0aXF1ZSUyME9mZmljZXxlbnwwfDB8fHwxNzYyMDgyNTA0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="portfolio" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">Selected Works</h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            Spaces that balance functionality and emotion. A curated glimpse into our recent residential and commercial projects.
          </p>
        </div>
        <a href="#contact" className="hidden rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 md:inline-block">
          Start a Project
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm ring-1 ring-black/5">
            <img
              src={p.image}
              alt={p.title}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-block rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur">
                {p.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white drop-shadow">{p.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
