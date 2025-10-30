import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h4 className="text-xl font-semibold">FLAMES.BLUE</h4>
            <p className="mt-3 max-w-md text-zinc-400">This is not just a brand — it’s a lifestyle. Precision-engineered watches with a futuristic edge.</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="rounded-full border border-yellow-500/50 bg-yellow-400/10 text-yellow-300 px-3 py-1 text-xs">Premium</span>
              <span className="rounded-full border border-white/10 bg-white/5 text-zinc-300 px-3 py-1 text-xs">Secure Checkout</span>
              <span className="rounded-full border border-white/10 bg-white/5 text-zinc-300 px-3 py-1 text-xs">Worldwide</span>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-semibold tracking-wide text-zinc-200">Navigate</h5>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li><a href="#collection" className="hover:text-yellow-300">Collection</a></li>
              <li><a href="#about" className="hover:text-yellow-300">About</a></li>
              <li><a href="#blog" className="hover:text-yellow-300">Blog</a></li>
              <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold tracking-wide text-zinc-200">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>contact@flames.blue</li>
              <li>+1 (212) 555-0190</li>
              <li>5th Avenue, New York, NY</li>
            </ul>
            <form className="mt-4 flex items-center gap-2">
              <input type="email" placeholder="Join the waitlist" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/30" />
              <button className="rounded-lg bg-gradient-to-br from-yellow-300 via-amber-300 to-yellow-500 px-3 py-2 text-sm font-medium text-black">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Flames.Blue — All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-300">Privacy</a>
            <a href="#" className="hover:text-zinc-300">Terms</a>
            <a href="#" className="hover:text-zinc-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
