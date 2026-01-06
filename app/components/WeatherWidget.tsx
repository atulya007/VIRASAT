'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

interface WeatherWidgetProps {
  city: string;
}

export default function WeatherWidget({ city }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // City-specific realistic fallback weather data
  const getFallbackWeather = (cityName: string): WeatherData => {
    const fallbacks: Record<string, WeatherData> = {
      'Varanasi': {
        temperature: 22,
        description: 'Clear sky',
        humidity: 55,
        windSpeed: 3.2,
      },
      'Jaipur': {
        temperature: 20,
        description: 'Sunny',
        humidity: 45,
        windSpeed: 4.1,
      },
      'Madurai': {
        temperature: 28,
        description: 'Partly cloudy',
        humidity: 70,
        windSpeed: 2.8,
      },
    };

    return fallbacks[cityName] || {
      temperature: 25,
      description: 'Clear sky',
      humidity: 60,
      windSpeed: 3.5,
    };
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
        
        if (!apiKey || apiKey === 'demo') {
          // Use fallback data if no API key
          setWeather(getFallbackWeather(city));
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`
        );

        setWeather({
          temperature: Math.round(response.data.main.temp),
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          windSpeed: response.data.wind.speed,
        });
      } catch (err) {
        console.warn('Weather API failed, using fallback data:', err);
        setError('Using estimated weather data');
        setWeather(getFallbackWeather(city));
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return (
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          <p className="text-blue-600">Loading weather...</p>
        </div>
      </div>
    );
  }

  if (error && !weather) {
    return (
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200 shadow-sm">
      <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        Weather in {city}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-3xl font-bold text-blue-600">{weather?.temperature}°C</p>
          <p className="text-blue-700 capitalize text-sm">{weather?.description}</p>
        </div>
        <div className="text-sm text-blue-600 space-y-1">
          <p className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            Humidity: {weather?.humidity}%
          </p>
          <p className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Wind: {weather?.windSpeed} m/s
          </p>
        </div>
      </div>
      <div className="mt-4 text-xs text-blue-500 border-t border-blue-200 pt-2">
        <p className="font-medium">Best time to visit: October to March</p>
        {error && <p className="text-orange-600 mt-1">* Estimated data (API unavailable)</p>}
      </div>
    </div>
  );
}