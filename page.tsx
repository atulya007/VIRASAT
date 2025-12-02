'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* City Selection Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="mx-4 max-w-md animate-in slide-in-from-top rounded-2xl bg-white p-8 shadow-2xl">
            <h1 className="mb-2 text-center text-3xl font-bold">
              🕉️ 🏰 Welcome to India's Heritage 🏰 🕉️
            </h1>
            <p className="mb-8 text-center text-lg text-gray-600">
              Choose a city to explore its rich cultural heritage, landmarks, cuisine, and traditions
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
              <Link
                href="/varanasi"
                className="flex-1 rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-center font-bold text-white transition hover:scale-105 hover:shadow-lg"
              >
                🛕 Varanasi
              </Link>
              <Link
                href="/jaipur"
                className="flex-1 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-center font-bold text-white transition hover:scale-105 hover:shadow-lg"
              >
                🏰 Jaipur
              </Link>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full text-sm text-gray-500 hover:text-gray-700"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Hero Section (visible when modal dismissed) */}
      <div className={`transition-opacity ${showModal ? 'opacity-30' : 'opacity-100'}`}>
        <header className="bg-gradient-to-r from-red-600 to-red-800 py-8 text-center text-white shadow-lg">
          <h1 className="text-4xl font-bold drop-shadow-lg">🕉️ Varanasi & Jaipur Heritage 🏰</h1>
          <p className="mt-2 italic">Preserving and Promoting India's Cultural Treasures</p>
        </header>

        <div className="bg-gradient-to-b from-red-900 to-orange-900 py-20 text-center text-white">
          <h2 className="text-5xl font-bold drop-shadow-lg">Journey Through Sacred and Royal India</h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl">
            Explore the spiritual heart of Varanasi and the regal grandeur of Jaipur - two cities that embody the soul of India's rich cultural heritage
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Link
              href="/varanasi"
              className="group rounded-xl bg-white p-8 shadow-lg transition hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">🛕</div>
              <h3 className="mb-2 text-2xl font-bold text-red-700 group-hover:text-red-800">
                Varanasi - The Eternal City
              </h3>
              <p className="text-gray-600">
                Explore the spiritual heart of India, sacred ghats, ancient temples, and living traditions spanning millennia.
              </p>
            </Link>

            <Link
              href="/jaipur"
              className="group rounded-xl bg-white p-8 shadow-lg transition hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">🏰</div>
              <h3 className="mb-2 text-2xl font-bold text-orange-600 group-hover:text-orange-700">
                Jaipur - The Pink City
              </h3>
              <p className="text-gray-600">
                Discover royal palaces, architectural marvels, vibrant traditions, and the grandeur of Rajasthan.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
