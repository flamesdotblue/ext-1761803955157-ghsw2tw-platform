import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.75)_70%,rgba(0,0,0,0.95)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs tracking-[0.45em] text-yellow-300/80 uppercase"
          >
            Precision • Power • Perfection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
          >
            Where Time Meets Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 max-w-xl text-neutral-300"
          >
            Crafted with obsessive detail. Engineered for performance. Designed to leave an impression that lingers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#collection"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 px-6 py-3 text-black font-medium shadow-[0_0_30px_rgba(234,179,8,0.35)] hover:brightness-110 transition"
            >
              Explore Collection
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              className="rounded-full border border-yellow-400/30 px-6 py-3 text-yellow-200 hover:border-yellow-300/60 hover:text-yellow-100 transition"
            >
              Our Legacy
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 to-transparent" />
    </section>
  );
}
