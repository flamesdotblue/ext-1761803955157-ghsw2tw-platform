import { motion } from 'framer-motion';

const products = [
  {
    id: 'x1-chrono',
    name: 'X1 Chrono Blacksteel',
    price: 8990,
    img: 'https://images.unsplash.com/photo-1518544801976-3e20650a2d5a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 't7-lunar',
    name: 'T7 Lunar Titanium',
    price: 11250,
    img: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'aero-gt',
    name: 'Aero GT Skeleton',
    price: 15400,
    img: 'https://images.unsplash.com/photo-1548171916-f8fdf1aaeaf1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'noir-phantom',
    name: 'Noir Phantom Ceramic',
    price: 12800,
    img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'deepsea-pro',
    name: 'DeepSea Pro Diver',
    price: 13900,
    img: 'https://images.unsplash.com/photo-1524594081293-190a2fe0baae?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'iridium-mk2',
    name: 'Iridium MK-II',
    price: 17800,
    img: 'https://images.unsplash.com/photo-1548171916-f8fdf1aaeaf1?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Collection() {
  return (
    <section id="collection" className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col items-start justify-between gap-6 sm:mb-14 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-xs tracking-[0.35em] text-yellow-300/80 uppercase">Shop</p>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold">Featured Collection</h2>
          </div>
          <a
            href="#"
            className="rounded-full border border-yellow-400/40 px-5 py-2.5 text-sm text-yellow-200 hover:border-yellow-300/70 hover:text-yellow-100 transition"
          >
            View All Releases
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-yellow-400/20 bg-gradient-to-b from-neutral-900/40 to-black/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(250,204,21,0.12),transparent_60%)]" />
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 p-4">
                <div>
                  <h3 className="text-lg font-medium text-neutral-100">{p.name}</h3>
                  <p className="mt-1 text-sm text-yellow-200">${p.price.toLocaleString()}</p>
                </div>
                <div className="flex gap-2">
                  <button className="rounded-full border border-yellow-400/40 px-4 py-2 text-xs text-yellow-200 hover:border-yellow-300/70 hover:text-yellow-100 transition">
                    View Details
                  </button>
                  <button className="rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 px-4 py-2 text-xs font-medium text-black hover:brightness-110 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
