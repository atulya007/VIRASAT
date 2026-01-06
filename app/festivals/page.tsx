'use client';

import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const festivals = [
  {
    name: 'Diwali',
    date: 'October/November',
    city: 'Varanasi',
    description: 'Festival of lights celebrating the victory of good over evil.',
    significance: 'Special illuminations along the ghats create a magical atmosphere.'
  },
  {
    name: 'Holi',
    date: 'March',
    city: 'Jaipur',
    description: 'Festival of colors celebrating the arrival of spring.',
    significance: 'Royal palaces are decorated and people play with colored powders.'
  },
  {
    name: 'Maha Shivaratri',
    date: 'February/March',
    city: 'Varanasi',
    description: 'Night-long celebration dedicated to Lord Shiva.',
    significance: 'Thousands gather at temples for prayers and fasting.'
  },
  {
    name: 'Pushkar Fair',
    date: 'October/November',
    city: 'Jaipur',
    description: 'One of the largest camel fairs in the world.',
    significance: 'Camel trading, cultural performances, and religious ceremonies.'
  },
  {
    name: 'Chhath Puja',
    date: 'October/November',
    city: 'Varanasi',
    description: 'Festival dedicated to the Sun God with offerings at river banks.',
    significance: 'Unique rituals performed at the ghats with traditional music.'
  },
  {
    name: 'Teej Festival',
    date: 'July/August',
    city: 'Jaipur',
    description: 'Festival celebrating the monsoon and marital bliss.',
    significance: 'Women dress in green and perform traditional dances.'
  }
];

export default function Festivals() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-100 to-orange-100">
      <Link
        href="/"
        className="fixed left-6 top-6 z-10 rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 font-bold text-white transition hover:scale-105"
      >
        ← Back
      </Link>

      <header className="bg-gradient-to-r from-red-600 to-red-800 py-8 text-center text-white shadow-lg">
        <h1 className="text-4xl font-bold drop-shadow-lg">🎉 Cultural Calendar</h1>
        <p className="mt-2 text-sm">Festivals and Events Across Indian Cities</p>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumbs items={[{ label: 'Festivals' }]} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {festivals.map((festival, index) => (
            <div key={index} className="rounded-xl bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold text-red-700 mb-2">{festival.name}</h3>
              <p className="text-orange-600 font-semibold mb-2">{festival.date}</p>
              <p className="text-blue-600 mb-3">{festival.city}</p>
              <p className="text-gray-700 mb-4">{festival.description}</p>
              <p className="text-sm text-gray-600 italic">{festival.significance}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-8 bg-gray-800 px-4 py-8 text-center text-gray-200">
        <p className="font-bold">Celebrating India's Cultural Heritage</p>
        <p>Join us in experiencing the festivals that define our traditions</p>
        <p className="text-sm">© 2025 - VIRASAT</p>
      </footer>
    </div>
  );
}