"use client";

import Link from "next/link";
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ShareButtons from '../components/ShareButtons';

const PlaceCard = ({ name, desc, onView }: { name: string; desc: string; onView?: () => void }) => (
  <div className="rounded-lg border-l-4 border-emerald-600 bg-emerald-50 p-6 transition hover:translate-x-2">
    <h3 className="mb-3 text-xl font-bold text-emerald-700">{name}</h3>
    <p className="mb-4 text-gray-700">{desc}</p>
    <div className="mt-3">
      <button onClick={onView} className="btn-cta">View on map</button>
    </div>
  </div>
);

const CuisineItem = ({ name, desc }: { name: string; desc: string }) => (
  <div className="rounded-lg border-2 border-emerald-400 bg-gradient-to-b from-emerald-50 to-yellow-50 p-6">
    <h3 className="mb-2 text-lg font-bold text-emerald-700">{name}</h3>
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

export default function Madurai() {
  const [mapQuery, setMapQuery] = useState('Madurai, Tamil Nadu, India');

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
        <div className="mb-4">
          <ShareButtons url="/madurai" title="Explore Madurai - The Temple City | VIRASAT" />
        </div>
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

        <Breadcrumbs items={[{ label: 'Madurai' }]} />

        {/* Map Section (interactive: updates when user clicks 'View on map') */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold text-emerald-600">📍 Location Map</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden">
            {/* mapQuery state controls which place is shown with a pin */}
            <MapEmbed query={mapQuery} />
          </div>
        </section>

        {/* Popular Places */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold text-emerald-600">🏛️ Popular Places to Visit</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {places.map((place, i) => (
              <PlaceCard
                key={i}
                name={place.name}
                desc={place.desc}
                onView={() => setMapQuery(`${place.name}, Madurai, India`)}
              />
            ))}
          </div>
        </section>

        {/* Gallery: Popular Places */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold text-emerald-600">📸 Gallery — Popular Places</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: '/images/madurai/meenakshi-temple.jpg', alt: 'Meenakshi Amman Temple', fallback: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&h=600&fit=crop' },
              { src: '/images/madurai/thirumalai-palace.jpg', alt: 'Thirumalai Nayakkar Palace', fallback: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop' },
              { src: '/images/madurai/alagar-kovil.jpg', alt: 'Alagar Kovil', fallback: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&h=600&fit=crop' },
              { src: '/images/madurai/gandhi-museum.jpg', alt: 'Gandhi Memorial Museum', fallback: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop' },
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
          <h2 className="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold text-emerald-600">🍛 Traditional Cuisine of Madurai</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cuisine.map((item, i) => (
              <CuisineItem key={i} name={item.name} desc={item.desc} />
            ))}
          </div>
        </section>

        {/* Gallery: Traditional Cuisine */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold text-emerald-600">🍽️ Gallery — Traditional Cuisine</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: '/images/madurai/jigarthanda.jpg', alt: 'Jigarthanda', fallback: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop' },
              { src: '/images/madurai/kari-dosai.jpg', alt: 'Kari Dosai', fallback: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop' },
              { src: '/images/madurai/thalippu-vadai.jpg', alt: 'Thalippu Vadai', fallback: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&h=600&fit=crop' },
              { src: '/images/madurai/idli-sambar.jpg', alt: 'Idli & Sambhar', fallback: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop' },
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
          <h2 className="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold text-emerald-600">🎉 Festivals & Celebrations</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border-2 border-emerald-400 bg-gradient-to-b from-emerald-50 to-yellow-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-emerald-600">Meenakshi Thirukalyanam</h3>
              <p className="mb-4 text-gray-700">The divine marriage ceremony of Goddess Meenakshi and Lord Sundareswarar, featuring elaborate processions and cultural performances.</p>
              <p className="text-sm text-gray-600">Usually in April</p>
            </div>
            <div className="rounded-lg border-2 border-emerald-400 bg-gradient-to-b from-emerald-50 to-yellow-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-emerald-600">Float Festival (Theppam)</h3>
              <p className="mb-4 text-gray-700">The golden idols of Meenakshi and Sundareswarar are taken in procession on the temple tank, creating a spectacular sight.</p>
              <p className="text-sm text-gray-600">Usually in January/February</p>
            </div>
            <div className="rounded-lg border-2 border-emerald-400 bg-gradient-to-b from-emerald-50 to-yellow-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-emerald-600">Chithirai Festival</h3>
              <p className="mb-4 text-gray-700">A 10-day festival celebrating the marriage of Meenakshi with traditional music, dance, and fireworks.</p>
              <p className="text-sm text-gray-600">Usually in April/May</p>
            </div>
            <div className="rounded-lg border-2 border-emerald-400 bg-gradient-to-b from-emerald-50 to-yellow-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-emerald-600">Pongal Festival</h3>
              <p className="mb-4 text-gray-700">Harvest festival celebrated with traditional games, music, and the preparation of Pongal rice.</p>
              <p className="text-sm text-gray-600">Usually in January</p>
            </div>
          </div>
        </section>

        {/* Historical Timeline */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold text-emerald-600">⏳ Historical Timeline</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-lg font-bold text-emerald-600">3rd Century BCE</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-emerald-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-gray-700">Madurai mentioned in ancient Tamil literature as a significant settlement.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-lg font-bold text-emerald-600">14th Century CE</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-emerald-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-gray-700">Madurai becomes the capital of the Vijayanagara Empire's southern territories.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-lg font-bold text-emerald-600">1559</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-emerald-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-gray-700">Construction of Thirumalai Nayakkar Palace begins under Nayak rule.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-lg font-bold text-emerald-600">1801</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-emerald-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-gray-700">Madurai comes under British control and becomes part of Madras Presidency.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-lg font-bold text-emerald-600">1956</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-emerald-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-gray-700">Madurai becomes part of the newly formed state of Tamil Nadu after linguistic reorganization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Artisans & Crafts */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold text-emerald-600">🎨 Local Artisans & Crafts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border-2 border-emerald-400 bg-gradient-to-b from-emerald-50 to-yellow-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-emerald-600">Temple Carving</h3>
              <p className="text-gray-700">Intricate stone and wood carvings adorning temples with mythological figures and decorative motifs.</p>
            </div>
            <div className="rounded-lg border-2 border-emerald-400 bg-gradient-to-b from-emerald-50 to-yellow-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-emerald-600">Bronze Casting</h3>
              <p className="text-gray-700">Traditional lost-wax method used to create temple idols and religious artifacts.</p>
            </div>
            <div className="rounded-lg border-2 border-emerald-400 bg-gradient-to-b from-emerald-50 to-yellow-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-emerald-600">Sari Weaving</h3>
              <p className="text-gray-700">Handloom weaving of traditional Madurai saris with distinctive patterns and gold thread work.</p>
            </div>
            <div className="rounded-lg border-2 border-emerald-400 bg-gradient-to-b from-emerald-50 to-yellow-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-emerald-600">Banana Leaf Crafts</h3>
              <p className="text-gray-700">Artistic creations made from banana leaves, including decorative items and traditional plates.</p>
            </div>
          </div>
        </section>
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold text-emerald-600">📖 About Madurai</h2>
          <div className="space-y-4 text-justify text-gray-700 leading-relaxed">
            <p>
              Madurai is one of South India's oldest cities and an important cultural, historical, and religious center of Tamil Nadu. Often called the "Temple City," Madurai has been continuously inhabited for over 2,500 years and is renowned for the Meenakshi Amman Temple, a sprawling complex famed for its towering gopurams (gateway towers) covered in colorful sculptures and intricate carvings. The city's history dates back to ancient times when it served as the capital of the Pandya dynasty and later became a significant center under various ruling dynasties.
            </p>

            <p>
              The Meenakshi Amman Temple stands as the city's crown jewel, dedicated to Goddess Meenakshi (an incarnation of Parvati) and her consort Lord Sundareswarar (Shiva). The temple's architecture is a masterpiece of Dravidian style, featuring 14 magnificent gopurams, the tallest reaching 170 feet. The temple complex covers 14 acres and houses numerous shrines, halls, and tanks. The annual Chithirai Festival, celebrating the divine marriage of Meenakshi and Sundareswarar, transforms the city into a vibrant spectacle of music, dance, and religious fervor.
            </p>

            <p>
              Beyond its religious significance, Madurai boasts impressive secular architecture like the Thirumalai Nayakkar Palace, built in the 17th century by the Nayak rulers. This Indo-Saracenic structure features stunning stucco work, massive columns, and now serves as a venue for cultural performances and exhibitions. The city's cultural heritage is also evident in its traditional arts and crafts, including bronze casting, temple carving, and handloom weaving, which have been practiced for generations.
            </p>

            <p>
              Madurai's culinary scene is equally rich and distinctive. The city is famous for its unique Jigarthanda, a refreshing drink made with milk, almond gum, sugar syrup, and ice cream. Street food culture thrives with specialties like Kari Dosai (meat-stuffed crepes) and Thalippu Vadai (crispy lentil fritters). The city's markets offer an authentic taste of South Indian cuisine, from traditional meals served on banana leaves to modern interpretations of regional flavors.
            </p>

            <p>
              The city's festivals are a testament to its living cultural traditions. The Float Festival (Theppam) sees golden temple idols carried in procession on the temple tank, while the Chithirai Festival brings the entire city to life with 10 days of celebrations. Madurai's role in Tamil literature and arts is profound—it's often called the "Athens of the East" for its contributions to classical music, dance, and literature. The city's ancient universities and academies have shaped Tamil culture for centuries.
            </p>

            <p>
              Today, Madurai represents the perfect blend of ancient heritage and modern development. While the city has grown into a bustling urban center with educational institutions, healthcare facilities, and commercial establishments, it maintains its spiritual essence and cultural traditions. The Meenakshi Temple continues to be the city's heartbeat, drawing pilgrims and tourists alike to experience the timeless beauty of Tamil culture and architecture. Madurai stands as a living testament to India's rich cultural tapestry, where every street corner tells a story of devotion, artistry, and tradition.
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
