'use client';

import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: string;
}

const searchData: SearchResult[] = [
  {
    title: 'Varanasi - The Eternal City',
    description: 'Explore the spiritual heart of India with sacred ghats, ancient temples, and timeless traditions.',
    url: '/varanasi',
    type: 'City'
  },
  {
    title: 'Jaipur - The Pink City',
    description: 'Discover royal palaces, architectural wonders, vibrant bazaars, and the grandeur of Rajasthan.',
    url: '/jaipur',
    type: 'City'
  },
  {
    title: 'Madurai - Temple City',
    description: 'Explore Madurai\'s vibrant Meenakshi temple, deep-rooted Tamil traditions, and street-food culture.',
    url: '/madurai',
    type: 'City'
  },
  {
    title: 'Kashi Vishwanath Temple',
    description: 'One of the 12 Jyotirlingas, dedicated to Lord Shiva.',
    url: '/varanasi',
    type: 'Place'
  },
  {
    title: 'Dashashwamedh Ghat',
    description: 'Main ghat known for evening Ganga Aarti ceremony.',
    url: '/varanasi',
    type: 'Place'
  },
  {
    title: 'Banarasi Paan',
    description: 'Betel leaf with areca nut, spices, and traditional ingredients.',
    url: '/varanasi',
    type: 'Cuisine'
  },
  {
    title: 'Kachori Sabzi',
    description: 'Deep-fried pastry filled with spiced vegetables.',
    url: '/varanasi',
    type: 'Cuisine'
  }
];

export default function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const fuse = new Fuse(searchData, {
    keys: ['title', 'description', 'type'],
    threshold: 0.3,
  });

  useEffect(() => {
    if (query.length > 2) {
      const searchResults = fuse.search(query).map(result => result.item);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search cities, places, cuisine..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      {isOpen && results.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-64 overflow-y-auto">
          {results.map((result, index) => (
            <a
              key={index}
              href={result.url}
              className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
              onClick={() => setIsOpen(false)}
            >
              <div className="font-semibold text-gray-800">{result.title}</div>
              <div className="text-sm text-gray-600">{result.description}</div>
              <div className="text-xs text-orange-600">{result.type}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}