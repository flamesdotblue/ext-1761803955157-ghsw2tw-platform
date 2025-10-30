import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'chrono-1',
    name: 'Chrono X1 – Black Aurora',
    price: 12990,
    img: 'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'chrono-2',
    name: 'Titan V – Lunar Silver',
    price: 15490,
    img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'chrono-3',
    name: 'Spectre S – Obsidian',
    price: 11200,
    img: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'chrono-4',
    name: 'Eon GT – Solar Gold',
    price: 18990,
    img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop',
  },
];

function formatPrice(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
}

export default function CollectionPreview() {
  return (
    <section id="collection" className="relative py-20 md:py-28 bg-gradient-to-b from-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Signature Collection</h2>
            <p className="mt-2 max-w-2xl text-zinc-400">A curated selection of our most celebrated, meticulously engineered timepieces.</p>
          </div>
          <a href="#" className="hidden md:inline text-sm text-yellow-300 hover:text-yellow-200">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  alt={p.name}
                  src={p.img}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
                <div className="absolute top-3 left-3 rounded-full border border-yellow-400/40 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-wider text-yellow-300">New</div>
              </div>

              <div className="p-4">
                <h3 className="text-base font-medium leading-tight">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">Automatic • Sapphire • 200m</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-yellow-300 font-semibold">{formatPrice(p.price)}</span>
                  <div className="flex items-center gap-2">
                    <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 hover:border-yellow-400/50 hover:text-yellow-200 transition-colors">View Details</button>
                    <button className="rounded-full bg-gradient-to-br from-yellow-300 via-amber-300 to-yellow-500 text-black px-3 py-1.5 text-xs font-medium shadow-[0_8px_30px_rgba(234,179,8,0.35)] hover:shadow-[0_8px_40px_rgba(234,179,8,0.5)] transition-shadow">Add to Cart</button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div id="about" className="mt-24 grid md:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold">Our Legacy</h3>
            <p className="mt-3 text-zinc-400">Born from the pursuit of precision. Every watch is assembled by master artisans, tuned for performance, and finished to perfection.</p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-300">
              <li>• 316L stainless steel / Grade 5 titanium options</li>
              <li>• COSC-grade accuracy and shock resistance</li>
              <li>• Anti-reflective sapphire crystal</li>
              <li>• Lifetime precision service program</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8">
            <h3 id="blog" className="text-2xl font-semibold">From the Journal</h3>
            <div className="mt-6 space-y-4">
              {[1,2,3].map((n) => (
                <a key={n} href="#" className="group block rounded-xl border border-white/10 bg-white/5 p-4 hover:border-yellow-400/40 transition-colors">
                  <p className="text-sm text-zinc-400">Lifestyle</p>
                  <p className="mt-1 font-medium group-hover:text-yellow-200">Maintaining mechanical precision: a 6-month ritual</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
