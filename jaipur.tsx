'use client';

import Link from 'next/link';

const PlaceCard = ({ name, desc }: { name: string; desc: string }) => (
  <div className="rounded-lg border-l-4 border-orange-500 bg-yellow-50 p-6 transition hover:translate-x-2">
    <h3 className="mb-3 text-xl font-bold text-orange-600">{name}</h3>
    <p className="mb-4 text-gray-700">{desc}</p>
    <div className="h-48 w-full rounded-lg bg-gray-300">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0893098648703!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57a28d%3A0xce1c63a3b6012e89!2sJaipur!5e0!3m2!1sen!2sin!4v1701520000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
);

const CuisineItem = ({ name, desc }: { name: string; desc: string }) => (
  <div className="rounded-lg border-2 border-orange-400 bg-gradient-to-b from-orange-50 to-yellow-50 p-6">
    <h3 className="mb-2 text-lg font-bold text-orange-600">{name}</h3>
    <p className="text-gray-700">{desc}</p>
  </div>
);

export default function Jaipur() {
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
        <h1 className="text-4xl font-bold drop-shadow-lg">🏰 Jaipur - The Pink City 🏰</h1>
        <p className="mt-2 italic">Royal Heritage and Architectural Splendor</p>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Map Section */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-orange-400 pb-2 text-3xl font-bold text-orange-600">📍 Location Map</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0893098648703!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57a28d%3A0xce1c63a3b6012e89!2sJaipur!5e0!3m2!1sen!2sin!4v1701520000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Popular Places */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-orange-400 pb-2 text-3xl font-bold text-orange-600">🏛️ Popular Places to Visit</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {places.map((place, i) => (
              <PlaceCard key={i} name={place.name} desc={place.desc} />
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

        {/* About Section */}
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
