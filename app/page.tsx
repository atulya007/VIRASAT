'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-r from-amber-100 to-orange-100">
      {/* City Selection Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="mx-4 max-w-md animate-in slide-in-from-top rounded-3xl bg-white p-10 shadow-2xl">
            <div className="mb-6 flex justify-center">
              <span className="sr-only">VIRASAT</span>
            </div>
            <h1 className="mb-2 text-center text-3xl font-bold text-amber-900">
              Welcome to VIRASAT
            </h1>
            <p className="mb-2 text-center text-xs tracking-widest text-amber-700 font-semibold">
              EXPLORING INDIAN CULTURE & HERITAGE
            </p>
            <p className="mb-8 text-center text-sm text-gray-600">
              Choose a city to explore its rich cultural heritage, landmarks, cuisine, and traditions
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
              <Link
                href="/varanasi"
                className="flex-1 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 text-center font-bold text-white transition hover:scale-105 hover:shadow-xl hover:from-red-700 hover:to-red-800"
              >
                 Varanasi
              </Link>
              <Link
                href="/jaipur"
                className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 text-center font-bold text-white transition hover:scale-105 hover:shadow-xl hover:from-orange-600 hover:to-orange-700"
              >
                 Jaipur
              </Link>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full text-sm font-semibold text-gray-500 hover:text-gray-700 transition"
            >
               Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="w-full">
          <header className="bg-transparent py-4 px-4 md:px-8 lg:px-12 text-center text-gray-900 relative overflow-hidden">
            <div className="absolute -right-24 -top-10 opacity-8">
              {/* subtle decorative circle for texture */}
              <svg width="200" height="200" viewBox="0 0 100 100" className="transform rotate-12">
                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(197,86,33,0.06)" strokeWidth="5" />
              </svg>
            </div>
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-8 py-2">
              <div className="flex-shrink-0">
                <img src="/logo.svg" alt="VIRASAT Logo" className="h-56 w-56 md:h-64 md:w-auto drop-shadow-md transition-transform duration-300" />
              </div>
              <div className="text-center">
                <h1 className="text-7xl md:text-8xl font-bold mb-2 site-title">VIRASAT</h1>
                <div className="ornament-underline" style={{ width: 140 }}></div>
                <p className="text-sm md:text-base tracking-widest font-medium mt-3">Exploring Indian Culture & Heritage</p>
              </div>
            </div>
          </header>

          <div className="bg-transparent py-10 px-4 md:px-8 lg:px-12 text-center text-gray-800 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">Journey Through Sacred and Royal India</h2>
              <p className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed text-gray-700">
                Discover the spiritual essence of Varanasi and the regal magnificence of Jaipur—two jewels that encapsulate India's timeless heritage, living traditions, and architectural splendor.
              </p>
            </div>
          </div>

        {/* Section title */}
        <div className="w-full px-4 md:px-8 lg:px-12 pt-6 pb-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Our Cities</h2>
        </div>

        {/* City Cards with Images */}
        <div className="w-full px-4 md:px-8 lg:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Varanasi Card */}
            <Link
              href="/varanasi"
              className="group relative rounded-2xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-3xl hover:scale-105 cursor-pointer card-ornament"
            >
              <div className="relative h-96 overflow-hidden bg-red-800">
                <img
                  src="/images/varanasi/cover.jpg"
                  alt="Varanasi"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-75"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&h=600&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="mb-3 text-5xl"></div>
                <h3 className="text-4xl font-bold mb-3 group-hover:text-red-300 transition">
                  Varanasi
                </h3>
                <p className="text-lg mb-4 font-semibold">The Eternal City</p>
                <p className="text-sm leading-relaxed">
                  Explore the spiritual heart of India with sacred ghats, ancient temples, and timeless traditions along the holy Ganges River.
                </p>
                <div className="mt-4">
                  <span className="inline-block btn-cta btn-cta-red">Explore</span>
                </div>
              </div>
            </Link>

            {/* Madurai Card */}
            <Link
              href="/madurai"
              className="group relative rounded-2xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-3xl hover:scale-105 cursor-pointer card-ornament"
            >
              <div className="relative h-96 overflow-hidden bg-emerald-800">
                <img
                  src="/images/madurai/cover.jpg"
                  alt="Madurai"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-75"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1200&h=600&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="mb-3 text-5xl"></div>
                <h3 className="text-4xl font-bold mb-3 group-hover:text-emerald-300 transition">
                  Madurai
                </h3>
                <p className="text-lg mb-4 font-semibold">Temple City</p>
                <p className="text-sm leading-relaxed">
                  Explore Madurai's vibrant Meenakshi temple, deep-rooted Tamil traditions, colorful festivals, and thriving street-food culture.
                </p>
                <div className="mt-4">
                  <span className="inline-block btn-cta btn-cta-red">Explore</span>
                </div>
              </div>
            </Link>

            {/* Jaipur Card */}
            <Link
              href="/jaipur"
              className="group relative rounded-2xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-3xl hover:scale-105 cursor-pointer card-ornament"
            >
              <div className="relative h-96 overflow-hidden bg-orange-700">
                <img
                  src="/images/jaipur/cover.jpg"
                  alt="Jaipur"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-75"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=600&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="mb-3 text-5xl"></div>
                <h3 className="text-4xl font-bold mb-3 group-hover:text-orange-300 transition">
                  Jaipur
                </h3>
                <p className="text-lg mb-4 font-semibold">The Pink City</p>
                <p className="text-sm leading-relaxed">
                  Discover royal palaces, architectural wonders, vibrant bazaars, and the grandeur of Rajasthan's cultural legacy.
                </p>
                <div className="mt-4">
                  <span className="inline-block btn-cta btn-cta-red">Explore</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4 md:px-8 lg:px-12 text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">VIRASAT</h3>
              <p className="text-sm text-gray-300 tracking-widest">Exploring Indian Culture & Heritage</p>
            </div>
          <p className="text-gray-400 mb-4"> 2025 - A tribute to India's timeless traditions and living heritage</p>
          <p className="text-xs text-gray-500">Preserving the essence of two magnificent Indian cities</p>
        </footer>
      </div>
    </main>
  );
}
