import React from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-500 via-amber-400 to-amber-200 shadow-[0_0_24px_rgba(234,179,8,0.45)]"
          />
          <span className="text-lg font-semibold tracking-wide">
            FLAMES<span className="text-yellow-400">.BLUE</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a className="text-zinc-300 hover:text-yellow-300 transition-colors" href="#collection">Collection</a>
          <a className="text-zinc-300 hover:text-yellow-300 transition-colors" href="#about">About</a>
          <a className="text-zinc-300 hover:text-yellow-300 transition-colors" href="#blog">Blog</a>
          <a className="text-zinc-300 hover:text-yellow-300 transition-colors" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-100 hover:border-yellow-400/40 hover:bg-white/10 transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="ml-2 hidden sm:inline">Cart</span>
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-yellow-400 text-black text-[10px] flex items-center justify-center font-bold shadow-[0_0_16px_rgba(234,179,8,0.6)]">0</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full border border-yellow-500/50 bg-gradient-to-br from-yellow-500/20 to-amber-300/10 px-3 py-2 text-sm text-yellow-300 hover:from-yellow-500/30 hover:to-amber-300/20 transition-colors"
          >
            <User className="h-5 w-5" />
            <span className="ml-2 hidden sm:inline">Account</span>
          </motion.button>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-zinc-200">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
