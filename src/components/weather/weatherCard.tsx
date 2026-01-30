'use client';

import axios from 'axios';

import './weather.scss';

import { useEffect, useState } from 'react';
import {
  WiHumidity,
  WiStrongWind,
  WiThermometer,
  WiCelsius,
  WiFahrenheit,
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm
} from 'react-icons/wi';
import { FaLocationArrow } from 'react-icons/fa';

interface WeatherType {
  city: string;
  temp: number;
  humidity: number;
  feels_like: number;
  wind: number;
  weather: {
    main: string;
    description: string;
  };
}

const WeatherCard = () => {
  const [weatherdata, setWeather] = useState<WeatherType | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [apikey, setApikey] = useState<string | null>(null);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    async function fetchCity() {
      try {
        const res = await axios.get('https://ipinfo.io/json');
        setCity(res.data.city);
      } catch (err) {
        console.error(err);
        setCity('Delhi');
      }
    }

    async function fetchKey() {
      try {
        const res = await fetch('/api/weather');
        const data = await res.json();
        setApikey(data.key);
      } catch (err) {
        console.error(err);
      }
    }

    fetchKey();
    fetchCity();
  }, []);

  useEffect(() => {
    if (!city || !apikey) return;

    async function fetchWeather() {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
        );

        setWeather({
          city: res.data.name,
          temp: res.data.main.temp,
          humidity: res.data.main.humidity,
          feels_like: res.data.main.feels_like,
          wind: res.data.wind.speed,
          weather: {
            main: res.data.weather[0].main,
            description: res.data.weather[0].description
          }
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city, apikey]);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return <WiDaySunny className="weather-icon sunny" />;
      case 'clouds':
        return <WiCloudy className="weather-icon cloudy" />;
      case 'rain':
        return <WiRain className="weather-icon rainy" />;
      case 'snow':
        return <WiSnow className="weather-icon snowy" />;
      case 'thunderstorm':
        return <WiThunderstorm className="weather-icon thunder" />;
      default:
        return <WiCloudy className="weather-icon cloudy" />;
    }
  };

  const toggleTempUnit = () => {
    setIsCelsius(!isCelsius);
  };

  if (loading) {
    return (
      <div className="weather-card compact">
        <div className="compact-skeleton">
          <div className="skeleton-icon"></div>
          <div className="skeleton-text"></div>
        </div>
      </div>
    );
  }

  if (!weatherdata) {
    return (
      <div className="weather-card compact error">
        <div className="error-icon">!</div>
        <span className="error-text">--°</span>
      </div>
    );
  }

  const displayTemp = isCelsius
    ? Math.round(weatherdata.temp)
    : Math.round((weatherdata.temp * 9 / 5) + 32);

  return (
    <div className="weather-card compact">
      {/* Main Content */}
      <div className="compact-main">
        {/* Left: Temperature and Location */}
        <div className="compact-left">
          <div className="temp-display" onClick={toggleTempUnit}>
            <span className="temp-value">{displayTemp}°</span>
            <div className="temp-unit">
              {isCelsius ? <WiCelsius /> : <WiFahrenheit />}
            </div>
          </div>
          <div className="location-info">
            <FaLocationArrow className="location-icon" />
            <span className="city-name">{weatherdata.city.split(',')[0]}</span>
          </div>
        </div>

        {/* Right: Weather Icon and Condition */}
        <div className="compact-right">
          {getWeatherIcon(weatherdata.weather.main)}
          <span className="condition-text">{weatherdata.weather.description}</span>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="compact-stats">
        <div className="stat-item" title="Feels Like">
          <WiThermometer className="stat-icon feels" />
          <span className="stat-value">{Math.round(weatherdata.feels_like)}°</span>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item" title="Humidity">
          <WiHumidity className="stat-icon humidity" />
          <span className="stat-value">{weatherdata.humidity}%</span>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item" title="Wind Speed">
          <WiStrongWind className="stat-icon wind" />
          <span className="stat-value">{weatherdata.wind} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;