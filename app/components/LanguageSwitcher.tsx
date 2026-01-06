'use client';

import { useState } from 'react';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    // In a real implementation, this would change the app's language
    // For now, just update the state
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded ${language === 'en' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('hi')}
        className={`px-3 py-1 rounded ${language === 'hi' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        HI
      </button>
    </div>
  );
}