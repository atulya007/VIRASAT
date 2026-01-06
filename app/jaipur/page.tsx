'use client';

import Link from 'next/link';
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ShareButtons from '../components/ShareButtons';

const PlaceCard = ({ name, desc, onView }: { name: string; desc: string; onView?: () => void }) => (
  <div className="rounded-lg border-l-4 border-orange-500 bg-yellow-50 p-6 transition hover:translate-x-2">
    <h3 className="mb-3 text-xl font-bold text-orange-600">{name}</h3>
    <p className="mb-4 text-gray-700">{desc}</p>
    <div className="mt-3">
      <button onClick={onView} className="btn-cta">View on map</button>
    </div>
  </div>
);

const CuisineItem = ({ name, desc }: { name: string; desc: string }) => (
  <div className="rounded-lg border-2 border-orange-400 bg-gradient-to-b from-orange-50 to-yellow-50 p-6">
    <h3 className="mb-2 text-lg font-bold text-orange-600">{name}</h3>
    <p className="text-gray-700">{desc}</p>
  </div>
);

const MapEmbed = ({ query }: { query: string }) => {
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <iframe
      src={embedUrl}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default function Jaipur() {
  const [mapQuery, setMapQuery] = useState('Jaipur, Rajasthan, India');

  const places = [
    {
      name: 'Amber Fort (Amer Palace)',
      desc: 'A majestic hilltop fortress and palace complex, blending Hindu and Mughal architecture with stunning views.',
    },
    {
      name: 'Hawa Mahal - Palace of Winds',
      desc: 'The iconic pink structure with 953 small windows. An architectural marvel built in 1799.',
    },
    {
      name: 'City Palace',
      desc: 'A stunning blend of Rajasthani and Mughal architecture, still partially inhabited by the royal family.',
    },
    {
      name: 'Jantar Mantar Observatory',
      desc: 'A UNESCO World Heritage Site featuring 19 architectural astronomical instruments built by Maharaja Jai Singh II.',
    },
  ];

  const cuisine = [
    {
      name: '🍲 Dal Baati Churma',
      desc: 'Baked wheat balls served with lentil curry and sweet crumbled wheat. The signature Rajasthani dish.',
    },
    {
      name: '🥘 Laal Maas',
      desc: 'A fiery red curry made with tender meat and red spices. One of Rajasthan\'s most famous royal dishes.',
    },
    {
      name: '🍰 Ghewar',
      desc: 'A sweet disc-shaped dessert made with flour, ghee, and milk. A traditional festival favorite.',
    },
    {
      name: '🥨 Pyaaz Kachori',
      desc: 'Deep-fried pastry filled with spiced onions. A savory Jaipur snack with perfect balance of flavors.',
    },
    {
      name: '🍬 Kalakand',
      desc: 'A traditional sweet made from solidified milk and paneer, flavored with cardamom and nuts.',
    },
    {
      name: '🍱 Rajasthani Thali',
      desc: 'A complete meal with various curries, breads, and accompaniments. A complete taste of Rajasthan.',
    },
  ];

  return (
    <div className="min-h-screen bg-yellow-50">
      <Link
        href="/"
        className="fixed left-6 top-6 z-10 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 font-bold text-white transition hover:scale-105"
      >
        ← Back
      </Link>

      <header className="bg-gradient-to-r from-orange-500 to-orange-600 py-8 text-center text-white shadow-lg">
        <div className="mb-4">
          <ShareButtons url="/jaipur" title="Explore Jaipur - The Pink City | VIRASAT" />
        </div>
        <h1 className="text-4xl font-bold drop-shadow-lg">🏰 Jaipur - The Pink City 🏰</h1>
        <p className="mt-2 text-sm">Part of VIRASAT - Exploring Indian Culture & Heritage</p>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Hero Image - Jaipur Vibe */}
        <section className="mb-8 rounded-xl overflow-hidden">
          <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/jaipur/cover.jpg"
              alt="Jaipur - The Pink City"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute left-6 bottom-6 text-white">
              <h2 className="text-3xl font-bold drop-shadow">Jaipur — The Pink City</h2>
              <p className="mt-1 text-sm">Royal palaces, vibrant bazaars, and centuries of craftsmanship</p>
            </div>
          </div>
        </section>

        <Breadcrumbs items={[{ label: 'Jaipur' }]} />

        {/* Map Section (interactive: updates when user clicks 'View on map') */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-orange-400 pb-2 text-3xl font-bold text-orange-600">📍 Location Map</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden">
            {/* mapQuery state controls which place is shown with a pin */}
            <MapEmbed query={mapQuery} />
          </div>
        </section>

        {/* Popular Places */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-orange-400 pb-2 text-3xl font-bold text-orange-600">🏛️ Popular Places to Visit</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {places.map((place, i) => (
              <PlaceCard
                key={i}
                name={place.name}
                desc={place.desc}
                onView={() => setMapQuery(`${place.name}, Jaipur, India`)}
              />
            ))}
          </div>
        </section>

        {/* Gallery: Popular Places */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-orange-400 pb-2 text-3xl font-bold text-orange-600">📸 Gallery — Popular Places</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: '/images/jaipur/amber-fort.jpg', alt: 'Amber Fort', fallback: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&h=600&fit=crop' },
              { src: '/images/jaipur/hawa-mahal.jpg', alt: 'Hawa Mahal', fallback: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop' },
              { src: '/images/jaipur/city-palace.jpg', alt: 'City Palace', fallback: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&h=600&fit=crop' },
              { src: '/images/jaipur/jantar-mantar.jpg', alt: 'Jantar Mantar', fallback: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop' },
            ].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-48 w-full object-cover"
                  onError={(e) => { e.currentTarget.src = img.fallback; }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Cuisine */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-orange-400 pb-2 text-3xl font-bold text-orange-600">🍜 Traditional Cuisine of Jaipur</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cuisine.map((item, i) => (
              <CuisineItem key={i} name={item.name} desc={item.desc} />
            ))}
          </div>
        </section>

        {/* Gallery: Traditional Cuisine */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-orange-400 pb-2 text-3xl font-bold text-orange-600">🍽️ Gallery — Traditional Cuisine</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: '/images/jaipur/dal-baati.jpg', alt: 'Dal Baati Churma', fallback: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop' },
              { src: '/images/jaipur/laal-maas.jpg', alt: 'Laal Maas', fallback: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop' },
              { src: '/images/jaipur/ghewar.jpg', alt: 'Ghewar', fallback: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&h=600&fit=crop' },
              { src: '/images/jaipur/pyaaz-kachori.jpg', alt: 'Pyaaz Kachori', fallback: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop' },
            ].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-48 w-full object-cover"
                  onError={(e) => { e.currentTarget.src = img.fallback; }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Festivals */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-orange-400 pb-2 text-3xl font-bold text-orange-600">🎉 Festivals & Celebrations</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border-2 border-orange-400 bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-orange-600">Elephant Festival</h3>
              <p className="mb-4 text-gray-700">A grand celebration featuring decorated elephants, camel races, and traditional performances at the Amber Fort.</p>
              <p className="text-sm text-gray-600">Usually in March</p>
            </div>
            <div className="rounded-lg border-2 border-orange-400 bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-orange-600">Teej Festival</h3>
              <p className="mb-4 text-gray-700">A vibrant festival celebrating the arrival of monsoon, with women in traditional attire and folk music.</p>
              <p className="text-sm text-gray-600">Usually in July/August</p>
            </div>
            <div className="rounded-lg border-2 border-orange-400 bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-orange-600">Gangaur Festival</h3>
              <p className="mb-4 text-gray-700">A spring festival celebrating marital bliss with processions of beautifully decorated idols.</p>
              <p className="text-sm text-gray-600">Usually in March/April</p>
            </div>
            <div className="rounded-lg border-2 border-orange-400 bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-orange-600">Kite Festival</h3>
              <p className="mb-4 text-gray-700">Makar Sankranti celebrations with colorful kites filling the sky, symbolizing the triumph of good over evil.</p>
              <p className="text-sm text-gray-600">Usually in January</p>
            </div>
          </div>
        </section>

        {/* Historical Timeline */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-orange-400 pb-2 text-3xl font-bold text-orange-600">⏳ Historical Timeline</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-lg font-bold text-orange-600">1727</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-orange-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-gray-700">Jaipur founded by Maharaja Jai Singh II, one of India's first planned cities.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-lg font-bold text-orange-600">1734</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-orange-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-gray-700">Construction of Jantar Mantar Observatory completed, showcasing astronomical instruments.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-lg font-bold text-orange-600">1799</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-orange-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-gray-700">Hawa Mahal (Palace of Winds) completed, an architectural marvel with 953 windows.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-lg font-bold text-orange-600">1853</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-orange-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-gray-700">Jaipur becomes the capital of the princely state during British colonial period.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-lg font-bold text-orange-600">1949</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-orange-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-gray-700">Jaipur becomes part of independent India and designated as the capital of Rajasthan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Artisans & Crafts */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-orange-400 pb-2 text-3xl font-bold text-orange-600">🎨 Local Artisans & Crafts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border-2 border-orange-400 bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-orange-600">Blue Pottery</h3>
              <p className="text-gray-700">Unique glazed pottery with Persian and Mughal influences, featuring intricate blue designs on white backgrounds.</p>
            </div>
            <div className="rounded-lg border-2 border-orange-400 bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-orange-600">Block Printing</h3>
              <p className="text-gray-700">Traditional textile printing using hand-carved wooden blocks, creating intricate patterns on fabrics.</p>
            </div>
            <div className="rounded-lg border-2 border-orange-400 bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-orange-600">Gem Cutting & Jewelry</h3>
              <p className="text-gray-700">World-renowned craftsmanship in cutting and setting precious stones, especially emeralds and rubies.</p>
            </div>
            <div className="rounded-lg border-2 border-orange-400 bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-orange-600">Bandhani (Tie & Dye)</h3>
              <p className="text-gray-700">Ancient resist-dyeing technique creating intricate patterns by tying and dyeing fabrics.</p>
            </div>
          </div>
        </section>
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-orange-400 pb-2 text-3xl font-bold text-orange-600">📖 About Jaipur</h2>
          <div className="space-y-4 text-justify text-gray-700 leading-relaxed">
            <p>
              Jaipur, the capital of Rajasthan, is one of India's most planned and visually striking cities, famously known as "The Pink City" due to its distinctive terracotta-colored buildings. Founded in 1727 by Maharaja Jai Singh II, Jaipur was one of the first planned cities in India, designed using the principles of ancient Hindu architecture and Mughal city planning. The city's grid-based layout and consistent architecture make it a unique urban gem that continues to attract visitors from around the world who come to experience its royal grandeur and architectural excellence.
            </p>

            <p>
              The heart of Jaipur is dominated by magnificent monuments that showcase the brilliance of Rajasthani architecture. Amber Fort, perched on a hilltop overlooking the city, is a breathtaking blend of Hindu and Mughal styles with ornate decorations, intricate mirror work, and commanding views. The Hawa Mahal, or Palace of Winds, is perhaps Jaipur's most iconic structure—a five-story pink building with 953 small windows carved in geometric patterns. This extraordinary architectural marvel was originally designed as a privacy screen for royal women to observe street life and festivals without being seen. The City Palace remains a testament to the fusion of Rajasthani and Western architecture, while Jantar Mantar, a UNESCO World Heritage Site, showcases Maharaja Jai Singh II's fascination with astronomy with its collection of 19 astronomical observation instruments.
            </p>

            <p>
              Beyond its architectural wonders, Jaipur is a vibrant cultural hub renowned for its traditional arts and crafts. Block printing, blue pottery, tie-and-dye fabrics (bandhani), gem cutting, and jewelry work are practiced by artisans who have maintained their ancestral techniques for generations. The city's bazaars are treasure troves where visitors can find exquisite traditional textiles, precious stones, and handcrafted items. Jaipur is particularly famous for its blue pottery, a craft that's unique to the city and reflects the influence of Persian and Mughal traditions.
            </p>

            <p>
              The culinary traditions of Jaipur are an integral part of Rajasthan's cultural identity. Dishes like Dal Baati Churma showcase the simplicity and robustness of rural Rajasthani cuisine, while dishes like Laal Maas represent the royal heritage and sophisticated palates of the region's rulers. Ghewar, a legendary dessert, and Kalakand sweets are confections that have been cherished for centuries. Street food in Jaipur, from Kachoris to Samosas, is legendary and offers an authentic taste of the region's culinary spirit.
            </p>

            <p>
              Jaipur's festivals are celebrations of color, music, and tradition. The Elephant Festival sees decorated elephants parading through the city, while Teej and Gangaur festivals celebrate the monsoon and spring seasons with traditional music, dance, and rituals. The city maintains its royal heritage through ongoing conservation efforts and cultural performances. Today, Jaipur stands as a perfect blend of history and modernity, where ancient palaces coexist with contemporary urban life, making it not just a destination for tourists but a living museum of Rajasthan's glorious past and vibrant present.
            </p>
          </div>
        </section>
      </div>

      <footer className="mt-8 bg-gray-800 px-4 py-8 text-center text-gray-200">
        <p className="font-bold">Preserving India's Cultural Legacy</p>
        <p>Celebrating the heritage of Jaipur</p>
        <p className="text-sm">© 2024 - A tribute to India's timeless traditions</p>
      </footer>
    </div>
  );
}
