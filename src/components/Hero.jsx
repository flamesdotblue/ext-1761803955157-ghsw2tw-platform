import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full py-24 md:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white drop-shadow-[0_0_24px_rgba(250,204,21,0.15)]"
          >
            Precision. Power. <span className="text-yellow-300">Perfection.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-zinc-300"
          >
            A premium collection of timepieces engineered with obsessive detail. Crafted for those who move with intent and live by design.
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              href="#collection"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-black bg-gradient-to-br from-yellow-300 via-amber-300 to-yellow-500 shadow-[0_8px_40px_rgba(234,179,8,0.35)] hover:shadow-[0_10px_50px_rgba(234,179,8,0.5)] transition-shadow"
            >
              Explore Collection
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-yellow-300 border border-yellow-500/50 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors"
            >
              Our Legacy
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
