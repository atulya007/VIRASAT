'use client';

import Link from 'next/link';

const PlaceCard = ({ name, desc }: { name: string; desc: string }) => (
  <div className="rounded-lg border-l-4 border-red-600 bg-orange-50 p-6 transition hover:translate-x-2">
    <h3 className="mb-3 text-xl font-bold text-red-700">{name}</h3>
    <p className="mb-4 text-gray-700">{desc}</p>
    <div className="h-48 w-full rounded-lg bg-gray-300">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0893098648703!2d82.98149!3d25.3282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3165d8bb3605%3A0x63cd3c8aea6e0d33!2sVaranasi!5e0!3m2!1sen!2sin!4v1701520000000"
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
  <div className="rounded-lg border-2 border-orange-400 bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
    <h3 className="mb-2 text-lg font-bold text-red-700">{name}</h3>
    <p className="text-gray-700">{desc}</p>
  </div>
);

export default function Varanasi() {
  const places = [
    {
      name: 'Kashi Vishwanath Temple',
      desc: 'One of the 12 Jyotirlingas, this ancient temple is dedicated to Lord Shiva and is considered the spiritual center of Varanasi.',
    },
    {
      name: 'Dashashwamedh Ghat',
      desc: 'The main and most famous ghat in Varanasi, known for the evening Ganga Aarti ceremony and vibrant energy.',
    },
    {
      name: 'Sarnath Buddhist Temple',
      desc: 'Where Buddha delivered his first sermon, located 10 km north of Varanasi. One of Buddhism\'s holiest sites.',
    },
    {
      name: 'Manikarnika Ghat',
      desc: 'The most sacred ghat in Varanasi, believed to be where Shiva\'s earring fell, representing the cycle of life.',
    },
  ];

  const cuisine = [
    {
      name: '🥃 Banarasi Paan',
      desc: 'Betel leaf with areca nut, spices, and traditional ingredients. A famous delicacy known for its authentic taste.',
    },
    {
      name: '🥞 Kachori Sabzi',
      desc: 'Deep-fried pastry filled with spiced vegetables. A savory breakfast specialty served with tamarind chutney.',
    },
    {
      name: '🍖 Baati Chokha',
      desc: 'Roasted flour balls served with mashed vegetables. A rustic Banarasi dish representing traditional food.',
    },
    {
      name: '🍨 Malaiyo',
      desc: 'A winter delicacy made from condensed milk. Served in earthen bowls during winter mornings along the Ganga.',
    },
    {
      name: '🥛 Lassi & Thandai',
      desc: 'Traditional yogurt-based drink and festive sweet milk drink. Both are refreshing beverages popular in Indian cuisine.',
    },
    {
      name: '🍱 Tamatar Chaat',
      desc: 'Street food made with tomatoes and spices. Light, tangy, and served as an appetizer showcasing local flavors.',
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      <Link
        href="/"
        className="fixed left-6 top-6 z-10 rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 font-bold text-white transition hover:scale-105"
      >
        ← Back
      </Link>

      <header className="bg-gradient-to-r from-red-600 to-red-800 py-8 text-center text-white shadow-lg">
        <h1 className="text-4xl font-bold drop-shadow-lg">🛕 Varanasi - The Eternal City 🛕</h1>
        <p className="mt-2 italic">Kashi, Banaras - The Spiritual Capital of India</p>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Map Section */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-orange-400 pb-2 text-3xl font-bold text-red-700">📍 Location Map</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0893098648703!2d82.98149!3d25.3282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3165d8bb3605%3A0x63cd3c8aea6e0d33!2sVaranasi!5e0!3m2!1sen!2sin!4v1701520000000"
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
          <h2 className="mb-6 border-b-4 border-orange-400 pb-2 text-3xl font-bold text-red-700">🏛️ Popular Places to Visit</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {places.map((place, i) => (
              <PlaceCard key={i} name={place.name} desc={place.desc} />
            ))}
          </div>
        </section>

        {/* Cuisine */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-orange-400 pb-2 text-3xl font-bold text-red-700">🍛 Traditional Cuisine of Varanasi</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cuisine.map((item, i) => (
              <CuisineItem key={i} name={item.name} desc={item.desc} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 border-b-4 border-orange-400 pb-2 text-3xl font-bold text-red-700">📖 About Varanasi</h2>
          <div className="space-y-4 text-justify text-gray-700 leading-relaxed">
            <p>
              Varanasi, also known as Kashi and Banaras, stands as one of the world's oldest continuously inhabited cities and holds supreme spiritual significance in Hinduism. Located on the banks of the sacred Ganges River in Uttar Pradesh, this ancient city has been a beacon of spirituality, culture, and philosophy for over 3,000 years. Hindus believe that dying in Varanasi and being cremated on its ghats (riverbanks) leads to salvation and liberation from the cycle of rebirth, making it a pilgrimage destination of immense importance.
            </p>

            <p>
              The city is an architectural marvel with over 2,000 temples, though only a fraction are famous enough to be widely recognized. Kashi Vishwanath Temple, adorned with a golden spire, is the most prominent, but the true soul of Varanasi lies in its 84 ghats that stretch along the Ganges. These steps descend into the river, creating a unique urban landscape where spirituality meets daily life. The evening Ganga Aarti at Dashashwamedh Ghat, a ritualistic ceremony performed by priests with fire and devotion, is an ethereal experience that draws thousands of visitors each day.
            </p>

            <p>
              Beyond its religious significance, Varanasi is a cultural treasure trove. The city has produced world-renowned classical musicians and philosophers who have shaped Indian arts and spirituality. Banarasi silk sarees, crafted with meticulous detail and adorned with gold thread, are among the finest textiles in the world and are still woven using traditional methods passed down through generations. The narrow, labyrinthine alleys of the old city pulse with life—from street food vendors selling delectable kachoris and thandai to artisans crafting brassware and wooden toys in small workshops.
            </p>

            <p>
              Sarnath, just 10 kilometers from Varanasi, holds profound significance for Buddhists as the place where Buddha delivered his first sermon after attaining enlightenment. This adds another layer of religious importance to the region. The Ghat experience in Varanasi is transformative—whether it's witnessing the sunrise during early morning boat rides, watching pilgrims take ritual baths, or observing the profound ceremonies that mark life's important moments, the city encapsulates the essence of Indian spirituality and tradition.
            </p>

            <p>
              Varanasi is not merely a tourist destination; it's a spiritual journey that offers a glimpse into the timeless traditions of India. The city celebrates life and death with equal reverence, offering philosophical insights that have guided seekers and scholars for millennia. Its living heritage continues to thrive despite modernization, making Varanasi a unique destination where the ancient and present coexist harmoniously, creating an experience that touches the soul and enriches the spirit.
            </p>
          </div>
        </section>
      </div>

      <footer className="mt-8 bg-gray-800 px-4 py-8 text-center text-gray-200">
        <p className="font-bold">Preserving India's Cultural Legacy</p>
        <p>Celebrating the heritage of Varanasi</p>
        <p className="text-sm">© 2024 - A tribute to India's timeless traditions</p>
      </footer>
    </div>
  );
}
