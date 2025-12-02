'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-orange-100">
      {/* City Selection Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="mx-4 max-w-md animate-in slide-in-from-top rounded-3xl bg-white p-10 shadow-2xl">
            <div className="mb-6 flex justify-center">
              <img src="/logo.svg" alt="VIRASAT Logo" className="h-40 w-40 drop-shadow-xl" />
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
        <header className="bg-gradient-to-r from-red-600 via-red-700 to-orange-600 py-12 px-4 text-center text-white shadow-2xl">
          <div className="mb-6 flex justify-center">
            <img src="/logo.svg" alt="VIRASAT Logo" className="h-24 w-24 drop-shadow-2xl hover:scale-110 transition duration-300" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg mb-2">VIRASAT</h1>
          <p className="text-sm md:text-base tracking-widest font-semibold drop-shadow">EXPLORING INDIAN CULTURE & HERITAGE</p>
        </header>

        <div className="bg-gradient-to-b from-red-900 via-orange-800 to-yellow-800 py-24 px-4 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'}}></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold drop-shadow-lg mb-6">Journey Through Sacred and Royal India</h2>
            <p className="mx-auto max-w-3xl text-lg md:text-xl drop-shadow leading-relaxed">
              Discover the spiritual essence of Varanasi and the regal magnificence of Jaipur—two jewels that encapsulate India's timeless heritage, living traditions, and architectural splendor
            </p>
          </div>
        </div>

        {/* City Cards with Images */}
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Varanasi Card */}
            <Link
              href="/varanasi"
              className="group relative rounded-2xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-3xl hover:scale-105 cursor-pointer"
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
              </div>
            </Link>

            {/* Jaipur Card */}
            <Link
              href="/jaipur"
              className="group relative rounded-2xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-3xl hover:scale-105 cursor-pointer"
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
              </div>
            </Link>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 py-16 px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">Explore Our Cities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-l-4 border-red-600">
                <div className="text-4xl mb-4"></div>
                <h3 className="text-2xl font-bold text-red-700 mb-4">Spiritual Heritage</h3>
                <p className="text-gray-600 mb-6">
                  Varanasi stands as one of the world's oldest continuously inhabited cities, with over 3,000 years of spiritual and cultural significance.
                </p>
                <Link href="/varanasi" className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition">
                  Discover Varanasi 
                </Link>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-l-4 border-orange-600">
                <div className="text-4xl mb-4"></div>
                <h3 className="text-2xl font-bold text-orange-700 mb-4">Royal Grandeur</h3>
                <p className="text-gray-600 mb-6">
                  Jaipur's perfectly planned architecture, magnificent palaces, and vibrant bazaars showcase the brilliance of Rajasthani craftsmanship.
                </p>
                <Link href="/jaipur" className="inline-block bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition">
                  Discover Jaipur 
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4 text-center">
          <div className="mb-6">
            <img src="/logo.svg" alt="VIRASAT Logo" className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">VIRASAT</h3>
            <p className="text-sm text-gray-300 tracking-widest">Exploring Indian Culture & Heritage</p>
          </div>
          <p className="text-gray-400 mb-4"> 2024 - A tribute to India's timeless traditions and living heritage</p>
          <p className="text-xs text-gray-500">Preserving the essence of two magnificent Indian cities</p>
        </footer>
      </div>
    </main>
  );
}
