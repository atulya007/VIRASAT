"use client";

import Link from "next/link";

const PlaceCard = ({ name, desc }: { name: string; desc: string }) => (
  <div className="rounded-lg border-l-4 border-emerald-600 bg-emerald-50 p-6 transition hover:translate-x-2">
    <h3 className="mb-3 text-xl font-bold text-emerald-700">{name}</h3>
    <p className="mb-4 text-gray-700">{desc}</p>
    <div className="h-48 w-full rounded-lg bg-gray-300">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.0893098648703!2d78.1198!3d9.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c7c3f1a2a1%3A0xabcdef1234567890!2sMadurai!5e0!3m2!1sen!2sin!4v1701520000000"
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
  <div className="rounded-lg border-2 border-emerald-400 bg-gradient-to-b from-emerald-50 to-yellow-50 p-6">
    <h3 className="mb-2 text-lg font-bold text-emerald-700">{name}</h3>
    <p className="text-gray-700">{desc}</p>
  </div>
);

export default function Madurai() {
  const places = [
    {
      name: "Meenakshi Amman Temple",
      desc: "A historic and architecturally stunning temple complex dedicated to Goddess Meenakshi and Lord Sundareswarar.",
    },
    {
      name: "Thirumalai Nayakkar Palace",
      desc: "A 17th-century palace known for its impressive columns, stucco ornamentation, and cultural performances.",
    },
    {
      name: "Alagar Kovil",
      desc: "A scenic hill temple dedicated to Lord Vishnu located a short drive from the city, set in lush surroundings.",
    },
    {
      name: "Gandhi Memorial Museum",
      desc: "A well-curated museum chronicling India's independence movement and Gandhi's legacy in the region.",
    },
  ];

  const cuisine = [
    {
      name: "🥤 Jigarthanda",
      desc: "A chilled, milky drink unique to Madurai made with milk, almond gum, sugar syrup and ice cream.",
    },
    {
      name: "🌯 Kari Dosai",
      desc: "A spicy meat-stuffed dosa variant popular in Madurai's street-food scene.",
    },
    {
      name: "🍛 Thalippu Vadai",
      desc: "Crispy lentil fritters often enjoyed as a snack with chutneys and tea.",
    },
    {
      name: "🍰 Maddur Vada",
      desc: "A crunchy savory snack (regional variant), perfect with chai.",
    },
    {
      name: "🍚 Idli & Sambhar",
      desc: "Classic South Indian breakfast staples served throughout the city.",
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-50">
      <Link
        href="/"
        className="fixed left-6 top-6 z-10 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 font-bold text-white transition hover:scale-105"
      >
        ← Back
      </Link>

      <header className="bg-gradient-to-r from-emerald-500 to-emerald-700 py-8 text-center text-white shadow-lg">
        <h1 className="text-4xl font-bold drop-shadow-lg">🛕 Madurai - The Temple City 🛕</h1>
        <p className="mt-2 text-sm">Part of VIRASAT - Exploring Indian Culture & Heritage</p>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Hero Image - Madurai Vibe */}
        <section className="mb-8 rounded-xl overflow-hidden">
          <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-lg">
            <img src="/images/madurai/cover.jpg" alt="Madurai - Temple City" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute left-6 bottom-6 text-white">
              <h2 className="text-3xl font-bold drop-shadow">Madurai — Temple City</h2>
              <p className="mt-1 text-sm">Home to Meenakshi Amman Temple and centuries of Tamil culture</p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold text-emerald-600">📍 Location Map</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.0893098648703!2d78.1198!3d9.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c7c3f1a2a1%3A0xabcdef1234567890!2sMadurai!5e0!3m2!1sen!2sin!4v1701520000000"
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
          <h2 className="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold text-emerald-600">🏛️ Popular Places to Visit</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {places.map((place, i) => (
              <PlaceCard key={i} name={place.name} desc={place.desc} />
            ))}
          </div>
        </section>

        {/* Cuisine */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold text-emerald-600">🍛 Traditional Cuisine of Madurai</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cuisine.map((item, i) => (
              <CuisineItem key={i} name={item.name} desc={item.desc} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold text-emerald-600">📖 About Madurai</h2>
          <div className="space-y-4 text-justify text-gray-700 leading-relaxed">
            <p>
              Madurai is one of South India's oldest cities and an important cultural, historical, and religious center of Tamil Nadu. The city is renowned for the Meenakshi Amman Temple, a sprawling complex famed for its towering gopurams (gateway towers) covered in colorful sculptures and intricate carvings. Madurai has been a major settlement for over two millennia and has played a central role in Tamil literature, art, and religious traditions.
            </p>

            <p>
              The city's festivals, especially the annual Float Festival (Theppam) and many temple celebrations, draw huge crowds and showcase the vibrancy of Tamil rituals and performing arts. Madurai's food culture is rich and varied, with unique local specialties like Jigarthanda and a thriving street-food scene. Visitors often experience the city's pulse through its markets, temple festivities, classical music, and centuries-old crafts.
            </p>

            <p>
              Madurai remains an enduring center of Tamil culture where traditional practices coexist with modern life. The city's architecture, religious heritage, and deep-rooted cultural expressions make it an essential stop for travelers exploring South India's living traditions.
            </p>
          </div>
        </section>
      </div>

      <footer className="mt-8 bg-gray-800 px-4 py-8 text-center text-gray-200">
        <p className="font-bold">Preserving India's Cultural Legacy</p>
        <p>Celebrating the heritage of Madurai</p>
        <p className="text-sm">© 2025 - A tribute to India's timeless traditions</p>
      </footer>
    </div>
  );
}
