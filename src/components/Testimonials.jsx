import { Star, Phone, Mail, MapPin } from 'lucide-react';

const testimonials = [
  {
    quote:
      'They transformed our penthouse into a sanctuary. The team anticipated needs we didn\'t know we had and delivered beyond our expectations.',
    name: 'Amara & Felix',
    role: 'Residential Clients',
  },
  {
    quote:
      'Our flagship lobby now captures our brand perfectly. Guests linger, take photos, and ask who designed it—exactly the effect we wanted.',
    name: 'Noon House Hotel',
    role: 'Hospitality Client',
  },
  {
    quote:
      'Impeccable taste and flawless execution. Organized, communicative, and deeply creative—an absolute pleasure to work with.',
    name: 'Lennox & Co.',
    role: 'Commercial Client',
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-40 max-w-7xl bg-gradient-to-b from-black/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Clients Who Love Living Here</h2>
          <p className="mt-3 text-gray-600">Kind words from people who trusted us with their most personal spaces.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <Stars />
              <blockquote className="mt-3 text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-gray-900">
                {t.name}
                <span className="block text-xs font-normal text-gray-500">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div id="contact" className="mt-14 grid grid-cols-1 items-center gap-6 rounded-2xl bg-gray-900 p-8 text-white md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">Let’s design something extraordinary</h3>
            <p className="mt-2 text-white/80">Share your vision and we\'ll craft a plan, timeline, and transparent investment outline.</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="tel:+1234567890" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
              <Phone className="h-4 w-4" /> Call us
            </a>
            <a href="mailto:studio@atelierinterior.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium hover:border-white">
              <Mail className="h-4 w-4" /> Email the studio
            </a>
            <div className="mt-1 inline-flex items-center justify-center gap-2 text-white/80">
              <MapPin className="h-4 w-4" /> Based in New York • Working worldwide
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
