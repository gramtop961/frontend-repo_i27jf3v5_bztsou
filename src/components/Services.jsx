import { Palette, Ruler, Home, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Full-Service Interior Design',
    desc: 'End-to-end design from concept and materiality to installation and styling for homes and boutique spaces.',
  },
  {
    icon: Palette,
    title: 'Materials & FF&E Curation',
    desc: 'Cohesive palettes, custom furniture selections, and finishes that age with grace.',
  },
  {
    icon: Ruler,
    title: 'Space Planning',
    desc: 'Flow-focused planning that maximizes natural light, comfort, and utility across your footprint.',
  },
  {
    icon: Sparkles,
    title: 'Brand & Hospitality',
    desc: 'Signature atmospheres for lobbies, showrooms, and hospitality spaces that convert walk-ins into loyalists.',
  },
];

export default function Services() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">What We Do</h2>
          <p className="mt-3 text-gray-600">
            We design for how you live and for what your brand promises. Every engagement is tailored, transparent, and executed with precision.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow">
              <div className="mb-4 inline-flex rounded-xl bg-gray-900 p-3 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
