export default function ContactAndFooter() {
  return (
    <div className="pt-24 pb-10 bg-gradient-to-b from-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl tracking-tight">Contact</h3>
            <p className="text-sm text-zinc-400 mt-2">For private appointments, bespoke orders, and press.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Message sent. Our concierge will respond shortly.');
              }}
              className="mt-6 space-y-4"
            >
              <div>
                <label className="text-sm text-zinc-400">Name</label>
                <input required className="mt-1 w-full bg-zinc-900/60 border border-zinc-800 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300/30" />
              </div>
              <div>
                <label className="text-sm text-zinc-400">Email</label>
                <input type="email" required className="mt-1 w-full bg-zinc-900/60 border border-zinc-800 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300/30" />
              </div>
              <div>
                <label className="text-sm text-zinc-400">Message</label>
                <textarea rows={4} required className="mt-1 w-full bg-zinc-900/60 border border-zinc-800 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300/30" />
              </div>
              <button className="px-5 py-2.5 rounded-md bg-gradient-to-br from-yellow-500/80 to-amber-300/60 text-zinc-900 font-medium">Send</button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl tracking-tight">Visit</h3>
            <p className="text-sm text-zinc-400 mt-2">38 Savile Row, London • Open Mon–Sat 10:00–18:00</p>
            <div className="mt-4 aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
              <iframe
                title="map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9933.373066192922!2d-0.147!3d51.511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d437d8b9bd%3A0x9a83764f!2sSavile%20Row!5e0!3m2!1sen!2suk!4v1686755555555"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-zinc-800 p-4 bg-zinc-950/60">
                <div className="text-zinc-400">Concierge</div>
                <div>concierge@flames.blue</div>
                <div>+44 20 1234 5678</div>
              </div>
              <div className="rounded-lg border border-zinc-800 p-4 bg-zinc-950/60">
                <div className="text-zinc-400">Business</div>
                <div>VAT GB123456789</div>
                <div>Reg. 09876543</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-500" />
            <div className="text-sm tracking-[0.2em] text-zinc-400">FLAMES.BLUE</div>
          </div>
          <div className="text-xs text-zinc-500">© {new Date().getFullYear()} Flames Blue. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}
