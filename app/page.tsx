'use client'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white', padding: '2rem' }}>
      <section>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          The Future of Luxury Golf Carts is Here
        </h1>
        <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#ccc' }}>
          Experience performance, elegance, and technology—crafted to perfection.
        </p>
        <button style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1rem', backgroundColor: 'white', color: 'black', borderRadius: '1rem' }}>
          Reserve Now →
        </button>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ marginTop: '2rem' }}
      >
        <img
          src="/golf-cart-hero.png"
          alt="Luxury Golf Cart"
          style={{ width: '100%', borderRadius: '1rem' }}
        />
      </motion.div>
    </main>
  );
}
