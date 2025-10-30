import { motion } from 'framer-motion';

export default function AboutAndBlog({ products, onAddToCart }) {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl md:text-3xl tracking-tight mb-6">
              Our Legacy
            </motion.h3>
            <div className="relative pl-6 border-l border-zinc-800 space-y-8">
              {timeline.map((t, i) => (
                <motion.div key={t.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative">
                  <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-gradient-to-br from-yellow-500/80 to-amber-300/60" />
                  <div className="text-sm text-zinc-400">{t.year}</div>
                  <div className="text-lg text-zinc-100">{t.title}</div>
                  <div className="text-sm text-zinc-400 max-w-2xl">{t.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl md:text-3xl tracking-tight mb-6">
              Journal
            </motion.h3>
            <div className="space-y-5">
              {blog.map((b, i) => (
                <motion.a
                  key={b.title}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="block rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60"
                >
                  <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${b.img})` }} />
                  <div className="p-4">
                    <div className="text-sm text-zinc-400">{b.tag}</div>
                    <div className="text-zinc-100">{b.title}</div>
                    <div className="text-xs text-zinc-500">{b.date}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="text-sm text-zinc-400 mb-3">Editor’s Pick</h4>
              {products.slice(0, 1).map((p) => (
                <div key={p.id} className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950/60">
                  <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${p.img})` }} />
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm">{p.name}</div>
                      <div className="text-xs text-amber-300/90">${(p.price / 100).toFixed(2)}</div>
                    </div>
                    <button onClick={() => onAddToCart(p)} className="px-3 py-2 text-xs rounded-md bg-white/10 border border-zinc-800 hover:bg-white/20">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const timeline = [
  {
    year: '1986',
    title: 'Origins in precision engineering',
    desc: 'A boutique atelier dedicated to crafting instrument‑grade timepieces for explorers and visionaries.',
  },
  {
    year: '2001',
    title: 'Material innovation',
    desc: 'We introduced aerospace‑grade titanium and DLC finishes for unparalleled durability and allure.',
  },
  {
    year: '2017',
    title: 'Hybrid movement breakthrough',
    desc: 'A high‑beat automatic system with smart regulation for microsecond accuracy in extreme conditions.',
  },
  {
    year: '2025',
    title: 'The Tech‑Luxury era',
    desc: 'Merging digital craftsmanship with haute horlogerie for an experience that transcends time.',
  },
];

const blog = [
  {
    title: 'Mastering watch care: a modern guide',
    date: 'Oct 12, 2025',
    tag: 'Care',
    img: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Why titanium is redefining luxury',
    date: 'Sep 28, 2025',
    tag: 'Materials',
    img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'The future of high‑beat calibres',
    date: 'Aug 30, 2025',
    tag: 'Movement',
    img: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=1600&auto=format&fit=crop',
  },
];
