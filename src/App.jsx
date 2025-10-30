import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionPreview from './components/CollectionPreview';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 antialiased selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <CollectionPreview />
      </main>
      <Footer />
    </div>
  );
}
