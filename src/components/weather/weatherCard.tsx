'use client';

import axios from 'axios';
import './weather.scss';
import { useEffect, useState } from 'react';
import { Rnd } from 'react-rnd'

interface WeatherType {
  city: string;
  temp: number;
  humidity: number;
  feels_like: number;
  wind: number;
  sunrise: number;
  sunset: number;
}

const WeatherCard = () => {
  const [weatherdata, setWeather] = useState<WeatherType | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [apikey, setApikey] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCity() {
      try {
        const res = await axios.get('https://ipinfo.io/json');
        setCity(res.data.city);
      } catch (err) {
        console.error(err);
        setCity('Delhi'); // fallback
      }
    }
    async function fetchKey() {
      const res = await fetch('/api/weather');
      const data = await res.json();
      setApikey(data.key)
      console.log(data.key);
    }

    fetchKey();

    fetchCity();
  }, []);

  useEffect(() => {
    if (!city) return;

    async function fetchWeather() {
      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
        setWeather({
          city: res.data.name,
          temp: res.data.main.temp,
          humidity: res.data.main.humidity,
          feels_like: res.data.main.feels_like,
          wind: res.data.wind.speed,
          sunrise: res.data.sys.sunrise,
          sunset: res.data.sys.sunset,
        });

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  if (loading) {
    return <div className="weather-card">Loading weather…</div>;
  }

  if (!weatherdata) {
    return <div className="weather-card">Weather unavailable</div>;
  }

  return (

    <div className="weather-card">
      <div className="weather-header">
        <div>
          <h2>{weatherdata.city}</h2>
          <p className="time">Now</p>
        </div>

        <div className="temp">
          <span className="value">{Math.round(weatherdata.temp)}°</span>
          <p className="condition">
            Feels like {Math.round(weatherdata.feels_like)}°
          </p>
        </div>
      </div>

      <div className="weather-stats">
        <div className="stat">
          <span>Humidity</span>
          <strong>{weatherdata.humidity}%</strong>
        </div>

        <div className="stat">
          <span>Wind</span>
          <strong>{weatherdata.wind} m/s</strong>
        </div>
      </div>
    </div>

  );
};

export default WeatherCard;
